import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root'
import CommentBox from 'components/CommentBox';

let wrapped;
const testComment = 'new comment';

beforeEach(() => {
  wrapped = mount(<Root><CommentBox /></Root>);
});

afterEach(() => {
  wrapped.unmount();
});

// all `it`s run simultaneously whereas `describe`s run separately

// post clean up is necessary for full-DOM render test
it('has a text area', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', { target: { value: testComment }}); // provokes native HTML evvent, not React event
    wrapped.update(); // update after event
  });

  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual(testComment); // access actual react component prop
  });

  it('when form is submitted, text area gets emptied', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual(''); // check if it gets empty after the input
  });
});

