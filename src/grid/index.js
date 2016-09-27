import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

import styles from './style.css'

class Grid extends Component {
  constructor (props) {
    super(props)
    this.state = {
      columns: this.props.tabletCols
    }
    this.handleHandheld = this.handleHandheld.bind(this)
    this.handleTablet = this.handleTablet.bind(this)
    this.handleDesktop = this.handleDesktop.bind(this)
    this.handleFull = this.handleFull.bind(this)
  }

  getChildContext () {
    return {
      columns: this.state.columns,
      gutter: this.context.gutter || this.props.gutter,
      handheldCols: this.context.handheldCols || this.props.handheldCols,
      tabletCols: this.context.tabletCols || this.props.tabletCols,
      desktopCols: this.context.desktopCols || this.props.desktopCols,
      baseSize: this.context.baseSize || this.props.baseSize
    }
  }

  componentWillMount () {
    this.handheld = window.matchMedia(`(max-width: ${this.props.baseSize * (this.props.handheldCols + 1)}px)`)
    this.tablet = window.matchMedia(`(min-width: ${this.props.baseSize * (this.props.handheldCols + 1) + 1}px) and (max-width: ${this.props.baseSize * (this.props.tabletCols + 1)}px)`)
    this.desktop = window.matchMedia(`(min-width: ${this.props.baseSize * (this.props.tabletCols + 1) + 1}px) and (max-width: ${this.props.baseSize * (this.props.desktopCols + 1)}px)`)
    this.full = window.matchMedia(`(min-width: ${this.props.baseSize * (this.props.desktopCols + 1) + 1}px)`)

    this.handheld.addListener(this.handleHandheld)
    this.tablet.addListener(this.handleTablet)
    this.desktop.addListener(this.handleDesktop)
    this.full.addListener(this.handleFull)

    this.handleHandheld(this.handheld)
    this.handleTablet(this.tablet)
    this.handleDesktop(this.desktop)
    this.handleFull(this.full)
  }

  componentWillUnmount () {
    this.handheld.removeListener(this.handleHandheld)
    this.tablet.removeListener(this.handleTablet)
    this.desktop.removeListener(this.handleDesktop)
    this.full.removeListener(this.handleFull)
  }

  handleHandheld (mql) {
    if (mql.matches) {
      this.setState({
        columns: this.props.handheldCols
      })
    }
  }

  handleTablet (mql) {
    if (mql.matches) {
      this.setState({
        columns: this.props.tabletCols
      })
    }
  }

  handleDesktop (mql) {
    if (mql.matches) {
      this.setState({
        columns: this.props.desktopCols
      })
    }
  }

  handleFull (mql) {
    if (mql.matches) {
      this.setState({
        columns: this.props.fullCols
      })
    }
  }

  render () {
    const classes = classNames(this.props.className, styles.schachtelGrid)
    return (
      <this.props.el className={classes}>
        {this.props.children}
      </this.props.el>
    )
  }
}

Grid.defaultProps = {
  el: 'div',
  columns: 12,
  handheldCols: 4,
  tabletCols: 8,
  desktopCols: 12,
  fullCols: 12,
  gutter: 10,
  baseSize: 80
}

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  el: PropTypes.string,
  gutter: PropTypes.number,
  handheldCols: PropTypes.number,
  tabletCols: PropTypes.number,
  desktopCols: PropTypes.number,
  fullCols: PropTypes.number,
  baseSize: PropTypes.number
}

Grid.childContextTypes = {
  columns: PropTypes.number,
  gutter: PropTypes.number,
  handheldCols: PropTypes.number,
  tabletCols: PropTypes.number,
  desktopCols: PropTypes.number,
  fullCols: PropTypes.number,
  baseSize: PropTypes.number
}

Grid.contextTypes = {
  columns: PropTypes.number,
  gutter: PropTypes.number
}

export default Grid
