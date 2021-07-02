import { mount, shallow } from 'enzyme';
import React from 'react';
import ConvertItem from '../ConvertItem';

describe('Form', () => {
  const props = {
    values: ['UAH', 'EUR', 'USD', 'RUB'],
    readOnly: false,
    onChange: jest.fn(),
    dropValue: 'UAH',
    inputValue: '',
    setInputValue: jest.fn(),
  };
  afterEach(() => {
    props.onChange.mockClear();
  });
  it('Should match snapshot', () => {
    const component = shallow(<ConvertItem {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have StConvertItem', () => {
    const component = mount(<ConvertItem {...props} />);
    expect(component.find('styled__StConvertItem')).toHaveLength(1);
  });
  it('Should have Input', () => {
    const component = mount(<ConvertItem {...props} />);
    expect(component.find('Input')).toHaveLength(1);
  });
  it('Should have Dropdown', () => {
    const component = mount(<ConvertItem {...props} />);
    expect(component.find('Dropdown')).toHaveLength(1);
  });
  it('Should have call onChange', () => {
    const component = mount(<ConvertItem {...props} />);
    component.props().onChange();
    expect(component.props().onChange).toHaveBeenCalledTimes(1);
  });
  it('Should have call setInputValue', () => {
    const component = mount(<ConvertItem {...props} />);
    component.props().setInputValue();
    expect(component.props().setInputValue).toHaveBeenCalledTimes(1);
  });
});
