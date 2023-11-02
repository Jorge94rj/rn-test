import { useEffect, useState } from "react";
import { getArticles, saveArticles, saveDeletedArticle } from "../repository/articleRepository";
import { IArticle } from "../model/article";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const useArticleListViewModel = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase, string>>();
  
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<IArticle[]>([]);

  useEffect(() => {
    const articles = async () => {
      const result = await getArticles();
      setData(result);
      saveArticles(result);
      setLoading(false);
    };
    articles();
  }, [])

  const loadMore = async () => {
    setLoading(true);
    const result = await getArticles();
    setData(result);
    saveArticles(result);
    setLoading(false);
  }

  const deleteItem = (id: string) => {
    const filteredData = data.filter(d => d.id !== id);
    setData(filteredData);
    saveDeletedArticle(id);
  };

  const openArticle = (uri: string) => {
    navigation.navigate('Article', { uri });
  };

  return {
    data,
    loading,
    loadMore,
    deleteItem,
    openArticle
  }
};