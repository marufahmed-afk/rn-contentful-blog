import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';

import colors from '../constants/colors';
import { Text } from '../components/atoms/Text';
import { client } from '../util/client';
import { formatDate } from '../util/helpers';
import { AntDesign } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 130,
    marginBottom: 10,
  },
  headerItems: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

const Blog = ({ route }: any) => {
  const [blog, setBlog] = useState<any>();

  const getSingleBlog = async () => {
    const res = await client.getEntry(route.params?.id);
    console.log(res, 'res');
    setBlog(res);
  };

  useEffect(() => {
    getSingleBlog();
  }, []);

  return !blog ? (
    <View style={styles.container}>
      <Text>'Loading Blog...'</Text>
    </View>
  ) : (
    <>
      <Image
        style={styles.image}
        source={{ uri: 'https://picsum.photos/200' }}
      />
      <View style={styles.container}>
        <View style={styles.headerItems}>
          <Text>{formatDate(blog.sys?.createdAt)}</Text>
          <View style={styles.headerItems}>
            <AntDesign
              name="like1"
              size={24}
              color="black"
              style={{ marginRight: 10 }}
            />
            <AntDesign name="dislike1" size={24} color="black" />
          </View>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text type="header">{blog.fields?.title}</Text>
          <Text type="subheader">{blog.fields?.subTitle}</Text>
        </View>
        <Text>{blog.fields?.text}</Text>
      </View>
    </>
  );
};

export default Blog;
