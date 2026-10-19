"use client";

import { useState } from "react";
import { isAddress, site } from "@/lib/site";

export function ContractPanel() {
  const address = site.contractAddress.trim();
  const ready = isAddress(address);
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("");

  const copy = async () => {
    if (!ready) return;
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setStatus("Contract copied.");
      window.setTimeout(() => {
        setCopied(false);
        setStatus("");
      }, 2500);
    } catch {
      setCopied(false);
      setStatus("Select the address above to copy it.");
      const node = document.getElementById("contract-address");
      if (!node) return;
      const range = document.createRange();
      range.selectNodeContents(node);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  };

  return (
    <div className="contract">
      <span>{site.chain.toUpperCase()}</span>
      <div>
        <small>CONTRACT ADDRESS</small>
        <code id="contract-address">{ready ? address : "Coming Soon.."}</code>
        {ready && (
          <button type="button" className="copy-contract" onClick={copy} aria-label="Copy Ethereum contract address">
            {copied ? "COPIED" : "COPY CA"}
          </button>
        )}
        <span className="copy-status" role="status">
          {status}
        </span>
      </div>
      <span className="stamp">
        STILL HERE.
        <br />
        STILL REKT.
      </span>
    </div>
  );
}
