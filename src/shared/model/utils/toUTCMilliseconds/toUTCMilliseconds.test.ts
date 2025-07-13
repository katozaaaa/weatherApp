import { describe, test, expect, beforeEach, vi, afterEach } from 'vitest';
import { toUTCMilliseconds } from '@/shared';

describe('To UTC milliseconds', () => {
    let mockOffset;

    beforeEach(() => {
        mockOffset = vi
            .spyOn(Date.prototype, 'getTimezoneOffset')
            .mockImplementation(() => -180);
    });

    afterEach(() => {
        mockOffset.mockRestore();
    });

    test('throw error when date is null or undefined', () => {
        expect(() => toUTCMilliseconds(null as any)).toThrowError();
    });

    test('return "03:24" when date is December 17, 1995 03:24:00', () => {
        expect(
            toUTCMilliseconds(new Date('December 17, 1995 03:24:00'))
        ).toBe(819159840000);
    });
});