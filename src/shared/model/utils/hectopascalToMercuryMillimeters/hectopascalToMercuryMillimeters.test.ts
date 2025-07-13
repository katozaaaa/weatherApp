import { describe, test, expect } from 'vitest';
import {hectopascalToMercuryMillimeters} from '@/shared';

describe('Hectopascal to mercury millimeters', () => {
    describe('throw error when', () => {
        test('pressure is null or undefined', () => {
            expect(
                () => hectopascalToMercuryMillimeters(null as any)
            ).toThrowError();
        });

        test('pressure is negative number', () => {
            expect(
                () => hectopascalToMercuryMillimeters(-1)
            ).toThrowError();
        });
    });

    test(`return ${1016 * 0.7500615} when pressure is 1016 hPa`, () => {
        expect(
            hectopascalToMercuryMillimeters(1016)
        ).toBe(1016 * 0.7500615);
    });
});