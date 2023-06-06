export type TypedData = {
  number: number,
  buffer: Buffer
}

export enum TypeData {
  INT8,
  INT16,
  INT32,
  INT64,
  UINT8,
  UINT16,
  UINT32,
  UINT64,
  FLOAT,
  DOUBLE
}

export const getTypedData = (num: number, type: TypeData): TypedData | null => {
  let array
  switch (type) {
    case TypeData.INT8:
      array = new Int8Array(1)
      break
    case TypeData.INT16:
      array = new Int16Array(1)
      break
    case TypeData.INT32:
      array = new Int32Array(1)
      break
    // case TypeData.INT64:
    //   array = new BigInt64Array(1)
    //   break
    case TypeData.UINT8:
      array = new Uint8Array(1)
      break
    case TypeData.UINT16:
      array = new Uint16Array(1)
      break
    case TypeData.UINT32:
      array = new Uint32Array(1)
      break
    // case TypeData.UINT64:
    //   array = new BigUint64Array(1)
    //   break
    case TypeData.FLOAT:
      array = new Float32Array(1)
      break
    case TypeData.FLOAT:
      array = new Float64Array(1)
      break
    default:
      return null
  }
  array[0] = num
  return {
    number: array[0],
    buffer: Buffer.from(array.buffer, array.byteOffset, array.byteLength)
  }
}
