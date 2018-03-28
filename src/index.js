import React from 'react'
import {render} from 'react-dom'

import Header from './components/Header'
import Nav from './components/Nav'
import AsideMenu from './components/AsideMenu'
import Footer from './components/Footer'
import MainSection from './components/MainSection'

import '../assets/index.css'

const user = {
	firstName: 'Rustam',
	lastName: 'Zhuaspayev'
}

render(
  <div>
  	<Header user={user} />
  	<Nav />
  	<div className='main'>
  		<AsideMenu user={user}/>
  		<MainSection />
  	</div>
  	<Footer date={(new Date()).toString()}/>
  </div>,
  document.getElementById('root')
)