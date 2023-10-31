import { ParamListBase, useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface IArticleListItem {
  id: string;
  title: string;
  author: string;
  uri: string;
  createdAt: string;
  onDeleteItem: (id: string) => void;
}

export default function ArticleListItem({ id, title, author, uri, createdAt, onDeleteItem }: IArticleListItem) {

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase, string>>();

  const openArticle = () => {
    navigation.navigate('Article', { uri });
  };

  const Options = () => (
    <View style={styles.optionsContainer}>
      <Text style={styles.optionsContainerText}>Delete</Text>
    </View>
  );

  return (
    <Swipeable renderRightActions={Options} onSwipeableOpen={() => onDeleteItem(id)}>
      <Pressable onPress={openArticle}>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{`${author} - ${createdAt}`}</Text>
        </View>
      </Pressable>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 96,
    padding: 15,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#8c8c8c',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  subTitle: {
    color: '#a3a3a3'
  },
  optionsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#c40e35',
  },
  optionsContainerText: {
    marginRight: 15,
    color: '#fff'
  }
});