export const SAVE_REDEMPTIONQR = 'SAVE_REDEMPTIONQR'
export const CLEAR_REDEMPTIONQR = 'CLEAR_REDEMPTIONQR'

export function saveRedemptionQR(qr) {
    return { type: SAVE_REDEMPTIONQR, qr }
}

export function clearRedemptionQR() {
    return { type: CLEAR_REDEMPTIONQR }
}
