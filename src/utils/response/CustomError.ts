export type ErrorValidation = { [key: string]: string };
type ErrorType = 'General' | 'Raw' | 'Validation' | 'Unauthorized';

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

    // Setting the this.name property to the constructor’s name will reference
    // 'ErrorResponse' in stack traces instead of the generic 'Error' name.
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

  get JSON(): {
    error_type: ErrorType;
    error_message: string;
    errors: string[] | null;
    error_raw: any;
    errors_validation: ErrorValidation[] | null;
    // If NODE_ENV='production' the stack trace is not included in the production environment.
    stack?: string;
  } {
    return {
      error_type: this.error_type,
      error_message: this.message,
      errors: this.errors,
      error_raw: this.error_raw,
      errors_validation: this.errors_validation,
      stack: this.stack,
    };
  }
}
