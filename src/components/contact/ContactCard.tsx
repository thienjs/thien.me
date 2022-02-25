import { Contact } from '@prisma/client'
import Image from 'next/image'

interface ContactCardProps {
  contact: Contact
}

export default function ContactCard(props: ContactCardProps) {
  return (
    <div className="flex rounded-lg border p-4">
      <div className="my-auto">
        <Image
          src={props.contact.avatar}
          alt="Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <div className="ml-4">
        <p className="text-xl text-gray-700">
          {props.contact.firstName} {props.contact.lastName}
        </p>
        <p className="text-gray-500">{props.contact.email}</p>
      </div>
    </div>
  )
}
