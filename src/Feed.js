import React, { useEffect, useState } from 'react'
import "./Feed.css";
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalenderViewDayIcon from '@material-ui/icons/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Posts'
import { db } from './firebase'
import firebase from 'firebase';

function Feed() {

    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState("")

    useEffect(()=>{
       db.collection("posts").onSnapshot((snapshot) =>
        setPosts(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
        )
       );
    }, []);
    
    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: 'Harshit Singhal',
            description: 'This is a test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
    }

    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon/>
                    <form >
                        <input value={input} onChange={e=>setInput(e.target.value)}  type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={ImageIcon} title = 'Photo' color= "#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon} title = 'Video' color= "#E7A33E"/>
                    <InputOption Icon={EventNoteIcon} title = 'Event' color= "#C0CBCD"/>
                    <InputOption Icon={CalenderViewDayIcon} title = 'Write Article' color= "#7FC15E"/>
                </div>
            </div>

        
            {posts.map(({ id, data: {name, description, message, photoUrl }})=>
            (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl=''
                />
            )
            )}
        </div>
    )
}

export default Feed
