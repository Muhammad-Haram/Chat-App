import './detail.css'
import React from 'react'

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="/public/avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem, ipsum dolor sit amet.</p>
      </div>
      <div className="info">

        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="/public/arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="/public/arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="/public/arrowUp.png" alt="" />
          </div>
          <div className="photos">

            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.pexels.com/photos/26559989/pexels-photo-26559989/free-photo-of-a-person-s-feet-are-on-the-edge-of-a-boat.jpeg" alt="" />
                <span>Photo_2024_2.png</span>
              </div>
              <img src="/public/download.png" alt="" className='icon' />
            </div>

            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.pexels.com/photos/26559989/pexels-photo-26559989/free-photo-of-a-person-s-feet-are-on-the-edge-of-a-boat.jpeg" alt="" />
                <span>Photo_2024_2.png</span>
              </div>
              <img src="/public/download.png" alt="" className='icon' />
            </div>

            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.pexels.com/photos/26559989/pexels-photo-26559989/free-photo-of-a-person-s-feet-are-on-the-edge-of-a-boat.jpeg" alt="" />
                <span>Photo_2024_2.png</span>
              </div>
              <img src="/public/download.png" alt="" className='icon' />
            </div>

            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.pexels.com/photos/26559989/pexels-photo-26559989/free-photo-of-a-person-s-feet-are-on-the-edge-of-a-boat.jpeg" alt="" />
                <span>Photo_2024_2.png</span>
              </div>
              <img src="/public/download.png" alt="" className='icon' />
            </div>

          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="/public/arrowUp.png" alt="" />
          </div>
        </div>
      </div>
        <button>Block User</button>
        <button className='logout'>Logout</button>
    </div>
  )
}

export default Detail
