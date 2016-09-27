import React, {Component, PropTypes} from 'react'

class Column extends Component {
  constructor (props) {
    super(props)
    this.handleHandheld = this.handleHandheld.bind(this)
    this.handleTablet = this.handleTablet.bind(this)
    this.handleDesktop = this.handleDesktop.bind(this)
    this.handleFull = this.handleFull.bind(this)
    this.state = {
      size: 0
    }
  }

  getChildContext () {
    return {
      columns: this.state.size
    }
  }

  componentWillMount () {
    this.handheld = window.matchMedia(`(max-width: ${this.context.baseSize * (this.context.handheldCols + 1)}px)`)
    this.tablet = window.matchMedia(`(min-width: ${this.context.baseSize * (this.context.handheldCols + 1) + 1}px) and (max-width: ${this.context.baseSize * (this.context.tabletCols + 1)}px)`)
    this.desktop = window.matchMedia(`(min-width: ${this.context.baseSize * (this.context.tabletCols + 1) + 1}px) and (max-width: ${this.context.baseSize * (this.context.desktopCols + 1)}px)`)
    this.full = window.matchMedia(`(min-width: ${this.context.baseSize * (this.context.desktopCols + 1) + 1}px)`)

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
      const size = Math.min(this.context.columns, this.props.handheld)
      this.setState({
        size
      })
    }
  }
  handleTablet (mql) {
    if (mql.matches) {
      const size = Math.min(this.context.columns, (this.props.tablet || this.props.handheld))
      this.setState({
        size
      })
    }
  }
  handleDesktop (mql) {
    if (mql.matches) {
      const size = Math.min(this.context.columns, (this.props.desktop || this.props.tablet || this.props.handheld))
      this.setState({
        size
      })
    }
  }

  handleFull (mql) {
    if (mql.matches) {
      const size = Math.min(this.context.columns, (this.props.full || this.props.desktop || this.props.tablet || this.props.handheld))
      this.setState({
        size
      })
    }
  }

  render () {
    const style = {
      width: `${100 / this.context.columns * this.state.size}%`,
      padding: `0 ${this.context.gutter}px`,
      boxSizing: 'border-box'
    }
    return (
      <this.props.el style={style} className={this.props.className}>
        {this.props.children}
      </this.props.el>
    )
  }
}

Column.contextTypes = {
  columns: PropTypes.number,
  gutter: PropTypes.number,
  handheldCols: PropTypes.number,
  tabletCols: PropTypes.number,
  desktopCols: PropTypes.number,
  fullCols: PropTypes.number,
  baseSize: PropTypes.number
}

Column.childContextTypes = {
  columns: PropTypes.number
}

Column.defaultProps = {
  el: 'div',
  handheld: 1
}

Column.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  el: PropTypes.string,
  handheld: PropTypes.number,
  tablet: PropTypes.number,
  desktop: PropTypes.number,
  full: PropTypes.number
}

export default Column

