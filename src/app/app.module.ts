import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {simpleReducer} from './redux-reducers/simple.reducer';
import {postReduser} from "./redux-reducers/post.reducer";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        StoreModule.forRoot({
            message: simpleReducer,
            post: postReduser
        })

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
