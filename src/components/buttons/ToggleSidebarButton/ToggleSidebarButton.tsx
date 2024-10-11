interface ToggleSidebarButtonProps {
  className?: string
  children?: React.ReactNode

  toggleSidebar: () => void

  alwaysVisible?: boolean
}

const ToggleSidebarButton = ({
  className = '',
  children,
  toggleSidebar,
  alwaysVisible = false,
}: ToggleSidebarButtonProps) => {
  return (
    <button
      className={`block ${alwaysVisible ? 'mr-4' : 'md:hidden'} focus:outline-none ${className}`}
      onClick={toggleSidebar}
    >
      {children}
    </button>
  )
}

export default ToggleSidebarButton
