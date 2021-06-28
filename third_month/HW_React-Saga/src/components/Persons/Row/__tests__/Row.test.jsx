import { jest } from '@jest/globals';
import React from 'react';
import Row from '../Row';

describe('Row', () => {
  const props = {
    isHead: false,
    _id: 'mockValue',
    name: 'mockValue',
    age: 'mockValue',
    phone: 'mockValue',
    email: 'mockValue',
    company: 'mockValue',
    updatePerson: jest.fn(),
    deletePerson: jest.fn(),
  };
  it('Should match snapshot', () => {
    const component = global.shallowSmart(<Row {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have StRow', () => {
    const component = global.mountSmart(<Row {...props} />);
    expect(component.find('styled__StRow')).toHaveLength(1);
  });
  it('Should have Cell', () => {
    const component = global.mountSmart(<Row {...props} />);
    expect(component.find('Cell')).toHaveLength(5);
  });
  it('Should have StDelete', () => {
    const component = global.mountSmart(<Row {...props} />);
    expect(component.find('styled__StDelete')).toHaveLength(1);
  });
  it('Should have StDelete click', () => {
    const component = global.mountSmart(<Row {...props} />);
    const item = component.find('styled__StDelete');
    item.simulate('click');
    expect(component.props().deletePerson).toHaveBeenCalledWith(props._id);
  });
  // it('Should have call blur & call updatePerson', () => {
  //   const newValue = 'Mock';
  //   const component = global.mountSmart(<Cell {...props} />);
  //   const item = component.find('styled__StCell');
  //   item.simulate('blur', { target: { textContent: newValue } });
  //   expect(component.props().updatePerson).toHaveBeenCalledWith({
  //     id: props.id,
  //     type: props.type,
  //     value: newValue,
  //   });
  // });
});
