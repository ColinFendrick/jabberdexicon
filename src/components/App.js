import React, { Component } from 'react'
import { BrowserRouter as Router,
  NavLink,
  Route,
  Switch } from 'react-router-dom'
import SearchBar from './Searchbar.js'
import AddWord from './AddWord.js'
import styles from '../styles/App.scss'
import LetterBar from './LetterBar.js'
import Home from './Home.js'
import BrowseLetter from './BrowseLetter.js'
import ShowWord from './ShowWord.js'
import ShowSearch from './ShowSearch.js'
import Footer from './Footer.js'

class App extends Component {
  _clickAddWord = (e) => {
    e.preventDefault()
  }
  render () {
    return <Router>
      <div className={styles.App}>
        <NavLink className={styles.topLink} to={`/`}>
          Jabberdexicon
        </NavLink>
        <LetterBar />
        <SearchBar />
        <hr />
        <Route exact path='/' component={Home} />
        <Route path='/entry/:slug' component={ShowWord} />
        <Route path='/browse/:letter' component={BrowseLetter} />
        <Route path='/search/:word' component={ShowSearch} />
        <Route path='/addword' component={AddWord} />
        <Footer />
      </div>
    </Router>
  }
}

export default App
