import SignupForm from './signupForm'

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
    <header className="fixed top-0 w-full p-3 bg-green-500">
      <nav className="hidden xl:flex"></nav>
      <img></img>
      <button></button>
    </header>
    <main className="container mx-auto flex-1 bg-slate-500 w-full flex justify-center items-center px-10">
      <SignupForm />
    </main>
    <footer
      className="p-4
    "
    >
      ars
    </footer>
  </div>
  )
}
