import cls from './Select.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOptions[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

interface SelectOptions {
  value: string;
  content: string;
}

export const Select = memo(function Select(props: SelectProps) {
  const { className, label, options, value, onChange, readonly } = props;

  const optionsList = useMemo(() => {
    return options?.map(opt => (
      <option className={cls.option} value={opt.value} key={opt.value}>
        {opt.content}
      </option>
    ));
  }, [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.Wrapper, {}, [className])}>
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <select className={cls.select} disabled={readonly} value={value} onChange={onChangeHandler}>
        {optionsList}
      </select>
    </div>
  );
});
