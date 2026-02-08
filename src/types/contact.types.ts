export interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  msg: string;
}

export interface ValidationError {
  field: string;
  message: string;
}
