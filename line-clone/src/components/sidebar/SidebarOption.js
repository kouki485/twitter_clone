import React from 'react'
import HomeIcon from '@mui/icons-material/Home';

function SidebarOption({text, Icon, active}) {
  return (
	<div className={`sidebarOption ${active && "sidebarOption__active"}`}>
		<Icon/>
		<h2>{text}</h2>
	</div>
  )
}

export default SidebarOption