import { SBFFrame as SBFFrame4_10_1 } from "./4-10-1"

export interface SBFBaseBodyBlock {
  name: string
}

// SBFResponse -> Union type of all supported firmware Frames
export type SBFResponse = SBFFrame4_10_1[]

export type SBFParser = (data: Buffer) => SBFResponse

export type Parser = (data: any) => SBFResponse
