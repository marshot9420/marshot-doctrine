interface AuthSectionProps {
  children: React.ReactNode
}

const AuthSection = ({ children }: AuthSectionProps) => {
  return (
    <section className="mx-auto my-0 flex w-144 flex-col gap-16 pb-36 pt-32">{children}</section>
  )
}

export default AuthSection
