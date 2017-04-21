import React, { Component } from 'react'
import styles from '../styles/EditWord.scss'

class EditWord extends Component {
  state = {}

  slug = this.props.match.params.slug

  componentDidMount () {
    const url = `https://jabberdexicon.herokuapp.com/entries/${this.slug}?access_token=vorpal`
    window.fetch(url)
    .then(r => r.json())
    .then(data => {
      this.setState({
        ...data
      })
    })
  }

  _submit = e => {
    e.preventDefault()
    this.updateWord(this.refs.updatedDef.value)
  }

  updateWord = updatedDef => {
    const url = `https://jabberdexicon.herokuapp.com/entries/${this.slug}?access_token=vorpal`
    window.fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'entry': {
          'definition': updatedDef
        }
      })
    })
    this.props.history.push(`/entry/${this.slug}`)
  }

  _focus = e => {
    e.target.setSelectionRange(0, e.target.value.length)
  }

  _change = () => {
    this.setState({
      definition: this.refs.updatedDef.value
    })
  }

  render () {
    return <div className={styles.EditWordAll}>
      <p>Edit this word...</p>
      <form onSubmit={this._submit} className={styles.EditWord}>
        <div className={styles.word}>
          {this.state.term}:
        </div>
        <textarea onFocus={this._focus} onChange={this._change} type='text' ref='updatedDef' value={this.state.definition} className={styles.definition} />
        <input type='submit' value='Update Definition' className={styles.updateButton} />
      </form>
    </div>
  }
}

export default EditWord
