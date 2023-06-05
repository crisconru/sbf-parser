import { crc16xmodem } from 'crc'

export const computedCRC = (data: Buffer): number => crc16xmodem(data)

export const bitState = (num: number, bit: number): boolean => (num >>> bit) % 2 != 0
