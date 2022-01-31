import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Formik } from 'formik';
import { StackNavigationProp } from '@react-navigation/stack';

import { MainStackParams } from '../navigation/Main';

import { clientCMA } from '../util/client';
import colors from '../constants/colors';
import { TextInput } from '../components/atoms/TextInput';
import { Button } from '../components/atoms/Button';
import { Text } from '../components/atoms/Text';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';

const addBlogValidationSchema = yup.object().shape({
  title: yup
    .string()
    .max(50, ({ max }) => `Title cannot be longer than ${max} characters`)
    .required('Title is required!'),
  subTitle: yup
    .string()
    .max(100, ({ max }) => `Subtitle cannot be longer than ${max} characters`)
    .required('Subtitle is required!'),
  text: yup.string().required('Text is required!'),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
});

type AddBlogRef = {
  title: string;
  subTitle: string;
  text: string;
};

type Props = {
  navigation: StackNavigationProp<MainStackParams, 'Blogs'>;
};

const AddBlog = ({ navigation }: Props) => {
  const createBlog = async (values: AddBlogRef) => {
    clientCMA
      .getSpace('4gdugyn6rciu')
      .then((space: any) => space.getEnvironment('master'))
      .then((environment: any) =>
        environment.createEntry('blog', {
          fields: {
            title: {
              'en-US': `${values.title}`,
            },
            subTitle: {
              'en-US': `${values.subTitle}`,
            },
            text: {
              'en-US': `${values.text}`,
            },
          },
        }),
      )
      .then((entry: any) => entry.publish())
      .then((entry: any) => {
        console.log(`Entry ${entry.sys.id} published.`);
      })
      .catch(console.error);
  };

  return (
    <ScrollView style={styles.container}>
      <Formik
        initialValues={{ title: '', subTitle: '', text: '' }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          // setSubmitting(true);
          createBlog(values)
            .then(() => {
              resetForm();
              navigation.navigate('Blogs');
            })
            .catch(console.error);
        }}
        validationSchema={addBlogValidationSchema}
      >
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          values,
          errors,
          isSubmitting,
        }) => (
          <>
            <TextInput
              placeholder="Title"
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
            />
            {errors.title && <Text type="error">{errors.title}</Text>}

            <TextInput
              placeholder="Sub Title"
              onChangeText={handleChange('subTitle')}
              onBlur={handleBlur('subTitle')}
              value={values.subTitle}
            />
            {errors.subTitle && <Text type="error">{errors.subTitle}</Text>}

            <TextInput
              placeholder="Text"
              multiline={true}
              numberOfLines={10}
              onChangeText={handleChange('text')}
              onBlur={handleBlur('text')}
              value={values.text}
            />
            {errors.text && <Text type="error">{errors.text}</Text>}

            <Button onPress={handleSubmit}>Publish!</Button>
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default AddBlog;
