import { getFirmwares, getParser, isAvailableFirmware } from "./firmware"
import { SBFParser } from "./firmware/types"

const firmwares = getFirmwares()

export const availableFirmwares = () => firmwares

export const getSBFParser = (firmware: any): SBFParser | null => {
  const error = `firmware must be one of these strings -> ${firmwares}`
  if (!isAvailableFirmware(firmware)) throw new Error(error)
  return getParser(firmware as string)
}