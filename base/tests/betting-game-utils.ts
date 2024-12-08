import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/BettingGame/BettingGame"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createBetActivatedEvent(
  betId: BigInt,
  tokenURI: string
): BetActivated {
  let betActivatedEvent = changetype<BetActivated>(newMockEvent())

  betActivatedEvent.parameters = new Array()

  betActivatedEvent.parameters.push(
    new ethereum.EventParam("betId", ethereum.Value.fromUnsignedBigInt(betId))
  )
  betActivatedEvent.parameters.push(
    new ethereum.EventParam("tokenURI", ethereum.Value.fromString(tokenURI))
  )

  return betActivatedEvent
}

export function createBetCancelledEvent(
  betId: BigInt,
  host: Address
): BetCancelled {
  let betCancelledEvent = changetype<BetCancelled>(newMockEvent())

  betCancelledEvent.parameters = new Array()

  betCancelledEvent.parameters.push(
    new ethereum.EventParam("betId", ethereum.Value.fromUnsignedBigInt(betId))
  )
  betCancelledEvent.parameters.push(
    new ethereum.EventParam("host", ethereum.Value.fromAddress(host))
  )

  return betCancelledEvent
}

export function createBetClosedEvent(
  betId: BigInt,
  winner: Address,
  winnerTwitter: string,
  winnerEmail: string,
  actualAmount: BigInt
): BetClosed {
  let betClosedEvent = changetype<BetClosed>(newMockEvent())

  betClosedEvent.parameters = new Array()

  betClosedEvent.parameters.push(
    new ethereum.EventParam("betId", ethereum.Value.fromUnsignedBigInt(betId))
  )
  betClosedEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  betClosedEvent.parameters.push(
    new ethereum.EventParam(
      "winnerTwitter",
      ethereum.Value.fromString(winnerTwitter)
    )
  )
  betClosedEvent.parameters.push(
    new ethereum.EventParam(
      "winnerEmail",
      ethereum.Value.fromString(winnerEmail)
    )
  )
  betClosedEvent.parameters.push(
    new ethereum.EventParam(
      "actualAmount",
      ethereum.Value.fromUnsignedBigInt(actualAmount)
    )
  )

  return betClosedEvent
}

export function createBetCreatedEvent(
  betId: BigInt,
  amount: BigInt,
  hostTwitter: string,
  host: Address,
  endTimeStamp: BigInt,
  privateKey: string,
  hostEmail: string
): BetCreated {
  let betCreatedEvent = changetype<BetCreated>(newMockEvent())

  betCreatedEvent.parameters = new Array()

  betCreatedEvent.parameters.push(
    new ethereum.EventParam("betId", ethereum.Value.fromUnsignedBigInt(betId))
  )
  betCreatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  betCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "hostTwitter",
      ethereum.Value.fromString(hostTwitter)
    )
  )
  betCreatedEvent.parameters.push(
    new ethereum.EventParam("host", ethereum.Value.fromAddress(host))
  )
  betCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "endTimeStamp",
      ethereum.Value.fromUnsignedBigInt(endTimeStamp)
    )
  )
  betCreatedEvent.parameters.push(
    new ethereum.EventParam("privateKey", ethereum.Value.fromString(privateKey))
  )
  betCreatedEvent.parameters.push(
    new ethereum.EventParam("hostEmail", ethereum.Value.fromString(hostEmail))
  )

  return betCreatedEvent
}

export function createBetPlacedEvent(
  betId: BigInt,
  bettor: Address,
  bettorTwitter: string,
  bettorEmail: string,
  amount: BigInt
): BetPlaced {
  let betPlacedEvent = changetype<BetPlaced>(newMockEvent())

  betPlacedEvent.parameters = new Array()

  betPlacedEvent.parameters.push(
    new ethereum.EventParam("betId", ethereum.Value.fromUnsignedBigInt(betId))
  )
  betPlacedEvent.parameters.push(
    new ethereum.EventParam("bettor", ethereum.Value.fromAddress(bettor))
  )
  betPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "bettorTwitter",
      ethereum.Value.fromString(bettorTwitter)
    )
  )
  betPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "bettorEmail",
      ethereum.Value.fromString(bettorEmail)
    )
  )
  betPlacedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return betPlacedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}
