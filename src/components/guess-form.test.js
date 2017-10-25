import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', function() {
  it('Renders without crashing', function() {
    shallow(<GuessForm />);
  });
  it('Should fire the onGuess callback when the form is submitted', function() {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onGuess={callback} />);
    //you have to use mount because GuessForm has a ref
    const value = 10;
    wrapper.instance().input.value = value;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(value.toString());
  });
  it('Should clear the input after submission', function() {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onGuess={callback} />);
    const value = 10;
    const input = wrapper.instance().input;
    input.value = value;
    wrapper.simulate('submit');
    expect(input.value).toEqual('');
    //you can use instance and then not have to use update and 
    //immediately use another method or property because
    //mounted components automatically update
  });
});