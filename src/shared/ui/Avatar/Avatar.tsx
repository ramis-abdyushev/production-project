import cls from './Avatar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = ({ className, src, size, alt }: AvatarProps) => {
  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size || 100,
      height: size || 100,
    };
  }, [size]);

  return <img src={src} className={classNames(cls.Avatar, {}, [className])} style={styles} alt={alt} />;
};
