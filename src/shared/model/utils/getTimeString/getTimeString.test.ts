import { describe, test, expect } from 'vitest';
import { getTimeString } from '@/shared';

describe('Get time string', () => {
    test('throw error when date is null or undefined', () => {
        expect(() => getTimeString(null as any)).toThrowError();
    });

    test('return "03:24" when date is December 17, 1995 03:24:00', () => {
        expect(
            getTimeString(new Date('December 17, 1995 03:24:00'))
        ).toBe('03:24');
    });
});