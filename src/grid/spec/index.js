/* global describe it expect */
import React from 'react'
import {shallow, mount} from 'enzyme'
// import {expect} from 'chai'
// import {jsdom} from 'jsdom'

import Grid from '..'

// global.document = jsdom('<div></div>')
// global.window = document.defaultView

global.window.matchMedia = () => {
  return {
    addListener () {},
    removeListener () {}
  }
}

describe('<Grid />', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(
      <Grid>
        <div className='unique'/>
      </Grid>
    )
    expect(wrapper.contains(<div className='unique'/>)).toEqual(true)
  })
  it('allows us to extend the className', () => {
    const wrapper = shallow(<Grid className='custom'/>)
    expect(wrapper.props().className).toEqual('custom schachtelGrid')
    wrapper.setProps({ className: 'changed' })
    expect(wrapper.props().className).toEqual('changed schachtelGrid')
  })
  it('allows us to change the gutter', () => {
    const wrapper = mount(<Grid gutter={20}/>)
    expect(wrapper.props().gutter).toEqual(20)
    wrapper.setProps({ gutter: 10 })
    expect(wrapper.props().gutter).toEqual(10)
  })
  it('allows us to change the handheldCols', () => {
    const wrapper = mount(<Grid handheldCols={3}/>)
    expect(wrapper.props().handheldCols).toEqual(3)
    wrapper.setProps({ handheldCols: 5 })
    expect(wrapper.props().handheldCols).toEqual(5)
  })
  it('allows us to change the tabletCols', () => {
    const wrapper = mount(<Grid tabletCols={6}/>)
    expect(wrapper.props().tabletCols).toEqual(6)
    wrapper.setProps({ tabletCols: 8 })
    expect(wrapper.props().tabletCols).toEqual(8)
  })
  it('allows us to change the desktopCols', () => {
    const wrapper = mount(<Grid desktopCols={10}/>)
    expect(wrapper.props().desktopCols).toEqual(10)
    wrapper.setProps({ desktopCols: 12 })
    expect(wrapper.props().desktopCols).toEqual(12)
  })
  it('allows us to change the fullCols', () => {
    const wrapper = mount(<Grid fullCols={14}/>)
    expect(wrapper.props().fullCols).toEqual(14)
    wrapper.setProps({ fullCols: 16 })
    expect(wrapper.props().fullCols).toEqual(16)
  })
  it('allows us to change the baseSize', () => {
    const wrapper = mount(<Grid baseSize={60}/>)
    expect(wrapper.props().baseSize).toEqual(60)
    wrapper.setProps({ baseSize: 80 })
    expect(wrapper.props().baseSize).toEqual(80)
  })
})
