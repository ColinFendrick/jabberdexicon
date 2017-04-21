import React, { Component } from 'react'
import styles from '../styles/EditWord.scss'

class EditWord extends Component {
  state = {
    active: {}
  }

  slug = this.props.match.params.slug

  componentDidMount () {
    const url = `https://jabberdexicon.herokuapp.com/entries/${this.slug}?access_token=vorpal`
    console.log(url)
    window.fetch(url)
    .then(r => r.json())
    .then(data => {
      this.setState({
        active: data
      }, console.log(this.state.active))
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

  render () {
    const origDef = () => <div dangerouslySetInnerHTML={{__html: `${this.state.active.formatted_definition}`}} />

    return <div className={styles.EditWordAll}>
      <p>Edit this word...</p>
      <form onSubmit={this._submit} className={styles.EditWord}>
        <div className={styles.word}>
          {this.state.active.term}:
      </div>
        <textarea onFocus={this._focus} type='text' ref='updatedDef' defaultValue={origDef} className={styles.definition} />
        <input type='submit' value='Update Definition' className={styles.updateButton} />
      </form>
      {origDef}
      <div dangerouslySetInnerHTML={{__html: `${this.state.active.formatted_definition}`}} />

    </div>
  }
}

export default EditWord
