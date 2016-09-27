/* global describe it expect */
import React from 'react'
import {shallow, mount} from 'enzyme'
// import {expect} from 'chai'

import Row from '..'

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
})
