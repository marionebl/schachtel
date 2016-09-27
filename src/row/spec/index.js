/* eslint-env jest */
import React from 'react'
import {shallow, mount} from 'enzyme'

import Grid from '../../grid'
import Row from '..'

global.window.matchMedia = () => {
  return {
    addListener (cb) {
      cb({matches: true})
    },
    removeListener () {}
  }
}

describe('<Row />', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(
      <Row>
        <div className='unique'/>
      </Row>
    )
    expect(wrapper.contains(<div className='unique'/>)).toEqual(true)
  })
  it('allows us to extend the className', () => {
    const wrapper = mount(<Row className='custom'/>)
    expect(wrapper.props().className).toEqual('custom')
    wrapper.setProps({ className: 'changed' })
    expect(wrapper.props().className).toEqual('changed')
  })
  it('allows us to change the rendered element', () => {
    const wrapper = mount(<Row el='section'/>)
    expect(wrapper.props().el).toEqual('section')
  })
  it('inherits context', () => {
    const wrapper = mount(
      <Grid gutter={6}>
       <Row/>
      </Grid>
    )
    expect(wrapper.find(Row).node.context.gutter).toEqual(6)
    wrapper.setProps({ gutter: 4 })
    expect(wrapper.find(Row).node.context.gutter).toEqual(4)
  })
})
