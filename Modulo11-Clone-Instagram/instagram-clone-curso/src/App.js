import './App.css';
import { db, auth } from './firebase.js';
import { useEffect, useState } from 'react';
import Header from './Header.js'
import Post from './Post.js'

function App() {

  const [user, setUser] = useState()

  const [posts, setPosts] = useState([])

  useEffect(() => {

    auth.onAuthStateChanged((val) => {
      if(val != null){
        setUser(val.displayName)
      }
    })
    
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((document) => {
        return{id:document.id,info:document.data()}
      }))
    })

  }, [])
  
  return (
    <div className="App">
      <Header setUser={setUser} user={user}></Header>

      {
        posts.map((val) => {
          return(
            <Post user={user} id={val.id} info={val.info}/>
          )
        })
      }
    </div>
  );
}

export default App;