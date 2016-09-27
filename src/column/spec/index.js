/* global describe it expect */
import React from 'react'
import {shallow, mount} from 'enzyme'
// import {expect} from 'chai'
// import {jsdom} from 'jsdom'

import Grid from '../../grid'
import Column from '..'

// global.document = jsdom('<div></div>')
// global.window = document.defaultView

global.window.matchMedia = () => {
  return {
    addListener (cb) {
      cb({matches: true})
    },
    removeListener () {}
  }
}

describe('<Column />', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(
      <Column>
        <div className='unique'/>
      </Column>
    )
    expect(wrapper.contains(<div className='unique'/>)).toEqual(true)
  })
  it('allows us to add a className', () => {
    const wrapper = shallow(<Column className='custom'/>)
    expect(wrapper.props().className).toEqual('custom')
    wrapper.setProps({ className: 'changed' })
    expect(wrapper.props().className).toEqual('changed')
  })
  it('allows us to change the handheld size', () => {
    const wrapper = mount(<Column handheld={2}/>)
    expect(wrapper.props().handheld).toEqual(2)
    wrapper.setProps({ handheld: 3 })
    expect(wrapper.props().handheld).toEqual(3)
  })
  it('allows us to change the tablet size', () => {
    const wrapper = mount(<Column tablet={4}/>)
    expect(wrapper.props().tablet).toEqual(4)
    wrapper.setProps({ tablet: 2 })
    expect(wrapper.props().tablet).toEqual(2)
  })
  it('allows us to change the desktop size', () => {
    const wrapper = mount(<Column desktop={4}/>)
    expect(wrapper.props().desktop).toEqual(4)
    wrapper.setProps({ desktop: 8 })
    expect(wrapper.props().desktop).toEqual(8)
  })
  it('allows us to change the full size', () => {
    const wrapper = mount(<Column full={12}/>)
    expect(wrapper.props().full).toEqual(12)
    wrapper.setProps({ full: 13 })
    expect(wrapper.props().full).toEqual(13)
  })
  it('inherits context', () => {
    const wrapper = mount(
      <Grid desktopCols={6}>
       <Column/>
      </Grid>
    )
    expect(wrapper.find(Column).node.context.desktopCols).toEqual(6)
    wrapper.setProps({ desktopCols: 4 })
    expect(wrapper.find(Column).node.context.desktopCols).toEqual(4)
  })
})
