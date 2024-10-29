export default function Home () {
  return (
    <div className='flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <h1 className='text-3xl font-bold'>Chat App</h1>

      <section className="flex flex-col gap-4">
        <h3 className='text-xl font-bold'>Links</h3>
        <ul>
          <li>
            <a className="underline" href='/auth/register'>Register</a>
          </li>
        </ul>
      </section>
    </div>
  )
}
