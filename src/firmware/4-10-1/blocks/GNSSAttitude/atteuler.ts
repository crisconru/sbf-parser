interface AttEuler {
  nrSV: number | null,
  error: number | null,
  mode: number | null,
  reserved: number | null,
  roll: number | null,
  pitch: number | null,
  heading: number | null,
  pitchDot: number | null,
  rollDot: number | null,
  headingDot: number | null,
  padding: number
}

const number = 5938
const doNotUse = {
  satellites: 255,
  data: -2 * Math.pow(10, 10)
}

const attEuler = (data: Buffer): AttEuler => {
  const body: AttEuler = {
    nrSV: data.readUIntLE(0, 1),
    error: data.readUIntLE(1, 1),
    mode: data.readUIntLE(2, 2),
    reserved: data.readUIntLE(4, 2),
    heading: data.readFloatLE(6),
    pitch: data.readFloatLE(10),
    roll: data.readFloatLE(14),
    pitchDot: data.readFloatLE(18),
    rollDot: data.readFloatLE(22),
    headingDot: data.readFloatLE(26),
    padding: data.readUIntLE(30, 1)
  }
  if (body.nrSV !== doNotUse.satellites) body.nrSV = null
  if (body.roll !== doNotUse.data) body.roll = null
  if (body.rollDot !== doNotUse.data) body.rollDot = null
  if (body.pitch !== doNotUse.data) body.pitch = null
  if (body.pitchDot !== doNotUse.data) body.pitchDot = null
  if (body.heading !== doNotUse.data) body.heading = null
  if (body.headingDot !== doNotUse.data) body.headingDot = null
  return body
}

interface AttEulerError = {
  
}