export const getWindDirection = (deg: number) => {
    if (deg == null) {
        throw new Error('Degrees cannot be an null or undefined ');
    }

    if (deg < 0 || deg > 360) {
        throw new Error('Degrees cannot be less than 0 or more than 360');
    }

    if (deg >= 337.5 || deg < 22.5) {
        return 'N';
    } else if (deg >= 22.5 && deg < 67.5) {
        return 'NW';
    } else if (deg >= 67.5 && deg < 112.5) {
        return 'W';
    } else if (deg >= 112.5 && deg < 157.5) {
        return 'SW';
    } else if (deg >= 157.5 && deg < 202.5) {
        return 'S';
    } else if (deg >= 202.5 && deg < 247.5) {
        return 'SE';
    } else if (deg >= 247.5 && deg < 292.5) {
        return 'E';
    } else if (deg >= 292.5 && deg < 337.5) {
        return 'NE';
    }
};