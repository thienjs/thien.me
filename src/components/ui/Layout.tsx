
import Navigation from "~/components/ui/Navigation"
import Footer from "~/components/ui/Footer"
import { ScrollToTop } from '../features/scroll'
import Nav from "./Nav"
import DropMenu from "./DropMenu"
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex flex-col items-center  bg-zinc-200 dark:bg-black min-h-screen">
      <Nav />

      <main className="flex flex-col justify-center  bg-zinc-200 dark:bg-black  max-w-sm sm:max-w-3xl">
        {children}
      </main>
      <Footer />

      <ScrollToTop />
    </div>
  )
}

export default Layout