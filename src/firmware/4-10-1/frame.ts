import { getSBFBody } from './body'
import { sbf } from './constants'
import { computedCRC, getSBFHeader } from './header'
import { getFrameSBFTimestamp } from './timestamp'
import { SBFFrame, SBFHeader } from './types'

const checkCRC = (data: Buffer, crc: number): boolean => crc === computedCRC(data)

const isValidFrame = (data: Buffer, header: SBFHeader): boolean => {
  // Not enough data
  if (data.length < length) return false
  // Frame is not multiple of 4
  if ((header.length % 4) !== 0) return false
  return checkCRC(data, header.crc)
}

export const getSBFFrame = (data: Buffer): SBFFrame | null => {
  // Parse Header
  const header = getSBFHeader(data)
  const frame = data.subarray(0, header.length)
  // Check if frame is correct
  if (!isValidFrame(frame, header)) return null
  // Parse Timestamp
  const timestamp = getFrameSBFTimestamp(frame)
  // Parse Body
  const bodyBlock = getSBFBody(frame, header.id.blockNumber, header.id.blockRevision)
  if (bodyBlock === null) return null
  const { name, body } = bodyBlock
  // Add frame
  return {
    raw: frame,
    frame: name,
    number: header.id.blockNumber,
    version: header.id.blockRevision,
    header,
    timestamp,
    body,
  }
}
