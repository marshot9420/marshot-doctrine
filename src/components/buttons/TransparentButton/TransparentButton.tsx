import Link from 'next/link'

interface TransparentButtonProps {
  href?: string
  label: string | undefined
  active?: boolean

  onClick?: () => void
}

const TransparentButton = ({
  href,
  label,
  active = false,
  onClick,
}: TransparentButtonProps): React.ReactElement => {
  return (
    <li
      className={`${
        active
          ? 'font-black text-lightMars underline dark:text-darkMars dark:hover:text-darkMarsHover transition-all hover:text-darkMarsHover hover:underline'
          : 'text-darkMars transition-all dark:text-lightMars dark:hover:text-lightMarsHover hover:text-lightMarsHover hover:underline'
      }`}
    >
      <Link href={href || ''} onClick={onClick}>
        {label}
      </Link>
    </li>
  )
}

export default TransparentButton
