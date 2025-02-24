import { getBalance } from "./lib/splits";
import { publicClient, walletClient } from "./lib/viem";


/**
 * 検証用のメインスクリプト
 */
const main = async() => {
  // get blockNumber
  const blockNumber = await publicClient.getBlockNumber() 
  console.log("blockNumber:", blockNumber)
  // get address
  const [address] = await walletClient.getAddresses() 
  console.log("address:", address)
  // get balance of split contract
  await getBalance();
};

main();