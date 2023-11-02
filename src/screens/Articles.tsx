import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import ArticleListView from "../view/ArticleListView";

export default function Articles() {
  return(
    <SafeAreaView>
      <ArticleListView />
    </SafeAreaView>
  )
}