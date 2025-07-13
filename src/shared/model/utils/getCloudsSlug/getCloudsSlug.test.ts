import { describe, test, expect } from 'vitest';
import { getCloudsSlug } from '@/shared';

describe('Get clouds slug', () => {
    describe('throw error when', () => {
        test('weather ID is null or undefined', () => {
            expect(
                () => getCloudsSlug(null as any, 25)
            ).toThrowError();
        });

        test('clouds percentage is null or undefined', () => {
            expect(
                () => getCloudsSlug(800, null as any)
            ).toThrowError();
        });
    });

    describe('return "no-clouds" when', () => {
        test('weather ID == 800 and clouds percentage <= 25', () => {
            expect(
                getCloudsSlug(800, 25)
            ).toBe('no-clouds');
        });
    });

    describe('return "scattered-clouds" when', () => {
        test('weather ID == 800 and 25 < clouds percentage <= 50', () => {
            expect(
                getCloudsSlug(800,50)
            ).toBe('scattered-clouds');
        });

        test('weather ID == 801 and clouds percentage <= 25', () => {
            expect(
                getCloudsSlug(801, 25)
            ).toBe('scattered-clouds');
        });

        test('weather ID == 801 and 25 < clouds percentage <= 50', () => {
            expect(
                getCloudsSlug(801, 50)
            ).toBe('scattered-clouds');
        });
    });

    describe('return "overcast-clouds" when', () => {
        test('weather ID == 800 and clouds percentage > 50', () => {
            expect(
                getCloudsSlug(800, 100)
            ).toBe('overcast-clouds');
        });

        test('weather ID == 801 and clouds percentage > 50', () => {
            expect(
                getCloudsSlug(801, 100)
            ).toBe('overcast-clouds');
        });
    });
});