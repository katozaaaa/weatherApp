import { describe, test, expect } from 'vitest';
import {toLocaleDate} from '@/shared';

describe('To locale date', () => {
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
    })

    test('return December 17, 1995 03:24:00 when date is December 17, 1995 03:24:00 and timezone == 10800', () => {
        expect(
            toLocaleDate(
                new Date('December 17, 1995 03:24:00'),
                10800
            ).toString()
        ).toBe('Sun Dec 17 1995 03:24:00 GMT+0300 (Moscow Standard Time)');
    });
});