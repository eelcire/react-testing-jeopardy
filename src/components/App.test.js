import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { App } from './App';
import { categories } from '../data/fixtures';

const props = { categories };

configure({ adapter: new Adapter() });

describe('App', () => {
  const app = shallow(<App {...props} />);

  it('renders the title', () => {
    expect(app.find('h2').text()).toEqual('Jeopardy!');
  });

  it('creates the correct number of links', () => {
    expect(app.find('Link').length).toEqual(categories.length);
  });

  it('title the links correctly', () => {
    app.find('Link h4').forEach((linkTitle, i) => {
      expect(linkTitle.text()).toEqual(categories[i].title);
    });
  });
});
