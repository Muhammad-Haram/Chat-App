import React, { useEffect, useState } from 'react'
import './chatList.css'
import AddUser from './addUser/AddUser';
import { useUserStore } from '../../../lib/userStore'
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../lib/firebase';

const ChatList = () => {

  const [addMore, setAddMore] = useState(false);
  const [chats, setChats] = useState([]);

  const { currentUser } = useUserStore();

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "userChats", currentUser.id), async (doc) => {
      const items = res.data().chats;

      const promises = items.map(async (item) => {
        const userDocRef = doc(db, "users", item.reciverId);
        const userDocSnap = await getDoc(userDocRef);

        const user = userDocSnap.data();

        return { ...item, user };
      })

      const chatData = await Promise.all(promises);
      setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));

    });

    return () => {
      unSub();
    }

  }, [currentUser.id]);

  console.log(chats)

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

      {chats.map((chats) => {

        <div className='item' key={chats.id}>
          <img src="/avatar.png" alt="" />
          <div className='texts'>
            <span>Jane Doe</span>
            <p>{chats.lastMessage}</p>
          </div>
        </div>

      })}

      {addMore && <AddUser />}

    </div>
  )
}

export default ChatList