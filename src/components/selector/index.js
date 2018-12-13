
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

// Components
import styles from './selector.module.scss'

class Selector extends Component {
  render () {
    const { options, selected } = this.props
    return (
      <div className={styles.selector}>
        {
          options.map(({ label, value }) => (
            <Link to={value} key={`selector-option-${label}`}
              className={
                classNames(styles.item, {
                  [styles.selected]: selected === value
                })
              }>
              {label}
            </Link>

          ))
        }
      </div>
    )
  }
}

Selector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })),
  selected: PropTypes.string.isRequired
}

export default Selector
