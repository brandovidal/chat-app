'use client'

import { use } from 'react'

import ChatWindow from '@/components/ChatWindow'

export default function ChatPage ({
  params
}: {
  params: Promise<{ chatId: string }>
}) {
  const { chatId } = use(params)
  const userId = '672157a02a51d7e4adcd4dae' // Replace with the actual user ID from authentication

  if (!chatId) {
    return <div>Loading...</div>
  }

  return <ChatWindow chatId={chatId} userId={userId} />
}
