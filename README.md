# Splits-Sample
Splits プロトコルを学習・調査するためのリポジトリです。

## 動かし方

- インストール

  ```bash
  yarn 
  ```

- Splitの情報を取得する

  ```bash
  yarn dev
  ```

- Splitを作成する

  ```bash
  yarn createSplit
  ```

- トークンを分配する

  ```bash
  yarn distribute
  ```

  ```bash
  distribute response: {
    event: {
      address: '0xac3748646db871cce56fc6b00398c3105fb974e6',
      blockHash: '0xe8b8d1358d2c44cdac367c881a4953eb9a4dda8de8dc617e82a9d032193658dd',
      blockNumber: 22312892n,
      data: '0x00000000000000000000000000000000000000000000000000000000000f423f',
      logIndex: 71,
      removed: false,
      topics: [
        '0x562c19c0e7b3493417e3cf5103baa939f4d0e9c1087be236aebb46b84e09c7d9',
        '0x000000000000000000000000808456652fdb597867f38412077a9182bf77359f',
        '0x00000000000000000000000051908f598a5e0d8f1a3babfa6df76f9704dad072'
      ],
      transactionHash: '0x2cbce780256d55ad29f7f71eb6aae2a22bb6bcb35d8d977e04036078b6c85afc',
      transactionIndex: 20
    }
  }
  ```

### 参考文献
1. [アプリコンソール画面](https://app.splits.org/new/split/?chainId=8453)
2. [公式サイト](https://splits.org/)
3. [開発者ドキュメント](https://docs.splits.org/sdk/splits-v2)
4. [GitHub - Splitモノレポ](https://github.com/0xSplits/splits-contracts-monorepo/blob/main/packages/splits-v2/src/SplitsWarehouse.sol)
5. [GitHub - splitV2コントラクト](https://github.com/0xSplits/splits-contracts-monorepo/tree/main/packages/splits-v2)
6. [デプロイしたSplitコントラクト](https://base-sepolia.blockscout.com/address/0xcc511017E5876412780010860544A86D374Bd5Dd?tab=logs)
7. []()
8. []()