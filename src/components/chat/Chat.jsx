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
            <p>Lorem ipsum dolor sit amets.</p>
          </div>
        </div>
        <div className="icons">
          <img src="/public/phone.png" alt="" />
          <img src="/public/video.png" alt="" />
          <img src="/public/info.png" alt="" />
        </div>
      </div>

      <div className="center"></div>
      
      <div className="bottom">

        <div className="icons">
          <img src="/public/img.png" alt="" />
          <img src="/public/camera.png" alt="" />
          <img src="/public/mic.png" alt="" />
        </div>

        <input type="text" placeholder="Type a Message..." />
        <div className="emoji">
          <img src="/public/emoji.png" alt="emoji" />
        </div>
        <button className="sendButton">Send</button>
      </div>

    </div>
  )
}

export default Chat
