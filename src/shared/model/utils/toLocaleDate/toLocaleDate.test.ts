import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest';
import { toLocaleDate } from '@/shared';

describe('To locale date', () => {
    let mockOffset;

    beforeEach(() => {
        mockOffset = vi
            .spyOn(Date.prototype, 'getTimezoneOffset')
            .mockImplementation(() => -180);
    });

    afterEach(() => {
        mockOffset.mockRestore();
    });

    describe('throw error when', () => {
        test('date is null or undefined', () => {
            expect(
                () => toLocaleDate(
                    null as any,
                    7200
                )
            ).toThrowError();
        });

        test('timezone is null or undefined', () => {
            expect(
                () => toLocaleDate(
                    new Date('December 17, 1995 03:24:00'),
                    null as any
                )
            ).toThrowError();
        });
    });

    test(`return ${new Date('December 17, 1995 03:24:00')} when date is ${new Date('December 17, 1995 03:24:00')} and timezone == 10800`, () => {
        expect(
            toLocaleDate(
                new Date('December 17, 1995 03:24:00'),
                10800
            ).toString()
        ).toBe((new Date('December 17, 1995 03:24:00')).toString());
    });
});