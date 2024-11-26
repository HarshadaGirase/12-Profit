import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
