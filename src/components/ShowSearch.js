import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/ShowSearch.scss'

class ShowSearch extends Component {
  state = {
    active: []
  }

  componentDidMount () {
    const url = 'https://jabberdexicon.herokuapp.com/entries?access_token=vorpal'
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
      if (this.props.match.params.word.length !== 0) {
        return item.term.toLowerCase().includes(this.props.match.params.word.toLowerCase())
      }
    })

    const words = filtered.map(word => {
      if (filtered) {
        return <li key={word.id}>
          <NavLink to={`/entry/${word.slug}`} className={styles.searchLinks}>{word.term}</NavLink>
        </li>
      } else {
        return <div>
          <p>Currently no words that start with <strong className={styles.selectedLetter}>{this.props.match.params.letter.toUpperCase()}</strong></p>
          <NavLink to='/'>
            Go home?
          </NavLink>
          <NavLink to='/addword'>
            Add some?
          </NavLink>
        </div>
      }
    })

    return <ul className={styles.ShowSearch}>
      {words}
    </ul>
  }
}

export default ShowSearch
