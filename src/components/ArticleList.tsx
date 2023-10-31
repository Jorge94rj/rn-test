import { useEffect, useState } from "react";
import { RefreshControl, FlatList, StyleSheet } from "react-native";
import ArticleListItem from "./ArticleListItem";
import { IArticle, getArticles, saveArticles, saveDeletedArticle } from "../repository/article";

const LIMIT = 10;

export default function ArticleList() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<IArticle[]>([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const articles = async () => {
      const result = await getArticles(offset);
      setData(result);
      if (result.length > 0) {
        saveArticles(result);
      }
      setLoading(false);
    };
    articles();
  }, [])

  const loadMore = async () => {
    setLoading(true);
    const next = offset + LIMIT;
    const result = await getArticles(next);
    setOffset(next);
    setData([...result, ...data]);
    if (result.length > 0) {
      saveArticles([...result, ...data]);
    }
    setLoading(false);
  }

  const deleteItem = (id: string) => {
    console.log('SWIPED!!', id)
    const filteredData = data.filter(d => d.id !== id);
    setData(filteredData);
    saveDeletedArticle(id);
  };

  return (
    <FlatList
      data={data}
      keyExtractor={({ id }) => String(id)}
      renderItem={({ item }) => <ArticleListItem {...item} onDeleteItem={deleteItem} />}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={loadMore} />}
    />
  );
}
