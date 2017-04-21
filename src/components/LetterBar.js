import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/LetterBar.scss'

class LetterBar extends Component {
  letters = 'abcdefghijklmnopqrstuvwxyz'.split('')

  render () {
    const searchLetters = this.letters.map((letter, i) => {
      return <li key={i}>
        <NavLink to={`/browse/${letter}`} activeClassName={styles.active} className={styles.letterLinks}>
          {letter.toUpperCase()}
        </NavLink>
      </li>
    })

    return <ul className={styles.LetterBar}>
      {searchLetters}
      <li>
        <NavLink to={`/browse/numbers`} activeClassName={styles.active} className={styles.letterLinks}>
          #
        </NavLink>
      </li>
    </ul>
  }
}

export default LetterBar
