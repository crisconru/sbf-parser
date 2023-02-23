export interface SBFID {
  blockNumber: number,
  blockRevision: number
}

export interface SBFHeader {
  sync: string,
  crc: number,
  id: SBFID,
  length: number
}

export interface SBFTimeStamp {
  tow: number | null,
  wnc: number | null,
  timestamp?: number | null
}

export interface SBFFrame {
  header: SBFHeader,
  timestamp: SBFTimeStamp
  body: {}
  raw: Buffer
  frame: string
}

export type SBFCommand = (body: Buffer, blockRevision?: number) => object