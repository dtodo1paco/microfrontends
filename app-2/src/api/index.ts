import { ok } from 'assert';
import axios from 'axios';
import { APIResponse, APIResponseStatus } from './types';

export const myFetch = async (url:string, responseField?:string):Promise<APIResponse> => {
  const response:APIResponse = {
    data: undefined,
    status: undefined,
  };
  try {
    const resp = await axios.get(url);
    response.status = APIResponseStatus.OK;
    if (responseField) {
      response.data = resp.data[responseField as keyof typeof resp];
    } else {
      response.data = resp.data;
    }
  } catch (error) {
    response.status = APIResponseStatus.ERROR;
    response.data = new Error(error);
  }
  return response;
}
