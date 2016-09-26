import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

import styles from './style.css'

class Row extends Component {
  constructor (props) { // eslint-disable-line no-useless-constructor
    super(props)
  }

  render () {
    const style = {
      margin: `0 ${this.context.gutter * -1}px`
    }
    const classes = classNames(this.props.className, styles.schachtelRow)
    return (
      <this.props.el style={style} className={classes}>
        {this.props.children}
      </this.props.el>
    )
  }
}

Row.defaultProps = {
  el: 'div'
}

Row.contextTypes = {
  gutter: PropTypes.number
}

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  el: PropTypes.string
}

export default Row
