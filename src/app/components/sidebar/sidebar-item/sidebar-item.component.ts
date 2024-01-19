import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { SidebarItem } from '../models/sidebar.model';
import { Role } from 'src/app/modules/auth/login/models/login.model';
@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
})
export class SidebarItemComponent implements OnInit {
  @Input() sidebarItem!: SidebarItem;
  @Input() userRole!: Role;
  visible!: boolean;

  ngOnInit(): void {
    this.checkVisibility();
  }

  private checkVisibility() {
    this.visible = this.sidebarItem.availableFor.includes(this.userRole);
  }
}
