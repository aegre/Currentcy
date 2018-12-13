// Libraries
import React from 'react'
import PropTypes from 'prop-types'

// Components
import styles from './mainPage.module.scss'

const MainContent = ({ children }) => (
  <div className={styles.main_page}>
    {children}
  </div>
)

MainContent.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainContent
