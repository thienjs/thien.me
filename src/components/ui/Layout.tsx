import CommandPalette from '~/components/features/command-palette/CommandPalette'
import Footer from '~/components/ui/Footer'
import { navigation } from '~/data/nav'

import { ScrollToTop } from '../features/scroll'
import DropMenu from './DropMenu'
import Nav from './Nav'
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex min-h-screen flex-col  items-center bg-zinc-200 dark:bg-black">
      <Nav />
      <CommandPalette navigation={navigation} />
      <main className="flex max-w-sm flex-col  justify-center bg-zinc-200  dark:bg-black md:max-w-md lg:max-w-lg xl:max-w-xl">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
