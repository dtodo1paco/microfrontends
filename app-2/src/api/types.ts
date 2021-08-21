export enum APIResponseStatus {
  OK,
  ERROR,
}

export interface APIResponse {
  status: APIResponseStatus | undefined;
  data: string | [string] | object | [object] | Error | undefined;
}