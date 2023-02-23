import { SBFTimeStamp } from "./types"

export const getFrameSBFTimestamp = (frame: Buffer): SBFTimeStamp => {
  // 08-11 bytes -> TOW     uint32 LE | Do-Not-Use = 4294967295
  // 12-13 bytes -> WNc     uint16 LE | Do-Not-Use = 65535
  // 14-.. bytes -> Body
  const towIndex = 8
  const wncIndex = 12
  const bodyIndex = 14
  const TOW_NULL = 4294967295
  const WNC_NULL = 65535
  const tow = frame.readUIntLE(towIndex, wncIndex)
  const wnc = frame.readUIntLE(wncIndex, bodyIndex)
  return {
      tow: (tow !== TOW_NULL) ? tow : null,
      wnc: ( wnc !== WNC_NULL) ? wnc : null
  }
}