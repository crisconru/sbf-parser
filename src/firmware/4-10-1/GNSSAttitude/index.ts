import { SBFBodyDataMap } from "../../../shared/types"
import { attEuler } from "./AttEuler"
import { auxAntPositions } from "./AuxAntPositions"

const blocks: SBFBodyDataMap = new Map()
// 5938 - AttEuler
blocks.set(5938, attEuler)
// 5939 - AttCovEuler
// 5942 - AuxAntPositions
blocks.set(5942, auxAntPositions)
// 59 43- EndOfAtt
export { blocks }
