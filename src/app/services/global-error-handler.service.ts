import { ErrorHandler, Inject, forwardRef } from '@angular/core';
import { ErrorLoggerService } from './error-logger.service';

export class GlobalErrorHandlerService extends ErrorHandler {
    constructor(
        @Inject(forwardRef(() => ErrorLoggerService)) private errorLoggerService: ErrorLoggerService
    ) {
        super();
    }

    handleError(error) {
        this.errorLoggerService.logError(error);
    }
}
