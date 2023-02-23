export const number = 4001

export interface DOP {
  nrSV: number | null,
  reserved: number,
  pDOP: number | null,
  tDOP: number | null,
  hDOP: number | null,
  vDOP: number | null,
  hpl: number | null,
  vpl: number | null,
  padding: number,
}

export const dop = (body: Buffer, blockRevision?: number): DOP => {
  // 00    Byte  -> NrSV     uint8   LE | Do-Not-Use = 0
  // 01    Byte  -> Reserved uint8   LE
  // 02-03 Bytes -> PDOP     uint16  LE | Do-Not-Use = 0
  // 04-05 Bytes -> TDOP     uint16  LE | Do-Not-Use = 0
  // 06-07 Bytes -> HDOP     uint16  LE | Do-Not-Use = 0
  // 08-09 Bytes -> VDOP     uint16  LE | Do-Not-Use = 0
  // 10-13 Bytes -> HPL      float32 LE | Do-Not-Use = -2*10^10
  // 14-17 Bytes -> VPL      float32 LE | Do-Not-Use = -2*10^10
  // 18-.. Bytes -> Padding  uint8   LE
  const DATA_NULL = 0
  const PL_NULL = -2 * Math.pow(10, 10)
  const data: DOP = {
    nrSV: body.readUIntLE(0, 1),
    reserved: body.readUIntLE(1, 1),
    pDOP: body.readUIntLE(2, 2),
    tDOP: body.readUIntLE(4, 2),
    hDOP: body.readUIntLE(6, 2),
    vDOP: body.readUIntLE(8, 2),
    hpl: body.readFloatLE(10),
    vpl: body.readFloatLE(14),
    padding: body.readUIntLE(18, 1)
  }
  if (data.nrSV === DATA_NULL) {
    data.nrSV = null
    data.pDOP = null
    data.tDOP = null
    data.hDOP = null
    data.vDOP = null
  }
  if (data.pDOP === DATA_NULL) data.pDOP = null
  if (data.tDOP === DATA_NULL) data.tDOP = null
  if (data.hDOP === DATA_NULL) data.hDOP = null
  if (data.vDOP === DATA_NULL) data.vDOP = null
  if (data.hpl === PL_NULL) data.hpl = null
  if (data.vpl === PL_NULL) data.vpl = null
  return data
}
