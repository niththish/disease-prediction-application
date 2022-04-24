import { Routes } from '@angular/router';
import { DiabetesComponent } from './diabetes/diabetes.component';
import  {HepatitsComponent } from './hepatits/hepatits.component';
import { TuberculosisComponent } from './tuberculosis/tuberculosis.component';
import { HomeComponent } from './home/home.component';
import { CkdComponent } from './ckd/ckd.component';
import { RetinopathyComponent } from './retinopathy/retinopathy.component';

export const routes: Routes = [
    { 
        path:  '', 
        redirectTo:  'home', 
        pathMatch:  'full' 
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'diabetes',
        component: DiabetesComponent
    },
    {
        path: 'hepatits',
        component: HepatitsComponent
    },
    {
        path: 'ckd',
        component: CkdComponent
    },
    {
        path: 'tuberculosis',
        component: TuberculosisComponent
    },
    {
        path: 'retinopathy',
        component: RetinopathyComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
    
];
