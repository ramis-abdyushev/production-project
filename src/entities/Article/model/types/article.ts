import { User } from 'entities/User';

export interface Article {
  id: string;
  title: string;
  user: User;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}

export enum ArticleType {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

export enum ArticleView {
  BIG = 'BIG',
  SMALL = 'SMALL',
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export enum ArticleBlockType {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  title: string;
  paragraphs?: string[];
}
