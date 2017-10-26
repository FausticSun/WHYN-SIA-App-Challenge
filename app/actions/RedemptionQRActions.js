export const SAVE_REDEMPTIONQR = 'SAVE_REDEMPTIONQR'

export function saveRedemptionQR(qr) {
    return { type: SAVE_REDEMPTIONQR, qr }
}
