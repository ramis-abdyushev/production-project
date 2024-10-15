import cls from './ArticlesPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  articlesPageActions,
  articlesPageReducer,
  getArticle,
} from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from 'pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage';
import { Page } from 'widgets/Page/Page';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticle.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch],
  );

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage());
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page className={classNames(cls.ArticlesPage, {}, [className])} onScrollEnd={onLoadNextPart}>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
