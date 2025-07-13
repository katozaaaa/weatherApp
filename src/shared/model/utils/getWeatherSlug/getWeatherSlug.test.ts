import { describe, test, expect } from 'vitest';
import {getWeatherSlug} from '@/shared';

describe('Get weather slug', () => {
    describe('throw error when', () => {
        test('weather ID is null or undefined', () => {
            expect(
                () => getWeatherSlug(null as any)
            ).toThrowError();
        });

        test('weather ID is negative number', () => {
            expect(
                () => getWeatherSlug(-1)
            ).toThrowError();
        });
    });

    test('return "clear" when weather ID == 800', () => {
        expect(getWeatherSlug(800)).toBe('clear');
    });

    test('return "clouds" when weather ID > 800', () => {
        expect(getWeatherSlug(801)).toBe('clouds');
    });

    test('return "atmosphere" when 700 <= weather ID < 800', () => {
        expect(getWeatherSlug(700)).toBe('atmosphere');
    });

    test('return "snow" when 600 <= weather ID < 700', () => {
        expect(getWeatherSlug(600)).toBe('snow');
    });

    test('return "rain" when 300 <= weather ID < 600', () => {
        expect(getWeatherSlug(300)).toBe('rain');
    });

    test('return "thunderstorm" when weather ID < 300', () => {
        expect(getWeatherSlug(200)).toBe('thunderstorm');
    });
});