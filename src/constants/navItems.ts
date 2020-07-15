export interface INavItem {
  title: string;
  icon: string;
  route: string;
}

const navItems = [
  {
    title: 'Home',
    icon: 'HomeIcon',
    route: '/',
  },
  {
    title: 'List',
    icon: 'ListIcon',
    route: '/list',
  },
  {
    title: 'Settings',
    icon: 'SettingsIcon',
    route: '/settings',
  },
];

export default navItems;
