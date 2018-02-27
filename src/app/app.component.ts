import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    throwTypeError() {
        throw new TypeError('Just throwing a type error around!!!');
    }

    throwGeneralError() {
        throw new Error('Just throwing a general error around!!!');
    }
}
