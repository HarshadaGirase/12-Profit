import React, { memo } from "react";

const ScrollingText = memo(({ text }) => (
  <div className="whitespace-nowrap animate-scroll text-[80px] lg:text-[150px] md:text-[100px] font-sans">
    {Array(5).fill(text).join(" \u00A0 \u00A0 ")}
  </div>
));

const Disclaimer = () => (
  <div className="bg-[#e1dfd9] py-2 overflow-hidden">
    <div className="relative">
      <ScrollingText text="Trust . Elite . Transparent . Equitable ." />
    </div>
  </div>
);

export default memo(Disclaimer);
