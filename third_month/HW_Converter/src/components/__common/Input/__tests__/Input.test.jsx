import { mount, shallow } from 'enzyme';
import React from 'react';
import Input from '../Input';

describe('Form', () => {
  const props = {
    value: '',
    onChange: jest.fn(),
    readOnly: false,
  };
  afterEach(() => {
    props.onChange.mockClear();
  });
  it('Should match snapshot', () => {
    const component = shallow(<Input {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have StInput', () => {
    const component = mount(<Input {...props} />);
    expect(component.find('styled__StInput')).toHaveLength(1);
  });
  it('Should have call onChange', () => {
    const newValue = '123';
    const component = mount(<Input {...props} />);
    component.find('styled__StInput').simulate('change', { target: { value: newValue } });
    expect(component.props().onChange).toHaveBeenCalledTimes(1);
  });
  it('Should have call onChange && value', () => {
    const newValue = '123';
    const component = mount(<Input {...props} />);
    component.find('styled__StInput').simulate('change', { target: { value: newValue } });
    expect(component.props().onChange).toHaveBeenCalledWith(newValue);
  });
  it('Should have call onChange && invalid value', () => {
    const newValue = 'sd';
    const component = mount(<Input {...props} />);
    component.find('styled__StInput').simulate('change', { target: { value: newValue } });
    expect(component.props().onChange).toHaveBeenCalledTimes(0);
  });
});
