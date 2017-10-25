import React from 'react';
import {shallow, mount} from 'enzyme';

import InfoModal from './info-modal';

describe('<InfoModal />', function() {
  it('Renders without crashing', function() {
    shallow(<InfoModal />);
  });
  it('Should call onClose when clicked', function() {
    const callback = jest.fn();
    const wrapper = shallow(<InfoModal onClose={callback} />);
    wrapper.find('.close').simulate('click', {
      preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
  });
});