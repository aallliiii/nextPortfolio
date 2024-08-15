"use client";
import React from "react";

const DownloadButton = () => {
  const documentUrl = "/CV.pdf";

  const handleDownload = () => {
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = documentUrl;
    link.download = "cv.pdf";
    link.click();
  };

  return (
    <button
      className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-10"
      onClick={handleDownload}
    >
      Download My Resume
    </button>
  );
};

export default DownloadButton;
