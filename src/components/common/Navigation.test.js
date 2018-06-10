import colors from 'colors';
import expect from 'expect';
import chai from 'chai';
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
    console.log('     - 要素数 test');
    expect(wrapper.find('nav').length).toBe(1);
    expect(wrapper.find('ul').length).toBe(2);
    expect(wrapper.find('li').length).toBe(7);
    expect(wrapper.find('a').length).toBe(7);
    expect(wrapper.find('span').length).toBe(4);
  });

  it('Navigation プロパティ設定のテスト'.white, () => {
    const wrapper = setup();
    console.log('     - global-navbar className test');
    expect(wrapper.find('nav').prop('className'))
    .toEqual('global-navbar');
    console.log('     - role className test');
    expect(wrapper.find('nav').prop('role'))
    .toEqual('navigation');
    console.log('     - ul[0] className test');
    expect(wrapper.find('nav').childAt(0).prop('className'))
    .toEqual('global-navbar__items');
    console.log('     - ul[1] className test');
    expect(wrapper.find('nav').childAt(1).prop('className'))
    .toEqual('global-navbar__items');

  });
});
