import React, { Component } from 'react'
import styles from '../styles/ShowWord.scss'
import { NavLink } from 'react-router-dom'

class ShowWord extends Component {
  state = {
    active: {}
  }

  updateWord (slug) {
    this.setState({active: []})
    const url = `https://jabberdexicon.herokuapp.com/entries/${slug}?access_token=vorpal`
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

  _edit = () => {
    this.props.history.push(`/edit/${this.props.match.params.slug}`)
  }

  _delete = () => {
    const url = `https://jabberdexicon.herokuapp.com/entries/${this.state.active.slug}?access_token=vorpal`
    window.fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    }).then(this.setState({active: {}}))
  }

  render () {
    return <div>
      <div className={styles.editButton}>
        <span onClick={this._edit}>pencil</span>
        {/* <span className='fa fa-p=pencil fa-5x logoLink' aria-hidden='true' onClick={this._edit} /> */}
      </div>
      <div className={styles.ShowWord}>
        <div className={styles.word}>
          {this.state.active.term}:
      </div>
        <div className={styles.definition}>
          <div dangerouslySetInnerHTML={{__html: `${this.state.active.formatted_definition}`}} />
        </div>
      </div>
      <NavLink to='/'>
        <input className={styles.deleteButton} onClick={this._delete} type='submit' value='Delete' />
      </NavLink>
    </div>
  }
}

export default ShowWord
