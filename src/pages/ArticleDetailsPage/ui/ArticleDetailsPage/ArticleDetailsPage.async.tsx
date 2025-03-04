import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(
  () =>
    new Promise(resolve => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setTimeout(() => resolve(import('./ArticleDetailsPage')), 400);
    }),
);
