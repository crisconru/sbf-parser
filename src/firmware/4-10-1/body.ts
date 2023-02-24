


export const getSBFBody = (data: Buffer, blockNumber: number, blockRevision?: number): object => {
  // 14-.. bytes -> Body
  const bodyIndex = 14
  const body = data.subarray(bodyIndex)
  return {}
}
