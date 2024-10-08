interface HamburgerIconProps {
  className?: string;

  toggleSidebar: () => void;
}

const HamburgerIcon = ({
  className = "",
  toggleSidebar,
}: HamburgerIconProps) => {
  return (
    <button
      className={`block md:hidden focus:outline-none ${className}`}
      onClick={toggleSidebar}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
        />
      </svg>
    </button>
  );
};

export default HamburgerIcon;
