import React from 'react';
import ButtonGroup from '../ButtonGroup';

describe('ButtonGroup', () => {
  const props = {
    postPerson: jest.fn(),
    closeModal: jest.fn(),
  };
  it('Should match snapshot', () => {
    const component = global.shallowSmart(<ButtonGroup {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have StBtnGroup', () => {
    const component = global.mountSmart(<ButtonGroup {...props} />);
    expect(component.find('styled__StBtnGroup')).toHaveLength(1);
  });
  it('Should have Button', () => {
    const component = global.mountSmart(<ButtonGroup {...props} />);
    expect(component.find('Button')).toHaveLength(2);
  });
  it('Should have postTheme', () => {
    const component = global.mountSmart(<ButtonGroup {...props} />);
    const sendButton = component.find('Button').at(0);
    sendButton.simulate('click');
    expect(component.props().postPerson).toHaveBeenCalled();
  });
  it('Should have close', () => {
    const component = global.mountSmart(<ButtonGroup {...props} />);
    const closeButton = component.find('Button').at(1);
    closeButton.simulate('click');
    expect(component.props().closeModal).toHaveBeenCalled();
  });
});
