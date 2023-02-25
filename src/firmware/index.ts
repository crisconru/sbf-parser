import { getSBFFrames as getSBFFrames4_10_1 } from "./4-10-1"
import { Parser, SBFParser, SBFResponse } from "./types"
import { getBufferData } from "./utils"

const firmwareParsers = new Map<string, SBFParser>()
// Add Firmwares
firmwareParsers.set('4.10.1', getSBFFrames4_10_1)
// Firmwares
const getFirmwares = () => firmwareParsers.keys()

const isAvailableFirmware = (firmware: any): boolean => {
  if (typeof firmware !== 'string') return false
  return firmwareParsers.has(firmware)
}

const throwFirmwareError = () => {
  const fmws = Array.from(getFirmwares()).join(', ')
  const error = `Supported firmwares are -> ${fmws}`
  throw new Error(error)
}
// Parsers
const getSBFParser = (firmware: any): Parser => {
  if (!isAvailableFirmware(firmware)) throwFirmwareError()
  const fn = firmwareParsers.get(firmware) as SBFParser
  const parseData: Parser = (data: any): SBFResponse => {
    const buffer = getBufferData(data)
    return fn(buffer)
  }
  return parseData
}
// Export
export {
  getFirmwares,
  getSBFParser,
}