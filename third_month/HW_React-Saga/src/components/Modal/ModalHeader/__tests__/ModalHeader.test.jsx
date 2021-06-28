import React from 'react';
import ModalHeader from '../ModalHeader';

describe('ModalHeader', () => {
  const props = {
    closeModal: jest.fn(),
  };
  it('Should match snapshot', () => {
    const component = global.shallowSmart(<ModalHeader {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have StModalHeader', () => {
    const component = global.mountSmart(<ModalHeader {...props} />);
    expect(component.find('styled__StModalHeader')).toHaveLength(1);
  });
  it('Should have h1', () => {
    const component = global.mountSmart(<ModalHeader {...props} />);
    expect(component.find('h1')).toHaveLength(1);
  });
  it('Should have span', () => {
    const component = global.mountSmart(<ModalHeader {...props} />);
    expect(component.find('span')).toHaveLength(1);
  });
  it('Should have click close modal', () => {
    const component = global.mountSmart(<ModalHeader {...props} />);
    component.find('span').simulate('click');
    expect(component.props().closeModal).toHaveBeenCalled();
  });
});
