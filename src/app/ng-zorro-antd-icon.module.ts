import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';

import {
  UserOutline,
  LaptopOutline,
  NotificationOutline,
} from '@ant-design/icons-angular/icons';
import { NgModule } from '@angular/core';

const icons: IconDefinition[] = [
  UserOutline,
  LaptopOutline,
  NotificationOutline,
];

@NgModule({
  imports: [NzIconModule.forRoot(icons)],
})
export class IconModule {}
