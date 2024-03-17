interface ArrowLeftProps {
  className?: string;
}

const ArrowLeft: React.FC<ArrowLeftProps> = ({ className }) => (
  <svg
    width="37"
    height="55"
    viewBox="0 0 37 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <path
      d="M36.0634 9.02062L27.0491 0L0 27.0491L27.0491 54.0982L36.0634 45.0776L18.0285 27.0491L36.0634 9.02062Z"
      fill="black"
    />
  </svg>
);

export default ArrowLeft;
