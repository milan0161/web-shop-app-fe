import { Role } from 'src/app/modules/auth/login/models/login.model';
export interface SidebarItem {
  title: string;
  route: string;
  icon: string;
  availableFor: Role[];
}
