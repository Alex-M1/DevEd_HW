import React from 'react';
import Form from '../Form';
import { store } from './mockStore';

describe('Form', () => {
  it('Should match snapshot', () => {
    const component = global.shallowSmart(<Form />, store);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have StForm', () => {
    const component = global.mountSmart(<Form />, store);
    expect(component.find('styled__StForm')).toHaveLength(1);
  });
  it('Should have FormItem', () => {
    const component = global.mountSmart(<Form />, store);
    expect(component.find('FormItem')).toHaveLength(5);
  });
});
