import { CommandIcon } from 'lucide-react'
import {
  Drawer,
  DrawerClose,
  DrawerOverlay,
  DrawerPortal,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '~/components/ui/drawer'
import { ScrollArea } from '~/components/ui/scroll-area'
import { Separator } from '~/components/ui/separator'
import { useRouter } from 'next/router'
import { Button } from '~/components/ui/button'
import { Fragment, useState, useEffect } from 'react'
import { Menu, Transition, Disclosure } from '@headlessui/react'
import classNames from '~/lib/classNames'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import {
  CodeIcon,
  HomeIcon,
  EnvelopeOpenIcon,
  Pencil1Icon,
  StopwatchIcon,
  PersonIcon,
  DiscIcon,
  PaperPlaneIcon,
  BackpackIcon,
  LightningBoltIcon,
  QuoteIcon,
  DrawingPinIcon,
  Half2Icon,
  HamburgerMenuIcon,
  Cross1Icon,
  Crosshair2Icon,
  TwitterLogoIcon,
  GitHubLogoIcon,
  NotionLogoIcon,
  EnvelopeClosedIcon,
  ChatBubbleIcon,
  RocketIcon,
  ArchiveIcon,
  FaceIcon,
  IdCardIcon,
  AvatarIcon,
  BlendingModeIcon,
  SpeakerLoudIcon,
  CubeIcon,
  BookmarkIcon,
} from '@radix-ui/react-icons'

export const DrawerMenu = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <div className="mx-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-zinc-300 p-2 ring-neutral-400 transition duration-200 ease-in-out hover:bg-zinc-300 hover:ring-2 dark:bg-zinc-700 dark:hover:bg-zinc-800  ">
          <CommandIcon />
        </div>
      </DrawerTrigger>
      <DrawerContent className="fixed bottom-0 left-0 right-0  flex h-[70%] flex-col rounded-t-lg border-none bg-gray-100 dark:bg-zinc-800">
        <div className="mx-auto mb-6 h-1 w-16 shrink-0 rounded-full bg-zinc-300" />
        <ScrollArea className="h-60% flex flex-col">
          <div className="flex w-full flex-col text-sm">
            <div className="flex flex-col ">
              <div className="border-1 flex flex-col items-start gap-y-2 py-12  pl-12 font-sans text-4xl font-semibold ">
                <Link href="/">Home</Link>

                <Link href="/about">About</Link>

                <Link href="/blog">Blog</Link>

                <Link href="/snippets">Snippets</Link>

                <Link href="/guestbook">Guestbook</Link>

                <Link href="/now">Now</Link>

                <Link href="/status">Status</Link>

                <Link href="/bookmarks">Bookmarks</Link>

                <Link href="/quotes">Quotes</Link>

                <Link href="/uses">Uses</Link>

                <Link href="/keyboards">Keyboards</Link>

                <Link href="/dashboard">Dashboard</Link>

                <Link href="/movies">Movies</Link>

                <Link href="/music">Music</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  )
}
