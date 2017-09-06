import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { Post} from "./models/post.model";
import * as PostActions from './actions/post.actions';

interface AppState {
    post: Post;
}
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public post: Observable<Post>;
    public text: string;

    constructor(private store: Store<AppState>) {
        this.post = this.store.select('post');
    }

    public editText() {
        this.store.dispatch(new PostActions.EditText(this.text));
    }

    public resetPost() {
        this.store.dispatch(new PostActions.Reset());
    }

    public upvote() {
        this.store.dispatch(new PostActions.Upvote());
    }

    public downvote() {
        this.store.dispatch(new PostActions.Downvote());
    }
}
