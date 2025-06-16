import { HttpError } from "@/constants";

export type ApiError = (typeof HttpError)[keyof typeof HttpError];

export interface ApiResponse<T> {
  data?: T;
  error?: {
    message: string;
    code: ApiError["code"];
  };
}
