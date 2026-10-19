"use client";

import { useState } from "react";
import { isAddress, site } from "@/lib/site";

export function ContractPanel() {
  const address = site.contractAddress.trim();
  const ready = isAddress(address);
  const shown = ready ? address : site.contractDisplay;
  const [copied, setCopied] = useState(false);

  const markCopied = () => {
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2500);
  };

  const selectAddress = () => {
    const node = document.getElementById("contract-address");
    if (!node) return;
    const range = document.createRange();
    range.selectNodeContents(node);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
  };

  const copyWithFallback = () => {
    const field = document.createElement("textarea");
    field.value = shown;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.top = "0";
    field.style.left = "-9999px";
    document.body.appendChild(field);
    field.focus();
    field.select();
    field.setSelectionRange(0, field.value.length);
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    field.remove();
    return ok;
  };

  const copy = () => {
    if (copyWithFallback()) {
      markCopied();
      return;
    }
    const fail = () => {
      setCopied(false);
      selectAddress();
    };
    if (!navigator.clipboard?.writeText) {
      fail();
      return;
    }
    void navigator.clipboard.writeText(shown).then(markCopied).catch(fail);
  };

  return (
    <div className="contract">
      <span>{site.chain.toUpperCase()}</span>
      <div>
        <small>CONTRACT ADDRESS</small>
        <code id="contract-address">{shown}</code>
        <button type="button" className="copy-contract" onClick={copy} aria-label="Copy contract address">
          {copied ? "COPIED" : "COPY CA"}
        </button>
      </div>
      <span className="stamp">
        STILL HERE.
        <br />
        STILL REKT.
      </span>
    </div>
  );
}
