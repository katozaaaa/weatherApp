import { describe, test, expect } from 'vitest';
import { getWindDirection } from '@/shared';

describe('Get wind direction', () => {
    describe('throw error when', () => {
        test('degrees is null or undefined', () => {
            expect(
                () => getWindDirection(null as any)
            ).toThrowError();
        });

        test('degrees < 0', () => {
            expect(
                () => getWindDirection(-1)
            ).toThrowError();
        });

        test('degrees > 360', () => {
            expect(
                () => getWindDirection(-1)
            ).toThrowError();
        });
    });

    test('return "N" when degrees >= 337.5 or degrees < 22.5', () => {
        expect(getWindDirection(337.5)).toBe('N');
    });

    test('return "NW" when degrees >= 22.5 and degrees < 67.5', () => {
        expect(getWindDirection(22.5)).toBe('NW');
    });

    test('return "W" when degrees >= 67.5 and degrees < 112.5', () => {
        expect(getWindDirection(67.5)).toBe('W');
    });

    test('return "SW" when degrees >= 112.5 and degrees < 157.5', () => {
        expect(getWindDirection(112.5)).toBe('SW');
    });

    test('return "S" when degrees >= 157.5 and degrees < 202.5', () => {
        expect(getWindDirection(157.5)).toBe('S');
    });

    test('return "SE" when degrees >= 202.5 and degrees < 247.5', () => {
        expect(getWindDirection(202.5)).toBe('SE');
    });

    test('return "E" when degrees >= 247.5 and degrees < 292.5', () => {
        expect(getWindDirection(247.5)).toBe('E');
    });

    test('return "NE" when degrees >= 292.5 and degrees < 337.5', () => {
        expect(getWindDirection(292.5)).toBe('NE');
    });
});