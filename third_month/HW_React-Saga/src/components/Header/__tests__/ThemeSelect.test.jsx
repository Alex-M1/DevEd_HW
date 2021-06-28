import React from 'react';
import ThemeSelect from '../ThemeSelect';

const theme = 'dark';
jest.mock('../../../helpers/withTheme', () => ({
  useTheme: jest.fn().mockReturnValue({
    theme,
    changeTheme: jest.fn().mockReturnValue(theme),
  }),
}));
describe('ThemeSelect', () => {
  it('Should match snapshot', () => {
    const component = global.shallowSmart(<ThemeSelect />);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have select', () => {
    const component = global.mountSmart(<ThemeSelect />);
    expect(component.find('select')).toHaveLength(1);
  });
  it('Should have option', () => {
    const component = global.mountSmart(<ThemeSelect />);
    expect(component.find('option')).toHaveLength(2);
  });
  it('Should have theme', () => {
    const component = global.mountSmart(<ThemeSelect />);
    component.find('select').simulate('change', { target: { value: theme } });
    expect(component.find('select').getDOMNode().value).toBe(theme);
  });
});
