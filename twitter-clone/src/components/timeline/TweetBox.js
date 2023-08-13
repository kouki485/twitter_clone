import { Avatar } from '@mui/material'
import React from 'react'
import { Button } from '@mui/material'
function TweetBox() {
  return (
	<div className='tweetBox'>
		<form>
			<Avatar/>
			<input placeholder='いまどうしてる？'
			type='text'></input>
			<input placeholder='画像のURLを貼り付けてください' 
			type='text' className='tweetBox__imageInput'></input>
			<Button className='tweetBox--tweetButton' type='submit'>ツイートする</Button>
		</form>
	</div>
  )
}

export default TweetBox