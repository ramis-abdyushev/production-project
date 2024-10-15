import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getScrollSave = (state: StateSchema) => state.scrollSave;

export const getScrollSaveByPath = createSelector(
  getScrollSave,
  (state: StateSchema, path: string) => path,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  (scroll, path) => scroll[path] || 0,
);
