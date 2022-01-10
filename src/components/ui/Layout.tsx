
import Navigation from "~/components/ui/Navigation"
import Footer from "~/components/ui/Footer"
import { ScrollToTop } from '../scroll'
import Nav from "./Nav"
import DropMenu from "./DropMenu"
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex flex-col items-center  bg-gray-50 dark:bg-zinc-900">
      <Nav />

      <main className="flex flex-col justify-center  bg-gray-50 dark:bg-zinc-900  sm:max-w-3xl max-w-sm ">
        {children}
      </main>
      <Footer />

      <ScrollToTop />
    </div>
  )
}

export default Layout