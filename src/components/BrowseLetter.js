import React, { Component } from 'react'
import styles from '../styles/BrowseLetter.scss'
import { NavLink } from 'react-router-dom'

class BrowseLetter extends Component {
  state = {
    active: []
  }

  componentDidMount () {
    const url = 'https://jabberdexicon.herokuapp.com/entries?access_token=example'
    window.fetch(url)
    .then(r => r.json())
    .then(data => {
      this.setState({
        active: data
      })
    })
  }

  render () {
    const filtered = this.state.active.filter(item => {
      if (this.props.match.params.letter === 'numbers') {
        return item.term.match(/^\d/)
      } else {
        return item.term[0].toLowerCase() === this.props.match.params.letter
      }
    })

    const words = filtered.map(word => {
      return <li key={word.id}>
        <NavLink to={`/entry/${word.slug}`} className={styles.word}>{word.term}</NavLink>
      </li>
    })

    return <div className={styles.wordList}>
      Words that start with <strong className={styles.selectedLetter}>{this.props.match.params.letter.toUpperCase()}</strong>
      <ul className={styles.BrowseLetter}>
        {words}
      </ul>
    </div>
  }
}

export default BrowseLetter
