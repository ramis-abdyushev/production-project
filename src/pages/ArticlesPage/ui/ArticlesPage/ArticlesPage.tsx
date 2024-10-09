import cls from './ArticlesPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation('articles');

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      <ArticleList isLoading view={ArticleView.SMALL} articles={[]} />
    </div>
  );
};

export default memo(ArticlesPage);
