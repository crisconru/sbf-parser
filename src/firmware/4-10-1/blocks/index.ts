import { blocks as measurement } from './Measurement'
import { blocks as navigation } from './Navigation'
import { blocks as gps } from './GPSDecoded'
import { blocks as glonass } from './GlonassDecoded'
import { blocks as galileo } from './GalileoDecoded'
import { blocks as beidou } from './BeidouDecoded'
import { blocks as qzss } from './QZSSDecoded'
import { blocks as sbasl1 } from './SBAS1Decoded'
import { blocks as positionVelocityTime } from './PositionVelocityTime'
import { blocks as gnssAttitude } from './GNSSAttitude'
import { blocks as receiverTime } from './ReceiverTime'
import { blocks as externalEvent } from './ExternalEvent'
import { blocks as differentialCorrection } from './DifferentialCorrection'
import { blocks as lBandModulator } from './LBandDemodulator'
import { blocks as status } from './Status'
import { blocks as miscellaneous } from './Miscellaneous'
// All the SBF Blocks ----------------------------------------------
// Measurement
// Navigation
// GPS Decoded
// GLONASS Decoded
// Galileo Decoded
// BeiDou Decoded
// QZSS Decoded
// SBAS L1 Decoded
// Position, Velocity and Time
// GNSS Attitude
// Receiver Time
// External Event
// Differential Correction
// L-Band Modulator
// Status
// Miscellaneous
const blocks = new Map([
  ...measurement,
  ...navigation,
  ...gps,
  ...glonass,
  ...galileo,
  ...beidou,
  ...qzss,
  ...sbasl1,
  ...positionVelocityTime,
  ...gnssAttitude,
  ...receiverTime,
  ...externalEvent,
  ...differentialCorrection,
  ...lBandModulator,
  ...status,
  ...miscellaneous,
])

export { blocks }
