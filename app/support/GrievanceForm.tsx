"use client";

import { useId, useRef, useState } from "react";
import type { FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

type FieldKey =
  | "guestName"
  | "guestEmail"
  | "guestPhone"
  | "message"
  | "description";

type FieldErrors = Partial<Record<FieldKey, string>>;

interface GrievanceSuccess {
  id: string;
  ticketId: string;
  status: "PENDING" | "REVIEWING" | "RESOLVED" | "DISMISSED";
  createdAt: string;
}

interface FormValues {
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  message: string;
  description: string;
}

const LIMITS = {
  guestName: 100,
  guestEmail: 254,
  guestPhone: 20,
  message: 200,
  description: 5000,
} as const;

const EMAIL_RE =
  /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;

function validate(values: FormValues): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.guestName.trim()) {
    errors.guestName = "Please enter your name.";
  } else if (values.guestName.length > LIMITS.guestName) {
    errors.guestName = `Keep your name under ${LIMITS.guestName} characters.`;
  }

  if (!values.guestEmail.trim()) {
    errors.guestEmail = "Please enter your email so we can reply.";
  } else if (!EMAIL_RE.test(values.guestEmail.trim())) {
    errors.guestEmail = "That doesn't look like a valid email address.";
  }

  if (values.guestPhone && values.guestPhone.length > LIMITS.guestPhone) {
    errors.guestPhone = `Phone number must be ${LIMITS.guestPhone} characters or fewer.`;
  }

  if (!values.message.trim()) {
    errors.message = "Please give us a short summary.";
  } else if (values.message.length > LIMITS.message) {
    errors.message = `Keep the summary under ${LIMITS.message} characters.`;
  }

  if (values.description.length > LIMITS.description) {
    errors.description = `Details must be ${LIMITS.description} characters or fewer.`;
  }

  return errors;
}

function readForm(form: HTMLFormElement): FormValues {
  const fd = new FormData(form);
  return {
    guestName: String(fd.get("guestName") ?? ""),
    guestEmail: String(fd.get("guestEmail") ?? ""),
    guestPhone: String(fd.get("guestPhone") ?? ""),
    message: String(fd.get("message") ?? ""),
    description: String(fd.get("description") ?? ""),
  };
}

