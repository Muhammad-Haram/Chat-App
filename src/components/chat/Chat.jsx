import "./chat.css"
import React from 'react'

const Chat = () => {
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="/public/avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate harum natus, facilis minus minima eos at maiores optio. Iusto nulla deserunt nam provident quaerat voluptates sed ad. Ab, optio at.</p>
          </div>
        </div>
        <div className="icons"></div>
      </div>
      <div className="center"></div>
      <div className="bottom"></div>
    </div>
  )
}

export default Chat
