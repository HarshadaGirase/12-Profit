const Underline = ({
  width = "80px",
  strokeWidth = "3.5",
  color = "#d79f09",
}) => (
  <div className="w-[80px] flex">
    <svg
      width={width}
      height="20"
      viewBox="0 0 40 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 5C10 1 70 0 30 2"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  </div>
);
export default Underline;
