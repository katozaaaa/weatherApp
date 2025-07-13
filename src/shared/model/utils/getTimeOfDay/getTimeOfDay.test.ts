import { describe, test, expect } from 'vitest';
import {getTimeOfDay} from '@/shared';

describe('Get time of day', () => {
    describe('throw error when', () => {
        test('forecast is null or undefined', () => {
            expect(() => getTimeOfDay({
                forecast: null as any,
                sunrise: 1752073200,
                sunset: 1752073200
            })).toThrowError();
        });

        test('sunrise is null or undefined', () => {
            expect(() => getTimeOfDay({
                forecast: 1752073200,
                sunrise: null as any,
                sunset: 1752073200
            })).toThrowError();
        });

        test('sunset is null or undefined', () => {
            expect(() => getTimeOfDay({
                forecast: 1752073200,
                sunrise: 1752073200,
                sunset: null as any
            })).toThrowError();
        });
    });

    describe('return "day" when', () => {
        test('sunrise <= forecast < sunset', () => {
            expect(getTimeOfDay({
                forecast: 1752073200,
                sunrise: 1752022338,
                sunset: 1752088515
            })).toBe('day');
        });
    });

    describe('return "night" when', () => {
        test('forecast < sunrise', () => {
            expect(getTimeOfDay({
                forecast: 1752108737,
                sunrise: 1752108738,
                sunset: 1752174915
            })).toBe('night');
        });

        test('forecast >= sunset', () => {
            expect(getTimeOfDay({
                forecast: 1752174915,
                sunrise: 1752108738,
                sunset: 1752174915
            })).toBe('night');
        });
    });
});