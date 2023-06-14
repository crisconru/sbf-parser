import { SBFBodyDataMap } from "../../../shared/types"

const blocks: SBFBodyDataMap = new Map()
// 4006 - PVTCartesian
// 4007 - PVTGeodetic
// 5905 - PosCovCartesian
// 5906 - PosCovGeodetic
// 5907 - VelCovCartesian
// 5908 - VelCovGeodetic
// 4001 - DOP
// 4044 - PosCart
// 4052 - PosLocal
// 4094 - PosProjected
// 4043 - BaseVectorCart
// 4028 - BaseVectorGeod
// 4076 - PTVSupport
// 4079 - PTVSupportA
// 4079 - PTVSupportA
// 5921 - EndOfPVT
// blocks.set(5938, attEuler)
export { blocks }
