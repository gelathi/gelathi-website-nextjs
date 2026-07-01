"use client";

import { useEffect, useState } from "react";

export function DunsSeal({ className }: { className?: string }) {
  const [isLocalhost, setIsLocalhost] = useState(false);

  useEffect(() => {
    setIsLocalhost(
      window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1" ||
        window.location.hostname === "::1",
    );
  }, []);

  return (
    <div className={className}>
      {isLocalhost ? (
        <div className="flex h-[97px] w-[114px] flex-col items-center justify-center rounded border border-zinc-700 bg-white px-2 text-center text-[10px] font-semibold leading-tight text-zinc-900 shadow-sm">
          <span>D-U-N-S</span>
          <span>Registered</span>
          <span className="mt-1 text-[8px] font-medium text-zinc-600">
            Preview
          </span>
        </div>
      ) : (
        <iframe
          id="Iframe1"
          src="https://dunsregistered.dnb.com/SealAuthentication.aspx?Cid=1"
          width={114}
          height={97}
          frameBorder={0}
          scrolling="no"
          allowTransparency
          title="D-U-N-S Registered Seal"
        />
      )}
    </div>
  );
}
