import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Text } from './atoms/Text';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  row: {
    // padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: colors.white,
    shadowColor: colors.gray,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 5,
    height: 280,
    overflow: 'hidden',
  },
  titleText: {
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 170,
    // borderRadius: 10,
    marginBottom: 10,
  },
  textContainer: {
    paddingHorizontal: 10,
  },
  flexed: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

type BlogCardProps = {
  title: string;
  subtitle: string;
  by: string;
  createdAt?: string;
  onPress: () => void;
};

const BlogCard = ({
  title,
  subtitle,
  by,
  onPress = () => null,
}: BlogCardProps) => {
  const rowStyles = [styles.row];

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={rowStyles}>
        <Image
          style={styles.image}
          source={{ uri: 'https://picsum.photos/200' }}
        />
        <View style={styles.textContainer}>
          <Text type="header" style={[styles.titleText]}>
            {title}
          </Text>
          <Text style={[{ marginBottom: 10 }]}>{subtitle}</Text>
          <View style={styles.flexed}>
            <Text>{`By: ${by}`}</Text>
            <View style={styles.flexed}>
              <AntDesign
                name="like1"
                size={24}
                color="black"
                style={{ marginRight: 10 }}
              />
              <AntDesign name="dislike1" size={24} color="black" />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BlogCard;
