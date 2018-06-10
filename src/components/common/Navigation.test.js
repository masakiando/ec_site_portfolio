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

  it('Navigation プロパティ設定のテスト'.white, () => {
    const wrapper = setup();
    expect(wrapper.find('nav').prop('className'))
    .toEqual('global-navbar');
    expect(wrapper.find('nav').prop('role'))
    .toEqual('navigation');
    expect(wrapper.find('ul').prop('className'))
    .toEqual('global-navbar__list');
    expect(wrapper.find('li').prop('className'))
    .toEqual('global-navbar__item');
    expect(wrapper.find('span').prop('className'))
    .toEqual('global-navbar__icon');
  });
});
// navbar__links
