
import Navigation from "~/components/ui/Navigation"
import Footer from "~/components/ui/Footer"


export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 font-sans">
      <Navigation />
      <main className="max-w-4xl mx-auto mt-16 px-10 antialiased ">{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout