import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  FlatList,
  ScrollView,
  RefreshControl,
  View,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text } from '../components/atoms/Text';

import { client } from '../util/client';

import colors from '../constants/colors';
import { MainStackParams } from '../navigation/Main';
import BlogCard from '../components/BlogCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
});

type Props = {
  navigation: StackNavigationProp<MainStackParams, 'Blogs'>;
};

const Blogs = ({ navigation }: Props) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [blogs, setBlogs] = useState<any[]>([]);

  const getAllBlogs = async () => {
    const res = await client.getEntries({ content_type: 'blog' });
    console.log(res, 'res');
    setBlogs(res.items);
    setRefreshing(false);
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  const onRefresh = React.useCallback(() => {
    getAllBlogs();
    setRefreshing(true);
  }, []);

  return !blogs ? (
    <View style={styles.container}>
      <Text>'Loading Blogs...'</Text>
    </View>
  ) : (
    <FlatList
      style={styles.container}
      data={blogs}
      keyExtractor={item => item.fields.id}
      nestedScrollEnabled
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      renderItem={({ item }) => (
        <BlogCard
          title={item.fields.title}
          subtitle={item.fields.subTitle}
          // @ts-ignore
          // Disabling the next line because all the item.targets are valid - that data just
          // isn't getting picked up by TypeScript
          onPress={() => navigation.navigate(item.target, { id: item.id })}
        />
      )}
    />
  );
};

export default Blogs;
