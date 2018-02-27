import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';

import { GlobalErrorHandlerService } from './services/global-error-handler.service';
import { ErrorLoggerService } from './services/error-logger.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        {
            provide: ErrorHandler,
            useClass: GlobalErrorHandlerService
        },
        // register log service
        ErrorLoggerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
