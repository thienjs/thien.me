import { Dialog, Combobox } from '@headlessui/react'
import { useState } from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import { projects } from '~/data/projects'
export default function CommandPalette({ projects }) {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <Dialog
      open={isOpen}
      onClose={setIsOpen}
      className="fixed inset-0 bg-zinc-600 p-4 pt-[25vh] overflow-y-auto"
    >
      <Dialog.Overlay className="fixed inset-0 bg-zinc-500/75 "/>

      <Combobox onChange={()=> {}} as="div" className="relative dark:bg-zinc-800 bg-zinc-200 max-w-xl mx-auto rounded-xl shadow-2xl ring-1 ring-black/5">
        <div className='flex items-center px-4'>

        <SearchIcon className='h-6 w-6 text-gray-500'/>
        <Combobox.Input onChange={()=> {}} className="w-full border-0 bg-transparent text-sm focus:ring-0 text-gray-800 placeholder-gray-400 h-12" placeholder='Search...' />
        </div>
        <Combobox.Options static>
          <Combobox.Options>Project One</Combobox.Options>
          <Combobox.Options>Project One</Combobox.Options>
          <Combobox.Options>Project One</Combobox.Options>
        </Combobox.Options>
      </Combobox>
    </Dialog>
  )
}
