import React from 'react';
import * as renderer from 'react-test-renderer';

import { ArticleListItemMock } from './__mocks__/ArticleListItem.mock';
import ArticleListItem from '../ArticleListItem';

describe('<ArticleList>', () => {
  it('should render article title', () => {
    const testRenderer = renderer.create(<ArticleListItem {...ArticleListItemMock} />);
    const instance = testRenderer.root;
    const title = instance.findByProps({ testID: 'title' });
    expect(title).toBeTruthy();
  });

  it('should render article details', () => {
    const testRenderer = renderer.create(<ArticleListItem {...ArticleListItemMock} />);
    const instance = testRenderer.root;
    const details = instance.findByProps({ testID: 'details' });
    expect(details).toBeTruthy();
  });
});