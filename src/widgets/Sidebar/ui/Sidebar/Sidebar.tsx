import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from 'widgets/Sidebar/model/selectors/getSidebarItems';
import { useSelector } from 'react-redux';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => setCollapsed(prevState => !prevState);

  const itemsList = useMemo(
    () => sidebarItemsList.map(item => <SidebarItem key={item.path} item={item} collapsed={collapsed} />),
    [collapsed, sidebarItemsList],
  );

  return (
    <menu data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square={true}
        size={ButtonSize.L}
        data-testid="sidebar-toggle"
        onClick={onToggle}>
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>{itemsList}</div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </menu>
  );
});
