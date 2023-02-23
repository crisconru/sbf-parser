import { getSBFFrames } from "./frame"
import { SBFFrame } from "./types"

export const getFrames = (data: Buffer): SBFFrame[] => getSBFFrames(data)
export {
  SBFFrame
}