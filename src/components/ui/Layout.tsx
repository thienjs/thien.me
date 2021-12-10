
import Navigation from "~/components/ui/Navigation"
import Footer from "~/components/ui/Footer"


export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dark:bg-black">
      <Navigation />
      <main className="max-w-4xl mx-auto mt-16 px-10 antialiased bg-white dark:bg-black">{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout