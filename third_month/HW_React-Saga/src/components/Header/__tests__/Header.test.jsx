import React from 'react';
import configureStore from 'redux-mock-store';
import Header from '../Header';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useLayoutEffect: jest.requireActual('react').useEffect,
}));
const mockStore = configureStore();
const store = mockStore({
  form: {
    name: '',
    age: '',
    phone: '',
    email: '',
    company: '',
    visible: true,
  },
  persons: [{
    name: '',
    age: '',
    phone: '',
    email: '',
    company: '',
  }],
});
const isVisible = false;
const theme = 'dark';
jest.mock('../../../helpers/withTheme', () => ({
  useTheme: jest.fn().mockReturnValue({
    theme,
    changeTheme: jest.fn().mockReturnValue(theme),
  }),
}));
describe('Header without modal', () => {
  const props = {
    isVisible,
    setVisible: jest.fn(),
  };
  it('Should match snapshot', () => {
    const component = global.shallowSmart(<Header {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have header', () => {
    const component = global.mountSmart(<Header {...props} />);
    expect(component.find('select')).toHaveLength(1);
  });
  it('Should have Button', () => {
    const component = global.mountSmart(<Header {...props} />);
    expect(component.find('Button')).toHaveLength(1);
  });
  it('Should have div', () => {
    const component = global.mountSmart(<Header {...props} />);
    expect(component.find('div')).toHaveLength(2);
  });
  it('Should have ThemeSelect', () => {
    const component = global.mountSmart(<Header {...props} />);
    expect(component.find('ThemeSelect')).toHaveLength(1);
  });
  it('Should have click & callde setVisible', () => {
    const component = global.mountSmart(<Header {...props} />);
    component.find('button').simulate('click');
    expect(component.props().setVisible).toHaveBeenCalled();
  });
});

describe('Header with modal', () => {
  const props = {
    isVisible: !isVisible,
    setVisible: jest.fn(),
  };
  it('Should match snapshot', () => {
    const component = global.shallowSmart(<Header {...props} />, store);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have header', () => {
    const component = global.mountSmart(<Header {...props} />, store);
    expect(component.find('select')).toHaveLength(1);
  });
  it('Should have Button', () => {
    const component = global.mountSmart(<Header {...props} />, store);
    expect(component.find('Button')).toHaveLength(3);
  });
  it('Should have div', () => {
    const component = global.mountSmart(<Header {...props} />, store);
    expect(component.find('div')).toHaveLength(12);
  });
  it('Should have ThemeSelect', () => {
    const component = global.mountSmart(<Header {...props} />, store);
    expect(component.find('ThemeSelect')).toHaveLength(1);
  });
});
