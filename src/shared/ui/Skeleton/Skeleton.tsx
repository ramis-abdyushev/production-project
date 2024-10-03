import cls from './Skeleton.module.scss';
import { CSSProperties, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = memo(function Skeleton(props: SkeletonProps) {
  const { className, height, width, border } = props;

  const styles: CSSProperties = {
    height,
    width,
    borderRadius: border,
  };

  return <div className={classNames(cls.Skeleton, {}, [className])} style={styles}></div>;
});
