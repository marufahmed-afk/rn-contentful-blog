import {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_CMA_ACCESS_TOKEN,
} from '@env';
import { createClient } from 'contentful/dist/contentful.browser.min.js';
import { createClient as createCMAclient } from 'contentful-management/dist/contentful-management.browser';

export const client = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
});

export const clientCMA = createCMAclient({
  // space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_CMA_ACCESS_TOKEN,
});
