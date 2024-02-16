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

import { Button } from '~/components/ui/button'
import { Fragment, useState } from 'react'
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
    <Drawer shouldScaleBackground>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon">
          <CommandIcon size={16} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="fixed bottom-0 left-0 right-0  flex h-[60%] flex-col rounded-t-lg border-none bg-gray-100 dark:bg-zinc-800">
        <div className="mx-auto mb-6 h-1 w-16 shrink-0 rounded-full bg-zinc-300" />
        <ScrollArea className="h-60% flex flex-col">
          <div className="flex w-full flex-col text-sm">
            <div className="flex flex-col">
              <Link
                href="/"
                className="link-card inline-flex items-center gap-2 p-2 pl-6"
              >
                <img
                  src="https://github.com/thienjs.png"
                  alt="Thien Tran"
                  width={40}
                  height={40}
                  loading="lazy"
                  className="rounded-full border shadow-sm"
                />
                <div className="flex flex-col ">
                  <span className="font-semibold tracking-tight">
                    Thien Tran
                  </span>
                  <span className="text-gray-600">Designer, Developer</span>
                </div>
              </Link>
              <div className="border-1 flex flex-col items-start pl-4 ">
                <Button>
                  <Link href="/">Home</Link>
                </Button>
                <Button>
                  <Link href="/about">About</Link>
                </Button>
                <Button>
                  <Link href="/blog">Blog</Link>
                </Button>
                <Button>
                  <Link href="/snippets">Snippets</Link>
                </Button>
                <Button>
                  <Link href="/guestbook">Guestbook</Link>
                </Button>
                <Button>
                  <Link href="/now">Now</Link>
                </Button>
                <Button>
                  <Link href="/status">Status</Link>
                </Button>
                <Button>
                  <Link href="/bookmarks">Bookmarks</Link>
                </Button>
                <Button>
                  <Link href="/quotes">Quotes</Link>
                </Button>
                <Button>
                  <Link href="/stats">Stats</Link>
                </Button>
              </div>
            </div>

 
          </div>

        </ScrollArea>
      </DrawerContent>
    </Drawer>
  )
}
