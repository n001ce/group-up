import React from 'react'
import PrimarySearchAppBar from './PrimarySearchAppBar'

const NavBar = ({ user, handleLogout, history, handleTheme }) => {
	return (
		<>
			<PrimarySearchAppBar user={user} history={history} handleLogout={handleLogout} handleTheme={handleTheme}/>
		</>
	)
}

export default NavBar
