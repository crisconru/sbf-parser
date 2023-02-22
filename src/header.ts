import { crc16xmodem } from 'crc'
import { SBFHeader, SBFID } from "./types";

const getFrameNumberVersion = (id: Buffer): SBFID => {
  // ID = 16 bits = 2 bytes
  // 00-12 bits -> block number
  // 13-15 bits -> block version
  const number0 = id[0]
  const number1 = id[1] & 0b00011111
  const number = Buffer.from([number0, number1]).readUInt16LE()
  const revisionByte = (id[1] & 0b11100000) >>> 5
  const revision = Buffer.from([revisionByte]).readUIntLE(0, 1)
  return {
    blockNumber: number,
    blockRevision: revision
  }
}

export const getSBFHeader = (data: Buffer): SBFHeader => {
  // 00-01 bytes -> Sync    char
  // 02-03 bytes -> CRC     uint16 LE
  // 04-05 bytes -> ID      uint16 LE
  // 06-07 bytes -> Length  uint16 LE
  // 08-.. bytes -> Rest    bytes
  const crcIndex = 2
  const idIndex = 4
  const lenIndex = 6
  const restIndex = 8
  return {
    sync: data.toString('ascii', 0, crcIndex),
    crc: data.readUIntLE(crcIndex, idIndex),
    id: getFrameNumberVersion(data.subarray(idIndex, lenIndex)),
    length: data.readUIntLE(lenIndex, restIndex)
  }
}

export const computedCRC = (data: Buffer): number => {
  // 00-01 bytes -> Sync    char
  // 02-03 bytes -> CRC     uint16 LE
  // 04-05 bytes -> ID      uint16 LE
  // 06-07 bytes -> Length  uint16 LE
  // 08-.. bytes -> Rest    bytes
  const crcIndex = 2
  const idIndex = 4
  const crc = data.subarray(crcIndex, idIndex)
  return crc16xmodem(crc)
}