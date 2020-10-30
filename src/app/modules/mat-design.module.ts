import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';

const materialModule = [
  MatTabsModule,
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  OverlayModule,
  MatButtonModule,
  MatIconModule,
  MatChipsModule,
  MatMenuModule,
  MatDialogModule,
  BrowserAnimationsModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatProgressSpinnerModule,
];

/**
 * Material design module
 */
@NgModule({
  imports: [
    ...materialModule,
  ],
  exports: [
    ...materialModule,
  ],
})
export class MatDesignModule {
}
