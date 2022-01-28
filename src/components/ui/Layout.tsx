
import Navigation from "~/components/ui/Navigation"
import Footer from "~/components/ui/Footer"
import { ScrollToTop } from '../scroll'
import Nav from "./Nav"
import DropMenu from "./DropMenu"
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex flex-col items-center  bg-white dark:bg-black">
      <Nav />

      <main className="flex flex-col justify-center  bg-white dark:bg-black  sm:max-w-3xl max-w-sm ">
        {children}
      </main>
      <Footer />

      <ScrollToTop />
    </div>
  )
}

export default Layout