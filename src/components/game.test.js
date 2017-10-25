import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', function() {
  it('Renders without crashing', function() {
    shallow(<Game />);
  });
  it('Should reset the state when a new game is called for', function() {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      guesses: [1, 2, 3],
      feedback: 'This is just a test',
      correctAnswer: 42
    });
    wrapper.instance().newGame();
    expect(wrapper.state('guesses')).toEqual([]);
    expect(wrapper.state('feedback')).toEqual('Make your guess!');
    expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(1);
    expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
  });
  it('Should produce the correct feedback depending on the guess', function() {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      guesses: [],
      feedback: 'Just test feedback',
      correctAnswer: 51
    });
    wrapper.instance().guess(1);
    expect(wrapper.state('guesses')).toEqual([1]);
    expect(wrapper.state('feedback')).toEqual(`You're Ice Cold...`);

    wrapper.instance().guess(16);
    expect(wrapper.state('guesses')).toEqual([1, 16]);
    expect(wrapper.state('feedback')).toEqual(`You're Cold...`);

    wrapper.instance().guess(31);
    expect(wrapper.state('guesses')).toEqual([1, 16, 31]);
    expect(wrapper.state('feedback')).toEqual(`You're Warm`);

    wrapper.instance().guess(46);
    expect(wrapper.state('guesses')).toEqual([1, 16, 31, 46]);
    expect(wrapper.state('feedback')).toEqual(`You're Hot!`);

    wrapper.instance().guess(51);
    expect(wrapper.state('guesses')).toEqual([1, 16, 31, 46, 51]);
    expect(wrapper.state('feedback')).toEqual(`You got it!`);
  });
});