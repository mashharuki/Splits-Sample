import { SplitV2Client } from '@0xsplits/splits-sdk';
import * as dotenv from 'dotenv';
import { baseSepolia } from 'viem/chains';
import { publicClient, walletClient } from './viem';
import { SplitV2Type } from '@0xsplits/splits-sdk/types';

dotenv.config();

const {
  SPLITS_API_KEY
} = process.env;

// basesepoliaにデプロイしたSplit Contract のアドレス
export const SPLIT_CONTRACT_ADDRESS = "0xac3748646db871CCE56fC6B00398C3105fB974E6";
// EURC 
export const EURC_TOKEN_ADDRESS = "0x808456652fdb597867f38412077A9182bf77359F"
 
// SplitV2Clientのインスタンスを生成
export const splitsClient = new SplitV2Client({
  chainId: baseSepolia.id,
  publicClient: publicClient, 
  walletClient: walletClient, 
  apiConfig: {
    apiKey: SPLITS_API_KEY!
  }, 
})

/**
 * getBalace method
 */
export const getBalance = async () => {
  // get split balance
  const response = await splitsClient.getSplitBalance({
    splitAddress: SPLIT_CONTRACT_ADDRESS,
    tokenAddress: EURC_TOKEN_ADDRESS
  })

  const splitBalance = Number(response.splitBalance) / 10**6;
  const warehouseBalance = Number(response.warehouseBalance) / 10**6;

  console.log("splitBalance:", splitBalance);
  console.log("warehouseBalance:", warehouseBalance);

  return {
    splitBalance,
    warehouseBalance
  }
};

/**
 * Create Split Contract
 */
export const createSplit = async ( walletAddress: `0x${string}`) => {
  // create split
  const response = await splitsClient.createSplit({
    recipients: [
      {
        address: "0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072",
        percentAllocation: 50.0000
      },
      {
        address: "0x1295BDc0C102EB105dC0198fdC193588fe66A1e4",
        percentAllocation: 50.0000
      }
    ],
    distributorFeePercent: 1.0000,
    totalAllocationPercent: 100.0000,
    splitType: SplitV2Type.Push,
    ownerAddress: walletAddress,
    creatorAddress: walletAddress,
    salt: "0x0000000000000000000000000000000000000000000000000000000000000000"
  });

  return response.splitAddress;
};

/**
 * トークンを分配するメソッド
 */
export const distributeToken = async (distributor: `0x${string}`) => {
  // distribute token
  const response = await splitsClient.distribute({
    splitAddress: SPLIT_CONTRACT_ADDRESS,
    tokenAddress: EURC_TOKEN_ADDRESS,
    distributorAddress: distributor
  });

  console.log("distribute response:", response);
};