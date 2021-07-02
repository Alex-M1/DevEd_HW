import { mount, shallow } from 'enzyme';
import React from 'react';
import Converter from '../Converter';

describe('Form', () => {
  const props = {
    values: ['UAH', 'EUR', 'USD', 'RUB'],
    primary: '',
    secondary: '',
    inputValue: '',
    resultValue: '',
    setPrimary: jest.fn(),
    setSecondary: jest.fn(),
    setInputValue: jest.fn(),
    onButtonClick: jest.fn(),
  };
  afterEach(() => {
    props.setPrimary.mockClear();
    props.setSecondary.mockClear();
    props.setInputValue.mockClear();
    props.onButtonClick.mockClear();
  });
  it('Should match snapshot', () => {
    const component = shallow(<Converter {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have StConverter', () => {
    const component = mount(<Converter {...props} />);
    expect(component.find('styled__StConverter')).toHaveLength(1);
  });
  it('Should have Input', () => {
    const component = mount(<Converter {...props} />);
    expect(component.find('ConvertItem')).toHaveLength(2);
  });
  it('Should have Dropdown', () => {
    const component = mount(<Converter {...props} />);
    expect(component.find('Button')).toHaveLength(1);
  });
  it('Should have call setPrimary', () => {
    const component = mount(<Converter {...props} />);
    component.props().setPrimary();
    expect(component.props().setPrimary).toHaveBeenCalledTimes(1);
  });
  it('Should have call setSecondary', () => {
    const component = mount(<Converter {...props} />);
    component.props().setSecondary();
    expect(component.props().setSecondary).toHaveBeenCalledTimes(1);
  });
  it('Should have call setInputValue', () => {
    const component = mount(<Converter {...props} />);
    component.props().setInputValue();
    expect(component.props().setInputValue).toHaveBeenCalledTimes(1);
  });
  it('Should have call onButtonClick', () => {
    const component = mount(<Converter {...props} />);
    component.props().onButtonClick();
    expect(component.props().onButtonClick).toHaveBeenCalledTimes(1);
  });
});
