import { commands as measurement } from './Measurement'
import { commands as navigation } from './Navigation'
import { commands as gps } from './GPSDecoded'
import { commands as glonass } from './GlonassDecoded'
import { commands as galileo } from './GalileoDecoded'
import { commands as beidou } from './BeidouDecoded'
import { commands as qzss } from './QZSSDecoded'
import { commands as sbasl1 } from './SBAS1Decoded'
import { commands as positionVelocityTime } from './PositionVelocityTime'
import { commands as gnssAttitude } from './GNSSAttitude'
import { commands as receiverTime } from './ReceiverTime'
import { commands as externalEvent } from './ExternalEvent'
import { commands as differentialCorrection } from './DifferentialCorrection'
import { commands as lBandModulator } from './LBandDemodulator'
import { commands as status } from './Status'
import { commands as miscellaneous } from './Miscellaneous'
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
const commands = new Map([
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

export { commands }
