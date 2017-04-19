import React, { Component } from 'react'
import styles from '../styles/BrowseLetter.scss'
import { NavLink } from 'react-router-dom'

class BrowseLetter extends Component {
  state = {
    active: []
  }

  updateSearch (letter) {

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
      return item.term[0].toLowerCase() === this.props.match.params.letter
    })
    const words = filtered.map(word => {
      return <li key={word.id}>
        <NavLink to={`/entry/${word.slug}`}>{word.term}</NavLink>
      </li>
    })
    return <ul className={styles.BrowseLetter}>
      {words}
    </ul>
  }
}

export default BrowseLetter
