import React from 'react'

import AsideMenuHeader from './AsideMenu/AsideMenuHeader'
import AsideMenuLinks from './AsideMenu/AsideMenuLinks'

const AsideMenu = ({user}) => {
	return (
		<aside>
			<AsideMenuHeader user={user}/>
			<hr />
			<AsideMenuLinks />
		</aside>
	)
}

export default AsideMenu