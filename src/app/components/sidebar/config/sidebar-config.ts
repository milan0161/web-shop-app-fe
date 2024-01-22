import { SidebarItem } from '../models/sidebar.model';

export const SIDEBAR_CONFIG: SidebarItem[] = [
  {
    icon: 'fa fa-laptop',
    route: 'admin-products',
    title: 'Products',
    availableFor: ['ADMINISTRATOR'],
  },
  {
    icon: 'fa fa-clipboard',
    route: 'orders',
    title: 'Orders',
    availableFor: ['USER', 'ADMINISTRATOR'],
  },
  {
    icon: 'fa fa-user',
    route: 'users',
    title: 'Users',
    availableFor: ['ADMINISTRATOR', 'USER'],
  },
];
