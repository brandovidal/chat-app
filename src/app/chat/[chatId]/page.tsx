'use client'

import { use } from 'react'

import ChatDetails from '@/components/ChatDetails'

export default function ChatPage ({
  params
}: {
  params: Promise<{ chatId: string }>
}) {
  const { chatId } = use(params)

  if (!chatId) {
    return <div>Loading...</div>
  }

  return <ChatDetails chatId={chatId} />
}
