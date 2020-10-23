export type ErrorValidation = { [key: string]: string };
type ErrorType = 'General' | 'Raw' | 'Validation' | 'Unauthorized';
type ErrorResponse = {
  errorType: ErrorType;
  errorMessage: string;
  errors: string[] | null;
  errorRaw: any;
  errorsValidation: ErrorValidation[] | null;
  // If NODE_ENV='production' the stack trace is not included in the response.
  stack?: string;
};

export class CustomError extends Error {
  private httpStatusCode: number;
  private error_type: ErrorType;
  private errors: string[] | null;
  private error_raw: any;
  private errors_validation: ErrorValidation[] | null;

  constructor(
    httpStatusCode: number,
    error_type: ErrorType,
    message: string,
    errors: string[] | null = null,
    error_raw: any = null,
    errors_validation: ErrorValidation[] | null = null,
  ) {
    super(message);

    this.name = this.constructor.name;

    this.httpStatusCode = httpStatusCode;
    this.error_type = error_type;
    this.errors = errors;
    this.error_raw = error_raw;
    this.errors_validation = errors_validation;
  }

  get HttpStatusCode() {
    return this.httpStatusCode;
  }

  get JSON(): ErrorResponse {
    return {
      errorType: this.error_type,
      errorMessage: this.message,
      errors: this.errors,
      errorRaw: this.error_raw,
      errorsValidation: this.errors_validation,
      stack: this.stack,
    };
  }
}
