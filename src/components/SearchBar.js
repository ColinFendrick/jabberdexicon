import React, { Component } from 'react'
import styles from '../styles/Searchbar.scss'

class SearchBar extends Component {
  _submit = e => {
    e.preventDefault()
    this.props.searchWord(this.refs.searchText.value)
  }

  render () {
    return <form onSubmit={this._submit} className={styles.SearchBar}>
      <input className={styles.searchText} type='text' ref='searchText' defaultValue='Search for words!' />
      <input type='submit' value='Search' />
    </form>
  }
}

export default SearchBar
