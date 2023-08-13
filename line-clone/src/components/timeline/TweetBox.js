import { Avatar } from '@mui/material'
import React from 'react'
import { Button } from '@mui/material'
import './TweetBox.css'
import { useState } from 'react'
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import db from '../../firebase'

function TweetBox() {



	const [tweetMessage, setTweetMessage] = useState('');
	const [tweetImage, setTweetImage] = useState('');

	const sendTweet = (e) => {
		e.preventDefault();
		addDoc(collection(db, "posts"), {
			displayName:"kouki",
			username:"kk485",
			verified:true,
			text:tweetMessage,
			avatar:"https://images.app.goo.gl/76DjvxMtVz5SyECH7",
			image:tweetImage,
			timestamp: serverTimestamp(),
	});
		setTweetMessage('');
		setTweetImage('');
};

  return (
	<div className='tweetBox'>
		<form>
			<div className='tweetBox__input'>
				<Avatar/>
				<input value={tweetMessage} placeholder='いまどうしてる？'
				type='text' onChange={(e) => setTweetMessage(e.target.value)}></input>
			</div>
			<input value={tweetImage} placeholder='画像のURLを貼り付けてください' 
			type='text' className='tweetBox__imageInput'
			onChange={(e) => setTweetImage(e.target.value)}></input>
			<Button className='tweetBox--tweetButton' type='submit'
			onClick={sendTweet}>ツイートする</Button>
		</form>
	</div>
  )
}

export default TweetBox