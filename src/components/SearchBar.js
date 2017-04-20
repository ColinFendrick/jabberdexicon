import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom'
import styles from '../styles/Searchbar.scss'

class SearchBar extends Component {
  state = {}

  updateState = () => {
    const url = 'https://jabberdexicon.herokuapp.com/entries?access_token=example'
    window.fetch(url)
    .then(r => r.json())
    .then(data => {
      this.setState({ data })
    })
  }

  _change = e => {
    e.preventDefault()
    const query = this.refs.query.value
    const path = query.length > 0 ? `/search/${query}` : '/'
    this.props.history.push(path)
  }

  _submit = e => {
    e.preventDefault()
    const query = this.refs.query.value
    const path = query.length > 0 ? `/search/${query}` : '/'
    this.props.history.push(path)
  }

  _focus = e => {
    e.target.setSelectionRange(0, e.target.value.length)
  }

  showSearchText = () => <p className={styles.searchingText}>Searching for '{this.refs.query.value}'</p>

  render () {
    return <div>
      <form onChange={this._change} onSubmit={this._submit} className={styles.SearchBar}>
        <input onFocus={this._focus} className={styles.searchText} type='search' ref='query' defaultValue='Search for words' />
        <input type='submit' value='Search' />
      </form>
      <Route path='/search/' render={this.showSearchText} />
    </div>
  }
}

export default withRouter(SearchBar)
