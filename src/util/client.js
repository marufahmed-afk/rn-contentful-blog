import * as contentful from 'contentful';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from '@env';

export const client = contentful.createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
});
