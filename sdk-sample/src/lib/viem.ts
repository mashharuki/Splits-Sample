import { createPublicClient, createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { baseSepolia } from 'viem/chains'
import * as dotenv from 'dotenv';

dotenv.config();

const {
  PRIVATE_KEY
} = process.env;
 
export const publicClient = createPublicClient({ 
  chain: baseSepolia, 
  transport: http(), 
}) 

export const walletClient = createWalletClient({
  chain: baseSepolia, 
  transport: http(),
  account: privateKeyToAccount(PRIVATE_KEY! as `0x${string}`),
})