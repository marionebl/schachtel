/* global describe it */
import React from 'react'
import {shallow, mount} from 'enzyme'
import {expect} from 'chai'
import {jsdom} from 'jsdom'

import Grid from '..'

global.document = jsdom('<div></div>')
global.window = document.defaultView

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
    expect(wrapper.contains(<div className='unique'/>)).to.equal(true)
  })
  it('allows us to extend the className', () => {
    const wrapper = shallow(<Grid className='custom'/>)
    expect(wrapper.props().className).to.equal('custom schachtelGrid')
    wrapper.setProps({ className: 'changed' })
    expect(wrapper.props().className).to.equal('changed schachtelGrid')
  })
  it('allows us to change the gutter', () => {
    const wrapper = mount(<Grid gutter={20}/>)
    expect(wrapper.props().gutter).to.equal(20)
    wrapper.setProps({ gutter: 10 })
    expect(wrapper.props().gutter).to.equal(10)
  })
  it('allows us to change the handheldCols', () => {
    const wrapper = mount(<Grid handheldCols={3}/>)
    expect(wrapper.props().handheldCols).to.equal(3)
    wrapper.setProps({ handheldCols: 5 })
    expect(wrapper.props().handheldCols).to.equal(5)
  })
  it('allows us to change the tabletCols', () => {
    const wrapper = mount(<Grid tabletCols={6}/>)
    expect(wrapper.props().tabletCols).to.equal(6)
    wrapper.setProps({ tabletCols: 8 })
    expect(wrapper.props().tabletCols).to.equal(8)
  })
  it('allows us to change the desktopCols', () => {
    const wrapper = mount(<Grid desktopCols={10}/>)
    expect(wrapper.props().desktopCols).to.equal(10)
    wrapper.setProps({ desktopCols: 12 })
    expect(wrapper.props().desktopCols).to.equal(12)
  })
  it('allows us to change the fullCols', () => {
    const wrapper = mount(<Grid fullCols={14}/>)
    expect(wrapper.props().fullCols).to.equal(14)
    wrapper.setProps({ fullCols: 16 })
    expect(wrapper.props().fullCols).to.equal(16)
  })
  it('allows us to change the baseSize', () => {
    const wrapper = mount(<Grid baseSize={60}/>)
    expect(wrapper.props().baseSize).to.equal(60)
    wrapper.setProps({ baseSize: 80 })
    expect(wrapper.props().baseSize).to.equal(80)
  })
})
