import React from 'react';
import Button from '../Button';

describe('Button', () => {
  const props = {
    type: 'primary',
    onClick: jest.fn(),
  };

  it('Should match snapshot', () => {
    const component = global.shallowSmart(<Button {...props} >Mock Value</Button>);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have Button', () => {
    const component = global.mountSmart(<Button {...props} >Mock Value</Button>);
    expect(component.find('button')).toHaveLength(1);
  });
  it('Should be a click', () => {
    const component = global.mount(<Button {...props} >Mock Value</Button>);
    component.find('button').simulate('click');
    expect(component.props().onClick).toHaveBeenCalled();
  });
});
