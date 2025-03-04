import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';

const AboutPage = memo(function AboutPage() {
  const { t } = useTranslation('about');

  return <Page>{t('О сайте')}</Page>;
});

export default AboutPage;
