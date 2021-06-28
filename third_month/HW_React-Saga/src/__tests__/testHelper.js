import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';

React.useLayoutEffect = React.useEffect;
Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;

global.shallowSmart = (component, store) => {
  const core = store
    ? <Provider store={store}>{component}</Provider>
    : component;
  return shallow(core);
};
global.mountSmart = (component, store) => {
  const core = store
    ? <Provider store={store}>{component}</Provider>
    : component;
  return mount(core);
};
