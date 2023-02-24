import { 
  getFrames as getFrames4_10_1,
} from "./4-10-1"
import { SBFParser, SBFResponse } from "./types"
import { getBufferData } from "./utils"
// Add firmware
const firmwareParsers = new Map<string, SBFParser>()
firmwareParsers.set('4.10.1', getFrames4_10_1)

const getFirmwares = () => firmwareParsers.keys()
const isAvailableFirmware = (firmware: any): boolean => {
  if (typeof firmware !== 'string') return false
  return firmwareParsers.has(firmware)
}
// Return parser
const getParser = (firmware: string = '4.10.1'): SBFParser | null => {
  const fn = firmwareParsers.get(firmware)

  if (fn) {
    const parseData = (data: any): SBFResponse => {
      const buffer = getBufferData(data)
      return fn(buffer)
    }
    return parseData
  }

  return null
}
// Export
export {
  getFirmwares,
  isAvailableFirmware,
  getParser
}