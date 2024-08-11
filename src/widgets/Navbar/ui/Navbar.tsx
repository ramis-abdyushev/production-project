import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button className={cls.links} theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias, animi aperiam distinctio itaque labore
        maiores quidem velit. Illo, necessitatibus?
      </Modal>
    </div>
  );
};
