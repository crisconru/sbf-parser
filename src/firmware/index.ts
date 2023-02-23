import { 
  getFrames as getFrames4_10_1,
} from "./4-10-1"
import { SBFParser, SBFResponse } from "./types"
import { getBufferData } from "./utils"
// Add firmware
const firmwareParser = new Map<string, SBFParser>()
firmwareParser.set('4.10.1', getFrames4_10_1)

const getFirmwares = () => firmwareParser.keys()
const isAvailableFirmware = (firmware: any): boolean => {
  if (typeof firmware !== 'string') return false
  return firmwareParser.has(firmware)
}
// Return parser
const getSBFParser = (firmware: string = '4.10.1'): SBFParser | null => {
  const fn = firmwareParser.get(firmware)

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
  firmwareParser,
  getFirmwares,
  isAvailableFirmware,
  getSBFParser
}