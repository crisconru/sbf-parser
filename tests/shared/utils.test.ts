import { bitState } from '../../src/shared/utils'

describe('Test shared utils', () => {
  test('bitState', () => {
    const number = 0b11001010
    expect(bitState(number, 0)).toBeFalsy()
    expect(bitState(number, 1)).toBeTruthy()
    expect(bitState(number, 2)).toBeFalsy()
    expect(bitState(number, 3)).toBeTruthy()
    expect(bitState(number, 4)).toBeFalsy()
    expect(bitState(number, 5)).toBeFalsy()
    expect(bitState(number, 6)).toBeTruthy()
    expect(bitState(number, 7)).toBeTruthy()
  })
})