import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { WebView } from 'react-native-webview';

type RootStackParamList = {
  Article: undefined; // screen
  ArticleProps: { uri: string };
};

export type RouteProps = NativeStackScreenProps<RootStackParamList, 'ArticleProps', 'Stack'>;

export default function Article({ route }: RouteProps) {
  const { params: { uri } } = route;
  return (
    <WebView source={{ uri }} />
  )
}