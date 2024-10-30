import { getChatDetails } from "@/services/api";
import { useEffect, useState } from "react";

import io from "socket.io-client";

const useChat = (chatId, onNewMessage) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const fetchChatDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const data = await getChatDetails(token, chatId);
          console.log("🚀 ~ fetchChatDetails ~ data:", data.messages)
          const messages = data.messages ?? []
          setMessages(messages);
        }
      } catch (err) {
      console.error("🚀 ~ fetchChatDetails ~ err:", err)
      }
    };

    fetchChatDetails();
  }, [chatId]);

  useEffect(() => {
    const newSocket = io("http://localhost:5000");
    setSocket(newSocket);

    newSocket.emit("joinChat", chatId);

    newSocket.on("receiveMessage", (newChat) => {
      setMessages(newChat.messages);

      if (onNewMessage) {
        const newMessage = newChat.messages[newChat.messages.length - 1];
        onNewMessage(newMessage);
      }
    });

    return () => newSocket.close();
  }, [chatId, onNewMessage]);

  const sendMessage = (userId, content) => {
    socket.emit("sendMessage", { chatId, userId, content });
    setMessage("");
  };

  return {
    messages,
    message,
    setMessage,
    sendMessage,
  };
};

export default useChat;
