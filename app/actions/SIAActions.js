import { RSAA } from 'redux-api-middleware';
import { SIA_CLIENT_UUID, SIA_API_KEY } from '../config/apiKeys';
import { REQUEST, FAILURE } from './GeneralActions';
export const GETPNR_SUCCESS = 'GETPNR_SUCCESS';

export function getPNR(pnr) {
  return {
    [RSAA]: {
      endpoint: 'https://apidev.singaporeair.com/appchallenge/pnr/get',
      method: 'POST',
      body: JSON.stringify({
        "clientUUID": SIA_CLIENT_UUID,
        "request": {
          pnr
        }
      }),
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': SIA_API_KEY,
      },
      types: [REQUEST, GETPNR_SUCCESS, FAILURE]
    }
  }
}
