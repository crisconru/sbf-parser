import { blocks } from "./blocks"
import { BodyBlock } from "./types"

export const getSBFBody = (data: Buffer, blockNumber: number, blockRevision?: number): BodyBlock => {
  const block = blocks.get(blockNumber)
  if (!block) return null
  // 14-.. bytes -> Body
  const bodyIndex = 14
  const body = data.subarray(bodyIndex)
  return block(body, blockRevision)
}
