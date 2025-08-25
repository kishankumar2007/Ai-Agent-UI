import React, { useState } from 'react'
import Layout from './container/Layout'
import Message from './components/Message'
import axios from "axios"
import { useRef } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [question, setQuestion] = useState('')
  const [message, setMessage] = useState([{ role: "Perfect AI", message: "Hello!, How can i assist you today?" }])
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [message])

  const handleClick = async () => {
    if (question.trim() === "") return
    setMessage(pre => [...pre, { role: "user", message: question }])
    setQuestion("")
    const response = await axios.post(" https://ai-agent-msmq.onrender.com/v1/chat", { message: question }, { withCredentials: true })
    setMessage(pre => [...pre, response.data])
    window.scrollTo({ bottom: 0 })
  }

  return (
    <div className='w-full h-screen bg-black/90'>
      <Layout>
        {message.map((message, idx) => <Message key={idx} role={message.role} message={message.message} />)}

        <div className="fixed sm:bottom-12 bottom-2 left-1/2 -translate-x-1/2 w-full max-w-2xl rounded-lg border border-white/10 bg-black/10 backdrop-blur-lg px-3 py-2">
          <div className="flex items-center gap-2">
            <textarea
              onKeyUp={e => { e.key === "Enter" ? handleClick() : "" }}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full resize-none min-h-12 outline-none text-white bg-transparent px-2 py-2"
              placeholder="Ask question..."
              required
            />
            <div ref={bottomRef} />
            <button onClick={handleClick} className="py-2 px-5 bg-black/30 border border-white/5 rounded-lg text-white">
              Send
            </button>
          </div>
        </div>
      </Layout>

    </div>
  )
}

export default App
