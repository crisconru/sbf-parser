import { getSBFFrame } from "./frame"
import { SBFFrame } from "./types"

const getSBFFrames = (data: Buffer): SBFFrame[] => {
  // Response
  let sbfFrames: SBFFrame[] = []
  // Auxiliary buffer
  let buffer = data
  // Routine
  while (true) {
    // Look for the first index
    const index = buffer.indexOf(sbf.sync.byte)
    if (index === -1) break
    // Get SBF Frame
    const sbfFrame = getSBFFrame(buffer.subarray(index))
    if (sbfFrame !== null) {
      sbfFrames.push(sbfFrame)
    }
    // Next iteration
    buffer = buffer.subarray(index + 1)
  }
  return sbfFrames
}

export {
  SBFFrame,
  getSBFFrames
}