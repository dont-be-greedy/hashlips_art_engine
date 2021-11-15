"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "constants/blend_mode.js"));
const { NETWORK } = require(path.join(basePath, "constants/network.js"));

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Llama Wizards";
const description = "No drama, Llama";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "MTU",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://mytesturl.com",
  creators: [
    {
      address: "xxx",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 10,
    layersOrder: [
      { name: "Background" },
      { name: "Llama" },
      { name: "Outfit" },
      { name: "Hat" },
      { name: "Glasses" },
      { name: "Hand" },
    ],
  },
  {
    growEditionSizeTo: 11,
    layersOrder: [
      { name: "Background_Unique_1" },
      { name: "Llama_Unique_1" },
      { name: "Outfit_Unique_1" },
      { name: "Hat_Unique_1" },
      { name: "Hand_Unique_1" },
    ],
  },
  {
    growEditionSizeTo: 12,
    layersOrder: [
      { name: "Background_Unique_2" },
      { name: "Llama_Unique_2" },
      { name: "Outfit_Unique_2" },
      { name: "Hat_Unique_2" },
      { name: "Hand_Unique_2" },
    ],
  },
  {
    growEditionSizeTo: 13,
    layersOrder: [
      { name: "Background_Unique_3" },
      { name: "Llama_Unique_3" },
      { name: "Outfit_Unique_3" },
      { name: "Hat_Unique_3" },
      { name: "Hand_Unique_3" },
    ],
  },
  {
    growEditionSizeTo: 14,
    layersOrder: [
      { name: "Background_Unique_4" },
      { name: "Llama_Unique_4" },
      { name: "Outfit_Unique_4" },
      { name: "Hat_Unique_4" },
      { name: "Hand_Unique_4" },
    ],
  },
  {
    growEditionSizeTo: 15,
    layersOrder: [
      { name: "Background_Unique_5" },
      { name: "Llama_Unique_5" },
      { name: "Outfit_Unique_5" },
      { name: "Hat_Unique_5" },
      { name: "Hand_Unique_5" },
    ],
  },
  {
    growEditionSizeTo: 16,
    layersOrder: [
      { name: "Background_Unique_6" },
      { name: "Llama_Unique_6" },
      { name: "Outfit_Unique_6" },
      { name: "Hat_Unique_6" },
      { name: "Hand_Unique_6" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1080,
  height: 1080,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
