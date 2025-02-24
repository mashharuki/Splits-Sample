import { createSplit, distributeToken, getBalance } from "./lib/splits";
import { publicClient, walletClient } from "./lib/viem";

/**
 * SplitContractを作るスクリプト
 */
const main = async() => {
  // get address
  const [address] = await walletClient.getAddresses() 
  console.log("address:", address)
  // distribute token
  await distributeToken(address);
};

main();