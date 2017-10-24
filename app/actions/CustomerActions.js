import { RSAA } from 'redux-api-middleware';
import { GRAPHCOOL_KEY } from '../config/apiKeys';
import { REQUEST, FAILURE } from './GeneralActions';

export const GETCUSTINFO_SUCCESS = 'GETCUSTINFO_SUCCESS';

export function getCustInfo(redemptionQR) {
  return {
    [RSAA]: {
      endpoint: 'https://api.graph.cool/simple/v1/whyn',
      method: 'POST',
      body: JSON.stringify({
        "query":`query{Customer(redemptionQR:\"${redemptionQR}\"){name,numTix}}`
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': GRAPHCOOL_KEY,
      },
      types: [REQUEST, GETCUSTINFO_SUCCESS, FAILURE]
    }
  }
}
