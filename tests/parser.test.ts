import { Parser } from '../src/parser'

describe('Testing Parser', () => {
  test('Default', () => {
    let firmware = '4.10.1'
    let memory = false
    let parser = new Parser()
    expect(parser.memory).toBe(memory)
    expect(parser.firmware).toBe(firmware)
    // Change memory
    memory = true
    parser.memory = memory
    expect(parser.memory).toBe(memory)
    // Same with constructor
    parser = new Parser(firmware, memory)
    expect(parser.memory).toBe(memory)
    expect(parser.firmware).toBe(firmware)
  })
  test('Firmware errors', () => {
    let firmware: any = 45
    expect(() => new Parser(firmware)).toThrow()
    firmware = 'alskgj'
    expect(() => new Parser(firmware)).toThrow()
  })
})