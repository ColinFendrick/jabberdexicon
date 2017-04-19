import React, { Component } from 'react'
import styles from '../styles/Searchbar.scss'

class SearchBar extends Component {
  state = {
    active: []
  }

  getResults (query) {
    const url = `https://jabberdexicon.herokuapp.com/entries/${query}?access_token=example`
    window.fetch(url)
    .then(r => r.json())
    .then(data => {
      this.setState({
        active: data
      })
    })
  }

  _submit = e => {
    e.preventDefault()
    // this.getResults(this.refs.searchText.value)
  }

  _focus = e => {
    e.target.setSelectionRange(0, e.target.value.length)
  }

  render () {
    return <form onSubmit={this._submit} className={styles.SearchBar}>
      <input onFocus={this._focus} className={styles.searchText} type='text' ref='searchText' defaultValue='Search for words' />
      <input type='submit' value='Search' />
    </form>
  }
}

export default SearchBar