export function GrievanceForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState<GrievanceSuccess | null>(null);

  const ids = {
    guestName: useId(),
    guestNameError: useId(),
    guestEmail: useId(),
    guestEmailError: useId(),
    guestEmailHint: useId(),
    guestPhone: useId(),
    guestPhoneError: useId(),
    message: useId(),
    messageError: useId(),
    messageHint: useId(),
    description: useId(),
    descriptionError: useId(),
    descriptionHint: useId(),
    formStatus: useId(),
    formError: useId(),
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = readForm(form);
    const v = validate(values);

    if (Object.keys(v).length > 0) {
      setErrors(v);
      const firstKey = Object.keys(v)[0] as FieldKey;
      const target = form.elements.namedItem(firstKey);
      if (target instanceof HTMLElement) target.focus();
      return;
    }

    setErrors({});
    setServerError(null);
    setStatus("submitting");

    const payload: Record<string, string> = {
      guestName: values.guestName.trim(),
      guestEmail: values.guestEmail.trim(),
      message: values.message.trim(),
    };
    if (values.guestPhone.trim()) payload.guestPhone = values.guestPhone.trim();
    if (values.description.trim()) payload.description = values.description.trim();

    try {
      const res = await fetch("/api/grievance", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      const body = await res.json().catch(() => null);

      if (!res.ok) {
        const message =
          (body && typeof body.message === "string" && body.message) ||
          "We couldn't submit your grievance. Please try again.";
        setServerError(message);
        setStatus("error");
        return;
      }

      if (
        body &&
        typeof body.ticketId === "string" &&
        typeof body.status === "string"
      ) {
        setSuccess(body as GrievanceSuccess);
        setStatus("success");
      } else {
        setServerError(
          "Submission accepted, but we couldn't confirm a ticket. Please contact support.",
        );
        setStatus("error");
      }
    } catch {
      setServerError(
        "Network error. Check your connection and try again.",
      );
      setStatus("error");
    }
  }

  if (status === "success" && success) {
    return <SuccessCard payload={success} />;
  }

  const submitting = status === "submitting";

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={onSubmit}
      aria-describedby={serverError ? ids.formError : undefined}
      className="rounded-3xl border border-zinc-200/70 bg-white/90 p-6 shadow-xl shadow-teal-900/5 backdrop-blur-sm sm:p-8 dark:border-zinc-800/70 dark:bg-zinc-900/80 dark:shadow-black/30"
    >
      <fieldset className="space-y-5" disabled={submitting}>
        <legend className="mb-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          About you
        </legend>

        <Field
          label="Full name"
          required
          name="guestName"
          id={ids.guestName}
          errorId={ids.guestNameError}
          error={errors.guestName}
          autoComplete="name"
          maxLength={LIMITS.guestName}
        />

        <Field
          label="Email address"
          required
          type="email"
          inputMode="email"
          name="guestEmail"
          id={ids.guestEmail}
          errorId={ids.guestEmailError}
          hintId={ids.guestEmailHint}
          hint="We'll send your ticket confirmation here."
          error={errors.guestEmail}
          autoComplete="email"
          maxLength={LIMITS.guestEmail}
        />

        <Field
          label="Phone number"
          optional
          type="tel"
          inputMode="tel"
          name="guestPhone"
          id={ids.guestPhone}
          errorId={ids.guestPhoneError}
          error={errors.guestPhone}
          autoComplete="tel"
          maxLength={LIMITS.guestPhone}
        />
      </fieldset>

      <hr className="my-8 border-zinc-200 dark:border-zinc-800" />

      <fieldset className="space-y-5" disabled={submitting}>
        <legend className="mb-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          Your grievance
        </legend>

        <Field
          label="Subject"
          required
          name="message"
          id={ids.message}
          errorId={ids.messageError}
          hintId={ids.messageHint}
          hint={`A short summary in one or two lines (max ${LIMITS.message} characters).`}
          error={errors.message}
          maxLength={LIMITS.message}
        />

        <TextareaField
          label="Details"
          optional
          name="description"
          id={ids.description}
          errorId={ids.descriptionError}
          hintId={ids.descriptionHint}
          hint="Share what happened, when it happened, and anything else that helps us understand."
          error={errors.description}
          maxLength={LIMITS.description}
          rows={6}
        />
      </fieldset>

      {serverError ? (
        <div
          id={ids.formError}
          role="alert"
          className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-200"
        >
          {serverError}
        </div>
      ) : null}

      <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-zinc-500 dark:text-zinc-500">
          By submitting, you agree to be contacted by the Gelathi team about
          this grievance.
        </p>
        <button
          type="submit"
          disabled={submitting}
          aria-busy={submitting}
          className="inline-flex min-h-11 items-center justify-center rounded-xl bg-teal-700 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf8f5] disabled:cursor-not-allowed disabled:opacity-70 dark:focus-visible:ring-offset-zinc-950"
        >
          {submitting ? (
            <span className="inline-flex items-center gap-2">
              <Spinner />
              Submitting&hellip;
            </span>
          ) : (
            "Submit grievance"
          )}
        </button>
      </div>

      <div
        id={ids.formStatus}
        role="status"
        aria-live="polite"
        className="sr-only"
      >
        {submitting ? "Submitting your grievance, please wait." : ""}
      </div>
    </form>
  );
}

interface FieldProps {
  label: string;
  name: FieldKey;
  id: string;
  errorId: string;
  hintId?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
  type?: string;
  inputMode?: "text" | "email" | "tel" | "numeric" | "search" | "url";
  autoComplete?: string;
  maxLength?: number;
}

