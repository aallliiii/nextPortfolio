import React, { useState } from "react";

const CopyButton: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);
  const numberToCopy = "03046901683";

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(numberToCopy.toString())
      .then(() => {
        setIsCopied(true);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <button
      onClick={copyToClipboard}
      className="py-2 px-4 flex justify-center items-center  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
    >
      {isCopied ? "Phone number copied!" : "Get My Phone Number"}
    </button>
  );
};

export default CopyButton;
