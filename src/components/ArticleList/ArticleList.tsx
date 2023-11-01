import React, { useEffect, useState } from "react";
import { RefreshControl, FlatList, StyleSheet } from "react-native";
import { IArticle } from "../../model/article";
import ArticleListItem from "./ArticleListItem";

interface IArticleList {
  data: IArticle[];
  loading: boolean;
  loadMore: () => void;
  deleteItem: (id: string) => void;
  openArticle: (uri: string) => void;
}

export default function ArticleList({ data, loading, loadMore, deleteItem, openArticle }: IArticleList) {
  return (
    <FlatList
      data={data}
      keyExtractor={({ id }) => String(id)}
      renderItem={({ item }) => <ArticleListItem {...item} onDeleteItem={deleteItem} openArticle={openArticle} />}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={loadMore} />}
    />
  );
}
