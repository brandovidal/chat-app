import LogoutButton from '@/components/LogoutButton'

import CreateChatForm from '@/components/CreateChatForm'
import Profile from '@/components/Profile'

export default function HomePage () {
  return (
    <div className='flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <h1 className='text-3xl font-bold'>Chat App</h1>

      <ul className='flex items-center justify-evenly w-full gap-6'>
        <a className='underline' href='/auth/register'>
          Register
        </a>
        <LogoutButton />
      </ul>

      <section className='flex flex-col gap-4'>
        <Profile />
        <CreateChatForm />
      </section>
    </div>
  )
}
