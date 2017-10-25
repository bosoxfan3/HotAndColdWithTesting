import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', function() {
  it('Renders without crashing', function() {
    shallow(<TopNav />);
  });
  it('Should call onInfo on click of "what?"', function() {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onInfo={callback} />);
    wrapper.find('.what').simulate('click', {
      preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
  });
  it('Should call onNewGame on click of "new game"', function() {
    const callback =jest.fn();
    const wrapper = shallow(<TopNav onNewGame={callback} />);
    wrapper.find('.new').simulate('click', {
      preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
  })
});