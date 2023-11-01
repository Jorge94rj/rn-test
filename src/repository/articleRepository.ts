import AsyncStorage from '@react-native-async-storage/async-storage';
import { IArticle } from '../model/article';

interface IHit {
  objectID: string;
  author: string;
  story_title: string;
  story_url: string;
  created_at: string;
}

export async function getArticles(offset: number): Promise<IArticle[]> {
  try {
    // AsyncStorage.clear();
    const response = await fetch(`https://hn.algolia.com/api/v1/search_by_date?query=mobile&offset=${offset}&length=10`);
    // const response = await fetch(`https://hn.algolia.co/api/v1/search_by_date?query=mobile&offset=${offset}&length=10`);
    const result = await response.json();
    const hits = result.hits as IHit[];

    const deletedArticles = await getDeletedArticles();
  
    return hits.map(h => ({
      id: h.objectID,
      author: h.author,
      title: h.story_title,
      uri: h.story_url,
      createdAt: h.created_at
    }))
    .filter(h => !deletedArticles.includes(h.id));

  } catch(error) {
    const savedArticles = await getSavedArticles();    
    const deletedArticles = await getDeletedArticles();

    if (offset >= savedArticles.length) {
      return [];
    }
    return savedArticles.filter(a => !deletedArticles.includes(a.id));
  }
}

export async function saveArticles(data: IArticle[]) {
  await AsyncStorage.setItem('articles', JSON.stringify(data));
}

export async function getSavedArticles(): Promise<IArticle[]> {
  const savedArticlesStr = await AsyncStorage.getItem('articles') || '[]';
  return JSON.parse(savedArticlesStr);
}

export async function saveDeletedArticle(id: string) {
  const deletedArticles = await getDeletedArticles();
  if (!deletedArticles.includes(id)) {
    deletedArticles.push(id)
  }
  await AsyncStorage.setItem('deletedArticles', JSON.stringify(deletedArticles));
}

export async function getDeletedArticles(): Promise<string[]> {
  const deletedArticlesStr = await AsyncStorage.getItem('deletedArticles') || '[]';
  return JSON.parse(deletedArticlesStr);
}
