import { mount, shallow } from 'enzyme';
import React from 'react';
import Button from '../Button';

describe('Form', () => {
  const props = { onClick: jest.fn() };
  it('Should match snapshot', () => {
    const component = shallow(<Button {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have StButton', () => {
    const component = mount(<Button {...props} />);
    expect(component.find('styled__StButton')).toHaveLength(1);
  });
  it('Should have call onClick', () => {
    const component = mount(<Button {...props} />);
    component.find('styled__StButton').simulate('click');
    expect(component.props().onClick).toHaveBeenCalledTimes(1);
  });
});
