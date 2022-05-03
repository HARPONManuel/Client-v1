import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { AboutComponent } from './about/about.component';
import { DashboardService } from './services/dashboard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectComponent } from './project/project.component';
import { ProductsFormComponent } from './products/products-form/products-form.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CategoriesService } from '@bluebits/products';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ColorPickerModule } from 'primeng/colorpicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { EditorModule } from 'primeng/editor';
import { TagModule } from 'primeng/tag';
import { InputMaskModule } from 'primeng/inputmask';
import { FieldsetModule } from 'primeng/fieldset';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';

const UX_MODULE = [
  CardModule,
  ToastModule,
  InputTextModule,
  TableModule,
  ToolbarModule,
  ButtonModule,
  ConfirmDialogModule,
  ColorPickerModule,
  InputNumberModule,
  DropdownModule,
  InputTextareaModule,
  InputSwitchModule,
  EditorModule,
  TagModule,
  InputMaskModule,
  FieldsetModule
];

@NgModule({
  declarations: [
    DashboardComponent,
    MyProfileComponent,
    AboutComponent,
    ProjectComponent,
    ProductsFormComponent,
    ProductsListComponent,
    CategoriesListComponent,
    CategoriesFormComponent
  ],
  imports: [ 
    CommonModule, 
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    ReactiveFormsModule,
    ...UX_MODULE
  ],
  exports: [ 
    DashboardComponent, 
    MyProfileComponent, 
    AboutComponent, 
    ProjectComponent,    
    ProductsFormComponent,
    ProductsListComponent
   ],
  providers: [ 
    DashboardService,
    CategoriesService,
    MessageService,
    ConfirmationService,
   ]
})
export class AdminModule
{
}
