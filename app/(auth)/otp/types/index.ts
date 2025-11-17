export interface OTPFormData {
  otp: string;
}

export interface OTPResponse {
  success: boolean;
  token?: string;
  user?: {
    id: string;
    mobileNumber: string;
    name: string;
  };
}

