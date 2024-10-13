interface AuthFormProps {
  children: React.ReactNode

  onSubmit: React.FormEventHandler<HTMLFormElement>
}

const AuthForm = ({ children, onSubmit }: AuthFormProps) => {
  return (
    <form className="flex flex-col gap-3.5" onSubmit={onSubmit}>
      <h2 className="mx-0 mb-14 mt-0 text-center capitalize leading-[140%]">
        <span className="border-b border-solid border-darkGray">로그인</span>
      </h2>
      {children}
    </form>
  )
}

export default AuthForm
