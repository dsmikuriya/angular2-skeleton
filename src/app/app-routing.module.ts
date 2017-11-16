import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MorphViewComponent } from './components/morph/morph-view/morph-view.component';

const routes: Routes = [
    { path: '', redirectTo: '/morph', pathMatch: 'full' },
    { path: 'morph', component: MorphViewComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
