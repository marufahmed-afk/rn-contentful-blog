import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Blogs from '../screens/Blogs';
import Blog from '../screens/Blog';

export type MainStackParams = {
  Blogs: undefined;
  Blog: undefined;
  AddBlog: undefined;
};

const MainStack = createStackNavigator<MainStackParams>();

export const Main = () => (
  <MainStack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: { backgroundColor: 'white' },
    }}
  >
    <MainStack.Screen name="Blogs" component={Blogs} />
    <MainStack.Screen
      name="Blog"
      component={Blog}
      options={({ route }: any) => ({
        title: 'Blog ' + route.params?.id,
      })}
    />
  </MainStack.Navigator>
);
