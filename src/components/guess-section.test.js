import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', function() {
  it('Renders without crashing', function() {
    shallow(<GuessSection />);
  });
  it('Should render feedback every guess', function() {
    const feedback = 'good job';
    const wrapper = shallow(<GuessSection feedback={feedback} />);
    expect(wrapper.contains(feedback)).toEqual(true);
  })
});