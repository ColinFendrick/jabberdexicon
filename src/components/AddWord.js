import React, { Component } from 'react'
import styles from '../styles/AddWord.scss'

class AddWord extends Component {
  state = {
    active: {}
  }

  addWord = (newTerm, newDef) => {
    const url = 'https://jabberdexicon.herokuapp.com/entries?access_token=vorpal'
    window.fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'entry': {
          'term': newTerm,
          'definition': newDef
        }
      })
    })
  }

  _submit = e => {
    e.preventDefault()
    this.addWord(this.refs.newTerm.value, this.refs.newDef.value)
    this.props.history.push('/')
  }

  _focus = (e) => {
    e.target.setSelectionRange(0, e.target.value.length)
  }

  render () {
    return <form onSubmit={this._submit} className={styles.addWord}>
      <h3>Add your own word...</h3>
      <input onFocus={this._focus} type='text' ref='newTerm' defaultValue='New Term' className={styles.newTerm} />
      <textarea onFocus={this._focus} type='text' ref='newDef' defaultValue='New Definition' className={styles.newDefinition} />
      <input type='submit' value='Add a new word' className={styles.submitNewWord} />
    </form>
  }
}

export default AddWord
