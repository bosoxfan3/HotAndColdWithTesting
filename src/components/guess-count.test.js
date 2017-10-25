import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', function() {
  it('Renders without crashing', function() {
    shallow(<GuessCount count=''/>);
  });
  it('Should display the count', function() {
    const count = 8;
    const wrapper = shallow(<GuessCount count={count} />);
    expect(wrapper.text()).toEqual(`Guess #${count}!`);
  })
});