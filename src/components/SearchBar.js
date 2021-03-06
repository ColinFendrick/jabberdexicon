import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom'
import styles from '../styles/Searchbar.scss'

class SearchBar extends Component {
  state = {}

  _change = e => {
    e.preventDefault()
    const query = this.refs.query.value
    const path = query.length > 0 ? `/search/${query}` : '/'
    this.props.history.push(path)
    this.setState({
      query
    })
  }

  _focus = e => {
    e.target.setSelectionRange(0, e.target.value.length)
  }

  showSearchText = () => <p className={styles.searchingText}>Searching for <span className={styles.searchingWords}>{this.state.query}</span></p>

  render () {
    return <div>
      <form onChange={this._change} className={styles.SearchBar}>
        <input onFocus={this._focus} className={styles.searchText} type='search' ref='query' defaultValue='Search for words' />
      </form>
      <div className={styles.searchResults}>
        <Route path='/search/' render={this.showSearchText} />
      </div>
    </div>
  }
}

export default withRouter(SearchBar)
