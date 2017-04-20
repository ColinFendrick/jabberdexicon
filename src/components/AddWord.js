import React, { Component } from 'react'
import styles from '../styles/AddWord.scss'

class AddWord extends Component {
  _submit = e => {
    e.preventDefault()
    this.props.addWord(this.refs.newTerm.value, this.refs.newDef.value)
    this.refs.newTerm.value = 'New Term'
    this.refs.newDef.value = 'New Definition'
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
