/* global describe it */
import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'

import Row from '..'

describe('<Row />', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(
      <Row>
        <div className='unique'/>
      </Row>
    )
    expect(wrapper.contains(<div className='unique'/>)).to.equal(true)
  })
  it('allows us to extend the className', () => {
    const wrapper = shallow(<Row className='custom'/>)
    expect(wrapper.props().className).to.equal('custom schachtelRow')
    wrapper.setProps({ className: 'changed' })
    expect(wrapper.props().className).to.equal('changed schachtelRow')
  })
})
