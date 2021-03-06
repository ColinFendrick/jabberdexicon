import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styles from '../styles/Footer.scss'

class Footer extends Component {
  _submit = (e) => {
    e.preventDefault()
    this.props.history.push('/addword')
  }

  render () {
    return <footer className={styles.Footer}>
      <i type='submit' defaultValue='+' onClick={this._submit} className='fa fa-plus' aria-hidden='true' />
    </footer>
  }
}

export default withRouter(Footer)