function Field({
  label,
  name,
  id,
  errorId,
  hintId,
  hint,
  error,
  required,
  optional,
  type = "text",
  inputMode,
  autoComplete,
  maxLength,
}: FieldProps) {
  const describedBy =
    [error ? errorId : null, hint ? hintId : null].filter(Boolean).join(" ") ||
    undefined;

  return (
    <div>
      <Label htmlFor={id} required={required} optional={optional}>
        {label}
      </Label>
      <input
        id={id}
        name={name}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        maxLength={maxLength}
        required={required}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={inputClass(Boolean(error))}
      />
      {hint && !error ? (
        <p id={hintId} className={hintClass}>
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className={errorClass} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

interface TextareaFieldProps extends Omit<FieldProps, "type" | "inputMode"> {
  rows?: number;
}

function TextareaField({
  label,
  name,
  id,
  errorId,
  hintId,
  hint,
  error,
  required,
  optional,
  maxLength,
  rows = 5,
}: TextareaFieldProps) {
  const describedBy =
    [error ? errorId : null, hint ? hintId : null].filter(Boolean).join(" ") ||
    undefined;

  return (
    <div>
      <Label htmlFor={id} required={required} optional={optional}>
        {label}
      </Label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        maxLength={maxLength}
        required={required}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={`${inputClass(Boolean(error))} resize-y leading-relaxed`}
      />
      {hint && !error ? (
        <p id={hintId} className={hintClass}>
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className={errorClass} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Label({
  htmlFor,
  required,
  optional,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 flex items-baseline justify-between text-sm font-medium text-zinc-800 dark:text-zinc-200"
    >
      <span>
        {children}
        {required ? (
          <>
            <span aria-hidden className="ml-0.5 text-red-600 dark:text-red-400">
              *
            </span>
            <span className="sr-only"> (required)</span>
          </>
        ) : null}
      </span>
      {optional ? (
        <span className="text-xs font-normal text-zinc-500 dark:text-zinc-500">
          Optional
        </span>
      ) : null}
    </label>
  );
}

function inputClass(hasError: boolean): string {
  return [
    "block w-full rounded-xl border bg-white px-4 py-3 text-base text-zinc-900 shadow-sm transition placeholder:text-zinc-400",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-900",
    "dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500",
    hasError
      ? "border-red-400 focus-visible:ring-red-500 dark:border-red-600"
      : "border-zinc-300 focus-visible:ring-teal-600 dark:border-zinc-700",
    "disabled:cursor-not-allowed disabled:bg-zinc-50 disabled:text-zinc-500 dark:disabled:bg-zinc-900",
  ].join(" ");
}

const hintClass =
  "mt-1.5 text-xs text-zinc-500 dark:text-zinc-500";

const errorClass =
  "mt-1.5 text-xs font-medium text-red-700 dark:text-red-400";

function Spinner() {
  return (
    <svg
      aria-hidden
      className="h-4 w-4 animate-spin text-white/90"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-90"
        fill="currentColor"
        d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z"
      />
    </svg>
  );
}

function SuccessCard({ payload }: { payload: GrievanceSuccess }) {
  const submittedAt = (() => {
    try {
      return new Date(payload.createdAt).toLocaleString(undefined, {
        dateStyle: "medium",
        timeStyle: "short",
      });
    } catch {
      return payload.createdAt;
    }
  })();

  return (
    <section
      role="status"
      aria-live="polite"
      className="rounded-3xl border border-teal-200/70 bg-white/95 p-8 text-center shadow-xl shadow-teal-900/10 backdrop-blur-sm sm:p-10 dark:border-teal-900/60 dark:bg-zinc-900/90"
    >
      <div
        aria-hidden
        className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300"
      >
        <svg
          className="h-7 w-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <h2 className="text-2xl font-semibold tracking-tight">
        We&rsquo;ve received your grievance.
      </h2>
      <p className="mx-auto mt-3 max-w-md text-pretty text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        A confirmation has been sent to your email. Our team will review your
        submission and follow up directly.
      </p>

      <dl className="mx-auto mt-8 grid max-w-sm grid-cols-1 gap-3 text-left text-sm sm:grid-cols-2">
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950/40">
          <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
            Ticket ID
          </dt>
          <dd className="mt-1 font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            {payload.ticketId}
          </dd>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950/40">
          <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
            Status
          </dt>
          <dd className="mt-1 text-sm font-semibold capitalize text-zinc-900 dark:text-zinc-100">
            {payload.status.toLowerCase()}
          </dd>
        </div>
      </dl>

      <p className="mt-6 text-xs text-zinc-500 dark:text-zinc-500">
        Submitted {submittedAt}
      </p>

      <p className="mt-8 text-sm text-zinc-600 dark:text-zinc-400">
        Please save your ticket ID for reference.
      </p>
    </section>
  );
}
