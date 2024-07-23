export default {
  tutorial: [
    {
      type: "category",
      label: "Getting Started",
      className: "category-getting-started",
      collapsible: false,
      items: [
        "getting-started/how-ckb-works",
        "getting-started/quick-start",
        "getting-started/blockchain-networks",
      ],
    },
    {
      type: "category",
      label: "SDK & Devtools",
      className: "category-tool",
      collapsible: false,
      items: [
        "sdk-and-devtool/rust",
        "sdk-and-devtool/go",
        "sdk-and-devtool/java",
        "sdk-and-devtool/lumos",
        "sdk-and-devtool/cli-tools",
        "sdk-and-devtool/devtool",
      ],
    },
    {
      type: "category",
      label: "DApp Tutorials",
      className: "category-dapp",
      collapsible: false,
      items: [
        "dapp/transfer-ckb",
        "dapp/store-data-on-cell",
        "dapp/create-token",
        "dapp/create-dob",
        "dapp/simple-lock",
      ],
    },
    {
      type: "category",
      label: "Scripts (Smart Contracts)",
      className: "category-script",
      collapsible: false,
      items: [
        "script/intro-to-script",
        "script/program-language-for-script",
        "script/syscalls-for-script",
        "script/vm-cycle-limits",
        "script/minimal-script",
        "script/type-id",
        "script/js-script",
        "script/debug-script",
        "script/common-script-error-code",
      ],
    },
    {
      type: "category",
      label: "Integrate Wallets",
      className: "category-integrate-wallets",
      collapsible: false,
      items: [
        "integrate-wallets/intro-to-wallets",
        "integrate-wallets/ccc-wallet",
        "integrate-wallets/joyid",
      ],
    },
    {
      type: "category",
      label: "Common Scripts",
      className: "category-common-scripts",
      collapsible: false,
      items: [
        "common-scripts/omnilock",
        "common-scripts/xudt",
        "common-scripts/spore-protocol",
        "common-scripts/spore-dob-0",
      ],
    },
    {
      type: "category",
      label: "Network & Nodes",
      className: "category-node",
      collapsible: false,
      items: [
        "node/rpcs",
        "node/run-mainnet-node",
        "node/run-testnet-node",
        "node/run-devnet-node",
        "node/run-public-rpc-node",
      ],
    },
    {
      type: "category",
      label: "Serialization (Molecule)",
      className: "category-molecule",
      collapsible: false,
      items: [
        "serialization/serialization-molecule-in-ckb",
        "serialization/features-molecule",
        "serialization/use-in-ckb-scripts",
        "serialization/tools-molecule",
        "serialization/schema-language",
        "serialization/encoding-specs",
        "serialization/example-role-playing-game",
      ],
    },
    {
      type: "category",
      label: "How-Tos",
      className: "category-howto",
      collapsible: false,
      items: [
        "how-tos/how-to-sign-a-tx",
        "how-tos/how-to-calculate-tx-hash",
        "how-tos/how-to-calculate-script-hash",
        "how-tos/how-to-calculate-code-hash",
      ],
    },
    {
      type: "category",
      label: "Tech Explanation",
      className: "category-tech-explanation",
      collapsible: false,
      items: [
        "tech-explanation/nervos-blockchain",
        "tech-explanation/cell",
        "tech-explanation/cell-model",
        "tech-explanation/capacity",
        "tech-explanation/script",
        "tech-explanation/code-hash",
        "tech-explanation/hash-type",
        "tech-explanation/script-args",
        "tech-explanation/lock-script",
        "tech-explanation/type-script",
        "tech-explanation/lock-type-diff",
        "tech-explanation/script-group-exe",
        "tech-explanation/witness",
        "tech-explanation/ckbhash",
        "tech-explanation/transaction",
        "tech-explanation/cell-deps",
        "tech-explanation/out-point",
        "tech-explanation/dep-type",
        "tech-explanation/dep-group",
        "tech-explanation/header-dep",
        "tech-explanation/cellinput",
        "tech-explanation/previous-output",
        "tech-explanation/outpoint",
        "tech-explanation/since",
        "tech-explanation/outputs",
        "tech-explanation/outputs-data",
        "tech-explanation/block",
        "tech-explanation/header",
        "tech-explanation/rawheader",
        "tech-explanation/transactions",
        "tech-explanation/uncles",
        "tech-explanation/proposals",
        "tech-explanation/ckb-address",
        "tech-explanation/ckb-vm",
        "tech-explanation/consensus",
        "tech-explanation/economics",
        "tech-explanation/glossary",
      ],
    },
    {
      type: "category",
      label: "Mining",
      className: "category-mining",
      collapsible: false,
      items: [
        "mining/algorithm-difficulty",
        "mining/rewards",
        "mining/halving",
        "mining/cost-and-profit",
        "mining/risks",
        "mining/hardware",
        "mining/guide",
        "mining/info-stats",
      ],
    },
    {
      type: "category",
      label: "Ecosystem",
      className: "category-ecosystem",
      collapsible: false,
      items: ["ecosystem/projects", "ecosystem/organizations"],
    },
    {
      type: "category",
      label: "Resources",
      className: "category-resources",
      collapsible: false,
      items: [
        {
          type: "link",
          label: "Positioning Paper",
          href: "https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0001-positioning/0001-positioning.md",
        },
        {
          type: "link",
          label: "CKB RFCs",
          href: "https://github.com/nervosnetwork/rfcs",
        },
        {
          type: "link",
          label: "CKB Dev Log",
          href: "https://github.com/nervosnetwork/ckb/discussions/categories/dev-log",
        },
        {
          type: "link",
          label: "CKB Academy",
          href: "https://academy.ckb.dev/",
        },
        {
          type: "link",
          label: "CKB Cookbook",
          href: "https://cookbook.ckbdapps.com/",
        },
      ],
    },
  ],
};
