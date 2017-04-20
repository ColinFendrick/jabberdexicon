import React, { Component } from 'react'
import styles from '../styles/Home.scss'

class Home extends Component {
  render () {
    return <div className={styles.Home}>
      <img src='https://s-media-cache-ak0.pinimg.com/originals/fb/e3/c2/fbe3c28e7beebd2ae984febc3191310d.png' />
      <p>Welcome to the Future</p>
    </div>
  }
}

export default Home
