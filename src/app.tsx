import React, { useEffect, useState } from 'react';

interface Message {
  id: number;
  text: string;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const websocket = new WebSocket('ws://localhost:8000/ws');

    websocket.onopen = () => {
      console.log('Connected to WebSocket');
    };

    websocket.onmessage = (event) => {
      const newMessage: Message = { id: messages.length, text: event.data };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    websocket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => websocket.close();
  }, [messages]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Streaming Data</h1>
      <ul className="list-disc">
        {messages.map((msg) => (
          <li key={msg.id}>{msg.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
