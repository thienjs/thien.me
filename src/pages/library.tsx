import Layout from "~/components/ui/Layout"
import ActiveLink from "~/components/ui/links/ActiveLink"
import ArrowLink from "~/components/ui/links/ArrowLink"
import ButtonLink from "~/components/ui/links/ButtonLink"
import PrimaryLink from "~/components/ui/links/PrimaryLink"
import UnderlineLink from "~/components/ui/links/UnderlineLink"
import UnstyledLink from "~/components/ui/links/UnstyledLink"
import Nav from "~/components/ui/Nav"
import Dropdown from 'components/ui/Dropdown'
import Disclosure from 'components/ui/Disclosure'
import Tabs from 'components/ui/Tabs'
import Popover from 'components/ui/Popover'
import MenuPage from '~/components/ui/DropMenu'
import DropdownMenu from "~/components/radix/DropdownMenu"

export default function library() {
  return (
    <Layout>
      <Nav />
      <MenuPage />
      <Dropdown />
      <DropdownMenu />
      <Disclosure />
      <Tabs />

      <div className="flex flex-col justify-center items-center">
        <ArrowLink href="/">test</ArrowLink>
        <ButtonLink href="/" className="">
          test
        </ButtonLink>
        <PrimaryLink href="/" className="">
          test
        </PrimaryLink>
        <UnstyledLink href="/" className="">
          test
        </UnstyledLink>
        <UnderlineLink href="/" className="">
          test
        </UnderlineLink>
      </div>
    </Layout>
  )
}
