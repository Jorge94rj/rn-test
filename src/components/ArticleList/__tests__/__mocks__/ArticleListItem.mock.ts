import { IArticleListItem } from "../../ArticleListItem";

export const ArticleListItemMock: IArticleListItem = {
  id: '9876',
  author: 'John Doe',
  title: 'Android article',
  uri: '',
  createdAt: '2023-11-01T21:47:33Z',
  onDeleteItem: jest.fn(),
  openArticle: jest.fn(),
};