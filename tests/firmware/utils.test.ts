import { getBufferData } from '../../src/firmware/utils'

describe('Test get input data in Buffer', () => {
  test('Buffer input data should return the same', () => {
    const buffer = Buffer.from([0, 1, 2, 3, 4, 5, 6])
    expect(getBufferData(buffer)).toBe(buffer)
    const ascii = buffer.toString('ascii')
    expect(Buffer.isBuffer(getBufferData(ascii))).toBe(true)
    const nothing = { nothing: 123 }
    expect(() => getBufferData(nothing)).toThrow()
  })
})