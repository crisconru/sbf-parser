export type Padding = number | null

export type SBFID = {
  blockNumber: number,
  blockRevision: number
}

export type SBFHeader = {
  sync: string,
  crc: number,
  id: SBFID,
  length: number
}

export interface SBFTime {
  tow: number | null,
  wnc: number | null,
  timestamp?: number | null,
  date?: string | null
}

export type SBFBody = object | null

export interface SBFBodyData {
  name: string,
  body: SBFBody
}

export type SBFFrame = {
  header: SBFHeader,
  time: SBFTime,
  body: SBFBody,
} 

export type SBFResponse = {
  name: string,
  number: number,
  version: number,
  frame: SBFFrame,
  buffer: Buffer,
}

export enum SBFParsingStatus {
  OK,
  MISSING_BYTES,
  ERROR_LENGTH,
  ERROR_CRC,
}

export type SBFBodyDataParser = (blockNumber: number, blockRevision: number, data: Buffer) => SBFBodyData
export type SBFBodyDataBlockParser = (blockRevision: number, data: Buffer) => SBFBodyData
export type SBFBodyDataMap = Map<number, SBFBodyDataBlockParser>
// ----------------------------------------------------------------------------
export type BodyBlock = { name: string, body: object | null } | null


export type SBFBlock = (body: Buffer, blockRevision?: number) => BodyBlock
