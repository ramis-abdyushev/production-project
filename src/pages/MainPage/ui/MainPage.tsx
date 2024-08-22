import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const MainPage = memo(function MainPage() {
  const { t } = useTranslation('main');

  return <div>{t('Главная страница')}</div>;
});

export default MainPage;
