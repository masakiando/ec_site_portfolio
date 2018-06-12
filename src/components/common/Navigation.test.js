import colors from 'colors';
import expect from 'expect';
import chai from 'chai';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Navigation from './Navigation';
import NavigationItems from './NavigationItems';

function setup() {
  const props = {};
  return mount(
    <Navigation {...props} />
  );
}
describe('Navigation Component Test'.white, () => {
  it('Navigation 要素構成のテスト'.white, () => {
    const wrapper = setup();
    console.log('     - 要素数 test');
    expect(wrapper.find('nav').length).toBe(1);
    expect(wrapper.find('ul').length).toBe(2);
    expect(wrapper.find('li').length).toBe(11);
    expect(wrapper.find('a').length).toBe(6);
    expect(wrapper.find('span').length).toBe(3);
  });

  it('Navigation プロパティ設定のテスト'.white, () => {
    const wrapper = setup();

    expect(wrapper.find('nav').prop('className'))
      .toEqual('global-navbar');
    expect(wrapper.find('nav').prop('role'))
      .toEqual('navigation');
    chai.expect(wrapper.find(NavigationItems))
      .to.have.length(1);
    chai.expect(wrapper.find('.global-navbar__items'))
      .to.have.length(2);

  });
});
