import {RouterModule} from '@angular/router';
import {MainPageComponent} from "./main-page.component";

export const Route = RouterModule.forChild([
    {path: '', component: MainPageComponent},
]);
