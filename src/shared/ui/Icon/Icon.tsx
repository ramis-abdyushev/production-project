import cls from './Icon.module.scss';
import { memo, SVGProps, VFC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface IconProps {
  className?: string;
  Svg: VFC<SVGProps<SVGSVGElement>>;
}

export const Icon = memo(function Icon(props: IconProps) {
  const { className, Svg } = props;

  return <Svg className={classNames(cls.Icon, {}, [className])} />;
});
