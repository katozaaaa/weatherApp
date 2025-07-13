export const hectopascalToMercuryMillimeters = (hPa: number) => {
    if (hPa == null || hPa < 0) {
        throw new Error('Pressure cannot be an null, undefined or negative value');
    }

    return hPa * 0.7500615;
};