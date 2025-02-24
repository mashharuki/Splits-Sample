import { createSplit, getBalance } from "./lib/splits";
import { publicClient, walletClient } from "./lib/viem";

/**
 * SplitContractを作るスクリプト
 */
const main = async() => {
  // get address
  const [address] = await walletClient.getAddresses() 
  console.log("address:", address)
  // create split contract
  const splitAddress = await createSplit(address);
  console.log("splitAddress:", splitAddress);
};

main();