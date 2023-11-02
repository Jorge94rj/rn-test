import React from 'react';
import * as renderer from 'react-test-renderer';

import ArticleList from '..';
import { ArticleListMock } from './__mocks__/ArticleList.mock';

describe('<ArticleList>', () => {
  it('should render items', () => {
    const { props } = renderer.create(<ArticleList {...ArticleListMock} />).toJSON() as renderer.ReactTestRendererJSON;
    expect(props.data.length).toBeGreaterThan(0);
  });

  it('should pull data', () => {
    const { props } = renderer.create(<ArticleList {...ArticleListMock} />).toJSON() as renderer.ReactTestRendererJSON;
    const refreshControl = props.refreshControl;
    refreshControl.props.onRefresh();
    expect(refreshControl.props.onRefresh).toHaveBeenCalled();
  });
});