import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { MorphApiService } from './services/morph-api.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MorphFormComponent } from './components/morph/morph-form/morph-form.component';
import { MorphFormFileComponent } from './components/morph/morph-form-file/morph-form-file.component';
import { MorphViewComponent } from './components/morph/morph-view/morph-view.component';
import { MorphListComponent } from './components/morph/morph-list/morph-list.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        MorphFormComponent,
        MorphFormFileComponent,
        MorphViewComponent,
        MorphListComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        MorphApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
