import { blocks } from "./blocks"

export const getSBFBody = (data: Buffer, blockNumber: number, blockRevision?: number): object => {
  const block = blocks.get(blockNumber)
  if (!block) return {}
  // 14-.. bytes -> Body
  const bodyIndex = 14
  const body = data.subarray(bodyIndex)
  return block(body, blockRevision)
}
