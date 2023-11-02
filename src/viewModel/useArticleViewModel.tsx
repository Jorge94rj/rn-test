import { RouteProp, useRoute } from "@react-navigation/native";

type ParamList = {
  props: {
    uri: string;
  }
}

export const useArticleViewModel = () => {
  const route = useRoute<RouteProp<ParamList, 'props'>>();
  
  const { params: { uri } } = route;

  return {
    uri
  }
};