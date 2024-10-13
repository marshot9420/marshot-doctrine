import type { AuthType } from '@/types'

interface AuthFormProps {
  title: AuthType
  children: React.ReactNode

  onSubmit: React.FormEventHandler<HTMLFormElement>
}

const AuthForm = ({ title, children, onSubmit }: AuthFormProps) => {
  return (
    <form className="flex flex-col gap-3.5" onSubmit={onSubmit}>
      <h2 className="mx-0 mb-14 mt-0 text-center capitalize leading-[140%]">
        <span className="border-b border-solid border-darkGray">{title}</span>
      </h2>
      {children}
    </form>
  )
}

export default AuthForm
