export const errorHandler = (statusCode: number, message: string) => {
  const error: any = Error(message);
  error.status = statusCode;
  return error;
};
