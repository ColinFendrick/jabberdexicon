import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import SearchBar from './Searchbar.js'
import Definition from './Definition.js'
import AddWord from './AddWord.js'

class App extends Component {
  state = {
    active: {}
  }

  addWord = (newTerm, newDef) => {
    const url = 'https://jabberdexicon.herokuapp.com/entries?access_token=TOKasdf9ha8w4t3hk698asdfmFKJASDFI'
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

  // searchWord = searchTerm => {
  //   const url = 'https://jabberdexicon.herokuapp.com/entries?access_token=TOKasdf9ha8w4t3hk698asdfmFKJASDFI'
  //   window.fetch(url)
  //   .then(r => r.json())
  //   .then(data => {
  //     this.setState({
  //       active:
  //     })
  //   })
  // }

  render () {
    return <Router>
      <div>
        <h1>Jabberdexicon</h1>
        <SearchBar searchWord={this.searchWord} />
        <Definition />
        <AddWord addWord={this.addWord} />
      </div>
    </Router>
  }
}

export default App
