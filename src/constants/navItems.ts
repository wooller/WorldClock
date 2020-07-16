export interface INavItem {
  title: string;
  icon: string;
  route: string;
}

const navItems = [
  {
    title: 'Home',
    icon: 'alarm',
    route: '/',
  },
  {
    title: 'List',
    icon: 'list',
    route: '/list',
  },
  {
    title: 'Settings',
    icon: 'settings',
    route: '/settings',
  },
];

export default navItems;
