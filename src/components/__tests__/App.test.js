import React from 'react';
import App from 'components/App';
import { shallow } from 'enzyme';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped; // for scope problems

beforeEach(() => {
  wrapped = shallow(<App />);
});

afterEach(() => {
  wrapped.unmount();
});

it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1); // one <CommentBox />
});

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});

