import React from 'react';
import FormItem from '../FormItem';

describe('FormItem', () => {
  const props = {
    title: 'title',
    value: 'value',
    placeholder: 'placeholder',
    isRef: true,
    onChange: jest.fn(),
  };
  it('Should match snapshot', () => {
    const component = global.shallowSmart(<FormItem {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have StFormItem', () => {
    const component = global.shallowSmart(<FormItem {...props} />);
    expect(component.find('styled__StFormItem')).toHaveLength(1);
  });
  it('Should have span', () => {
    const component = global.shallowSmart(<FormItem {...props} />);
    expect(component.find('span')).toHaveLength(1);
  });
  it('Should have input', () => {
    const component = global.shallowSmart(<FormItem {...props} />);
    expect(component.find('input')).toHaveLength(1);
  });
  it('Should be a change', () => {
    const newValue = 'MockValueNew';
    const component = global.mount(<FormItem {...props} />);
    component.find('input').simulate('change', { target: { value: newValue } });
    expect(component.props().onChange).toHaveBeenCalledWith(newValue);
  });
});
