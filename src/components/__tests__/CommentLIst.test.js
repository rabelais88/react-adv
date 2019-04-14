import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;
let testComments = ['Comment 1', 'Comment 2'];

beforeEach(() => {
  const initialState = {
    comments: testComments,
  };
  wrapped = mount(<Root initialState={initialState}><CommentList /></Root>);
});

it('creates one LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(testComments.length);
});