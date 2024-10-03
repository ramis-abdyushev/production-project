import cls from './ArticleTextBlockComponent.module.scss';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleTextBlock } from 'entities/Article/model/types/article';
import { Text } from 'shared/ui/Text/Text';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(function ArticleTextBlockComponent(
  props: ArticleTextBlockComponentProps,
) {
  const { className, block } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
      {block.title && <Text title={block.title} className={cls.title} />}
      {block.paragraphs?.map((paragraphs, index) => <Text key={index} text={paragraphs} className={cls.paragraphs} />)}
    </div>
  );
});
