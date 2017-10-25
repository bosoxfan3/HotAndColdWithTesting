import React from 'react';
import {shallow, mount} from 'enzyme';

import Header from './header';

describe('<Header />', function() {
  it('Renders without crashing', function() {
    shallow(<Header />);
  });
  it('Should show the info modal when clicked', function() {
    const wrapper = shallow(<Header />);
    wrapper.instance().toggleInfoModal(true);
    wrapper.update();
    //have to use update because we used shallow
    expect(wrapper.find('InfoModal').exists()).toEqual(true);
  });
  it('Should not show info modal initally', function() {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('InfoModal').exists()).toEqual(false);
  })
});