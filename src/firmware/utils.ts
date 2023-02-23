export const getBufferData = (data: any): Buffer => {
  if (Buffer.isBuffer(data)) return data
  if (typeof data === 'string') return Buffer.from(data, 'ascii')
  try {
    return Buffer.from(data)
  } catch (error) {
    console.error(error)
    throw new Error('Input data should be binary or string ascii data')
  }
}