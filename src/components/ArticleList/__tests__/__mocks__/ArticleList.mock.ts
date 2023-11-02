import { IArticleList } from "../../ArticleList";

export const ArticleListMock: IArticleList = {
  data:[
    {
      id: '9876',
      author: 'John Doe',
      title: 'Android article',
      uri: '',
      createdAt: '2023-11-01T21:47:33Z',
    },
    {
      id: '5432',
      author: 'John Doe',
      title: 'IOS article',
      uri: '',
      createdAt: '2023-11-01T19:47:33Z',
    },
  ],
  loading: true,
  loadMore: jest.fn(),
  deleteItem: jest.fn(),
  openArticle: jest.fn(),
};