export interface HttpResponse<T> {
  data: T
  success: boolean,
  errorCode: number
  message: string,
}
