import {RouterModule} from '@angular/router';
export const Route = RouterModule.forRoot([
    {path: 'contact', pathMatch: 'prefix', loadChildren: () => import('./features/contact/contact.module').then(m => m.ContactModule)},
    {path: 'home', pathMatch: 'prefix', loadChildren: () => import('./features/main-page/main-page.module').then(m => m.MainPageModule)},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
]);
