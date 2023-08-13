import React, { useEffect } from 'react'
import './Timeline.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from '../../firebase'
import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore"
import { useState } from 'react'
import FlipMove from 'react-flip-move'

function Timeline() {

	const [posts, setPosts] = useState([]);

	
	useEffect(() => {
		const postData = collection(db, "posts");
		const q = query(postData, orderBy("timestamp", "desc"));
		// getDocs(q).then((querySnapshot) => {
		// 	setPosts(querySnapshot.docs.map((doc) => doc.data()));
		// });
		/*　リアルタイムでデータを取得　*/
		onSnapshot(q, (snapshot) => {
			setPosts(snapshot.docs.map((doc) => doc.data()));
		});
	}, [])
  return (
	<div className='timeline'>

		{/*Header*/}
		<div className="timeline__header">
			<h2>ホーム</h2>
		</div>
		{/*TweetBox*/}
		<TweetBox/>

		{/*Post*/}
		<FlipMove>
		{posts.map((post) => (
			<Post
				displayName={post.displayName}
				username={post.username}
				verified={post.verified}
				text={post.text}
				avatar={post.avatar}
				image={post.image}
				key={post.text}
				/>
		))}
		</FlipMove>
	</div>
  )
}

export default Timeline