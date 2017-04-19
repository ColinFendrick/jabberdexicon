import React, { Component } from 'react'
import { BrowserRouter as Router,
  NavLink,
  Route } from 'react-router-dom'
import SearchBar from './Searchbar.js'
import AddWord from './AddWord.js'
import styles from '../styles/App.scss'
import LetterBar from './LetterBar.js'
import Home from './Home.js'
import BrowseLetter from './BrowseLetter.js'
import ShowWord from './ShowWord.js'
import ShowSearch from './ShowSearch.js'

class App extends Component {
  state = {
    active: {}
  }

  addWord = (newTerm, newDef) => {
    const url = 'https://jabberdexicon.herokuapp.com/entries?access_token=example'
    window.fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'entry': {
          'term': newTerm,
          'definition': newDef
        }
      })
    }).then(r => r.json())
    .then(data => {
      this.setState({
        active: data
      })
    })
  }

  render () {
    return <Router>
      <div className={styles.App}>
        <NavLink className={styles.topLink} to={`/`}>
          Jabberdexicon
        </NavLink>
        <LetterBar />
        <SearchBar />
        <Route exact path='/' component={Home} />
        <Route path='/entry/:slug' component={ShowWord} />
        <Route path='/browse/:letter' component={BrowseLetter} />
        <Route path='/search/:word' component={ShowSearch} />
        <AddWord addWord={this.addWord} />
      </div>
    </Router>
  }
}

export default App
