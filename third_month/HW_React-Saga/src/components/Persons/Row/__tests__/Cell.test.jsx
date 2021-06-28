import { jest } from '@jest/globals';
import React from 'react';
import Cell from '../Cell';

describe('Cell', () => {
  const props = {
    id: 'sadas',
    type: 'sadas',
    children: 'sadas',
    onDoubleClick: jest.fn(),
    updatePerson: jest.fn(),
  };
  it('Should match snapshot', () => {
    const component = global.shallowSmart(<Cell {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have StCell', () => {
    const component = global.mountSmart(<Cell {...props} />);
    expect(component.find('styled__StCell')).toHaveLength(1);
  });
  it('Should have call blur & contenteditable false', () => {
    const component = global.mountSmart(<Cell {...props} />);
    const item = component.find('styled__StCell');
    item.simulate('blur');
    expect(item.getDOMNode().contentEditable).toBe(false);
  });
  it('Should have call blur & call updatePerson', () => {
    const newValue = 'Mock';
    const component = global.mountSmart(<Cell {...props} />);
    const item = component.find('styled__StCell');
    item.simulate('blur', { target: { textContent: newValue } });
    expect(component.props().updatePerson).toHaveBeenCalledWith({
      id: props.id,
      type: props.type,
      value: newValue,
    });
  });
});
