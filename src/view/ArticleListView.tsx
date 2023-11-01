import ArticleList from "../components/ArticleList";
import { useArticleListViewModel } from "../viewModel/useArticleListViewModel";

export default function ArticleListView() {
  const { data, loading, loadMore, deleteItem, openArticle } = useArticleListViewModel();

  return (
    <ArticleList 
      data={data}
      loading={loading}
      loadMore={loadMore}
      deleteItem={deleteItem}
      openArticle={openArticle}
    />
  );
}