import React, { Component } from 'react'
import styles from '../styles/AddWord.scss'

class AddWord extends Component {
  state = {
    active: []
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
    }).then(r => r.json())
    .then(data => {
      if (data.term[0] === 'has already been taken') {
        window.alert(`${newTerm} already exists!`)
      } else {
        window.alert(`${newTerm} was created successfully`)
        this.props.history.push(`/entry/${data.slug}`)
      }
    })
  }

  _submit = e => {
    e.preventDefault()
    this.addWord(this.refs.newTerm.value, this.refs.newDef.value)
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
