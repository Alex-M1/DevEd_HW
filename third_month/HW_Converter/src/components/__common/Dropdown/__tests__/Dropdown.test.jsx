import { mount, shallow } from 'enzyme';
import React from 'react';
import Dropdown from '../Dropdown';

describe('Form', () => {
  const props = {
    values: ['UAH', 'EUR', 'USD', 'RUB'],
    onChange: jest.fn(),
    dropValue: 'UAH',
  };
  afterEach(() => {
    props.onChange.mockClear();
  });
  it('Should match snapshot', () => {
    const component = shallow(<Dropdown {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have StSelect', () => {
    const component = mount(<Dropdown {...props} />);
    expect(component.find('styled__StSelect')).toHaveLength(1);
  });
  it('Should have StOption', () => {
    const component = mount(<Dropdown {...props} />);
    expect(component.find('styled__StOption')).toHaveLength(4);
  });
  it('Should have call onChange', () => {
    const component = mount(<Dropdown {...props} />);
    component.find('styled__StSelect').simulate('change');
    expect(component.props().onChange).toHaveBeenCalledTimes(1);
  });
  it('Should have call onChange with new value', () => {
    const newValue = 'EUR';
    const component = mount(<Dropdown {...props} />);
    component.find('styled__StSelect').simulate('change', { target: { value: newValue } });
    expect(component.props().onChange).toHaveBeenCalledWith(newValue);
  });
});
