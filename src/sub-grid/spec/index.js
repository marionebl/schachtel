/* eslint-env jest */
import React from 'react'
import {shallow, mount} from 'enzyme'

import Grid from '../../grid'
import SubGrid from '..'

global.window.matchMedia = () => {
  return {
    addListener (cb) {
      cb({matches: true})
    },
    removeListener () {}
  }
}

describe('<SubGrid />', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(
      <SubGrid>
        <div className='unique'/>
      </SubGrid>
    )
    expect(wrapper.contains(<div className='unique'/>)).toEqual(true)
  })
  it('allows us to extend the className', () => {
    const wrapper = mount(<SubGrid className='custom'/>)
    expect(wrapper.props().className).toEqual('custom')
    wrapper.setProps({ className: 'changed' })
    expect(wrapper.props().className).toEqual('changed')
  })
  it('allows us to change the rendered element', () => {
    const wrapper = mount(<SubGrid el='section'/>)
    expect(wrapper.props().el).toEqual('section')
  })
  it('inherits context', () => {
    const wrapper = mount(
      <Grid gutter={6}>
       <SubGrid/>
      </Grid>
    )
    expect(wrapper.find(SubGrid).node.context.gutter).toEqual(6)
    wrapper.setProps({ gutter: 4 })
    expect(wrapper.find(SubGrid).node.context.gutter).toEqual(4)
  })
})
