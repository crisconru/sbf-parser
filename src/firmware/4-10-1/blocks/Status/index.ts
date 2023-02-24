import { SBFBlock } from '../../types'

const blocks = new Map<number, SBFBlock>()
// 4013 - ChannelStatus
// 4014 - ReceiverStatus
// 4012 - SatVisibility
// 4090 - InputLink
// 4091 - OutputLink
// 4053 - NTRIPClientStatus
// 4122 - NTRIPServerStatus
// 4058 - IPStatus
// 4105 - ChannelDynDNSStatus
// 4082 - QualityInd
// 4059 - DiskStatus
// 4092 - RFStatus
// 4238 - P2PPStatus
// 4243 - CosmosStatus
export { blocks }
