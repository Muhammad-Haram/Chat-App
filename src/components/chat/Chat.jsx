import React, { useEffect, useRef, useState } from 'react'
import "./chat.css"
import EmojiPicker from 'emoji-picker-react'

const Chat = () => {

  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');

  const endRef = useRef(null)

  useEffect(()=>{
    endRef.current?.scrollIntoView({behavior: 'smooth'});
  },[])

  console.log(endRef)

  const handleEmoji = (e) => {
    console.log(e.emoji)
    setText(prev => (prev + e.emoji));
    // setOpen(false)
  }

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amets.</p>
          </div>
        </div>
        <div className="icons">
          <img src="/phone.png" alt="" />
          <img src="/video.png" alt="" />
          <img src="/info.png" alt="" />
        </div>
      </div>


      <div className="center">

        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className='texts'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum id ullam ipsam error fugiat perspiciatis vitae, tempore repudiandae perferendis facilis illo. Mollitia maiores saepe excepturi culpa dolores iure molestiae obcaecati.</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className='texts'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum id ullam ipsam error fugiat perspiciatis vitae, tempore repudiandae perferendis facilis illo. Mollitia maiores saepe excepturi culpa dolores iure molestiae obcaecati.</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className='texts'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum id ullam ipsam error fugiat perspiciatis vitae, tempore repudiandae perferendis facilis illo. Mollitia maiores saepe excepturi culpa dolores iure molestiae obcaecati.</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className='texts'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum id ullam ipsam error fugiat perspiciatis vitae, tempore repudiandae perferendis facilis illo. Mollitia maiores saepe excepturi culpa dolores iure molestiae obcaecati.</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className='texts'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum id ullam ipsam error fugiat perspiciatis vitae, tempore repudiandae perferendis facilis illo. Mollitia maiores saepe excepturi culpa dolores iure molestiae obcaecati.</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <img src="/avatar.png" alt="" />
          <div className='texts'>
            <img src="https://images.pexels.com/photos/26559989/pexels-photo-26559989/free-photo-of-a-person-s-feet-are-on-the-edge-of-a-boat.jpeg" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum id ullam ipsam error fugiat perspiciatis vitae, tempore repudiandae perferendis facilis illo. Mollitia maiores saepe excepturi culpa dolores iure molestiae obcaecati.</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className='texts'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum id ullam ipsam error fugiat perspiciatis vitae, tempore repudiandae perferendis facilis illo. Mollitia maiores saepe excepturi culpa dolores iure molestiae obcaecati.</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className='texts'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum id ullam ipsam error fugiat perspiciatis vitae, tempore repudiandae perferendis facilis illo. Mollitia maiores saepe excepturi culpa dolores iure molestiae obcaecati.</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div ref={endRef}></div>

      </div>


      <div className="bottom">

        <div className="icons">
          <img src="/img.png" alt="" />
          <img src="/camera.png" alt="" />
          <img src="/mic.png" alt="" />
        </div>

        <input type="text" placeholder="Type a Message..." value={text} onChange={e => setText(e.target.value)} />

        <div className="emoji">
          <img src="/emoji.png" alt="emoji" onClick={() => setOpen((e) => !e)} />
          <div className='picker'>
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>

    </div>
  )
}

export default Chat
