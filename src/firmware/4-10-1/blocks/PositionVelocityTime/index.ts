import { SBFBlock } from '../../types'
import { number as DOPNumber, dop } from '../PositionVelocityTime/dop'

const blocks = new Map<number, SBFBlock>()
// 4006 - PVTCartesian
// 4007 - PVTGeodetic
// 5905 - PosCovCartesian
// 5906 - PosCovGeodetic
// 5907 - VelCovCartesian
// 5908 - VelCovGeodetic
// 4001 - DOP
blocks.set(DOPNumber, dop)
// 4044 - PosCart
// 4052 - PosLocal
// 4094 - PosProjected
// 4043 - BaseVectorCart
// 4028 - BaseVectorGeod
// 4076 - PVTSupport
// 4079 - PVTSupportA
// 5921 - EndofPVT
export { blocks }
