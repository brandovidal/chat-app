'use client'

import { useEffect, useState } from 'react'

import { getChatDetails } from '../services/api'

export default function ChatDetails ({ chatId }) {
  const [chat, setChat] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchChatDetails = async () => {
      try {
        const token = localStorage.getItem('token')
        if (token) {
          const data = await getChatDetails(token, chatId)
          setChat(data)
        } else {
          setError('No token found')
        }
      } catch (err) {
        setError(err.message)
      }
    }

    fetchChatDetails()
  }, [chatId])

  if (error) {
    return <div className='text-red-500'>{error}</div>
  }

  return (
    <div className='max-w-md mx-auto mt-10'>
      <h2 className='text-2xl font-bold mb-5'>Chat Details</h2>
      {chat ? (
        <div>
          <h3 className='text-xl font-bold mb-3'>Participants</h3>
          <ul>
            {chat.participants.map((participant, index) => (
              <li key={participant._id ?? index}>{participant.username}</li>
            ))}
          </ul>
          <h3 className='text-xl font-bold mb-3 mt-5'>Messages</h3>
          <ul>
            {chat.messages.map((message, index) => (
              <li
                key={message._id ?? index}
                className='mb-2 p-2 border rounded'
              >
                <strong>{message.sender.username}</strong>: {message.content}{' '}
                <br />
                <span className='text-gray-500 text-sm'>
                  {new Date(message.timestamp).toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
