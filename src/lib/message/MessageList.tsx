import { FunctionComponent } from 'react'
import { MessageListProps } from './message.types'
import Message from './Message'

export const MessageList: FunctionComponent<MessageListProps> = ({
  messages,
}) => (
  <div className="app-messages absolute top-6 z-10 flex w-screen flex-col place-items-center justify-center">
    {messages.map((message, index) => (
      <Message key={index} type={message.type} message={message.message} />
    ))}
  </div>
)

export default MessageList
