import colors from 'colors';
import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Navigation from './Navigation';

function setup() {
  const props = {};
  return mount(<Navigation {...props} />);
}

describe('Navigation Component Test'.white, () => {
  it('Navigation 構成のテスト'.white, () => {
    const wrapper = setup();
    expect(wrapper.find('nav').length).toBe(1);
    expect(wrapper.find('ul').length).toBe(2);
    expect(wrapper.find('li').length).toBe(7);
    expect(wrapper.find('a').length).toBe(7);
    expect(wrapper.find('span').length).toBe(4);
  });
});
