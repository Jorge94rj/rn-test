import { WebView } from "react-native-webview";
import { useArticleViewModel } from "../viewModel/useArticleViewModel";

export default function ArticleView() {
  const { uri } = useArticleViewModel();

  return (
    <WebView source={{ uri }} />
  );
}