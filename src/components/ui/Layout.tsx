import Footer from '~/components/ui/Footer'
import Header from '~/components/ui/header'
import { ScrollToTop } from '../features/scroll'
import Nav from './Nav'
import DropMenu from './DropMenu'
import CommandPalette from '~/components/features/command-palette/CommandPalette'
import { navigation } from '~/data/nav'
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex min-h-screen flex-col  items-center bg-zinc-200 dark:bg-black pt-20">
      <Header />
      <main className="flex max-w-sm flex-col  bg-zinc-200  dark:bg-black md:max-w-md lg:max-w-lg xl:max-w-xl">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
