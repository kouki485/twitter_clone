import React from 'react'
import { Search } from '@mui/icons-material'
import { 
	TwitterTimelineEmbed, 
	TwitterShareButton, 
	TwitterTweetEmbed,  
} from 'react-twitter-embed';
import './Widgets.css'

function Widgets() {
  return (
	<div className='widgets'>
		<div className="widgets__input">
			<Search className='widgets__serchIcon'/>
			<input placeholder='キーワード検索' type='text'/>
		</div>
		<div className="widgets__widgetContainer">
			<h2>いまどうしてる？</h2>
			{/*　ライブラリの追加　*/}
			<TwitterTweetEmbed tweetId={"1685096284275802112"}/>
			<TwitterTimelineEmbed
			sourceType="profile"
			screenName="elonmusk"
			options={{height: 400}}
			/>
			<TwitterShareButton
			url={'https://twitter.com/elonmusk'}
			options={{ text: '#reactjs is awesome', via: 'elonmusk' }}
			/>
		</div>
	</div>
  )
}

export default Widgets