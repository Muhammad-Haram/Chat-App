import React, { useState } from 'react'
import './chatList.css'

const ChatList = () => {

  const [addMore, setAddMore] = useState(false);

  return (
    <div className='chatList'>
      <div className="search">
        <div className="searchBar">
          <img src="/search.png" alt="" />
          <input type="text" placeholder='Search' />
        </div>
        <img src={addMore ? '/minus.png' : '/plus.png'} alt="" className='add-img'
          onClick={() => setAddMore((e) => !e)} />
      </div>

      <div className='item'>
        <img src="/avatar.png" alt="" />
        <div className='texts'>
          <span>Jane Doe</span>
          <p>hello</p>
        </div>
      </div>

      <div className='item'>
        <img src="/avatar.png" alt="" />
        <div className='texts'>
          <span>Jane Doe</span>
          <p>hello</p>
        </div>
      </div>

      <div className='item'>
        <img src="/avatar.png" alt="" />
        <div className='texts'>
          <span>Jane Doe</span>
          <p>hello</p>
        </div>
      </div>

      <div className='item'>
        <img src="/avatar.png" alt="" />
        <div className='texts'>
          <span>Jane Doe</span>
          <p>hello</p>
        </div>
      </div>

      <div className='item'>
        <img src="/avatar.png" alt="" />
        <div className='texts'>
          <span>Jane Doe</span>
          <p>hello</p>
        </div>
      </div>

      <div className='item'>
        <img src="/avatar.png" alt="" />
        <div className='texts'>
          <span>Jane Doe</span>
          <p>hello</p>
        </div>
      </div>

      <div className='item'>
        <img src="/avatar.png" alt="" />
        <div className='texts'>
          <span>Jane Doe</span>
          <p>hello</p>
        </div>
      </div>

      <div className='item'>
        <img src="/avatar.png" alt="" />
        <div className='texts'>
          <span>Jane Doe</span>
          <p>hello</p>
        </div>
      </div>

      <div className='item'>
        <img src="/avatar.png" alt="" />
        <div className='texts'>
          <span>Jane Doe</span>
          <p>hello</p>
        </div>
      </div>

      <div className='item'>
        <img src="/avatar.png" alt="" />
        <div className='texts'>
          <span>Jane Doe</span>
          <p>hello</p>
        </div>
      </div>

      <div className='item'>
        <img src="/avatar.png" alt="" />
        <div className='texts'>
          <span>Jane Doe</span>
          <p>hello</p>
        </div>
      </div>

    </div>
  )
}

export default ChatList