import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  BetActivated as BetActivatedEvent,
  BetCancelled as BetCancelledEvent,
  BetClosed as BetClosedEvent,
  BetCreated as BetCreatedEvent,
  BetPlaced as BetPlacedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Transfer as TransferEvent
} from "../generated/BettingGame/BettingGame"
import {
  Approval,
  ApprovalForAll,
  BetActivated,
  BetCancelled,
  BetClosed,
  BetCreated,
  BetPlaced,
  OwnershipTransferred,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBetActivated(event: BetActivatedEvent): void {
  let entity = new BetActivated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.betId = event.params.betId
  entity.tokenURI = event.params.tokenURI

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBetCancelled(event: BetCancelledEvent): void {
  let entity = new BetCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.betId = event.params.betId
  entity.host = event.params.host

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBetClosed(event: BetClosedEvent): void {
  let entity = new BetClosed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.betId = event.params.betId
  entity.winner = event.params.winner
  entity.winnerTwitter = event.params.winnerTwitter
  entity.winnerEmail = event.params.winnerEmail
  entity.actualAmount = event.params.actualAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBetCreated(event: BetCreatedEvent): void {
  let entity = new BetCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.betId = event.params.betId
  entity.amount = event.params.amount
  entity.hostTwitter = event.params.hostTwitter
  entity.host = event.params.host
  entity.endTimeStamp = event.params.endTimeStamp
  entity.privateKey = event.params.privateKey
  entity.hostEmail = event.params.hostEmail

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBetPlaced(event: BetPlacedEvent): void {
  let entity = new BetPlaced(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.betId = event.params.betId
  entity.bettor = event.params.bettor
  entity.bettorTwitter = event.params.bettorTwitter
  entity.bettorEmail = event.params.bettorEmail
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
