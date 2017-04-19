import React, { Component } from 'react'
import styles from '../styles/ShowWord.scss'
import { NavLink } from 'react-router-dom'

class ShowWord extends Component {
  state = {
    active: {}
  }

  updateWord (slug) {
    this.setState({active: []})
    const url = `https://jabberdexicon.herokuapp.com/entries/${slug}?access_token=example`
    window.fetch(url)
    .then(r => r.json())
    .then(data => {
      this.setState({
        active: data
      })
    })
  }

  componentDidMount () {
    this.updateWord(this.props.match.params.slug)
  }

  _delete = e => {
    const url = `https://jabberdexicon.herokuapp.com/entries/${this.state.active.slug}?access_token=example`
    window.fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    }).then(this.setState({active: {}}))
  }

  render () {
    return <div>
      <div className={styles.ShowWord}>
        <div className={styles.word}>
          {this.state.active.term}:
      </div>
        <div className={styles.definition}>
          <div dangerouslySetInnerHTML={{__html: `${this.state.active.formatted_definition}`}} />
        </div>
      </div>
      <NavLink to='/'>
        <input className={styles.deleteButton} onClick={this._delete} type='submit' value='Delete this entry' />
      </NavLink>
    </div>
  }
}

export default ShowWord
