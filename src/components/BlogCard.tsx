import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

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
    height: 180,
    // borderRadius: 10,
    marginBottom: 10,
  },
  textContainer: {
    paddingHorizontal: 10,
  },
});

type BlogCardProps = {
  title: string;
  subtitle: string;
  onPress: () => void;
};

const BlogCard = ({ title, subtitle, onPress = () => null }: BlogCardProps) => {
  const rowStyles = [styles.row];

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={rowStyles}>
        <Image
          style={styles.image}
          source={{ uri: 'https://picsum.photos/200' }}
        />
        <View style={styles.textContainer}>
          <Text style={[styles.titleText]}>{title}</Text>
          <Text>{subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BlogCard;
