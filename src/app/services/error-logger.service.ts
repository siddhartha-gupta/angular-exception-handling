import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import * as StackTrace from 'stacktrace-js';

@Injectable()
export class ErrorLoggerService {
    logError(error: any) {
        const date = new Date().toISOString();

        if (error instanceof HttpErrorResponse) {
            console.error(`HTTP error occurred at ${date}, message - ${error.message}, Status code - ${(<HttpErrorResponse>error).status}`);
        } else if (error instanceof TypeError) {
            console.error(`Type error occurred at ${date}, message - ${error.message}`);
        } else if (error instanceof Error) {
            console.error(`General error occurred at ${date}, message - ${error.message}`);
        } else {
            console.error(`Some magical error occurred at ${date}, error - ${error}`);
        }
        this.stackTrace(error);
    }

    stackTrace(error: any) {
        StackTrace.fromError(error).then(stackframes => {
            const stackString = stackframes
                .splice(0, 20)
                .map(function (sframe) {
                    return sframe.toString();
                }).join('\n');

            // log on the server
            console.log('stack: ', stackString);
        });
    }
}
