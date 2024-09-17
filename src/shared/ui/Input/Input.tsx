import cls from './Input.module.scss';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, InputHTMLAttributes, memo, SyntheticEvent, useEffect, useRef, useState } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const { className, value, onChange, type = 'text', placeholder, autoFocus, readonly, ...otherProps } = props;

  const ref = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const isCaretVisible = isFocused && !readonly;

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autoFocus]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = () => setIsFocused(false);

  const onFocus = () => setIsFocused(true);

  const onSelect = (e: SyntheticEvent<HTMLInputElement>) =>
    setCaretPosition((e?.target as HTMLInputElement)?.selectionStart || 0);

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          className={cls.input}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          readOnly={readonly}
          {...otherProps}
        />
        {isCaretVisible && <span className={cls.caret} style={{ left: `${caretPosition * 9}px` }}></span>}
      </div>
    </div>
  );
});

Input.displayName = 'Input';
