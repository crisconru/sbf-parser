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

const getSBFFrame = (data: Buffer): SBFFrame | null => {
  // Parse Header
  const header = getSBFHeader(data)
  const frame = data.subarray(0, header.length)
  // Check if frame is correct
  if (!isValidFrame(frame, header)) return null
  // Parse Timestamp
  const timestamp = getFrameSBFTimestamp(frame)
  // TODO: Parse Body
  const body = getSBFBody(frame, header.id.blockNumber, header.id.blockRevision)
  // Add frame
  return {
    header,
    timestamp,
    body,
    raw: frame,
    frame: frame.toString('ascii')
  }
} 

export const getSBFFrames = (data: Buffer): SBFFrame[] => {
  // Response
  let sbfFrames: SBFFrame[] = []
  // Auxiliary buffer
  let buffer = data
  // Routine
  while (true) {
    // Look for the first index
    const index = buffer.indexOf(sbf.sync.byte)
    if (index === -1) break
    // Get SBF Frame
    const sbfFrame = getSBFFrame(buffer.subarray(index))
    if (sbfFrame !== null) {
      sbfFrames.push(sbfFrame)
    }
    // Next iteration
    buffer = buffer.subarray(index + 1)
  }
  return sbfFrames
}
