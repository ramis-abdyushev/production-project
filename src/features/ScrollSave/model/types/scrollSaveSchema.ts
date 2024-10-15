export interface ScrollSaveSchema {
  scroll: ScrollSchema;
}

// <Адрес страницы, позиция скролла>
export type ScrollSchema = Record<string, number>;
