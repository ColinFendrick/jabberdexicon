import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/Home.scss'

class Home extends Component {
  render () {
    return <div className={styles.Home}>
      <NavLink to='/browse/all'>
        <img src='https://s-media-cache-ak0.pinimg.com/originals/fb/e3/c2/fbe3c28e7beebd2ae984febc3191310d.png' />
      </NavLink>
    </div>
  }
}

export default Home
