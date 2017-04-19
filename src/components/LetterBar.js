import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/LetterBar.scss'

class LetterBar extends Component {
  letters = 'abcdefghijklmnopqrstuvwxyz'.split('')

  render () {
    const searchLetters = this.letters.map((letter, i) => {
      return <li key={i}>
        <NavLink to={`/browse/${letter}`}>
          {letter.toUpperCase()}
        </NavLink>
      </li>
    })

    return <ul className={styles.LetterBar}>
      {searchLetters}
      <li>
        <NavLink to={`/browse/0`}>
        #
      </NavLink>
      </li>
    </ul>
  }
}

export default LetterBar
