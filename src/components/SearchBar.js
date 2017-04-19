import React, { Component } from 'react'
import styles from '../styles/Searchbar.scss'

class SearchBar extends Component {
  _submit = e => {
    e.preventDefault()
  }

  _focus = (e) => {
    e.target.setSelectionRange(0, e.target.value.length)
  }

  render () {
    return <form onSubmit={this._submit} className={styles.SearchBar}>
      <input onFocus={this._focus} className={styles.searchText} type='text' ref='searchText' defaultValue='Search for words!' />
      <input type='submit' value='Search' />
    </form>
  }
}

export default SearchBar
