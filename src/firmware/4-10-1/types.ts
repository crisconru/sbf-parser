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
  // Binary data
  raw: Buffer,
  // Meta data
  frame: string,
  number: number,
  version: number,
  // Frame Blocks
  header: SBFHeader,
  timestamp: SBFTimeStamp,
  body: object,
}

export type BodyBlock = { name: string, body: object } | null

export type SBFBlock = (body: Buffer, blockRevision?: number) => BodyBlock