import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

if (typeof window !== 'object') {
  global.window = global;
  global.window.navigator = {};
}

Enzyme.configure({adapter: new Adapter()});
