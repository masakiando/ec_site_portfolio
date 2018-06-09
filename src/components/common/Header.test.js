import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Header from './Header';

function setup() {
  const props = {};
  return mount(<Header {...props} />);
}

describe('test header', () => {
  it('test header', () => {
    const wrapper = setup();
    console.log(wrapper.find('header').childAt(0).prop('className'));
    console.log(wrapper.find('header').childAt(0).childAt(0).prop('className'));
    console.log(wrapper.find('header').childAt(0).childAt(1).prop('className'));

    expect(wrapper.find('header').length).toBe(1);
    expect(wrapper.find('div').length).toBe(3);
    expect(wrapper.find('header').prop('className'))
    .toEqual('main-header block');
    expect(wrapper.find('header').childAt(0).prop('className'))
    .toEqual('main-header__container');
    expect(wrapper.find('header').childAt(0).childAt(0).prop('className'))
    .toEqual('main-header__head');
    expect(wrapper.find('header').childAt(0).childAt(0).prop('className'))
    .toEqual('main-header__head');
  });
});
