import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

// post clean up is necessary for full-DOM render test
it('has a text area', () => {
  const wrapped = mount(<CommentBox />);
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});