import React from 'react'

const Header = ({user}) => {
	return (
		<header>Hello {user.firstName} {user.lastName}</header>
	)
}

export default Header