import cls from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginIsLoading } from '../../model/selector/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selector/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selector/getLoginError/getLoginError';
import { getLoginUsername } from '../../model/selector/getLoginUsername/getLoginUsername';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={true}>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('Форма авторизации')} />
        {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
        <Input
          placeholder={t('Введите логин')}
          className={cls.input}
          autoFocus
          onChange={onChangeUsername}
          value={username}
        />
        <Input placeholder={t('Введите пароль')} className={cls.input} onChange={onChangePassword} value={password} />
        <Button className={cls.loginBtn} theme={ButtonTheme.OUTLINE} disabled={isLoading} onClick={onLoginClick}>
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

LoginForm.displayName = 'LoginForm';

export default LoginForm;
