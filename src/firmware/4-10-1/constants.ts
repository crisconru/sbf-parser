const sync = {
  ascii: '$@',
  decimal: [36, 64],
  hex: [0x24, 0x40],
  byte: Buffer.from([36, 64]),
}

const doNotUse = {
  tow: 4294967295,
  wnc: 65535
}

const sbf = { sync, doNotUse }

export {
  sbf
}
