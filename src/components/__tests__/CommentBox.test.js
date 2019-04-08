import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

// post clean up is necessary for full-DOM render test
it('has a text area', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

it('has a text area that users can type in', () => {
  const testComment = 'new comment';
  wrapped.find('textarea').simulate('change', { target: { value: testComment }}); // provokes native HTML evvent, not React event
  wrapped.update(); // update after event
  expect(wrapped.find('textarea').prop('value')).toEqual(testComment); // access actual react component prop
});