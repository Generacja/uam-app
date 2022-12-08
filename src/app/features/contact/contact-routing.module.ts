import {RouterModule} from '@angular/router';
import {ContactComponent} from "./contact.component";
export const Route = RouterModule.forChild([
    {path: '', component: ContactComponent},
]);
