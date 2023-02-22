import { SBFCommand } from '../../types'
import { number as DOPNumber, dop } from './dop'

const commands = new Map<number, SBFCommand>()

commands.set(DOPNumber, dop)

export { commands }
