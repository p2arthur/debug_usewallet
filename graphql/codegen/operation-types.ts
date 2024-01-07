import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AlgorandAddress: string;
  EmailAddress: string;
  JSONObject: any;
  ObjectId: string;
  Timestamp: string;
  Uint8Array: Uint8Array;
};

export type AddressNfd = {
  __typename?: 'AddressNFD';
  address: Scalars['AlgorandAddress'];
  nfd?: Maybe<Nfd>;
};

export enum AllNftSort {
  New = 'NEW',
  Old = 'OLD',
  SaleAscending = 'SALE_ASCENDING',
  SaleDescending = 'SALE_DESCENDING'
}

export type ApplicationDetails = {
  __typename?: 'ApplicationDetails';
  accountCreated: Scalars['Boolean'];
  art?: Maybe<Array<Scalars['String']>>;
  email: Scalars['EmailAddress'];
  id: Scalars['ObjectId'];
  instagram?: Maybe<Scalars['String']>;
  inviteLink?: Maybe<Scalars['String']>;
  links?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  status: ApplicationStatuses;
  twitter?: Maybe<Scalars['String']>;
};

export type ApplicationStatus = {
  __typename?: 'ApplicationStatus';
  artUploaded: Scalars['Boolean'];
  emailVerified: Scalars['Boolean'];
  instagram?: Maybe<Scalars['String']>;
  links?: Maybe<Scalars['String']>;
  requiresArt: Scalars['Boolean'];
  socialsAdded: Scalars['Boolean'];
  status: ApplicationStatuses;
  twitter?: Maybe<Scalars['String']>;
};

export enum ApplicationStatuses {
  AddingSocials = 'ADDING_SOCIALS',
  ApplicationAccepted = 'APPLICATION_ACCEPTED',
  ApplicationRejected = 'APPLICATION_REJECTED',
  AwaitingReview = 'AWAITING_REVIEW',
  UploadingArtworks = 'UPLOADING_ARTWORKS',
  VerifyEmail = 'VERIFY_EMAIL'
}

export type ApplicationsPaginated = {
  __typename?: 'ApplicationsPaginated';
  applications: Array<ApplicationDetails>;
  pageInfo: PageInfo;
};

export type ArtistDetails = {
  __typename?: 'ArtistDetails';
  artist: UserAritstInfo;
  generalStats: GeneralStats;
  walletAddress: Scalars['AlgorandAddress'];
};

export type ArtistFeatured = {
  __typename?: 'ArtistFeatured';
  categories: Array<Scalars['String']>;
  isFeatured: Scalars['Boolean'];
};

export type ArtistPage = {
  __typename?: 'ArtistPage';
  bannerImage?: Maybe<Media>;
  customLinks: Array<CustomLink>;
  description: Scalars['String'];
  profileImage?: Maybe<Media>;
  twitter?: Maybe<Scalars['String']>;
};

export type ArtistPageInput = {
  bannerImage?: InputMaybe<MediaInput>;
  customLinks: Array<CustomLinkInput>;
  description: Scalars['String'];
  profileImage?: InputMaybe<MediaInput>;
  twitter?: InputMaybe<Scalars['String']>;
};

export type ArtistSettingsInput = {
  location: Scalars['String'];
  name: Scalars['String'];
  page: ArtistPageInput;
};

export type ArtistStats = {
  __typename?: 'ArtistStats';
  floor: Scalars['JSONObject'];
  totalMinted: Scalars['Int'];
  totalSold: Scalars['JSONObject'];
};

export enum AsaCode {
  Algo = 'ALGO',
  Gold = 'GOLD',
  Silver = 'SILVER',
  Stbl2 = 'STBL2',
  Usdc = 'USDC',
  GoBtc = 'goBTC',
  GoEth = 'goETH'
}

export type BandDate = {
  __typename?: 'BandDate';
  endDate: Scalars['String'];
  startDate: Scalars['String'];
};

export type BandDetails = {
  __typename?: 'BandDetails';
  asaAmount: Scalars['Int'];
  asas?: Maybe<Array<Scalars['String']>>;
  coin: Scalars['Float'];
  date?: Maybe<BandDate>;
  id: Scalars['ObjectId'];
  name: Scalars['String'];
  period: Scalars['Int'];
  status: BandStatuses;
  wallets?: Maybe<Array<Scalars['String']>>;
};

export type BandStatus = {
  __typename?: 'BandStatus';
  name: Scalars['String'];
  status: BandStatuses;
  wallets?: Maybe<Array<Scalars['String']>>;
};

export enum BandStatuses {
  BandBlocked = 'BAND_BLOCKED',
  BandCreated = 'BAND_CREATED',
  BandPaused = 'BAND_PAUSED',
  BandStarted = 'BAND_STARTED'
}

export type BandsPaginated = {
  __typename?: 'BandsPaginated';
  bands: Array<BandDetails>;
  pageInfo: PageInfo;
};

export type BuyFixedBidParams = {
  appId: Scalars['Int'];
  buyerAddress: Scalars['AlgorandAddress'];
  nNFTs: Scalars['Int'];
};

export enum Card_Type {
  Square = 'SQUARE',
  Wide = 'WIDE'
}

export type Collection = {
  __typename?: 'Collection';
  artists: Array<CollectionArtist>;
  attributes: Array<CollectionAttribute>;
  description: Scalars['String'];
  id: Scalars['ObjectId'];
  media: CollectionMedia;
  normalizedTitle: Scalars['String'];
  rarity: Scalars['Boolean'];
  stats: CollectionStats;
  title: Scalars['String'];
};

export type CollectionAddress = {
  __typename?: 'CollectionAddress';
  active: Scalars['Boolean'];
  address: Scalars['String'];
  locked: Scalars['Boolean'];
};

export type CollectionArtist = {
  __typename?: 'CollectionArtist';
  address: Scalars['AlgorandAddress'];
  id: Scalars['String'];
  name: Scalars['String'];
  normalizedName: Scalars['String'];
  profileImage?: Maybe<Media>;
};

export type CollectionAttribute = {
  __typename?: 'CollectionAttribute';
  displayType: Scalars['String'];
  range: CollectionAttributeRange;
  traitType: Scalars['String'];
  values: Array<CollectionAttributeValue>;
};

export type CollectionAttributeInput = {
  displayType: Scalars['String'];
  range?: InputMaybe<CollectionAttributeRangeInput>;
  traitType: Scalars['String'];
  values: Array<Scalars['String']>;
};

export type CollectionAttributeRange = {
  __typename?: 'CollectionAttributeRange';
  max: Scalars['Float'];
  min: Scalars['Float'];
};

export type CollectionAttributeRangeInput = {
  max: Scalars['Float'];
  min: Scalars['Float'];
};

export type CollectionAttributeValue = {
  __typename?: 'CollectionAttributeValue';
  rarityScore?: Maybe<Scalars['Float']>;
  value: Scalars['String'];
};

export type CollectionMedia = {
  __typename?: 'CollectionMedia';
  banner?: Maybe<Media>;
  card?: Maybe<Media>;
};

export type CollectionMediaInput = {
  banner?: InputMaybe<MediaInput>;
  card?: InputMaybe<MediaInput>;
};

export type CollectionSettings = {
  __typename?: 'CollectionSettings';
  artists: Array<CollectionSettingsArtist>;
  attributes: Array<CollectionSettingsAttribute>;
  description: Scalars['String'];
  id?: Maybe<Scalars['ObjectId']>;
  locked: Scalars['Boolean'];
  media: CollectionMedia;
  mintingAddresses: Array<CollectionAddress>;
  normalizedTitle: Scalars['String'];
  private: Scalars['Boolean'];
  rarity: Scalars['Boolean'];
  stats: CollectionStats;
  title: Scalars['String'];
  type: Scalars['String'];
};

export type CollectionSettingsArtist = {
  __typename?: 'CollectionSettingsArtist';
  address: Scalars['AlgorandAddress'];
  id: Scalars['String'];
  name: Scalars['String'];
  normalizedName: Scalars['String'];
  profileImage?: Maybe<Media>;
  status: Scalars['String'];
};

export type CollectionSettingsAttribute = {
  __typename?: 'CollectionSettingsAttribute';
  displayType: Scalars['String'];
  range: CollectionSettingsAttributeRange;
  traitType: Scalars['String'];
  values: Array<CollectionSettingsAttributeValue>;
};

export type CollectionSettingsAttributeRange = {
  __typename?: 'CollectionSettingsAttributeRange';
  max: Scalars['Float'];
  min: Scalars['Float'];
  usedValues: Array<Scalars['Float']>;
};

export type CollectionSettingsAttributeValue = {
  __typename?: 'CollectionSettingsAttributeValue';
  locked: Scalars['Boolean'];
  rarityScore?: Maybe<Scalars['Float']>;
  value: Scalars['String'];
};

export type CollectionSettingsInput = {
  attributes: Array<CollectionAttributeInput>;
  description: Scalars['String'];
  media: CollectionMediaInput;
  mintingAddresses: Array<Scalars['String']>;
  private: Scalars['Boolean'];
  rarity: Scalars['Boolean'];
  title: Scalars['String'];
  type: Scalars['String'];
};

export enum CollectionSort {
  New = 'NEW',
  Random = 'RANDOM',
  Volume = 'VOLUME'
}

export type CollectionStats = {
  __typename?: 'CollectionStats';
  floor: Scalars['JSONObject'];
  nNFTs: Scalars['Int'];
  sales: Scalars['Int'];
  volume: Scalars['JSONObject'];
};

export type CollectionsPaginated = {
  __typename?: 'CollectionsPaginated';
  collections: Array<Collection>;
  pageInfo: PageInfo;
};

export type CollectorPage = {
  __typename?: 'CollectorPage';
  description?: Maybe<Scalars['String']>;
  overWriteNfdomains: Scalars['Boolean'];
  profileImage?: Maybe<Media>;
};

export type CreatedAsset = {
  __typename?: 'CreatedAsset';
  createdAtRound: Scalars['Int'];
  deleted: Scalars['Boolean'];
  index: Scalars['Int'];
  params: CreatedAssetsParams;
};

export type CreatedAssetsParams = {
  __typename?: 'CreatedAssetsParams';
  clawback?: Maybe<Scalars['String']>;
  creator: Scalars['String'];
  decimals: Scalars['Int'];
  defaultFrozen?: Maybe<Scalars['Boolean']>;
  manager?: Maybe<Scalars['String']>;
  metadataHash?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  reserve?: Maybe<Scalars['String']>;
  total: Scalars['Int'];
  unitName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type CreatedNft = {
  __typename?: 'CreatedNFT';
  balance: Scalars['Int'];
  nft: Nft;
};

export type CreatedNfTsPaginated = {
  __typename?: 'CreatedNFTsPaginated';
  nfts: Array<CreatedNft>;
  pageInfo: PageInfo;
};

export type CustomLink = {
  __typename?: 'CustomLink';
  name: Scalars['String'];
  url: Scalars['String'];
};

export type CustomLinkInput = {
  name: Scalars['String'];
  url: Scalars['String'];
};

export type DeleteNfTsInfo = {
  __typename?: 'DeleteNFTsInfo';
  indexes: Array<Scalars['Int']>;
  partialErrors?: Maybe<Array<Scalars['String']>>;
};

export type DeployFixedBidParams = {
  currency: AsaCode;
  nftIndex: Scalars['Int'];
  payoutAddress: Scalars['AlgorandAddress'];
  price: Scalars['Float'];
  sellerAddress: Scalars['AlgorandAddress'];
};

export type DepositFixedBidParams = {
  appId: Scalars['Int'];
  nNFTs: Scalars['Int'];
};

export type DestroyFixedBidParams = {
  appId: Scalars['Int'];
};

export type DestroyV1ListingParams = {
  listingAddress: Scalars['AlgorandAddress'];
};

export enum Edit_Stage {
  Collection = 'COLLECTION',
  Info = 'INFO',
  Media = 'MEDIA',
  Token = 'TOKEN'
}

export type ExtractFixedBidParams = {
  appId: Scalars['Int'];
  nNFTs: Scalars['Int'];
};

export type FeaturedSection = {
  __typename?: 'FeaturedSection';
  artists: Array<UserAritstInfo>;
  id: Scalars['ObjectId'];
  normalizedTitle: Scalars['String'];
  title: Scalars['String'];
};

export type FeaturedSectionInput = {
  artists: Array<Scalars['String']>;
  enabled: Scalars['Boolean'];
  title: Scalars['String'];
};

export enum FiatCode {
  Aed = 'AED',
  Algo = 'ALGO',
  All = 'ALL',
  Amd = 'AMD',
  Ars = 'ARS',
  Aud = 'AUD',
  Azn = 'AZN',
  Bdt = 'BDT',
  Bgn = 'BGN',
  Bhd = 'BHD',
  Bmd = 'BMD',
  Bob = 'BOB',
  Brl = 'BRL',
  Byn = 'BYN',
  Cad = 'CAD',
  Chf = 'CHF',
  Clp = 'CLP',
  Cny = 'CNY',
  Cop = 'COP',
  Crc = 'CRC',
  Cup = 'CUP',
  Czk = 'CZK',
  Dkk = 'DKK',
  Dop = 'DOP',
  Dzd = 'DZD',
  Egp = 'EGP',
  Eur = 'EUR',
  Gbp = 'GBP',
  Gel = 'GEL',
  Ghs = 'GHS',
  Hkd = 'HKD',
  Hnl = 'HNL',
  Hrk = 'HRK',
  Idr = 'IDR',
  Ils = 'ILS',
  Inr = 'INR',
  Iqd = 'IQD',
  Irr = 'IRR',
  Isk = 'ISK',
  Jmd = 'JMD',
  Jod = 'JOD',
  Jpy = 'JPY',
  Kes = 'KES',
  Kgs = 'KGS',
  Khr = 'KHR',
  Krw = 'KRW',
  Kwd = 'KWD',
  Kzt = 'KZT',
  Lbp = 'LBP',
  Mad = 'MAD',
  Mdl = 'MDL',
  Mkd = 'MKD',
  Mmk = 'MMK',
  Mnt = 'MNT',
  Mur = 'MUR',
  Mxn = 'MXN',
  Myr = 'MYR',
  Nad = 'NAD',
  Ngn = 'NGN',
  Nio = 'NIO',
  Nok = 'NOK',
  Npr = 'NPR',
  Nzd = 'NZD',
  Omr = 'OMR',
  Pab = 'PAB',
  Pen = 'PEN',
  Php = 'PHP',
  Pkr = 'PKR',
  Qar = 'QAR',
  Rub = 'RUB',
  Sar = 'SAR',
  Sek = 'SEK',
  Sgd = 'SGD',
  Ssp = 'SSP',
  Thb = 'THB',
  Tnd = 'TND',
  Try = 'TRY',
  Ttd = 'TTD',
  Twd = 'TWD',
  Uah = 'UAH',
  Ugx = 'UGX',
  Usd = 'USD',
  Uyu = 'UYU',
  Uzs = 'UZS',
  Ves = 'VES',
  Vnd = 'VND',
  Xag = 'XAG',
  Xau = 'XAU',
  Xpd = 'XPD',
  Zar = 'ZAR'
}

export type Fileroom = {
  __typename?: 'Fileroom';
  id: Scalars['String'];
  token: Scalars['String'];
};

export enum FilterCombine {
  And = 'AND',
  Or = 'OR'
}

export type FixedBidInfo = {
  __typename?: 'FixedBidInfo';
  listings: Array<FixedBidListing>;
  partialErrors?: Maybe<Array<Scalars['String']>>;
};

export type FixedBidListing = {
  __typename?: 'FixedBidListing';
  appId: Scalars['Int'];
  contractAddress: Scalars['AlgorandAddress'];
  currency: AsaCode;
  managerPayoutAddress: Scalars['AlgorandAddress'];
  managerShare: Scalars['Int'];
  nft?: Maybe<Nft>;
  nftIndex: Scalars['Int'];
  price: Scalars['Float'];
  primary: Scalars['Boolean'];
  royaltyPayoutAddress: Scalars['AlgorandAddress'];
  royaltyRevenueSink?: Maybe<Scalars['AlgorandAddress']>;
  royaltyShare: Scalars['Int'];
  sellerAddress: Scalars['AlgorandAddress'];
  sellerPayoutAddress: Scalars['AlgorandAddress'];
  sellerRevenueSink?: Maybe<Scalars['AlgorandAddress']>;
  sellerShare: Scalars['Int'];
  status: FixedBidStatus;
};

export type FixedBidPaginated = {
  __typename?: 'FixedBidPaginated';
  listings: Array<FixedBidListing>;
  pageInfo: PageInfo;
};

export type FixedBidStatus = {
  __typename?: 'FixedBidStatus';
  balance: Scalars['Int'];
  deleted: Scalars['Boolean'];
  isSetup: Scalars['Boolean'];
};

export type GeneralStats = {
  __typename?: 'GeneralStats';
  followers: Scalars['Int'];
  following: Scalars['Int'];
};

export type HistoricalQuote = {
  __typename?: 'HistoricalQuote';
  quotes?: Maybe<Scalars['JSONObject']>;
  timestamp: Scalars['String'];
};

export enum ListingType {
  All = 'ALL',
  Auction = 'AUCTION',
  FixedBid = 'FIXED_BID'
}

export type Media = {
  __typename?: 'Media';
  cid: Scalars['String'];
  fileroomId?: Maybe<Scalars['String']>;
  mimeType: Scalars['String'];
  previews: Array<MediaPreview>;
};

export type MediaInput = {
  cid: Scalars['String'];
  fileroomId?: InputMaybe<Scalars['String']>;
  mimeType: Scalars['String'];
  previews: Array<MediaPreviewInput>;
};

export type MediaPreview = {
  __typename?: 'MediaPreview';
  cid: Scalars['String'];
  mimeType: Scalars['String'];
  size: Scalars['Int'];
};

export type MediaPreviewInput = {
  cid: Scalars['String'];
  mimeType: Scalars['String'];
  size: Scalars['Int'];
};

export type MintingInfo = {
  __typename?: 'MintingInfo';
  nfts: Array<NftSettings>;
  partialErrors?: Maybe<Array<Scalars['String']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * - **@auth:** bearer JWT
   * - **@role:** requires `USER` role
   * - **Private query:** This route can only be used by origins registered by Dartroom for security reasons.
   */
  addNotificationSubscription: NotificationSettings;
  /**
   * Move an application to a new status. When moving forward, emails will be sent out according to the status change to notify the user and send relevant followup links.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ADMIN` role
   */
  changeApplicationStatus: ApplicationDetails;
  /**
   * Move an Band to a new status.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ADMIN` role
   */
  changeBandStatus: BandDetails;
  createApplication?: Maybe<Scalars['String']>;
  createArtistAccount?: Maybe<Scalars['String']>;
  /**
   * Create a Band
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ADMIN` role
   */
  createBand?: Maybe<Scalars['String']>;
  /**
   * Create a new featured section.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ADMIN` role
   */
  createFeaturedSection: Scalars['String'];
  /**
   * Save a new NFT concept to get back the new document ID.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ARTIST` role
   */
  createNewNFT: NftSettings;
  /**
   * Delete a especific Band
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ADMIN` role
   */
  deleteBand?: Maybe<Scalars['Boolean']>;
  /**
   * Delete a collection by ObjectId. This action is only possible if the collection is unlocked. A collection is only unlocked if there are no NFTs connected to it.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ARTIST` role
   */
  deleteCollection: Scalars['String'];
  /**
   * Delete NFTs by id. This function is part of the batch processing system, meaning you must supply an array of ids. And that if one of the provided NFTs can not be deleted, none are.
   *
   * This route will only work for concept NFTs, not for NFTs that were already minted, for those you will need to use `getDeleteNFTParams` and `getDeleteNFT`.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ARTIST` role
   */
  deleteNFTs: Array<Scalars['ObjectId']>;
  dummyMutation?: Maybe<Scalars['String']>;
  /**
   * Update a concept NFT by id. The server function will update the stage and edit statuses based on the completed fields.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ARTIST` role
   */
  editNFT: NftSettings;
  exportSales?: Maybe<Scalars['String']>;
  generateFileroomJWT: Scalars['String'];
  /**
   * Import an artist account from v1.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ADMIN` role
   */
  generateV1Config?: Maybe<Scalars['JSONObject']>;
  /**
   * Import an artist account from v1.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ADMIN` role
   */
  importArtistFromV1?: Maybe<Scalars['String']>;
  /**
   * Import a collection from v1.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ADMIN` role
   */
  importCollectionFromV1?: Maybe<Scalars['String']>;
  /**
   * Import a NFT from v1.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ADMIN` role
   */
  importNFTFromV1?: Maybe<Scalars['String']>;
  importSalesV1?: Maybe<Array<Maybe<Sale>>>;
  /**
   * Import an NFT you created into Dartroom.
   *
   * Import restrictions:
   * - supported metadata types: ARC3 & ARC69
   * - supported media types: PNG, JPG, JPEG, WEBP, AVIF, TIFF, GIF, MP4, SVG, PDF
   * - clawback addresses are not allowed
   * - decimals are not alowed
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ARTIST` role
   */
  importToken?: Maybe<Scalars['String']>;
  /**
   * Directly invite a artist by their email and name.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ADMIN` role
   */
  inviteArtist: ApplicationDetails;
  /**
   * - **@auth:** bearer JWT
   * - **@role:** requires `USER` role
   * - **Private query:** This route can only be used by origins registered by Dartroom for security reasons.
   */
  removeNotificationSubscription: NotificationSettings;
  repairCollectionVolume: Scalars['String'];
  repairNFTDocument: Nft;
  repairSales?: Maybe<Scalars['String']>;
  saveApplicationLinks?: Maybe<Scalars['String']>;
  submitApplicationSocials?: Maybe<Scalars['String']>;
  submitBuyFixedBid: FixedBidInfo;
  /**
   * Submit NFT deletion transaction. NFTs will be deleted in order of the `getDeleteNFTParams` request. Make sure to keep the order of the transactions the same before submitting them in this route.
   *
   * In case one of the deletion transactions fails, the following transaction will not be submitted. Transactions before the failed one are already submitted and can no longer be rolled back.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ARTIST` role
   */
  submitDeleteNFT: DeleteNfTsInfo;
  submitDeployFixedBid: FixedBidInfo;
  submitDepositFixedBid: FixedBidInfo;
  submitDestroyFixedBid: FixedBidInfo;
  submitDestroyV1Listing: V1ListingInfo;
  submitExtractFixedBid: FixedBidInfo;
  /**
   * Submit NFT minting transaction. NFTs will be minted in order of the `getMintNFTParams` request. Make sure to keep the order of the transactions the same before submitting them in this route.
   *
   * In case one of the transactions minting transactions fails, the following transaction will not be submitted to prevent changing the intended on-chain order of the collection. Transactions before the failed one are already submitted and can no longer be rolled back. Therefore a failed transaction will not cause the whole function to fail, instead returning the minted NFTs in an array along with the error messages about the failed transactions.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ARTIST` role
   */
  submitMintNFT: MintingInfo;
  submitSetupFixedBid: FixedBidInfo;
  /**
   * Submit Transfer coin
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ARTIST` role
   */
  submitTransferCoin: Scalars['Boolean'];
  submitUpdatePriceFixedBid: FixedBidInfo;
  /**
   * Game ASA transfer
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ADMIN` role
   */
  transferAsa?: Maybe<Scalars['Boolean']>;
  /**
   * Game Currency transfer
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ADMIN` role
   */
  transferCoin?: Maybe<Scalars['Boolean']>;
  /**
   * Transfer coin a all wallets the especific Band
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ADMIN` role
   */
  transferCoinBand: Array<Array<UsignedTxn>>;
  /**
   * Update artist settings with the new passed-in settings.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ARTIST` role
   */
  updateArtistSettings: UserAritstInfo;
  /**
   * Update a especific Band
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ADMIN` role
   */
  updateBand?: Maybe<Scalars['Boolean']>;
  /**
   * - **@auth:** bearer JWT
   * - **@role:** requires `USER` role
   * - **Private query:** This route can only be used by origins registered by Dartroom for security reasons.
   */
  updateNotificationCategories: NotificationSettings;
  /**
   * If an objectId is provided, the existing collection corresponding to the objectId will be updated. If no objectId is provided, a new collection will be created with the passed-in settings.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ARTIST` role
   */
  upsertCollection: CollectionSettings;
  /**
   * Fully authenticated login to give access to the artist and collector features.
   * Users can either authenticate with a password if set or with a verification transaction.
   * A JWT is returned along with some basic account information such as a profile picture cid.
   */
  userLogin: UserInfo;
};


export type MutationAddNotificationSubscriptionArgs = {
  subscription: NotificationSubscription;
};


export type MutationChangeApplicationStatusArgs = {
  id: Scalars['ObjectId'];
  status: ApplicationStatuses;
};


export type MutationChangeBandStatusArgs = {
  id: Scalars['ObjectId'];
  period: Scalars['Int'];
  status: BandStatuses;
};


export type MutationCreateApplicationArgs = {
  email: Scalars['EmailAddress'];
  name: Scalars['String'];
};


export type MutationCreateArtistAccountArgs = {
  address: Scalars['AlgorandAddress'];
  id: Scalars['ObjectId'];
  name: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
  txn: SignedTxn;
};


export type MutationCreateBandArgs = {
  asaAmount: Scalars['Int'];
  asas: Array<Scalars['String']>;
  coin: Scalars['Float'];
  name: Scalars['String'];
  period: Scalars['Int'];
  wallets: Array<Scalars['String']>;
};


export type MutationCreateFeaturedSectionArgs = {
  section: FeaturedSectionInput;
};


export type MutationCreateNewNftArgs = {
  settings: NftSettingsInput;
};


export type MutationDeleteBandArgs = {
  id: Scalars['ObjectId'];
};


export type MutationDeleteCollectionArgs = {
  id: Scalars['ObjectId'];
};


export type MutationDeleteNfTsArgs = {
  ids: Array<Scalars['ObjectId']>;
};


export type MutationEditNftArgs = {
  id: Scalars['ObjectId'];
  settings: NftSettingsInput;
};


export type MutationGenerateFileroomJwtArgs = {
  dartroomID: Scalars['ObjectId'];
  fileroomID: Scalars['ObjectId'];
};


export type MutationGenerateV1ConfigArgs = {
  fullImport: Scalars['Boolean'];
  id: Scalars['ObjectId'];
};


export type MutationImportArtistFromV1Args = {
  id: Scalars['ObjectId'];
};


export type MutationImportCollectionFromV1Args = {
  artistId: Scalars['ObjectId'];
  id: Scalars['ObjectId'];
};


export type MutationImportNftFromV1Args = {
  artistId: Scalars['ObjectId'];
  collectionId?: InputMaybe<Scalars['ObjectId']>;
  index: Scalars['Int'];
};


export type MutationImportSalesV1Args = {
  address: Scalars['AlgorandAddress'];
};


export type MutationImportTokenArgs = {
  collectionId?: InputMaybe<Scalars['ObjectId']>;
  index: Scalars['Int'];
};


export type MutationInviteArtistArgs = {
  email: Scalars['EmailAddress'];
  name: Scalars['String'];
};


export type MutationRemoveNotificationSubscriptionArgs = {
  subscriptionHash: Scalars['String'];
};


export type MutationRepairCollectionVolumeArgs = {
  id: Scalars['String'];
};


export type MutationRepairNftDocumentArgs = {
  index: Scalars['Int'];
};


export type MutationRepairSalesArgs = {
  id: Scalars['String'];
};


export type MutationSaveApplicationLinksArgs = {
  id: Scalars['ObjectId'];
  links: Scalars['String'];
  token: Scalars['String'];
};


export type MutationSubmitApplicationSocialsArgs = {
  id: Scalars['ObjectId'];
  links: Scalars['String'];
  token: Scalars['String'];
};


export type MutationSubmitBuyFixedBidArgs = {
  txns: Array<Array<SignedTxn>>;
};


export type MutationSubmitDeleteNftArgs = {
  txns: Array<Array<SignedTxn>>;
};


export type MutationSubmitDeployFixedBidArgs = {
  txns: Array<Array<SignedTxn>>;
};


export type MutationSubmitDepositFixedBidArgs = {
  txns: Array<Array<SignedTxn>>;
};


export type MutationSubmitDestroyFixedBidArgs = {
  txns: Array<Array<SignedTxn>>;
};


export type MutationSubmitDestroyV1ListingArgs = {
  txns: Array<Array<SignedTxn>>;
};


export type MutationSubmitExtractFixedBidArgs = {
  txns: Array<Array<SignedTxn>>;
};


export type MutationSubmitMintNftArgs = {
  txns: Array<Array<SignedTxn>>;
};


export type MutationSubmitSetupFixedBidArgs = {
  txns: Array<Array<SignedTxn>>;
};


export type MutationSubmitTransferCoinArgs = {
  txns: Array<Array<SignedTxn>>;
};


export type MutationSubmitUpdatePriceFixedBidArgs = {
  txns: Array<Array<SignedTxn>>;
};


export type MutationTransferAsaArgs = {
  assetId: Scalars['Int'];
  transAmount: Scalars['Int'];
  walletAddress: Array<Scalars['String']>;
};


export type MutationTransferCoinArgs = {
  transAmount: Scalars['Int'];
  walletAddress: Array<Scalars['String']>;
};


export type MutationTransferCoinBandArgs = {
  id: Scalars['ObjectId'];
};


export type MutationUpdateArtistSettingsArgs = {
  settings: ArtistSettingsInput;
};


export type MutationUpdateBandArgs = {
  asaAmount?: InputMaybe<Scalars['Int']>;
  asas?: InputMaybe<Array<Scalars['String']>>;
  coin?: InputMaybe<Scalars['Float']>;
  id: Scalars['ObjectId'];
  name?: InputMaybe<Scalars['String']>;
  period?: InputMaybe<Scalars['Int']>;
  wallets?: InputMaybe<Array<Scalars['String']>>;
};


export type MutationUpdateNotificationCategoriesArgs = {
  categories: Array<NotificationCategoryInput>;
};


export type MutationUpsertCollectionArgs = {
  id?: InputMaybe<Scalars['ObjectId']>;
  settings: CollectionSettingsInput;
};


export type MutationUserLoginArgs = {
  address: Scalars['AlgorandAddress'];
  password?: InputMaybe<Scalars['String']>;
  txn?: InputMaybe<SignedTxn>;
};

export type Nfd = {
  __typename?: 'NFD';
  i: NfDi;
  u: NfDu;
  v: NfDv;
};

export type NfDi = {
  __typename?: 'NFDi';
  asaId: Scalars['Int'];
  category: Scalars['String'];
  commission1?: Maybe<Scalars['Int']>;
  commission1Agent?: Maybe<Scalars['AlgorandAddress']>;
  contractLocked: Scalars['Boolean'];
  highestSoldAmt?: Maybe<Scalars['Int']>;
  mintingKickoffAmount?: Maybe<Scalars['Int']>;
  mintingKickoffCreator?: Maybe<Scalars['AlgorandAddress']>;
  name: Scalars['String'];
  owner: Scalars['AlgorandAddress'];
  saleType?: Maybe<Scalars['String']>;
  sellamt?: Maybe<Scalars['Int']>;
  seller?: Maybe<Scalars['AlgorandAddress']>;
  timeChanged?: Maybe<Scalars['Int']>;
  timeCreated: Scalars['Int'];
  timePurchased?: Maybe<Scalars['Int']>;
  ver: Scalars['String'];
};

export type NfDu = {
  __typename?: 'NFDu';
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  banner?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  caalgo?: Maybe<Scalars['String']>;
  discord?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  telegram?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type NfDv = {
  __typename?: 'NFDv';
  avatar?: Maybe<Scalars['String']>;
  avatarasaid?: Maybe<Scalars['Int']>;
  banner?: Maybe<Scalars['String']>;
  bannerasaid?: Maybe<Scalars['Int']>;
  caAlgo?: Maybe<Scalars['AlgorandAddress']>;
  discord?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  telegram?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

export type Nft = {
  __typename?: 'NFT';
  artist: NftArtist;
  c?: Maybe<NftCollection>;
  card: NftCard;
  id: Scalars['ObjectId'];
  info: NftInfo;
  listings: NftListings;
  media: NftMedia;
  metadata: NftMetadata;
  statistics: NftStatistics;
  status: Scalars['String'];
  token: NftToken;
};

export type NftArtist = {
  __typename?: 'NFTArtist';
  address: Scalars['String'];
  deleted: Scalars['Boolean'];
  id: Scalars['String'];
  name: Scalars['String'];
  normalizedName: Scalars['String'];
  profileImage?: Maybe<Media>;
  suspended: Scalars['Boolean'];
};

export type NftAuction = {
  __typename?: 'NFTAuction';
  currency: AsaCode;
  duration: Scalars['Int'];
  highestBid: Scalars['Float'];
  price: Scalars['Float'];
  primary: Scalars['Boolean'];
  started: Scalars['Boolean'];
};

export type NftCard = {
  __typename?: 'NFTCard';
  type: Card_Type;
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export enum NftCollectedSort {
  Artist = 'ARTIST',
  New = 'NEW',
  Old = 'OLD',
  PriceAscending = 'PRICE_ASCENDING',
  PriceDescending = 'PRICE_DESCENDING',
  SaleAscending = 'SALE_ASCENDING',
  SaleDescending = 'SALE_DESCENDING'
}

export enum NftCollectedStatus {
  All = 'ALL',
  Collected = 'COLLECTED',
  Listed = 'LISTED'
}

export type NftCollection = {
  __typename?: 'NFTCollection';
  attributes: Array<NftCollectionAttribute>;
  card?: Maybe<Media>;
  id: Scalars['String'];
  normalizedTitle: Scalars['String'];
  title: Scalars['String'];
};

export type NftCollectionAttribute = {
  __typename?: 'NFTCollectionAttribute';
  displayType: Scalars['String'];
  traitType: Scalars['String'];
  value: Scalars['String'];
};

export type NftFixedBid = {
  __typename?: 'NFTFixedBid';
  currency: AsaCode;
  price: Scalars['Float'];
  primary: Scalars['Boolean'];
};

export type NftInfo = {
  __typename?: 'NFTInfo';
  ai: Scalars['Boolean'];
  aiDescription: Scalars['String'];
  description: Scalars['String'];
  link: Scalars['String'];
  nsfw: Scalars['Boolean'];
  tags: Array<Scalars['String']>;
  title: Scalars['String'];
  updated: Scalars['Boolean'];
};

export type NftListings = {
  __typename?: 'NFTListings';
  auctions: Array<NftAuction>;
  fixedBid: Array<NftFixedBid>;
  listed: Scalars['Boolean'];
};

export type NftMedia = {
  __typename?: 'NFTMedia';
  cid: Scalars['String'];
  dimensions: Scalars['String'];
  fileroomId?: Maybe<Scalars['String']>;
  integrity: Scalars['String'];
  mimeType: Scalars['String'];
  previews: Array<NftMediaPreview>;
  storageSize: Scalars['Int'];
  thumbnail?: Maybe<Media>;
};

export type NftMediaPreview = {
  __typename?: 'NFTMediaPreview';
  cid: Scalars['String'];
  integrity?: Maybe<Scalars['String']>;
  mimeType: Scalars['String'];
  size: Scalars['Int'];
};

export type NftMetadata = {
  __typename?: 'NFTMetadata';
  cid: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  integrity: Scalars['String'];
  mimeType: Scalars['String'];
  standard: Scalars['String'];
};

export type NftOwner = {
  __typename?: 'NFTOwner';
  address: Scalars['AlgorandAddress'];
  listingBalance: Scalars['Int'];
  walletBalance: Scalars['Int'];
};

export enum NftSaleStatus {
  All = 'ALL',
  ForSale = 'FOR_SALE',
  Sold = 'SOLD'
}

export type NftSettings = {
  __typename?: 'NFTSettings';
  artist: NftSettingsArtist;
  c?: Maybe<NftSettingsCollection>;
  card: NftSettingsCard;
  edit: NftSettingsEdit;
  id?: Maybe<Scalars['ObjectId']>;
  info: NftSettingsInfo;
  media?: Maybe<NftSettingsMedia>;
  stage: Edit_Stage;
  status: Nft_State;
  token: NftSettingsToken;
};

export type NftSettingsArtist = {
  __typename?: 'NFTSettingsArtist';
  address: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  normalizedName: Scalars['String'];
  profileImage?: Maybe<Media>;
};

export type NftSettingsCard = {
  __typename?: 'NFTSettingsCard';
  type: Card_Type;
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type NftSettingsCardInput = {
  type: Card_Type;
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type NftSettingsCollection = {
  __typename?: 'NFTSettingsCollection';
  attributes: Array<NftSettingsCollectionAttribute>;
  id: Scalars['String'];
  title: Scalars['String'];
};

export type NftSettingsCollectionAttribute = {
  __typename?: 'NFTSettingsCollectionAttribute';
  displayType: Scalars['String'];
  traitType: Scalars['String'];
  value: Scalars['String'];
};

export type NftSettingsCollectionAttributeInput = {
  displayType: Scalars['String'];
  traitType: Scalars['String'];
  value: Scalars['String'];
};

export type NftSettingsCollectionInput = {
  attributes: Array<NftSettingsCollectionAttributeInput>;
  id: Scalars['String'];
  title: Scalars['String'];
};

export type NftSettingsEdit = {
  __typename?: 'NFTSettingsEdit';
  collection: Nft_Edit_State;
  info: Nft_Edit_State;
  media: Nft_Edit_State;
  token: Nft_Edit_State;
};

export type NftSettingsInfo = {
  __typename?: 'NFTSettingsInfo';
  ai: Scalars['Boolean'];
  aiDescription: Scalars['String'];
  description: Scalars['String'];
  link: Scalars['String'];
  nsfw: Scalars['Boolean'];
  tags: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type NftSettingsInfoInput = {
  ai: Scalars['Boolean'];
  aiDescription: Scalars['String'];
  description: Scalars['String'];
  link: Scalars['String'];
  nsfw: Scalars['Boolean'];
  tags: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type NftSettingsInput = {
  c?: InputMaybe<NftSettingsCollectionInput>;
  card: NftSettingsCardInput;
  info: NftSettingsInfoInput;
  media?: InputMaybe<NftSettingsMediaInput>;
  token: NftSettingsTokenInput;
};

export type NftSettingsMedia = {
  __typename?: 'NFTSettingsMedia';
  cid: Scalars['String'];
  dimensions: Scalars['String'];
  fileroomId: Scalars['String'];
  integrity: Scalars['String'];
  mimeType: Scalars['String'];
  previews: Array<NftSettingsMediaPreview>;
  storageSize: Scalars['Int'];
  thumbnail?: Maybe<Media>;
};

export type NftSettingsMediaInput = {
  cid: Scalars['String'];
  dimensions: Scalars['String'];
  fileroomId: Scalars['String'];
  integrity: Scalars['String'];
  mimeType: Scalars['String'];
  previews: Array<NftSettingsMediaPreviewInput>;
  storageSize: Scalars['Int'];
  thumbnail?: InputMaybe<MediaInput>;
};

export type NftSettingsMediaPreview = {
  __typename?: 'NFTSettingsMediaPreview';
  cid: Scalars['String'];
  integrity?: Maybe<Scalars['String']>;
  mimeType: Scalars['String'];
  size: Scalars['Int'];
};

export type NftSettingsMediaPreviewInput = {
  cid: Scalars['String'];
  integrity?: InputMaybe<Scalars['String']>;
  mimeType: Scalars['String'];
  size: Scalars['Int'];
};

export type NftSettingsPaginated = {
  __typename?: 'NFTSettingsPaginated';
  nfts: Array<NftSettings>;
  pageInfo: PageInfo;
};

export type NftSettingsToken = {
  __typename?: 'NFTSettingsToken';
  assetName: Scalars['String'];
  editions: Scalars['Int'];
  royalty: Scalars['Int'];
  unitName: Scalars['String'];
};

export type NftSettingsTokenInput = {
  assetName: Scalars['String'];
  editions: Scalars['Int'];
  royalty: Scalars['Int'];
  unitName: Scalars['String'];
};

export enum NftSort {
  New = 'NEW',
  Old = 'OLD',
  PriceAscending = 'PRICE_ASCENDING',
  PriceDescending = 'PRICE_DESCENDING',
  SaleAscending = 'SALE_ASCENDING',
  SaleDescending = 'SALE_DESCENDING'
}

export type NftStatistics = {
  __typename?: 'NFTStatistics';
  latestSale?: Maybe<NftStatisticsSale>;
  sold: Scalars['Boolean'];
};

export type NftStatisticsSale = {
  __typename?: 'NFTStatisticsSale';
  currency?: Maybe<AsaCode>;
  price?: Maybe<Scalars['Float']>;
  usdValue?: Maybe<Scalars['Float']>;
};

export type NftToken = {
  __typename?: 'NFTToken';
  assetName: Scalars['String'];
  editions: Scalars['Int'];
  index: Scalars['Int'];
  mintAddress: Scalars['String'];
  royalty: Scalars['Int'];
  timestamp: Scalars['Timestamp'];
  unitName: Scalars['String'];
};

export enum Nft_Edit_State {
  Completed = 'COMPLETED',
  Locked = 'LOCKED',
  Open = 'OPEN'
}

export enum Nft_State {
  Concept = 'CONCEPT',
  Destroyed = 'DESTROYED',
  Minted = 'MINTED'
}

export type NfTsPaginated = {
  __typename?: 'NFTsPaginated';
  nfts: Array<Nft>;
  pageInfo: PageInfo;
};

export type NotificationCategory = {
  __typename?: 'NotificationCategory';
  category: Scalars['String'];
  type: Scalars['String'];
};

export type NotificationCategoryInput = {
  category: Scalars['String'];
  type: Scalars['String'];
};

export type NotificationSettings = {
  __typename?: 'NotificationSettings';
  enabled: Array<NotificationCategory>;
  subscriptions: Array<Scalars['String']>;
};

export type NotificationSubscription = {
  endpoint: Scalars['String'];
  hash: Scalars['String'];
  keys: NotificationSubscriptionKeys;
  userAgent: Scalars['String'];
};

export type NotificationSubscriptionKeys = {
  auth: Scalars['String'];
  p256dh: Scalars['String'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  offset: Scalars['Int'];
  page: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  dummyQuery?: Maybe<Scalars['String']>;
  /**
   * Find the deposit address of an NFD based on the .algo domain name.
   *
   * - **@auth:** no requirements
   * - **@role:** no requirements
   */
  getAddressByNFD?: Maybe<Scalars['AlgorandAddress']>;
  /**
   * Fetch all collections.
   *
   * - **@auth:** no requirements
   * - **@role:** no requirements
   */
  getAllCollections: CollectionsPaginated;
  /**
   * Fetch all NFTs.
   *
   * - **@auth:** no requirements
   * - **@role:** no requirements
   */
  getAllNFTs: NfTsPaginated;
  /**
   * Fetch a paginated list of all sales sorted by date.
   *
   * - **@auth:** no requirements
   * - **@role:** no requirements
   */
  getAllSales: SalePaginated;
  /**
   * Fetches all submitted applications within the specified ranges.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ADMIN` role
   */
  getApplications: ApplicationsPaginated;
  /**
   * Fetch all public details of an artist account.
   *
   * - **@auth:** no requirements
   * - **@role:** no requirements
   */
  getArtistDetails: ArtistDetails;
  /**
   * Fetch the artist-specific settings for a user account.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ARTIST` role
   */
  getArtistSettings: UserAritstInfo;
  /**
   * Fetch a list of all NFTs that have been created by the user outside of Dartroom and are available to be imported into Dartroom.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ARTIST` role
   */
  getAvailableNFTsForImporting: NfTsPaginated;
  /**
   * Fetches one available information about the Bands
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ADMIN` role
   */
  getBand: BandDetails;
  /**
   * Fetches all available information about the Bands
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ADMIN` role
   */
  getBands: BandsPaginated;
  getBuyFixedBidParams: Array<Array<UsignedTxn>>;
  /**
   * Fetch a list of all NFTs colelcted by user. Note that this route will only return NFTs that are created by users on Dartroom or NFTs that are imported into Dartroom.
   *
   * - **@auth:** no requirements
   * - **@role:** no requirements
   */
  getCollectedNFTs: CreatedNfTsPaginated;
  /**
   * Fetch collection details.
   *
   * - **@auth:** no requirements
   * - **@role:** no requirements
   */
  getCollectionDetails: Collection;
  /**
   * If an objectId is provided, the settings object for this specific collection will be returned. If no objectId is provided, a template of the settings object for the specific user will be provided with prefilled-in information like their artist profile.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ARTIST` role
   */
  getCollectionSettings: CollectionSettings;
  /**
   * Fetch all collections from a specific artist.
   *
   * - **@auth:** no requirements
   * - **@role:** no requirements
   */
  getCollectionsByArtist: CollectionsPaginated;
  /**
   * Fetch a list of all concepts by user.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ARTIST` role
   */
  getConceptNFTs: NftSettingsPaginated;
  /**
   * Fetch a list of all NFTs created by user. Note that this route will only return NFTs that are created by the user on Dartroom or NFTs that are imported into Dartroom.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ARTIST` role
   */
  getCreatedNFTs: CreatedNfTsPaginated;
  /**
   * Returns the most recent quotes for the specified ASA and fiat combinations. Quotes get updated every hour.
   *
   * - **Private query:** This route can only be used by origins registered by Dartroom due to licencing limitations.
   */
  getCurrentQuotes: Quote;
  /**
   * Generate the transaction array for the deletion of one or multiple NFTs.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ARTIST` role
   */
  getDeleteNFTParams: Array<Array<UsignedTxn>>;
  getDeployFixedBidParams: Array<Array<UsignedTxn>>;
  getDepositFixedBidParams: Array<Array<UsignedTxn>>;
  getDestroyFixedBidParams: Array<Array<UsignedTxn>>;
  getDestroyV1ListingParams: Array<Array<UsignedTxn>>;
  /**
   * Fetch a list of all NFTs that the artist has created, but are not yet imported into Dartroom.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ARTIST` role
   */
  getExternalNFTsList: Array<CreatedAsset>;
  getExtractFixedBidParams: Array<Array<UsignedTxn>>;
  /**
   * Get featured artists sections. Each section containes a number of artists.
   *
   * - **@auth:** no requirements
   * - **@role:** no requirements
   */
  getFeaturedArtists: Array<FeaturedSection>;
  getFixedBidsByArtist: FixedBidPaginated;
  getFixedBidsByCollector: FixedBidPaginated;
  getFixedBidsByNFT: Array<FixedBidListing>;
  /**
   * Returns quotes for the specified ASA and fiat combinations within the given time range.
   *
   * - **Private query:** This route can only be used by origins registered by Dartroom due to licencing limitations.
   */
  getHistoricalQuotes: Array<Maybe<HistoricalQuote>>;
  /**
   * Fetch all NFTs from a specific collector.
   *
   * - **@auth:** no requirements
   * - **@role:** no requirements
   */
  getListedNFTs: NfTsPaginated;
  /**
   * Generate the transaction array for the minting of one or multiple NFTs.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ARTIST` role
   */
  getMintNFTParams: Array<Array<UsignedTxn>>;
  /**
   * Find an NFD (None Fundigble Domain / .algo name) based on the deposit address. The NFD information is fetched from the on-chain contracts and contains many optional fields that can be queried. However, most of the time, the **nfd.i.name** property is the one you are looking for, as it is the .algo name. For the full specification of all the fields please visit the [NFD documentation](https://api-docs.nf.domains/reference/on-chain-reference/properties).
   *
   * - **@auth:** no requirements
   * - **@role:** no requirements
   */
  getNFDByAddress: AddressNfd;
  /**
   * Find an NFD (None Fundigble Domain / .algo name) based on the deposit address. The NFD information is fetched from the on-chain contracts and contains many optional fields that can be queried. However, most of the time, the **nfd.i.name** property is the one you are looking for, as it is the .algo name. For the full specification of all the fields please visit the [NFD documentation](https://api-docs.nf.domains/reference/on-chain-reference/properties).
   *
   * As NFDs are fetched directly from the Algorand network in Dartroom's implementation, it might be more performant for large address sets to use the [NFD API](https://api-docs.nf.domains/). Their implementation is more advanced than Dartroom's approach.
   *
   * - **@auth:** no requirements
   * - **@role:** no requirements
   */
  getNFDListByAddresses: Array<AddressNfd>;
  /**
   * Fetch all avaialbe information about an NFT.
   *
   * - **@auth:** no requirements
   * - **@role:** no requirements
   */
  getNFTDetails: Nft;
  /**
   * Fetch all owners of a specific NFT. Holdings are split between the balance in their wallet and those currently in known listings.
   *
   * - **@auth:** no requirements
   * - **@role:** no requirements
   */
  getNFTOwners: Array<NftOwner>;
  /**
   * Fetch the current settings for a NFT concept.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ARTIST` role
   */
  getNFTSettings: NftSettings;
  /**
   * Fetch the starting template for a new NFT.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ARTIST` role
   */
  getNFTTemplate: NftSettings;
  /**
   * Fetch all NFTs from a specific artist.
   *
   * - **@auth:** no requirements
   * - **@role:** no requirements
   */
  getNFTsByArtist: NfTsPaginated;
  /**
   * Fetch all NFTs from a specific collection.
   *
   * - **@auth:** no requirements
   * - **@role:** no requirements
   */
  getNFTsByCollection: NfTsPaginated;
  /**
   * Fetch all NFTs from a specific collector.
   *
   * - **@auth:** no requirements
   * - **@role:** no requirements
   */
  getNFTsByCollector: NfTsPaginated;
  /**
   * - **@auth:** bearer JWT
   * - **@role:** requires `USER` role
   * - **Private query:** This route can only be used by origins registered by Dartroom for security reasons.
   */
  getNotificationSettings: NotificationSettings;
  /**
   * Fetch all rooms
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ADMIN` role
   */
  getRooms: Array<NftOwner>;
  /**
   * Fetch a paginated list of sales for a specific artist sorted by date.
   *
   * - **@auth:** no requirements
   * - **@role:** no requirements
   */
  getSalesByArtist: SalePaginated;
  /**
   * Fetch a paginated list of sales for a specific collection sorted by date.
   *
   * - **@auth:** no requirements
   * - **@role:** no requirements
   */
  getSalesByCollection: SalePaginated;
  /**
   * Fetch a paginated list of sales for a specific NFT sorted by date.
   *
   * - **@auth:** no requirements
   * - **@role:** no requirements
   */
  getSalesByNFT: SalePaginated;
  getSetupFixedBidParams: Array<Array<UsignedTxn>>;
  /**
   * Get total sales
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ADMIN` role
   */
  getTotalSales: TotalSales;
  /**
   * - **@auth:** bearer JWT
   * - **@role:** requires `ARTIST` role
   */
  getTwitterVerificationLink: Scalars['String'];
  getUpdatePriceFixedBidParams: Array<Array<UsignedTxn>>;
  /**
   * If an objectId is provided, the settings object for this specific collection will be returned. If no objectId is provided, a template of the settings object for the specific user will be provided with prefilled-in information like their artist profile.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ARTIST` role
   */
  getUserCollections: Array<CollectionSettings>;
  getV1ListingsByAddress: Array<V1Listing>;
  /**
   * Search artists.
   *
   * You can search by:
   * - name
   * - address
   * - featured category
   * - description
   * - location
   * - twitter
   *
   * - **@auth:** no requirements
   * - **@role:** no requirements
   */
  searchArtist: Array<UserAritstInfo>;
  /**
   * Search collections.
   *
   * You can search by:
   * - title
   * - address
   * - artist
   * - description
   *
   * - **@auth:** no requirements
   * - **@role:** no requirements
   */
  searchCollection: Array<Collection>;
  /**
   * Search nfts.
   *
   * You can search by:
   * - title
   * - description
   * - unit name
   * - asset name
   * - tag
   * - artist
   * - collection
   *
   * - **@auth:** no requirements
   * - **@role:** no requirements
   */
  searchNFT: Array<Nft>;
  testCurrencies?: Maybe<Scalars['JSONObject']>;
  /**
   * - **@auth:** bearer JWT
   * - **@role:** requires `USER` role
   * - **Private query:** This route can only be used by origins registered by Dartroom for security reasons.
   */
  testNotification?: Maybe<Scalars['String']>;
  /** Returns information about the login preferences and possibilities for a given address. */
  userLoginInfo: UserLoginInfo;
  /** Create a verification transaction that needs to be signed by the user to confirm their ownership of the given address. */
  verifyTxn: Array<Array<UsignedTxn>>;
  viewApplicationStatus?: Maybe<ApplicationStatus>;
  /**
   * Return BandDate from a especific band
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ADMIN` role
   */
  viewBandDate?: Maybe<BandDate>;
  /**
   * Return BandStatus from a especific band
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ADMIN` role
   */
  viewBandStatus?: Maybe<BandStatus>;
};


export type QueryGetAddressByNfdArgs = {
  nfd: Scalars['String'];
};


export type QueryGetAllCollectionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Array<Scalars['String']>>;
  sort?: InputMaybe<CollectionSort>;
};


export type QueryGetAllNfTsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<AllNftSort>;
};


export type QueryGetAllSalesArgs = {
  filter?: InputMaybe<SaleFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SaleSortingOptions>;
};


export type QueryGetApplicationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Array<ApplicationStatuses>>;
};


export type QueryGetArtistDetailsArgs = {
  id: Scalars['String'];
};


export type QueryGetAvailableNfTsForImportingArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryGetBandArgs = {
  id: Scalars['ObjectId'];
};


export type QueryGetBandsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Array<BandStatuses>>;
};


export type QueryGetBuyFixedBidParamsArgs = {
  settings: Array<BuyFixedBidParams>;
};


export type QueryGetCollectedNfTsArgs = {
  address: Scalars['AlgorandAddress'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryGetCollectionDetailsArgs = {
  id: Scalars['String'];
};


export type QueryGetCollectionSettingsArgs = {
  id?: InputMaybe<Scalars['ObjectId']>;
};


export type QueryGetCollectionsByArtistArgs = {
  id: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryGetConceptNfTsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryGetCreatedNfTsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryGetCurrentQuotesArgs = {
  asa: Array<AsaCode>;
  fiat: Array<FiatCode>;
};


export type QueryGetDeleteNftParamsArgs = {
  indexes: Array<Scalars['Int']>;
};


export type QueryGetDeployFixedBidParamsArgs = {
  settings: Array<DeployFixedBidParams>;
};


export type QueryGetDepositFixedBidParamsArgs = {
  settings: Array<DepositFixedBidParams>;
};


export type QueryGetDestroyFixedBidParamsArgs = {
  settings: Array<DestroyFixedBidParams>;
};


export type QueryGetDestroyV1ListingParamsArgs = {
  settings: Array<DestroyV1ListingParams>;
};


export type QueryGetExtractFixedBidParamsArgs = {
  settings: Array<ExtractFixedBidParams>;
};


export type QueryGetFeaturedArtistsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Array<Scalars['ObjectId']>>;
};


export type QueryGetFixedBidsByArtistArgs = {
  address: Scalars['AlgorandAddress'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryGetFixedBidsByCollectorArgs = {
  address: Scalars['AlgorandAddress'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryGetFixedBidsByNftArgs = {
  index: Scalars['Int'];
};


export type QueryGetHistoricalQuotesArgs = {
  asa: Array<AsaCode>;
  fiat: Array<FiatCode>;
  range: TimeRange;
};


export type QueryGetListedNfTsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  listingType: ListingType;
  offset?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryGetMintNftParamsArgs = {
  ids: Array<Scalars['ObjectId']>;
};


export type QueryGetNfdByAddressArgs = {
  address: Scalars['AlgorandAddress'];
};


export type QueryGetNfdListByAddressesArgs = {
  addresses: Array<Scalars['AlgorandAddress']>;
};


export type QueryGetNftDetailsArgs = {
  index: Scalars['Int'];
};


export type QueryGetNftOwnersArgs = {
  index: Scalars['Int'];
};


export type QueryGetNftSettingsArgs = {
  id?: InputMaybe<Scalars['ObjectId']>;
};


export type QueryGetNfTsByArtistArgs = {
  id: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<NftSort>;
  status?: InputMaybe<NftSaleStatus>;
};


export type QueryGetNfTsByCollectionArgs = {
  id: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<NftSort>;
  status?: InputMaybe<NftSaleStatus>;
};


export type QueryGetNfTsByCollectorArgs = {
  id: Scalars['AlgorandAddress'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<NftCollectedSort>;
  status?: InputMaybe<NftCollectedStatus>;
};


export type QueryGetSalesByArtistArgs = {
  id: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryGetSalesByCollectionArgs = {
  id: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryGetSalesByNftArgs = {
  index: Scalars['Int'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryGetSetupFixedBidParamsArgs = {
  settings: Array<SetupFixedBidParams>;
};


export type QueryGetUpdatePriceFixedBidParamsArgs = {
  settings: Array<UpdatePriceFixedBidParams>;
};


export type QueryGetV1ListingsByAddressArgs = {
  address?: InputMaybe<Scalars['AlgorandAddress']>;
};


export type QuerySearchArtistArgs = {
  searchTerm: Scalars['String'];
};


export type QuerySearchCollectionArgs = {
  searchTerm: Scalars['String'];
};


export type QuerySearchNftArgs = {
  searchTerm: Scalars['String'];
};


export type QueryUserLoginInfoArgs = {
  address: Scalars['AlgorandAddress'];
};


export type QueryVerifyTxnArgs = {
  address: Scalars['AlgorandAddress'];
};


export type QueryViewApplicationStatusArgs = {
  id: Scalars['ObjectId'];
  token: Scalars['String'];
};


export type QueryViewBandDateArgs = {
  id: Scalars['ObjectId'];
};


export type QueryViewBandStatusArgs = {
  id: Scalars['ObjectId'];
};

export type Quote = {
  __typename?: 'Quote';
  quotes?: Maybe<Scalars['JSONObject']>;
  timestamp: Scalars['String'];
};

export type Sale = {
  __typename?: 'Sale';
  appId: Scalars['Int'];
  buyerAddress: Scalars['AlgorandAddress'];
  contractAddress?: Maybe<Scalars['String']>;
  currency: AsaCode;
  groupId?: Maybe<Scalars['String']>;
  managerShare: Scalars['Int'];
  nNFTs: Scalars['Int'];
  nft?: Maybe<Nft>;
  nftIndex: Scalars['Int'];
  primary: Scalars['Boolean'];
  round: Scalars['Int'];
  royaltyAddres: Scalars['AlgorandAddress'];
  royaltyShare: Scalars['Int'];
  saleType: SaleType;
  sellerAddress: Scalars['AlgorandAddress'];
  sellerShare: Scalars['Int'];
  timestamp: Scalars['Timestamp'];
  totalPrice: Scalars['Float'];
  totalValue: Scalars['JSONObject'];
  txIDs: Array<Scalars['String']>;
  unitPrice: Scalars['Float'];
};

export type SaleFilter = {
  combine?: InputMaybe<FilterCombine>;
  currency?: InputMaybe<Array<InputMaybe<AsaCode>>>;
  saleType?: InputMaybe<Array<InputMaybe<SaleType>>>;
};

export type SalePaginated = {
  __typename?: 'SalePaginated';
  pageInfo: PageInfo;
  sales: Array<Sale>;
};

export enum SaleSortingOptions {
  New = 'NEW',
  Old = 'OLD',
  ValueAscending = 'VALUE_ASCENDING',
  ValueDescending = 'VALUE_DESCENDING'
}

export enum SaleType {
  Auction = 'AUCTION',
  AuctionV1 = 'AUCTION_V1',
  FixedBid = 'FIXED_BID',
  FixedBidV1 = 'FIXED_BID_V1',
  Offer = 'OFFER',
  SmartV1 = 'SMART_V1'
}

export type SetupFixedBidParams = {
  appId: Scalars['Int'];
  nNFTs: Scalars['Int'];
};

export type SignedTxn = {
  authAddress: Scalars['AlgorandAddress'];
  blob: Scalars['Uint8Array'];
  description: Scalars['String'];
  signature: Scalars['String'];
  signers: Array<Scalars['AlgorandAddress']>;
  txID: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  dummySubscription?: Maybe<Scalars['String']>;
  /**
   * Subscribe to all new incoming applications submitted by users.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ADMIN` role
   */
  newApplications: ApplicationDetails;
  /**
   * Subscribe to all new incoming bands.
   *
   * - **@auth:** bearer JWT
   * - **@role:** requires `ADMIN` role
   */
  newBands: BandDetails;
  /**
   * Subscribe to all new sales on Dartroom.
   *
   * - **@auth:** no requirements
   * - **@role:** no requirements
   */
  subAllNewSales: Sale;
};

export type TimeRange = {
  end: Scalars['String'];
  start: Scalars['String'];
};

export type TotalSales = {
  __typename?: 'TotalSales';
  managerShare: Scalars['JSONObject'];
  nNFTs: Scalars['Int'];
  royaltyShare: Scalars['JSONObject'];
  sales: Scalars['Int'];
  sellerShare: Scalars['JSONObject'];
  total: Scalars['JSONObject'];
};

export type UpdatePriceFixedBidParams = {
  appId: Scalars['Int'];
  price: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  artist?: Maybe<UserAritstInfo>;
  collector: UserCollectorInfo;
  fileroom?: Maybe<Fileroom>;
  generalStats: GeneralStats;
  isAdmin: Scalars['Boolean'];
  isArtist: Scalars['Boolean'];
  isDev: Scalars['Boolean'];
  walletAddress: Scalars['AlgorandAddress'];
};

export type UserAritstInfo = {
  __typename?: 'UserAritstInfo';
  featured: UserArtistFeatured;
  joinDate: Scalars['Timestamp'];
  location: Scalars['String'];
  name: Scalars['String'];
  normalizedName: Scalars['String'];
  page: ArtistPage;
  stats: ArtistStats;
};

export type UserArtistFeatured = {
  __typename?: 'UserArtistFeatured';
  categories: Array<Scalars['String']>;
  isFeatured: Scalars['Boolean'];
};

export type UserCollectorInfo = {
  __typename?: 'UserCollectorInfo';
  banned: Scalars['Boolean'];
  page?: Maybe<CollectorPage>;
};

export type UserInfo = {
  __typename?: 'UserInfo';
  authToken: Scalars['String'];
  exp: Scalars['Int'];
  user: User;
};

export type UserLoginInfo = {
  __typename?: 'UserLoginInfo';
  hasPassword: Scalars['Boolean'];
  newUser: Scalars['Boolean'];
  walletAddress: Scalars['AlgorandAddress'];
};

export enum UserRole {
  Admin = 'ADMIN',
  Artist = 'ARTIST',
  Dev = 'DEV',
  User = 'USER'
}

export type UsignedTxn = {
  __typename?: 'UsignedTxn';
  authAddress: Scalars['AlgorandAddress'];
  blob: Scalars['Uint8Array'];
  description: Scalars['String'];
  signature: Scalars['String'];
  signers: Array<Scalars['AlgorandAddress']>;
  txID: Scalars['String'];
};

export type V1Listing = {
  __typename?: 'V1Listing';
  buyLimit?: Maybe<Scalars['Int']>;
  buyLimitOn?: Maybe<Scalars['Boolean']>;
  fundingHistory: Array<V1ListingFunding>;
  index: Scalars['Int'];
  limitList: Array<V1ListingLimit>;
  listerAddress: Scalars['String'];
  listingAddress: Scalars['String'];
  listingProgram: Scalars['String'];
  price: Scalars['Float'];
  sellHistory: Array<V1ListingSell>;
};

export type V1ListingFunding = {
  __typename?: 'V1ListingFunding';
  amount?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['String']>;
};

export type V1ListingInfo = {
  __typename?: 'V1ListingInfo';
  listings: Array<V1Listing>;
  partialErrors?: Maybe<Array<Scalars['String']>>;
};

export type V1ListingLimit = {
  __typename?: 'V1ListingLimit';
  address?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
};

export type V1ListingSell = {
  __typename?: 'V1ListingSell';
  address?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['String']>;
};

export type UserLoginMutationVariables = Exact<{
  address: Scalars['AlgorandAddress'];
  password?: InputMaybe<Scalars['String']>;
  txn?: InputMaybe<SignedTxn>;
}>;


export type UserLoginMutation = { __typename?: 'Mutation', userLogin: { __typename?: 'UserInfo', authToken: string, exp: number, user: { __typename?: 'User', walletAddress: string, isAdmin: boolean, isArtist: boolean, isDev: boolean, artist?: { __typename?: 'UserAritstInfo', name: string, normalizedName: string, location: string, joinDate: string, page: { __typename?: 'ArtistPage', description: string, profileImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null, bannerImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', cid: string, size: number, mimeType: string }> } | null, customLinks: Array<{ __typename?: 'CustomLink', name: string, url: string }> } } | null, collector: { __typename?: 'UserCollectorInfo', banned: boolean, page?: { __typename?: 'CollectorPage', overWriteNfdomains: boolean, description?: string | null } | null }, generalStats: { __typename?: 'GeneralStats', followers: number, following: number }, fileroom?: { __typename?: 'Fileroom', id: string, token: string } | null } } };

export type ChangeApplicationStatusMutationVariables = Exact<{
  id: Scalars['ObjectId'];
  status: ApplicationStatuses;
}>;


export type ChangeApplicationStatusMutation = { __typename?: 'Mutation', changeApplicationStatus: { __typename?: 'ApplicationDetails', id: string, name: string, email: string, status: ApplicationStatuses, twitter?: string | null, instagram?: string | null, links?: string | null, art?: Array<string> | null, inviteLink?: string | null, accountCreated: boolean } };

export type InviteArtistMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['EmailAddress'];
}>;


export type InviteArtistMutation = { __typename?: 'Mutation', inviteArtist: { __typename?: 'ApplicationDetails', id: string, name: string, email: string, status: ApplicationStatuses, twitter?: string | null, instagram?: string | null, links?: string | null, art?: Array<string> | null, inviteLink?: string | null, accountCreated: boolean } };

export type CreateApplicationMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['EmailAddress'];
}>;


export type CreateApplicationMutation = { __typename?: 'Mutation', createApplication?: string | null };

export type CreateArtistAccountMutationVariables = Exact<{
  id: Scalars['ObjectId'];
  token: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  address: Scalars['AlgorandAddress'];
  txn: SignedTxn;
}>;


export type CreateArtistAccountMutation = { __typename?: 'Mutation', createArtistAccount?: string | null };

export type SaveApplicationLinksMutationVariables = Exact<{
  id: Scalars['ObjectId'];
  token: Scalars['String'];
  links: Scalars['String'];
}>;


export type SaveApplicationLinksMutation = { __typename?: 'Mutation', saveApplicationLinks?: string | null };

export type SubmitApplicationSocialsMutationVariables = Exact<{
  id: Scalars['ObjectId'];
  token: Scalars['String'];
  links: Scalars['String'];
}>;


export type SubmitApplicationSocialsMutation = { __typename?: 'Mutation', submitApplicationSocials?: string | null };

export type UpdateArtistSettingsMutationVariables = Exact<{
  settings: ArtistSettingsInput;
}>;


export type UpdateArtistSettingsMutation = { __typename?: 'Mutation', updateArtistSettings: { __typename?: 'UserAritstInfo', name: string, normalizedName: string, location: string, joinDate: string, page: { __typename?: 'ArtistPage', description: string, profileImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null, bannerImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', cid: string, size: number, mimeType: string }> } | null, customLinks: Array<{ __typename?: 'CustomLink', name: string, url: string }> }, stats: { __typename?: 'ArtistStats', totalMinted: number, totalSold: any, floor: any }, featured: { __typename?: 'UserArtistFeatured', isFeatured: boolean, categories: Array<string> } } };

export type CreateBandMutationVariables = Exact<{
  name: Scalars['String'];
  wallets: Array<Scalars['String']> | Scalars['String'];
  asas: Array<Scalars['String']> | Scalars['String'];
  period: Scalars['Int'];
  asaAmount: Scalars['Int'];
  coin: Scalars['Float'];
}>;


export type CreateBandMutation = { __typename?: 'Mutation', createBand?: string | null };

export type DeleteCollectionMutationVariables = Exact<{
  id: Scalars['ObjectId'];
}>;


export type DeleteCollectionMutation = { __typename?: 'Mutation', deleteCollection: string };

export type UpsertCollectionMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ObjectId']>;
  settings: CollectionSettingsInput;
}>;


export type UpsertCollectionMutation = { __typename?: 'Mutation', upsertCollection: { __typename?: 'CollectionSettings', id?: string | null, title: string, normalizedTitle: string, description: string, private: boolean, locked: boolean, rarity: boolean, type: string, mintingAddresses: Array<{ __typename?: 'CollectionAddress', address: string, active: boolean, locked: boolean }>, attributes: Array<{ __typename?: 'CollectionSettingsAttribute', traitType: string, displayType: string, values: Array<{ __typename?: 'CollectionSettingsAttributeValue', value: string, locked: boolean, rarityScore?: number | null }>, range: { __typename?: 'CollectionSettingsAttributeRange', max: number, min: number, usedValues: Array<number> } }>, media: { __typename?: 'CollectionMedia', card?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null, banner?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }, artists: Array<{ __typename?: 'CollectionSettingsArtist', id: string, address: string, name: string, normalizedName: string, status: string, profileImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }>, stats: { __typename?: 'CollectionStats', nNFTs: number, sales: number, floor: any, volume: any } } };

export type CreateNewNftMutationVariables = Exact<{
  settings: NftSettingsInput;
}>;


export type CreateNewNftMutation = { __typename?: 'Mutation', createNewNFT: { __typename?: 'NFTSettings', id?: string | null, status: Nft_State, stage: Edit_Stage, edit: { __typename?: 'NFTSettingsEdit', info: Nft_Edit_State, collection: Nft_Edit_State, media: Nft_Edit_State, token: Nft_Edit_State }, info: { __typename?: 'NFTSettingsInfo', title: string, description: string, link: string, nsfw: boolean, ai: boolean, aiDescription: string, tags: Array<string> }, token: { __typename?: 'NFTSettingsToken', unitName: string, assetName: string, royalty: number, editions: number }, artist: { __typename?: 'NFTSettingsArtist', id: string, name: string, normalizedName: string, address: string, profileImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }, c?: { __typename?: 'NFTSettingsCollection', id: string, title: string, attributes: Array<{ __typename?: 'NFTSettingsCollectionAttribute', traitType: string, value: string, displayType: string }> } | null, card: { __typename?: 'NFTSettingsCard', x: number, y: number, type: Card_Type }, media?: { __typename?: 'NFTSettingsMedia', fileroomId: string, cid: string, dimensions: string, storageSize: number, mimeType: string, integrity: string, previews: Array<{ __typename?: 'NFTSettingsMediaPreview', size: number, cid: string, mimeType: string, integrity?: string | null }>, thumbnail?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null } | null } };

export type DeleteNfTsMutationVariables = Exact<{
  ids: Array<Scalars['ObjectId']> | Scalars['ObjectId'];
}>;


export type DeleteNfTsMutation = { __typename?: 'Mutation', deleteNFTs: Array<string> };

export type EditNftMutationVariables = Exact<{
  id: Scalars['ObjectId'];
  settings: NftSettingsInput;
}>;


export type EditNftMutation = { __typename?: 'Mutation', editNFT: { __typename?: 'NFTSettings', id?: string | null, status: Nft_State, stage: Edit_Stage, edit: { __typename?: 'NFTSettingsEdit', info: Nft_Edit_State, collection: Nft_Edit_State, media: Nft_Edit_State, token: Nft_Edit_State }, info: { __typename?: 'NFTSettingsInfo', title: string, description: string, link: string, nsfw: boolean, ai: boolean, aiDescription: string, tags: Array<string> }, token: { __typename?: 'NFTSettingsToken', unitName: string, assetName: string, royalty: number, editions: number }, artist: { __typename?: 'NFTSettingsArtist', id: string, name: string, normalizedName: string, address: string, profileImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }, c?: { __typename?: 'NFTSettingsCollection', id: string, title: string, attributes: Array<{ __typename?: 'NFTSettingsCollectionAttribute', traitType: string, value: string, displayType: string }> } | null, card: { __typename?: 'NFTSettingsCard', x: number, y: number, type: Card_Type }, media?: { __typename?: 'NFTSettingsMedia', fileroomId: string, cid: string, dimensions: string, storageSize: number, mimeType: string, integrity: string, previews: Array<{ __typename?: 'NFTSettingsMediaPreview', size: number, cid: string, mimeType: string, integrity?: string | null }>, thumbnail?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null } | null } };

export type SubmitDeleteNftMutationVariables = Exact<{
  txns: Array<Array<SignedTxn> | SignedTxn> | Array<SignedTxn> | SignedTxn;
}>;


export type SubmitDeleteNftMutation = { __typename?: 'Mutation', submitDeleteNFT: { __typename?: 'DeleteNFTsInfo', indexes: Array<number>, partialErrors?: Array<string> | null } };

export type SubmitMintNftMutationVariables = Exact<{
  txns: Array<Array<SignedTxn> | SignedTxn> | Array<SignedTxn> | SignedTxn;
}>;


export type SubmitMintNftMutation = { __typename?: 'Mutation', submitMintNFT: { __typename?: 'MintingInfo', partialErrors?: Array<string> | null, nfts: Array<{ __typename?: 'NFTSettings', id?: string | null, status: Nft_State, stage: Edit_Stage, edit: { __typename?: 'NFTSettingsEdit', info: Nft_Edit_State, collection: Nft_Edit_State, media: Nft_Edit_State, token: Nft_Edit_State }, info: { __typename?: 'NFTSettingsInfo', title: string, description: string, link: string, nsfw: boolean, ai: boolean, aiDescription: string, tags: Array<string> }, token: { __typename?: 'NFTSettingsToken', unitName: string, assetName: string, royalty: number, editions: number }, artist: { __typename?: 'NFTSettingsArtist', id: string, name: string, normalizedName: string, address: string, profileImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }, c?: { __typename?: 'NFTSettingsCollection', id: string, title: string, attributes: Array<{ __typename?: 'NFTSettingsCollectionAttribute', traitType: string, value: string, displayType: string }> } | null, card: { __typename?: 'NFTSettingsCard', x: number, y: number, type: Card_Type }, media?: { __typename?: 'NFTSettingsMedia', fileroomId: string, cid: string, dimensions: string, storageSize: number, mimeType: string, integrity: string, previews: Array<{ __typename?: 'NFTSettingsMediaPreview', size: number, cid: string, mimeType: string, integrity?: string | null }>, thumbnail?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null } | null }> } };

export type SubmitBuyFixedBidMutationVariables = Exact<{
  txns: Array<Array<SignedTxn> | SignedTxn> | Array<SignedTxn> | SignedTxn;
}>;


export type SubmitBuyFixedBidMutation = { __typename?: 'Mutation', submitBuyFixedBid: { __typename?: 'FixedBidInfo', partialErrors?: Array<string> | null, listings: Array<{ __typename?: 'FixedBidListing', nftIndex: number, appId: number, currency: AsaCode, sellerAddress: string, sellerPayoutAddress: string, royaltyPayoutAddress: string, managerPayoutAddress: string, sellerRevenueSink?: string | null, royaltyRevenueSink?: string | null, contractAddress: string, sellerShare: number, royaltyShare: number, managerShare: number, price: number, primary: boolean, status: { __typename?: 'FixedBidStatus', deleted: boolean, isSetup: boolean, balance: number } }> } };

export type SubmitDeployFixedBidMutationVariables = Exact<{
  txns: Array<Array<SignedTxn> | SignedTxn> | Array<SignedTxn> | SignedTxn;
}>;


export type SubmitDeployFixedBidMutation = { __typename?: 'Mutation', submitDeployFixedBid: { __typename?: 'FixedBidInfo', partialErrors?: Array<string> | null, listings: Array<{ __typename?: 'FixedBidListing', nftIndex: number, appId: number, currency: AsaCode, sellerAddress: string, sellerPayoutAddress: string, royaltyPayoutAddress: string, managerPayoutAddress: string, sellerRevenueSink?: string | null, royaltyRevenueSink?: string | null, contractAddress: string, sellerShare: number, royaltyShare: number, managerShare: number, price: number, primary: boolean, status: { __typename?: 'FixedBidStatus', deleted: boolean, isSetup: boolean, balance: number } }> } };

export type SubmitDepositFixedBidMutationVariables = Exact<{
  txns: Array<Array<SignedTxn> | SignedTxn> | Array<SignedTxn> | SignedTxn;
}>;


export type SubmitDepositFixedBidMutation = { __typename?: 'Mutation', submitDepositFixedBid: { __typename?: 'FixedBidInfo', partialErrors?: Array<string> | null, listings: Array<{ __typename?: 'FixedBidListing', nftIndex: number, appId: number, currency: AsaCode, sellerAddress: string, sellerPayoutAddress: string, royaltyPayoutAddress: string, managerPayoutAddress: string, sellerRevenueSink?: string | null, royaltyRevenueSink?: string | null, contractAddress: string, sellerShare: number, royaltyShare: number, managerShare: number, price: number, primary: boolean, status: { __typename?: 'FixedBidStatus', deleted: boolean, isSetup: boolean, balance: number } }> } };

export type SubmitDestroyFixedBidMutationVariables = Exact<{
  txns: Array<Array<SignedTxn> | SignedTxn> | Array<SignedTxn> | SignedTxn;
}>;


export type SubmitDestroyFixedBidMutation = { __typename?: 'Mutation', submitDestroyFixedBid: { __typename?: 'FixedBidInfo', partialErrors?: Array<string> | null, listings: Array<{ __typename?: 'FixedBidListing', nftIndex: number, appId: number, currency: AsaCode, sellerAddress: string, sellerPayoutAddress: string, royaltyPayoutAddress: string, managerPayoutAddress: string, sellerRevenueSink?: string | null, royaltyRevenueSink?: string | null, contractAddress: string, sellerShare: number, royaltyShare: number, managerShare: number, price: number, primary: boolean, status: { __typename?: 'FixedBidStatus', deleted: boolean, isSetup: boolean, balance: number } }> } };

export type SubmitExtractFixedBidMutationVariables = Exact<{
  txns: Array<Array<SignedTxn> | SignedTxn> | Array<SignedTxn> | SignedTxn;
}>;


export type SubmitExtractFixedBidMutation = { __typename?: 'Mutation', submitExtractFixedBid: { __typename?: 'FixedBidInfo', partialErrors?: Array<string> | null, listings: Array<{ __typename?: 'FixedBidListing', nftIndex: number, appId: number, currency: AsaCode, sellerAddress: string, sellerPayoutAddress: string, royaltyPayoutAddress: string, managerPayoutAddress: string, sellerRevenueSink?: string | null, royaltyRevenueSink?: string | null, contractAddress: string, sellerShare: number, royaltyShare: number, managerShare: number, price: number, primary: boolean, status: { __typename?: 'FixedBidStatus', deleted: boolean, isSetup: boolean, balance: number } }> } };

export type SubmitSetupFixedBidMutationVariables = Exact<{
  txns: Array<Array<SignedTxn> | SignedTxn> | Array<SignedTxn> | SignedTxn;
}>;


export type SubmitSetupFixedBidMutation = { __typename?: 'Mutation', submitSetupFixedBid: { __typename?: 'FixedBidInfo', partialErrors?: Array<string> | null, listings: Array<{ __typename?: 'FixedBidListing', nftIndex: number, appId: number, currency: AsaCode, sellerAddress: string, sellerPayoutAddress: string, royaltyPayoutAddress: string, managerPayoutAddress: string, sellerRevenueSink?: string | null, royaltyRevenueSink?: string | null, contractAddress: string, sellerShare: number, royaltyShare: number, managerShare: number, price: number, primary: boolean, status: { __typename?: 'FixedBidStatus', deleted: boolean, isSetup: boolean, balance: number } }> } };

export type SubmitUpdatePriceFixedBidMutationVariables = Exact<{
  txns: Array<Array<SignedTxn> | SignedTxn> | Array<SignedTxn> | SignedTxn;
}>;


export type SubmitUpdatePriceFixedBidMutation = { __typename?: 'Mutation', submitUpdatePriceFixedBid: { __typename?: 'FixedBidInfo', partialErrors?: Array<string> | null, listings: Array<{ __typename?: 'FixedBidListing', nftIndex: number, appId: number, currency: AsaCode, sellerAddress: string, sellerPayoutAddress: string, royaltyPayoutAddress: string, managerPayoutAddress: string, sellerRevenueSink?: string | null, royaltyRevenueSink?: string | null, contractAddress: string, sellerShare: number, royaltyShare: number, managerShare: number, price: number, primary: boolean, status: { __typename?: 'FixedBidStatus', deleted: boolean, isSetup: boolean, balance: number } }> } };

export type AddNotificationSubscriptionMutationVariables = Exact<{
  subscription: NotificationSubscription;
}>;


export type AddNotificationSubscriptionMutation = { __typename?: 'Mutation', addNotificationSubscription: { __typename?: 'NotificationSettings', subscriptions: Array<string>, enabled: Array<{ __typename?: 'NotificationCategory', type: string, category: string }> } };

export type RemoveNotificationSubscriptionMutationVariables = Exact<{
  subscriptionHash: Scalars['String'];
}>;


export type RemoveNotificationSubscriptionMutation = { __typename?: 'Mutation', removeNotificationSubscription: { __typename?: 'NotificationSettings', subscriptions: Array<string>, enabled: Array<{ __typename?: 'NotificationCategory', type: string, category: string }> } };

export type UpdateNotificationCategoriesMutationVariables = Exact<{
  categories: Array<NotificationCategoryInput> | NotificationCategoryInput;
}>;


export type UpdateNotificationCategoriesMutation = { __typename?: 'Mutation', updateNotificationCategories: { __typename?: 'NotificationSettings', subscriptions: Array<string>, enabled: Array<{ __typename?: 'NotificationCategory', type: string, category: string }> } };

export type SubmitDestroyV1ListingMutationVariables = Exact<{
  txns: Array<Array<SignedTxn> | SignedTxn> | Array<SignedTxn> | SignedTxn;
}>;


export type SubmitDestroyV1ListingMutation = { __typename?: 'Mutation', submitDestroyV1Listing: { __typename?: 'V1ListingInfo', partialErrors?: Array<string> | null, listings: Array<{ __typename?: 'V1Listing', index: number, listingAddress: string, listingProgram: string, listerAddress: string, price: number, buyLimit?: number | null, buyLimitOn?: boolean | null, fundingHistory: Array<{ __typename?: 'V1ListingFunding', date?: string | null, amount?: number | null }>, sellHistory: Array<{ __typename?: 'V1ListingSell', date?: string | null, amount?: number | null, address?: string | null }>, limitList: Array<{ __typename?: 'V1ListingLimit', amount?: number | null, address?: string | null }> }> } };

export type UserLoginInfoQueryVariables = Exact<{
  address: Scalars['AlgorandAddress'];
}>;


export type UserLoginInfoQuery = { __typename?: 'Query', userLoginInfo: { __typename?: 'UserLoginInfo', walletAddress: string, hasPassword: boolean, newUser: boolean }, verifyTxn: Array<Array<{ __typename?: 'UsignedTxn', description: string, txID: string, blob: Uint8Array, signers: Array<string>, signature: string, authAddress: string }>> };

export type GetApplicationsQueryVariables = Exact<{
  status?: InputMaybe<Array<ApplicationStatuses> | ApplicationStatuses>;
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetApplicationsQuery = { __typename?: 'Query', getApplications: { __typename?: 'ApplicationsPaginated', applications: Array<{ __typename?: 'ApplicationDetails', id: string, name: string, email: string, status: ApplicationStatuses, twitter?: string | null, instagram?: string | null, links?: string | null, art?: Array<string> | null, inviteLink?: string | null, accountCreated: boolean }>, pageInfo: { __typename?: 'PageInfo', totalDocs: number, offset: number, limit: number, totalPages: number, page: number, hasPrevPage: boolean, hasNextPage: boolean, prevPage?: number | null, nextPage?: number | null } } };

export type GetBandsQueryVariables = Exact<{
  status?: InputMaybe<Array<BandStatuses> | BandStatuses>;
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetBandsQuery = { __typename?: 'Query', getBands: { __typename?: 'BandsPaginated', bands: Array<{ __typename?: 'BandDetails', id: string, name: string, status: BandStatuses, period: number, wallets?: Array<string> | null, date?: { __typename?: 'BandDate', startDate: string, endDate: string } | null }>, pageInfo: { __typename?: 'PageInfo', totalDocs: number, offset: number, limit: number, totalPages: number, page: number, hasPrevPage: boolean, hasNextPage: boolean, prevPage?: number | null, nextPage?: number | null } } };

export type GetArtistDetailsQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetArtistDetailsQuery = { __typename?: 'Query', getArtistDetails: { __typename?: 'ArtistDetails', walletAddress: string, artist: { __typename?: 'UserAritstInfo', name: string, normalizedName: string, location: string, joinDate: string, page: { __typename?: 'ArtistPage', description: string, twitter?: string | null, profileImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null, bannerImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null, customLinks: Array<{ __typename?: 'CustomLink', name: string, url: string }> }, stats: { __typename?: 'ArtistStats', totalMinted: number, totalSold: any, floor: any }, featured: { __typename?: 'UserArtistFeatured', isFeatured: boolean, categories: Array<string> } }, generalStats: { __typename?: 'GeneralStats', followers: number, following: number } } };

export type GetArtistSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetArtistSettingsQuery = { __typename?: 'Query', getArtistSettings: { __typename?: 'UserAritstInfo', name: string, normalizedName: string, location: string, joinDate: string, page: { __typename?: 'ArtistPage', description: string, twitter?: string | null, profileImage?: { __typename?: 'Media', fileroomId?: string | null, cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null, bannerImage?: { __typename?: 'Media', fileroomId?: string | null, cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', cid: string, size: number, mimeType: string }> } | null, customLinks: Array<{ __typename?: 'CustomLink', name: string, url: string }> }, stats: { __typename?: 'ArtistStats', totalMinted: number, totalSold: any, floor: any }, featured: { __typename?: 'UserArtistFeatured', isFeatured: boolean, categories: Array<string> } } };

export type GetFeaturedArtistsQueryVariables = Exact<{
  skip?: InputMaybe<Array<Scalars['ObjectId']> | Scalars['ObjectId']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetFeaturedArtistsQuery = { __typename?: 'Query', getFeaturedArtists: Array<{ __typename?: 'FeaturedSection', id: string, title: string, normalizedTitle: string, artists: Array<{ __typename?: 'UserAritstInfo', name: string, normalizedName: string, location: string, joinDate: string, page: { __typename?: 'ArtistPage', description: string, profileImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null, bannerImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null, customLinks: Array<{ __typename?: 'CustomLink', name: string, url: string }> }, stats: { __typename?: 'ArtistStats', totalMinted: number, totalSold: any, floor: any }, featured: { __typename?: 'UserArtistFeatured', isFeatured: boolean, categories: Array<string> } }> }> };

export type GetTwitterVerificationLinkQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTwitterVerificationLinkQuery = { __typename?: 'Query', getTwitterVerificationLink: string };

export type SearchArtistQueryVariables = Exact<{
  searchTerm: Scalars['String'];
}>;


export type SearchArtistQuery = { __typename?: 'Query', searchArtist: Array<{ __typename?: 'UserAritstInfo', name: string, normalizedName: string, location: string, joinDate: string, page: { __typename?: 'ArtistPage', description: string, profileImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null, bannerImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null, customLinks: Array<{ __typename?: 'CustomLink', name: string, url: string }> }, stats: { __typename?: 'ArtistStats', totalMinted: number, totalSold: any, floor: any }, featured: { __typename?: 'UserArtistFeatured', isFeatured: boolean, categories: Array<string> } }> };

export type GetAllCollectionsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<CollectionSort>;
  skip?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type GetAllCollectionsQuery = { __typename?: 'Query', getAllCollections: { __typename?: 'CollectionsPaginated', collections: Array<{ __typename?: 'Collection', id: string, title: string, normalizedTitle: string, description: string, rarity: boolean, attributes: Array<{ __typename?: 'CollectionAttribute', traitType: string, displayType: string, values: Array<{ __typename?: 'CollectionAttributeValue', value: string, rarityScore?: number | null }>, range: { __typename?: 'CollectionAttributeRange', max: number, min: number } }>, media: { __typename?: 'CollectionMedia', card?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null, banner?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }, artists: Array<{ __typename?: 'CollectionArtist', id: string, address: string, name: string, normalizedName: string, profileImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }>, stats: { __typename?: 'CollectionStats', nNFTs: number, sales: number, floor: any, volume: any } }>, pageInfo: { __typename?: 'PageInfo', totalDocs: number, offset: number, limit: number, totalPages: number, page: number, hasPrevPage: boolean, hasNextPage: boolean, prevPage?: number | null, nextPage?: number | null } } };

export type GetCollectionDetailsQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetCollectionDetailsQuery = { __typename?: 'Query', getCollectionDetails: { __typename?: 'Collection', id: string, title: string, normalizedTitle: string, description: string, rarity: boolean, attributes: Array<{ __typename?: 'CollectionAttribute', traitType: string, displayType: string, values: Array<{ __typename?: 'CollectionAttributeValue', value: string, rarityScore?: number | null }>, range: { __typename?: 'CollectionAttributeRange', max: number, min: number } }>, media: { __typename?: 'CollectionMedia', card?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null, banner?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }, artists: Array<{ __typename?: 'CollectionArtist', id: string, address: string, name: string, normalizedName: string, profileImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }>, stats: { __typename?: 'CollectionStats', nNFTs: number, sales: number, floor: any, volume: any } } };

export type GetCollectionsByArtistQueryVariables = Exact<{
  id: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetCollectionsByArtistQuery = { __typename?: 'Query', getCollectionsByArtist: { __typename?: 'CollectionsPaginated', collections: Array<{ __typename?: 'Collection', id: string, title: string, normalizedTitle: string, description: string, rarity: boolean, attributes: Array<{ __typename?: 'CollectionAttribute', traitType: string, displayType: string, values: Array<{ __typename?: 'CollectionAttributeValue', value: string, rarityScore?: number | null }>, range: { __typename?: 'CollectionAttributeRange', max: number, min: number } }>, media: { __typename?: 'CollectionMedia', card?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null, banner?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }, artists: Array<{ __typename?: 'CollectionArtist', id: string, address: string, name: string, normalizedName: string, profileImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }>, stats: { __typename?: 'CollectionStats', nNFTs: number, sales: number, floor: any, volume: any } }>, pageInfo: { __typename?: 'PageInfo', totalDocs: number, offset: number, limit: number, totalPages: number, page: number, hasPrevPage: boolean, hasNextPage: boolean, prevPage?: number | null, nextPage?: number | null } } };

export type SearchCollectionQueryVariables = Exact<{
  searchTerm: Scalars['String'];
}>;


export type SearchCollectionQuery = { __typename?: 'Query', searchCollection: Array<{ __typename?: 'Collection', id: string, title: string, normalizedTitle: string, description: string, rarity: boolean, attributes: Array<{ __typename?: 'CollectionAttribute', traitType: string, displayType: string, values: Array<{ __typename?: 'CollectionAttributeValue', value: string, rarityScore?: number | null }>, range: { __typename?: 'CollectionAttributeRange', max: number, min: number } }>, media: { __typename?: 'CollectionMedia', card?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null, banner?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }, artists: Array<{ __typename?: 'CollectionArtist', id: string, address: string, name: string, normalizedName: string, profileImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }>, stats: { __typename?: 'CollectionStats', nNFTs: number, sales: number, floor: any, volume: any } }> };

export type GetCollectionSettingsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ObjectId']>;
}>;


export type GetCollectionSettingsQuery = { __typename?: 'Query', getCollectionSettings: { __typename?: 'CollectionSettings', id?: string | null, title: string, normalizedTitle: string, description: string, private: boolean, locked: boolean, rarity: boolean, type: string, mintingAddresses: Array<{ __typename?: 'CollectionAddress', address: string, active: boolean, locked: boolean }>, attributes: Array<{ __typename?: 'CollectionSettingsAttribute', traitType: string, displayType: string, values: Array<{ __typename?: 'CollectionSettingsAttributeValue', value: string, locked: boolean, rarityScore?: number | null }>, range: { __typename?: 'CollectionSettingsAttributeRange', max: number, min: number, usedValues: Array<number> } }>, media: { __typename?: 'CollectionMedia', card?: { __typename?: 'Media', fileroomId?: string | null, cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null, banner?: { __typename?: 'Media', fileroomId?: string | null, cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }, artists: Array<{ __typename?: 'CollectionSettingsArtist', id: string, address: string, name: string, normalizedName: string, status: string, profileImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }>, stats: { __typename?: 'CollectionStats', nNFTs: number, sales: number, floor: any, volume: any } } };

export type GetUserCollectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserCollectionsQuery = { __typename?: 'Query', getUserCollections: Array<{ __typename?: 'CollectionSettings', id?: string | null, title: string, normalizedTitle: string, description: string, private: boolean, locked: boolean, rarity: boolean, type: string, mintingAddresses: Array<{ __typename?: 'CollectionAddress', address: string, active: boolean, locked: boolean }>, attributes: Array<{ __typename?: 'CollectionSettingsAttribute', traitType: string, displayType: string, values: Array<{ __typename?: 'CollectionSettingsAttributeValue', value: string, locked: boolean, rarityScore?: number | null }>, range: { __typename?: 'CollectionSettingsAttributeRange', max: number, min: number, usedValues: Array<number> } }>, media: { __typename?: 'CollectionMedia', card?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null, banner?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }, artists: Array<{ __typename?: 'CollectionSettingsArtist', id: string, address: string, name: string, normalizedName: string, status: string, profileImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }>, stats: { __typename?: 'CollectionStats', nNFTs: number, sales: number, floor: any, volume: any } }> };

export type GetConceptNfTsQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetConceptNfTsQuery = { __typename?: 'Query', getConceptNFTs: { __typename?: 'NFTSettingsPaginated', nfts: Array<{ __typename?: 'NFTSettings', id?: string | null, status: Nft_State, stage: Edit_Stage, edit: { __typename?: 'NFTSettingsEdit', info: Nft_Edit_State, collection: Nft_Edit_State, media: Nft_Edit_State, token: Nft_Edit_State }, info: { __typename?: 'NFTSettingsInfo', title: string, description: string, link: string, nsfw: boolean, ai: boolean, aiDescription: string, tags: Array<string> }, token: { __typename?: 'NFTSettingsToken', unitName: string, assetName: string, royalty: number, editions: number }, artist: { __typename?: 'NFTSettingsArtist', id: string, address: string, name: string, normalizedName: string, profileImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }, c?: { __typename?: 'NFTSettingsCollection', id: string, title: string, attributes: Array<{ __typename?: 'NFTSettingsCollectionAttribute', traitType: string, value: string, displayType: string }> } | null, card: { __typename?: 'NFTSettingsCard', x: number, y: number, type: Card_Type }, media?: { __typename?: 'NFTSettingsMedia', fileroomId: string, cid: string, dimensions: string, storageSize: number, mimeType: string, integrity: string, previews: Array<{ __typename?: 'NFTSettingsMediaPreview', size: number, cid: string, mimeType: string, integrity?: string | null }>, thumbnail?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', cid: string, mimeType: string, size: number }> } | null } | null }>, pageInfo: { __typename?: 'PageInfo', totalDocs: number, offset: number, limit: number, totalPages: number, page: number, hasPrevPage: boolean, hasNextPage: boolean, prevPage?: number | null, nextPage?: number | null } } };

export type GetDeleteNftParamsQueryVariables = Exact<{
  indexes: Array<Scalars['Int']> | Scalars['Int'];
}>;


export type GetDeleteNftParamsQuery = { __typename?: 'Query', getDeleteNFTParams: Array<Array<{ __typename?: 'UsignedTxn', description: string, blob: Uint8Array, txID: string, signers: Array<string>, signature: string, authAddress: string }>> };

export type GetMintNftParamsQueryVariables = Exact<{
  ids: Array<Scalars['ObjectId']> | Scalars['ObjectId'];
}>;


export type GetMintNftParamsQuery = { __typename?: 'Query', getMintNFTParams: Array<Array<{ __typename?: 'UsignedTxn', description: string, txID: string, signers: Array<string>, signature: string, authAddress: string, blob: Uint8Array }>> };

export type GetNftSettingsQueryVariables = Exact<{
  id: Scalars['ObjectId'];
}>;


export type GetNftSettingsQuery = { __typename?: 'Query', getNFTSettings: { __typename?: 'NFTSettings', id?: string | null, status: Nft_State, stage: Edit_Stage, edit: { __typename?: 'NFTSettingsEdit', info: Nft_Edit_State, collection: Nft_Edit_State, media: Nft_Edit_State, token: Nft_Edit_State }, info: { __typename?: 'NFTSettingsInfo', title: string, description: string, link: string, nsfw: boolean, ai: boolean, aiDescription: string, tags: Array<string> }, token: { __typename?: 'NFTSettingsToken', unitName: string, assetName: string, royalty: number, editions: number }, artist: { __typename?: 'NFTSettingsArtist', id: string, name: string, normalizedName: string, address: string, profileImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }, c?: { __typename?: 'NFTSettingsCollection', id: string, title: string, attributes: Array<{ __typename?: 'NFTSettingsCollectionAttribute', traitType: string, value: string, displayType: string }> } | null, card: { __typename?: 'NFTSettingsCard', x: number, y: number, type: Card_Type }, media?: { __typename?: 'NFTSettingsMedia', fileroomId: string, cid: string, dimensions: string, storageSize: number, mimeType: string, integrity: string, previews: Array<{ __typename?: 'NFTSettingsMediaPreview', size: number, cid: string, mimeType: string, integrity?: string | null }>, thumbnail?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null } | null } };

export type GetNftTemplateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNftTemplateQuery = { __typename?: 'Query', getNFTTemplate: { __typename?: 'NFTSettings', id?: string | null, status: Nft_State, stage: Edit_Stage, edit: { __typename?: 'NFTSettingsEdit', info: Nft_Edit_State, collection: Nft_Edit_State, media: Nft_Edit_State, token: Nft_Edit_State }, info: { __typename?: 'NFTSettingsInfo', title: string, description: string, link: string, nsfw: boolean, ai: boolean, aiDescription: string, tags: Array<string> }, token: { __typename?: 'NFTSettingsToken', unitName: string, assetName: string, royalty: number, editions: number }, artist: { __typename?: 'NFTSettingsArtist', id: string, name: string, normalizedName: string, address: string, profileImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }, c?: { __typename?: 'NFTSettingsCollection', id: string, title: string, attributes: Array<{ __typename?: 'NFTSettingsCollectionAttribute', traitType: string, value: string, displayType: string }> } | null, card: { __typename?: 'NFTSettingsCard', x: number, y: number, type: Card_Type }, media?: { __typename?: 'NFTSettingsMedia', fileroomId: string, cid: string, dimensions: string, storageSize: number, mimeType: string, integrity: string, previews: Array<{ __typename?: 'NFTSettingsMediaPreview', size: number, cid: string, mimeType: string, integrity?: string | null }>, thumbnail?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null } | null } };

export type GetBuyFixedBidParamsQueryVariables = Exact<{
  settings: Array<BuyFixedBidParams> | BuyFixedBidParams;
}>;


export type GetBuyFixedBidParamsQuery = { __typename?: 'Query', getBuyFixedBidParams: Array<Array<{ __typename?: 'UsignedTxn', description: string, blob: Uint8Array, txID: string, signers: Array<string>, signature: string, authAddress: string }>> };

export type GetDeployFixedBidParamsQueryVariables = Exact<{
  settings: Array<DeployFixedBidParams> | DeployFixedBidParams;
}>;


export type GetDeployFixedBidParamsQuery = { __typename?: 'Query', getDeployFixedBidParams: Array<Array<{ __typename?: 'UsignedTxn', description: string, blob: Uint8Array, txID: string, signers: Array<string>, signature: string, authAddress: string }>> };

export type GetDepositFixedBidParamsQueryVariables = Exact<{
  settings: Array<DepositFixedBidParams> | DepositFixedBidParams;
}>;


export type GetDepositFixedBidParamsQuery = { __typename?: 'Query', getDepositFixedBidParams: Array<Array<{ __typename?: 'UsignedTxn', description: string, blob: Uint8Array, txID: string, signers: Array<string>, signature: string, authAddress: string }>> };

export type GetDestroyFixedBidParamsQueryVariables = Exact<{
  settings: Array<DestroyFixedBidParams> | DestroyFixedBidParams;
}>;


export type GetDestroyFixedBidParamsQuery = { __typename?: 'Query', getDestroyFixedBidParams: Array<Array<{ __typename?: 'UsignedTxn', description: string, blob: Uint8Array, txID: string, signers: Array<string>, signature: string, authAddress: string }>> };

export type GetExtractFixedBidParamsQueryVariables = Exact<{
  settings: Array<ExtractFixedBidParams> | ExtractFixedBidParams;
}>;


export type GetExtractFixedBidParamsQuery = { __typename?: 'Query', getExtractFixedBidParams: Array<Array<{ __typename?: 'UsignedTxn', description: string, blob: Uint8Array, txID: string, signers: Array<string>, signature: string, authAddress: string }>> };

export type GetFixedBidsByArtistQueryVariables = Exact<{
  address: Scalars['AlgorandAddress'];
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetFixedBidsByArtistQuery = { __typename?: 'Query', getFixedBidsByArtist: { __typename?: 'FixedBidPaginated', listings: Array<{ __typename?: 'FixedBidListing', nftIndex: number, appId: number, currency: AsaCode, sellerAddress: string, sellerPayoutAddress: string, royaltyPayoutAddress: string, managerPayoutAddress: string, sellerRevenueSink?: string | null, royaltyRevenueSink?: string | null, contractAddress: string, sellerShare: number, royaltyShare: number, managerShare: number, price: number, primary: boolean, status: { __typename?: 'FixedBidStatus', deleted: boolean, isSetup: boolean, balance: number }, nft?: { __typename?: 'NFT', id: string, info: { __typename?: 'NFTInfo', title: string }, token: { __typename?: 'NFTToken', index: number, unitName: string, assetName: string, royalty: number, editions: number, mintAddress: string, timestamp: string }, media: { __typename?: 'NFTMedia', fileroomId?: string | null, cid: string, dimensions: string, storageSize: number, mimeType: string, integrity: string, previews: Array<{ __typename?: 'NFTMediaPreview', size: number, cid: string, mimeType: string, integrity?: string | null }>, thumbnail?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null } } | null }>, pageInfo: { __typename?: 'PageInfo', totalDocs: number, offset: number, limit: number, totalPages: number, page: number, hasPrevPage: boolean, hasNextPage: boolean, prevPage?: number | null, nextPage?: number | null } } };

export type GetFixedBidsByCollectorQueryVariables = Exact<{
  address: Scalars['AlgorandAddress'];
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetFixedBidsByCollectorQuery = { __typename?: 'Query', getFixedBidsByCollector: { __typename?: 'FixedBidPaginated', listings: Array<{ __typename?: 'FixedBidListing', nftIndex: number, appId: number, currency: AsaCode, sellerAddress: string, sellerPayoutAddress: string, royaltyPayoutAddress: string, managerPayoutAddress: string, sellerRevenueSink?: string | null, royaltyRevenueSink?: string | null, contractAddress: string, sellerShare: number, royaltyShare: number, managerShare: number, price: number, primary: boolean, status: { __typename?: 'FixedBidStatus', deleted: boolean, isSetup: boolean, balance: number }, nft?: { __typename?: 'NFT', id: string, info: { __typename?: 'NFTInfo', title: string }, token: { __typename?: 'NFTToken', index: number, unitName: string, assetName: string, royalty: number, editions: number, mintAddress: string, timestamp: string }, media: { __typename?: 'NFTMedia', fileroomId?: string | null, cid: string, dimensions: string, storageSize: number, mimeType: string, integrity: string, previews: Array<{ __typename?: 'NFTMediaPreview', size: number, cid: string, mimeType: string, integrity?: string | null }>, thumbnail?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null } } | null }>, pageInfo: { __typename?: 'PageInfo', totalDocs: number, offset: number, limit: number, totalPages: number, page: number, hasPrevPage: boolean, hasNextPage: boolean, prevPage?: number | null, nextPage?: number | null } } };

export type GetFixedBidsByNftQueryVariables = Exact<{
  index: Scalars['Int'];
}>;


export type GetFixedBidsByNftQuery = { __typename?: 'Query', getFixedBidsByNFT: Array<{ __typename?: 'FixedBidListing', nftIndex: number, appId: number, currency: AsaCode, sellerAddress: string, sellerPayoutAddress: string, royaltyPayoutAddress: string, managerPayoutAddress: string, sellerRevenueSink?: string | null, royaltyRevenueSink?: string | null, contractAddress: string, sellerShare: number, royaltyShare: number, managerShare: number, price: number, primary: boolean, status: { __typename?: 'FixedBidStatus', deleted: boolean, isSetup: boolean, balance: number } }> };

export type GetSetupFixedBidParamsQueryVariables = Exact<{
  settings: Array<SetupFixedBidParams> | SetupFixedBidParams;
}>;


export type GetSetupFixedBidParamsQuery = { __typename?: 'Query', getSetupFixedBidParams: Array<Array<{ __typename?: 'UsignedTxn', description: string, blob: Uint8Array, txID: string, signers: Array<string>, signature: string, authAddress: string }>> };

export type GetUpdatePriceFixedBidParamsQueryVariables = Exact<{
  settings: Array<UpdatePriceFixedBidParams> | UpdatePriceFixedBidParams;
}>;


export type GetUpdatePriceFixedBidParamsQuery = { __typename?: 'Query', getUpdatePriceFixedBidParams: Array<Array<{ __typename?: 'UsignedTxn', description: string, blob: Uint8Array, txID: string, signers: Array<string>, signature: string, authAddress: string }>> };

export type GetCollectedNfTsQueryVariables = Exact<{
  address: Scalars['AlgorandAddress'];
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetCollectedNfTsQuery = { __typename?: 'Query', getCollectedNFTs: { __typename?: 'CreatedNFTsPaginated', nfts: Array<{ __typename?: 'CreatedNFT', balance: number, nft: { __typename?: 'NFT', id: string, status: string, info: { __typename?: 'NFTInfo', title: string, description: string, link: string, nsfw: boolean, ai: boolean, aiDescription: string, tags: Array<string>, updated: boolean }, token: { __typename?: 'NFTToken', index: number, unitName: string, assetName: string, royalty: number, editions: number, mintAddress: string, timestamp: string }, artist: { __typename?: 'NFTArtist', id: string, address: string, name: string, normalizedName: string, suspended: boolean, deleted: boolean, profileImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }, card: { __typename?: 'NFTCard', x: number, y: number, type: Card_Type }, c?: { __typename?: 'NFTCollection', id: string, title: string, normalizedTitle: string, attributes: Array<{ __typename?: 'NFTCollectionAttribute', traitType: string, value: string, displayType: string }> } | null, media: { __typename?: 'NFTMedia', fileroomId?: string | null, cid: string, dimensions: string, storageSize: number, mimeType: string, integrity: string, previews: Array<{ __typename?: 'NFTMediaPreview', size: number, cid: string, mimeType: string, integrity?: string | null }>, thumbnail?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', cid: string, mimeType: string, size: number }> } | null }, metadata: { __typename?: 'NFTMetadata', id?: string | null, cid: string, mimeType: string, integrity: string, standard: string }, listings: { __typename?: 'NFTListings', listed: boolean, fixedBid: Array<{ __typename?: 'NFTFixedBid', primary: boolean, currency: AsaCode, price: number }>, auctions: Array<{ __typename?: 'NFTAuction', primary: boolean, currency: AsaCode, price: number, duration: number, highestBid: number, started: boolean }> }, statistics: { __typename?: 'NFTStatistics', sold: boolean, latestSale?: { __typename?: 'NFTStatisticsSale', currency?: AsaCode | null, price?: number | null, usdValue?: number | null } | null } } }>, pageInfo: { __typename?: 'PageInfo', totalDocs: number, offset: number, limit: number, totalPages: number, page: number, hasPrevPage: boolean, hasNextPage: boolean, prevPage?: number | null, nextPage?: number | null } } };

export type GetCreatedNfTsQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetCreatedNfTsQuery = { __typename?: 'Query', getCreatedNFTs: { __typename?: 'CreatedNFTsPaginated', nfts: Array<{ __typename?: 'CreatedNFT', balance: number, nft: { __typename?: 'NFT', id: string, status: string, info: { __typename?: 'NFTInfo', title: string, description: string, link: string, nsfw: boolean, ai: boolean, aiDescription: string, tags: Array<string>, updated: boolean }, token: { __typename?: 'NFTToken', index: number, unitName: string, assetName: string, royalty: number, editions: number, mintAddress: string, timestamp: string }, artist: { __typename?: 'NFTArtist', id: string, address: string, name: string, normalizedName: string, suspended: boolean, deleted: boolean, profileImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }, card: { __typename?: 'NFTCard', x: number, y: number, type: Card_Type }, c?: { __typename?: 'NFTCollection', id: string, title: string, attributes: Array<{ __typename?: 'NFTCollectionAttribute', traitType: string, value: string, displayType: string }> } | null, media: { __typename?: 'NFTMedia', fileroomId?: string | null, cid: string, dimensions: string, storageSize: number, mimeType: string, integrity: string, previews: Array<{ __typename?: 'NFTMediaPreview', size: number, cid: string, mimeType: string, integrity?: string | null }>, thumbnail?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', cid: string, mimeType: string, size: number }> } | null }, metadata: { __typename?: 'NFTMetadata', id?: string | null, cid: string, mimeType: string, integrity: string, standard: string }, listings: { __typename?: 'NFTListings', listed: boolean, fixedBid: Array<{ __typename?: 'NFTFixedBid', primary: boolean, currency: AsaCode, price: number }>, auctions: Array<{ __typename?: 'NFTAuction', primary: boolean, currency: AsaCode, price: number, duration: number, highestBid: number, started: boolean }> }, statistics: { __typename?: 'NFTStatistics', sold: boolean, latestSale?: { __typename?: 'NFTStatisticsSale', currency?: AsaCode | null, price?: number | null, usdValue?: number | null } | null } } }>, pageInfo: { __typename?: 'PageInfo', totalDocs: number, offset: number, limit: number, totalPages: number, page: number, hasPrevPage: boolean, hasNextPage: boolean, prevPage?: number | null, nextPage?: number | null } } };

export type GetNfdByAddressQueryVariables = Exact<{
  address: Scalars['AlgorandAddress'];
}>;


export type GetNfdByAddressQuery = { __typename?: 'Query', getNFDByAddress: { __typename?: 'AddressNFD', address: string, nfd?: { __typename?: 'NFD', i: { __typename?: 'NFDi', name: string, asaId: number, category: string, commission1Agent?: string | null, commission1?: number | null, mintingKickoffCreator?: string | null, mintingKickoffAmount?: number | null, highestSoldAmt?: number | null, owner: string, sellamt?: number | null, saleType?: string | null, seller?: string | null, timeCreated: number, timeChanged?: number | null, timePurchased?: number | null, ver: string, contractLocked: boolean }, u: { __typename?: 'NFDu', name?: string | null, bio?: string | null, address?: string | null, email?: string | null, url?: string | null, avatar?: string | null, banner?: string | null, twitter?: string | null, discord?: string | null, telegram?: string | null, domain?: string | null, website?: string | null, caalgo?: string | null }, v: { __typename?: 'NFDv', avatar?: string | null, avatarasaid?: number | null, banner?: string | null, bannerasaid?: number | null, caAlgo?: string | null, domain?: string | null, twitter?: string | null, discord?: string | null, telegram?: string | null } } | null } };

export type GetNfdListByAddressesQueryVariables = Exact<{
  addresses: Array<Scalars['AlgorandAddress']> | Scalars['AlgorandAddress'];
}>;


export type GetNfdListByAddressesQuery = { __typename?: 'Query', getNFDListByAddresses: Array<{ __typename?: 'AddressNFD', address: string, nfd?: { __typename?: 'NFD', i: { __typename?: 'NFDi', name: string } } | null }> };

export type GetAllNfTsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<AllNftSort>;
}>;


export type GetAllNfTsQuery = { __typename?: 'Query', getAllNFTs: { __typename?: 'NFTsPaginated', nfts: Array<{ __typename?: 'NFT', id: string, status: string, info: { __typename?: 'NFTInfo', title: string, description: string, link: string, nsfw: boolean, ai: boolean, aiDescription: string, tags: Array<string>, updated: boolean }, token: { __typename?: 'NFTToken', index: number, unitName: string, assetName: string, royalty: number, editions: number, mintAddress: string, timestamp: string }, artist: { __typename?: 'NFTArtist', id: string, address: string, name: string, normalizedName: string, suspended: boolean, deleted: boolean, profileImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }, card: { __typename?: 'NFTCard', x: number, y: number, type: Card_Type }, c?: { __typename?: 'NFTCollection', id: string, title: string, normalizedTitle: string, attributes: Array<{ __typename?: 'NFTCollectionAttribute', traitType: string, value: string, displayType: string }> } | null, media: { __typename?: 'NFTMedia', fileroomId?: string | null, cid: string, dimensions: string, storageSize: number, mimeType: string, integrity: string, previews: Array<{ __typename?: 'NFTMediaPreview', size: number, cid: string, mimeType: string, integrity?: string | null }>, thumbnail?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }, metadata: { __typename?: 'NFTMetadata', id?: string | null, cid: string, mimeType: string, integrity: string, standard: string }, listings: { __typename?: 'NFTListings', listed: boolean, fixedBid: Array<{ __typename?: 'NFTFixedBid', primary: boolean, currency: AsaCode, price: number }>, auctions: Array<{ __typename?: 'NFTAuction', primary: boolean, currency: AsaCode, price: number, duration: number, highestBid: number, started: boolean }> }, statistics: { __typename?: 'NFTStatistics', sold: boolean, latestSale?: { __typename?: 'NFTStatisticsSale', currency?: AsaCode | null, price?: number | null, usdValue?: number | null } | null } }>, pageInfo: { __typename?: 'PageInfo', totalDocs: number, offset: number, limit: number, totalPages: number, page: number, hasPrevPage: boolean, hasNextPage: boolean, prevPage?: number | null, nextPage?: number | null } } };

export type GetListedNfTsQueryVariables = Exact<{
  listingType: ListingType;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  skip?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type GetListedNfTsQuery = { __typename?: 'Query', getListedNFTs: { __typename?: 'NFTsPaginated', nfts: Array<{ __typename?: 'NFT', id: string, status: string, info: { __typename?: 'NFTInfo', title: string, description: string, link: string, nsfw: boolean, ai: boolean, aiDescription: string, tags: Array<string>, updated: boolean }, token: { __typename?: 'NFTToken', index: number, unitName: string, assetName: string, royalty: number, editions: number, mintAddress: string, timestamp: string }, artist: { __typename?: 'NFTArtist', id: string, address: string, name: string, normalizedName: string, suspended: boolean, deleted: boolean, profileImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }, card: { __typename?: 'NFTCard', x: number, y: number, type: Card_Type }, c?: { __typename?: 'NFTCollection', id: string, title: string, normalizedTitle: string, attributes: Array<{ __typename?: 'NFTCollectionAttribute', traitType: string, value: string, displayType: string }> } | null, media: { __typename?: 'NFTMedia', fileroomId?: string | null, cid: string, dimensions: string, storageSize: number, mimeType: string, integrity: string, previews: Array<{ __typename?: 'NFTMediaPreview', size: number, cid: string, mimeType: string, integrity?: string | null }>, thumbnail?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }, metadata: { __typename?: 'NFTMetadata', id?: string | null, cid: string, mimeType: string, integrity: string, standard: string }, listings: { __typename?: 'NFTListings', listed: boolean, fixedBid: Array<{ __typename?: 'NFTFixedBid', primary: boolean, currency: AsaCode, price: number }>, auctions: Array<{ __typename?: 'NFTAuction', primary: boolean, currency: AsaCode, price: number, duration: number, highestBid: number, started: boolean }> }, statistics: { __typename?: 'NFTStatistics', sold: boolean, latestSale?: { __typename?: 'NFTStatisticsSale', currency?: AsaCode | null, price?: number | null, usdValue?: number | null } | null } }>, pageInfo: { __typename?: 'PageInfo', totalDocs: number, offset: number, limit: number, totalPages: number, page: number, hasPrevPage: boolean, hasNextPage: boolean, prevPage?: number | null, nextPage?: number | null } } };

export type GetNftDetailsQueryVariables = Exact<{
  index: Scalars['Int'];
}>;


export type GetNftDetailsQuery = { __typename?: 'Query', getNFTDetails: { __typename?: 'NFT', id: string, status: string, info: { __typename?: 'NFTInfo', title: string, description: string, link: string, nsfw: boolean, ai: boolean, aiDescription: string, tags: Array<string>, updated: boolean }, token: { __typename?: 'NFTToken', index: number, unitName: string, assetName: string, royalty: number, editions: number, mintAddress: string, timestamp: string }, artist: { __typename?: 'NFTArtist', id: string, address: string, name: string, normalizedName: string, suspended: boolean, deleted: boolean, profileImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }, card: { __typename?: 'NFTCard', x: number, y: number, type: Card_Type }, c?: { __typename?: 'NFTCollection', id: string, title: string, normalizedTitle: string, attributes: Array<{ __typename?: 'NFTCollectionAttribute', traitType: string, value: string, displayType: string }>, card?: { __typename?: 'Media', fileroomId?: string | null, cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null } | null, media: { __typename?: 'NFTMedia', fileroomId?: string | null, cid: string, dimensions: string, storageSize: number, mimeType: string, integrity: string, previews: Array<{ __typename?: 'NFTMediaPreview', size: number, cid: string, mimeType: string, integrity?: string | null }>, thumbnail?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }, metadata: { __typename?: 'NFTMetadata', id?: string | null, cid: string, mimeType: string, integrity: string, standard: string }, listings: { __typename?: 'NFTListings', listed: boolean, fixedBid: Array<{ __typename?: 'NFTFixedBid', primary: boolean, currency: AsaCode, price: number }>, auctions: Array<{ __typename?: 'NFTAuction', primary: boolean, currency: AsaCode, price: number, duration: number, highestBid: number, started: boolean }> }, statistics: { __typename?: 'NFTStatistics', sold: boolean, latestSale?: { __typename?: 'NFTStatisticsSale', currency?: AsaCode | null, price?: number | null, usdValue?: number | null } | null } } };

export type GetNftOwnersQueryVariables = Exact<{
  index: Scalars['Int'];
}>;


export type GetNftOwnersQuery = { __typename?: 'Query', getNFTOwners: Array<{ __typename?: 'NFTOwner', address: string, walletBalance: number, listingBalance: number }> };

export type GetNfTsByArtistQueryVariables = Exact<{
  id: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  sort?: InputMaybe<NftSort>;
  status?: InputMaybe<NftSaleStatus>;
}>;


export type GetNfTsByArtistQuery = { __typename?: 'Query', getNFTsByArtist: { __typename?: 'NFTsPaginated', nfts: Array<{ __typename?: 'NFT', id: string, info: { __typename?: 'NFTInfo', title: string, description: string, link: string, nsfw: boolean, ai: boolean, aiDescription: string, tags: Array<string>, updated: boolean }, token: { __typename?: 'NFTToken', index: number, unitName: string, assetName: string, royalty: number, editions: number, mintAddress: string, timestamp: string }, artist: { __typename?: 'NFTArtist', id: string, address: string, name: string, normalizedName: string, suspended: boolean, deleted: boolean, profileImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }, card: { __typename?: 'NFTCard', x: number, y: number, type: Card_Type }, c?: { __typename?: 'NFTCollection', id: string, title: string, normalizedTitle: string, attributes: Array<{ __typename?: 'NFTCollectionAttribute', traitType: string, value: string, displayType: string }> } | null, media: { __typename?: 'NFTMedia', fileroomId?: string | null, cid: string, dimensions: string, storageSize: number, mimeType: string, integrity: string, previews: Array<{ __typename?: 'NFTMediaPreview', size: number, cid: string, mimeType: string, integrity?: string | null }>, thumbnail?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }, metadata: { __typename?: 'NFTMetadata', id?: string | null, cid: string, mimeType: string, integrity: string, standard: string }, listings: { __typename?: 'NFTListings', listed: boolean, fixedBid: Array<{ __typename?: 'NFTFixedBid', primary: boolean, currency: AsaCode, price: number }>, auctions: Array<{ __typename?: 'NFTAuction', primary: boolean, currency: AsaCode, price: number, duration: number, highestBid: number, started: boolean }> }, statistics: { __typename?: 'NFTStatistics', sold: boolean, latestSale?: { __typename?: 'NFTStatisticsSale', currency?: AsaCode | null, price?: number | null, usdValue?: number | null } | null } }>, pageInfo: { __typename?: 'PageInfo', totalDocs: number, offset: number, limit: number, totalPages: number, page: number, hasPrevPage: boolean, hasNextPage: boolean, prevPage?: number | null, nextPage?: number | null } } };

export type GetNfTsByCollectionQueryVariables = Exact<{
  id: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  sort?: InputMaybe<NftSort>;
  status?: InputMaybe<NftSaleStatus>;
}>;


export type GetNfTsByCollectionQuery = { __typename?: 'Query', getNFTsByCollection: { __typename?: 'NFTsPaginated', nfts: Array<{ __typename?: 'NFT', id: string, info: { __typename?: 'NFTInfo', title: string, description: string, link: string, nsfw: boolean, ai: boolean, aiDescription: string, tags: Array<string>, updated: boolean }, token: { __typename?: 'NFTToken', index: number, unitName: string, assetName: string, royalty: number, editions: number, mintAddress: string, timestamp: string }, artist: { __typename?: 'NFTArtist', id: string, address: string, name: string, normalizedName: string, suspended: boolean, deleted: boolean, profileImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }, card: { __typename?: 'NFTCard', x: number, y: number, type: Card_Type }, c?: { __typename?: 'NFTCollection', id: string, title: string, normalizedTitle: string, attributes: Array<{ __typename?: 'NFTCollectionAttribute', traitType: string, value: string, displayType: string }> } | null, media: { __typename?: 'NFTMedia', fileroomId?: string | null, cid: string, dimensions: string, storageSize: number, mimeType: string, integrity: string, previews: Array<{ __typename?: 'NFTMediaPreview', size: number, cid: string, mimeType: string, integrity?: string | null }>, thumbnail?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }, metadata: { __typename?: 'NFTMetadata', id?: string | null, cid: string, mimeType: string, integrity: string, standard: string }, listings: { __typename?: 'NFTListings', listed: boolean, fixedBid: Array<{ __typename?: 'NFTFixedBid', primary: boolean, currency: AsaCode, price: number }>, auctions: Array<{ __typename?: 'NFTAuction', primary: boolean, currency: AsaCode, price: number, duration: number, highestBid: number, started: boolean }> }, statistics: { __typename?: 'NFTStatistics', sold: boolean, latestSale?: { __typename?: 'NFTStatisticsSale', currency?: AsaCode | null, price?: number | null, usdValue?: number | null } | null } }>, pageInfo: { __typename?: 'PageInfo', totalDocs: number, offset: number, limit: number, totalPages: number, page: number, hasPrevPage: boolean, hasNextPage: boolean, prevPage?: number | null, nextPage?: number | null } } };

export type GetNfTsByCollectorQueryVariables = Exact<{
  id: Scalars['AlgorandAddress'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  sort?: InputMaybe<NftCollectedSort>;
  status?: InputMaybe<NftCollectedStatus>;
}>;


export type GetNfTsByCollectorQuery = { __typename?: 'Query', getNFTsByCollector: { __typename?: 'NFTsPaginated', nfts: Array<{ __typename?: 'NFT', id: string, info: { __typename?: 'NFTInfo', title: string, description: string, link: string, nsfw: boolean, ai: boolean, aiDescription: string, tags: Array<string>, updated: boolean }, token: { __typename?: 'NFTToken', index: number, unitName: string, assetName: string, royalty: number, editions: number, mintAddress: string, timestamp: string }, artist: { __typename?: 'NFTArtist', id: string, address: string, name: string, normalizedName: string, suspended: boolean, deleted: boolean, profileImage?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }, card: { __typename?: 'NFTCard', x: number, y: number, type: Card_Type }, c?: { __typename?: 'NFTCollection', id: string, title: string, normalizedTitle: string, attributes: Array<{ __typename?: 'NFTCollectionAttribute', traitType: string, value: string, displayType: string }> } | null, media: { __typename?: 'NFTMedia', fileroomId?: string | null, cid: string, dimensions: string, storageSize: number, mimeType: string, integrity: string, previews: Array<{ __typename?: 'NFTMediaPreview', size: number, cid: string, mimeType: string, integrity?: string | null }>, thumbnail?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null }, metadata: { __typename?: 'NFTMetadata', id?: string | null, cid: string, mimeType: string, integrity: string, standard: string }, listings: { __typename?: 'NFTListings', listed: boolean, fixedBid: Array<{ __typename?: 'NFTFixedBid', primary: boolean, currency: AsaCode, price: number }>, auctions: Array<{ __typename?: 'NFTAuction', primary: boolean, currency: AsaCode, price: number, duration: number, highestBid: number, started: boolean }> }, statistics: { __typename?: 'NFTStatistics', sold: boolean, latestSale?: { __typename?: 'NFTStatisticsSale', currency?: AsaCode | null, price?: number | null, usdValue?: number | null } | null } }>, pageInfo: { __typename?: 'PageInfo', totalDocs: number, offset: number, limit: number, totalPages: number, page: number, hasPrevPage: boolean, hasNextPage: boolean, prevPage?: number | null, nextPage?: number | null } } };

export type SearchNftQueryVariables = Exact<{
  searchTerm: Scalars['String'];
}>;


export type SearchNftQuery = { __typename?: 'Query', searchNFT: Array<{ __typename?: 'NFT', id: string, info: { __typename?: 'NFTInfo', title: string }, token: { __typename?: 'NFTToken', index: number }, artist: { __typename?: 'NFTArtist', name: string }, media: { __typename?: 'NFTMedia', fileroomId?: string | null, cid: string, dimensions: string, storageSize: number, mimeType: string, integrity: string, previews: Array<{ __typename?: 'NFTMediaPreview', size: number, cid: string, mimeType: string, integrity?: string | null }>, thumbnail?: { __typename?: 'Media', cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null } }> };

export type GetNotificationSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNotificationSettingsQuery = { __typename?: 'Query', getNotificationSettings: { __typename?: 'NotificationSettings', subscriptions: Array<string>, enabled: Array<{ __typename?: 'NotificationCategory', type: string, category: string }> } };

export type TestNotificationQueryVariables = Exact<{ [key: string]: never; }>;


export type TestNotificationQuery = { __typename?: 'Query', testNotification?: string | null };

export type GetCurrentQuotesQueryVariables = Exact<{
  fiat: Array<FiatCode> | FiatCode;
  asa: Array<AsaCode> | AsaCode;
}>;


export type GetCurrentQuotesQuery = { __typename?: 'Query', getCurrentQuotes: { __typename?: 'Quote', timestamp: string, quotes?: any | null } };

export type GetHistoricalQuotesQueryVariables = Exact<{
  fiat: Array<FiatCode> | FiatCode;
  asa: Array<AsaCode> | AsaCode;
  range: TimeRange;
}>;


export type GetHistoricalQuotesQuery = { __typename?: 'Query', getHistoricalQuotes: Array<{ __typename?: 'HistoricalQuote', timestamp: string, quotes?: any | null } | null> };

export type GetAllSalesQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SaleSortingOptions>;
  filter?: InputMaybe<SaleFilter>;
}>;


export type GetAllSalesQuery = { __typename?: 'Query', getAllSales: { __typename?: 'SalePaginated', sales: Array<{ __typename?: 'Sale', saleType: SaleType, nftIndex: number, appId: number, currency: AsaCode, unitPrice: number, nNFTs: number, totalPrice: number, txIDs: Array<string>, groupId?: string | null, sellerAddress: string, royaltyAddres: string, buyerAddress: string, sellerShare: number, royaltyShare: number, managerShare: number, round: number, timestamp: string, primary: boolean, totalValue: any, nft?: { __typename?: 'NFT', token: { __typename?: 'NFTToken', index: number }, info: { __typename?: 'NFTInfo', title: string, nsfw: boolean }, media: { __typename?: 'NFTMedia', fileroomId?: string | null, cid: string, dimensions: string, storageSize: number, mimeType: string, integrity: string, previews: Array<{ __typename?: 'NFTMediaPreview', size: number, cid: string, mimeType: string, integrity?: string | null }>, thumbnail?: { __typename?: 'Media', fileroomId?: string | null, cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null } } | null }>, pageInfo: { __typename?: 'PageInfo', totalDocs: number, offset: number, limit: number, totalPages: number, page: number, hasPrevPage: boolean, hasNextPage: boolean, prevPage?: number | null, nextPage?: number | null } } };

export type GetSalesByArtistQueryVariables = Exact<{
  id: Scalars['String'];
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetSalesByArtistQuery = { __typename?: 'Query', getSalesByArtist: { __typename?: 'SalePaginated', sales: Array<{ __typename?: 'Sale', saleType: SaleType, nftIndex: number, appId: number, currency: AsaCode, unitPrice: number, nNFTs: number, totalPrice: number, txIDs: Array<string>, groupId?: string | null, sellerAddress: string, royaltyAddres: string, buyerAddress: string, sellerShare: number, royaltyShare: number, managerShare: number, round: number, timestamp: string, primary: boolean, totalValue: any, nft?: { __typename?: 'NFT', token: { __typename?: 'NFTToken', index: number }, info: { __typename?: 'NFTInfo', title: string, nsfw: boolean }, media: { __typename?: 'NFTMedia', fileroomId?: string | null, cid: string, dimensions: string, storageSize: number, mimeType: string, integrity: string, previews: Array<{ __typename?: 'NFTMediaPreview', size: number, cid: string, mimeType: string, integrity?: string | null }>, thumbnail?: { __typename?: 'Media', fileroomId?: string | null, cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null } } | null }>, pageInfo: { __typename?: 'PageInfo', totalDocs: number, offset: number, limit: number, totalPages: number, page: number, hasPrevPage: boolean, hasNextPage: boolean, prevPage?: number | null, nextPage?: number | null } } };

export type GetSalesByCollectionQueryVariables = Exact<{
  id: Scalars['String'];
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetSalesByCollectionQuery = { __typename?: 'Query', getSalesByCollection: { __typename?: 'SalePaginated', sales: Array<{ __typename?: 'Sale', saleType: SaleType, nftIndex: number, appId: number, currency: AsaCode, unitPrice: number, nNFTs: number, totalPrice: number, txIDs: Array<string>, groupId?: string | null, sellerAddress: string, royaltyAddres: string, buyerAddress: string, sellerShare: number, royaltyShare: number, managerShare: number, round: number, timestamp: string, primary: boolean, totalValue: any, nft?: { __typename?: 'NFT', token: { __typename?: 'NFTToken', index: number }, info: { __typename?: 'NFTInfo', title: string, nsfw: boolean }, media: { __typename?: 'NFTMedia', fileroomId?: string | null, cid: string, dimensions: string, storageSize: number, mimeType: string, integrity: string, previews: Array<{ __typename?: 'NFTMediaPreview', size: number, cid: string, mimeType: string, integrity?: string | null }>, thumbnail?: { __typename?: 'Media', fileroomId?: string | null, cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null } } | null }>, pageInfo: { __typename?: 'PageInfo', totalDocs: number, offset: number, limit: number, totalPages: number, page: number, hasPrevPage: boolean, hasNextPage: boolean, prevPage?: number | null, nextPage?: number | null } } };

export type GetSalesByNftQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  index: Scalars['Int'];
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetSalesByNftQuery = { __typename?: 'Query', getSalesByNFT: { __typename?: 'SalePaginated', sales: Array<{ __typename?: 'Sale', saleType: SaleType, nftIndex: number, appId: number, currency: AsaCode, unitPrice: number, nNFTs: number, totalPrice: number, txIDs: Array<string>, groupId?: string | null, sellerAddress: string, royaltyAddres: string, buyerAddress: string, sellerShare: number, royaltyShare: number, managerShare: number, round: number, timestamp: string, primary: boolean, totalValue: any }>, pageInfo: { __typename?: 'PageInfo', totalDocs: number, offset: number, limit: number, totalPages: number, page: number, hasPrevPage: boolean, hasNextPage: boolean, prevPage?: number | null, nextPage?: number | null } } };

export type GetDestroyV1ListingParamsQueryVariables = Exact<{
  settings: Array<DestroyV1ListingParams> | DestroyV1ListingParams;
}>;


export type GetDestroyV1ListingParamsQuery = { __typename?: 'Query', getDestroyV1ListingParams: Array<Array<{ __typename?: 'UsignedTxn', description: string, txID: string, signers: Array<string>, signature: string, authAddress: string, blob: Uint8Array }>> };

export type GetV1ListingsByAddressQueryVariables = Exact<{
  address?: InputMaybe<Scalars['AlgorandAddress']>;
}>;


export type GetV1ListingsByAddressQuery = { __typename?: 'Query', getV1ListingsByAddress: Array<{ __typename?: 'V1Listing', index: number, listingAddress: string, listingProgram: string, listerAddress: string, price: number, buyLimit?: number | null, buyLimitOn?: boolean | null, fundingHistory: Array<{ __typename?: 'V1ListingFunding', date?: string | null, amount?: number | null }>, sellHistory: Array<{ __typename?: 'V1ListingSell', date?: string | null, amount?: number | null, address?: string | null }>, limitList: Array<{ __typename?: 'V1ListingLimit', amount?: number | null, address?: string | null }> }> };

export type VerifyTxnQueryVariables = Exact<{
  address: Scalars['AlgorandAddress'];
}>;


export type VerifyTxnQuery = { __typename?: 'Query', verifyTxn: Array<Array<{ __typename?: 'UsignedTxn', description: string, txID: string, blob: Uint8Array, signers: Array<string>, signature: string, authAddress: string }>> };

export type ViewApplicationStatusQueryVariables = Exact<{
  id: Scalars['ObjectId'];
  token: Scalars['String'];
}>;


export type ViewApplicationStatusQuery = { __typename?: 'Query', viewApplicationStatus?: { __typename?: 'ApplicationStatus', status: ApplicationStatuses, emailVerified: boolean, socialsAdded: boolean, requiresArt: boolean, artUploaded: boolean, links?: string | null, instagram?: string | null, twitter?: string | null } | null };

export type NewApplicationsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewApplicationsSubscription = { __typename?: 'Subscription', newApplications: { __typename?: 'ApplicationDetails', id: string, name: string, email: string, status: ApplicationStatuses, twitter?: string | null, instagram?: string | null, links?: string | null, art?: Array<string> | null } };

export type NewBandsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewBandsSubscription = { __typename?: 'Subscription', newBands: { __typename?: 'BandDetails', id: string, name: string, status: BandStatuses } };

export type SubAllNewSalesSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubAllNewSalesSubscription = { __typename?: 'Subscription', subAllNewSales: { __typename?: 'Sale', saleType: SaleType, nftIndex: number, appId: number, currency: AsaCode, unitPrice: number, nNFTs: number, totalPrice: number, totalValue: any, txIDs: Array<string>, groupId?: string | null, sellerAddress: string, royaltyAddres: string, buyerAddress: string, sellerShare: number, royaltyShare: number, managerShare: number, round: number, timestamp: string, primary: boolean, nft?: { __typename?: 'NFT', token: { __typename?: 'NFTToken', index: number }, info: { __typename?: 'NFTInfo', title: string, nsfw: boolean }, media: { __typename?: 'NFTMedia', fileroomId?: string | null, cid: string, dimensions: string, storageSize: number, mimeType: string, integrity: string, previews: Array<{ __typename?: 'NFTMediaPreview', size: number, cid: string, mimeType: string, integrity?: string | null }>, thumbnail?: { __typename?: 'Media', fileroomId?: string | null, cid: string, mimeType: string, previews: Array<{ __typename?: 'MediaPreview', size: number, cid: string, mimeType: string }> } | null } } | null } };


export const UserLoginDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AlgorandAddress"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"txn"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SignedTxn"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"txn"},"value":{"kind":"Variable","name":{"kind":"Name","value":"txn"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authToken"}},{"kind":"Field","name":{"kind":"Name","value":"exp"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletAddress"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"joinDate"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bannerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"customLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"collector"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"banned"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"overWriteNfdomains"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"generalStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"followers"}},{"kind":"Field","name":{"kind":"Name","value":"following"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileroom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"isArtist"}},{"kind":"Field","name":{"kind":"Name","value":"isDev"}}]}}]}}]}}]} as unknown as DocumentNode<UserLoginMutation, UserLoginMutationVariables>;
export const ChangeApplicationStatusDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeApplicationStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ApplicationStatuses"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeApplicationStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}},{"kind":"Field","name":{"kind":"Name","value":"links"}},{"kind":"Field","name":{"kind":"Name","value":"art"}},{"kind":"Field","name":{"kind":"Name","value":"inviteLink"}},{"kind":"Field","name":{"kind":"Name","value":"accountCreated"}}]}}]}}]} as unknown as DocumentNode<ChangeApplicationStatusMutation, ChangeApplicationStatusMutationVariables>;
export const InviteArtistDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InviteArtist"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmailAddress"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inviteArtist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}},{"kind":"Field","name":{"kind":"Name","value":"links"}},{"kind":"Field","name":{"kind":"Name","value":"art"}},{"kind":"Field","name":{"kind":"Name","value":"inviteLink"}},{"kind":"Field","name":{"kind":"Name","value":"accountCreated"}}]}}]}}]} as unknown as DocumentNode<InviteArtistMutation, InviteArtistMutationVariables>;
export const CreateApplicationDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateApplication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmailAddress"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createApplication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<CreateApplicationMutation, CreateApplicationMutationVariables>;
export const CreateArtistAccountDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateArtistAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AlgorandAddress"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"txn"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignedTxn"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createArtistAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}},{"kind":"Argument","name":{"kind":"Name","value":"txn"},"value":{"kind":"Variable","name":{"kind":"Name","value":"txn"}}}]}]}}]} as unknown as DocumentNode<CreateArtistAccountMutation, CreateArtistAccountMutationVariables>;
export const SaveApplicationLinksDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SaveApplicationLinks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"links"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saveApplicationLinks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}},{"kind":"Argument","name":{"kind":"Name","value":"links"},"value":{"kind":"Variable","name":{"kind":"Name","value":"links"}}}]}]}}]} as unknown as DocumentNode<SaveApplicationLinksMutation, SaveApplicationLinksMutationVariables>;
export const SubmitApplicationSocialsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SubmitApplicationSocials"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"links"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submitApplicationSocials"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}},{"kind":"Argument","name":{"kind":"Name","value":"links"},"value":{"kind":"Variable","name":{"kind":"Name","value":"links"}}}]}]}}]} as unknown as DocumentNode<SubmitApplicationSocialsMutation, SubmitApplicationSocialsMutationVariables>;
export const UpdateArtistSettingsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateArtistSettings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"settings"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ArtistSettingsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateArtistSettings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"settings"},"value":{"kind":"Variable","name":{"kind":"Name","value":"settings"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"joinDate"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bannerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"customLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalMinted"}},{"kind":"Field","name":{"kind":"Name","value":"totalSold"}},{"kind":"Field","name":{"kind":"Name","value":"floor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"featured"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isFeatured"}},{"kind":"Field","name":{"kind":"Name","value":"categories"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateArtistSettingsMutation, UpdateArtistSettingsMutationVariables>;
export const CreateBandDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateBand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wallets"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asas"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"period"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asaAmount"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"coin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"wallets"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wallets"}}},{"kind":"Argument","name":{"kind":"Name","value":"asas"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asas"}}},{"kind":"Argument","name":{"kind":"Name","value":"period"},"value":{"kind":"Variable","name":{"kind":"Name","value":"period"}}},{"kind":"Argument","name":{"kind":"Name","value":"asaAmount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asaAmount"}}},{"kind":"Argument","name":{"kind":"Name","value":"coin"},"value":{"kind":"Variable","name":{"kind":"Name","value":"coin"}}}]}]}}]} as unknown as DocumentNode<CreateBandMutation, CreateBandMutationVariables>;
export const DeleteCollectionDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteCollectionMutation, DeleteCollectionMutationVariables>;
export const UpsertCollectionDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpsertCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"settings"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CollectionSettingsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"settings"},"value":{"kind":"Variable","name":{"kind":"Name","value":"settings"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedTitle"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"private"}},{"kind":"Field","name":{"kind":"Name","value":"locked"}},{"kind":"Field","name":{"kind":"Name","value":"rarity"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"mintingAddresses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"locked"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"traitType"}},{"kind":"Field","name":{"kind":"Name","value":"displayType"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"locked"}},{"kind":"Field","name":{"kind":"Name","value":"rarityScore"}}]}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"usedValues"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nNFTs"}},{"kind":"Field","name":{"kind":"Name","value":"sales"}},{"kind":"Field","name":{"kind":"Name","value":"floor"}},{"kind":"Field","name":{"kind":"Name","value":"volume"}}]}}]}}]}}]} as unknown as DocumentNode<UpsertCollectionMutation, UpsertCollectionMutationVariables>;
export const CreateNewNftDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateNewNFT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"settings"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NFTSettingsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createNewNFT"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"settings"},"value":{"kind":"Variable","name":{"kind":"Name","value":"settings"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"stage"}},{"kind":"Field","name":{"kind":"Name","value":"edit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"info"}},{"kind":"Field","name":{"kind":"Name","value":"collection"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"nsfw"}},{"kind":"Field","name":{"kind":"Name","value":"ai"}},{"kind":"Field","name":{"kind":"Name","value":"aiDescription"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unitName"}},{"kind":"Field","name":{"kind":"Name","value":"assetName"}},{"kind":"Field","name":{"kind":"Name","value":"royalty"}},{"kind":"Field","name":{"kind":"Name","value":"editions"}}]}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"c"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"traitType"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"displayType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"}},{"kind":"Field","name":{"kind":"Name","value":"storageSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateNewNftMutation, CreateNewNftMutationVariables>;
export const DeleteNfTsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteNFTs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteNFTs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}]}]}}]} as unknown as DocumentNode<DeleteNfTsMutation, DeleteNfTsMutationVariables>;
export const EditNftDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditNFT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"settings"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NFTSettingsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editNFT"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"settings"},"value":{"kind":"Variable","name":{"kind":"Name","value":"settings"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"stage"}},{"kind":"Field","name":{"kind":"Name","value":"edit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"info"}},{"kind":"Field","name":{"kind":"Name","value":"collection"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"nsfw"}},{"kind":"Field","name":{"kind":"Name","value":"ai"}},{"kind":"Field","name":{"kind":"Name","value":"aiDescription"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unitName"}},{"kind":"Field","name":{"kind":"Name","value":"assetName"}},{"kind":"Field","name":{"kind":"Name","value":"royalty"}},{"kind":"Field","name":{"kind":"Name","value":"editions"}}]}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"c"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"traitType"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"displayType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"}},{"kind":"Field","name":{"kind":"Name","value":"storageSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<EditNftMutation, EditNftMutationVariables>;
export const SubmitDeleteNftDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SubmitDeleteNFT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"txns"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignedTxn"}}}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submitDeleteNFT"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"txns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"txns"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"indexes"}},{"kind":"Field","name":{"kind":"Name","value":"partialErrors"}}]}}]}}]} as unknown as DocumentNode<SubmitDeleteNftMutation, SubmitDeleteNftMutationVariables>;
export const SubmitMintNftDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SubmitMintNFT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"txns"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignedTxn"}}}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submitMintNFT"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"txns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"txns"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nfts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"stage"}},{"kind":"Field","name":{"kind":"Name","value":"edit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"info"}},{"kind":"Field","name":{"kind":"Name","value":"collection"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"nsfw"}},{"kind":"Field","name":{"kind":"Name","value":"ai"}},{"kind":"Field","name":{"kind":"Name","value":"aiDescription"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unitName"}},{"kind":"Field","name":{"kind":"Name","value":"assetName"}},{"kind":"Field","name":{"kind":"Name","value":"royalty"}},{"kind":"Field","name":{"kind":"Name","value":"editions"}}]}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"c"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"traitType"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"displayType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"}},{"kind":"Field","name":{"kind":"Name","value":"storageSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"partialErrors"}}]}}]}}]} as unknown as DocumentNode<SubmitMintNftMutation, SubmitMintNftMutationVariables>;
export const SubmitBuyFixedBidDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SubmitBuyFixedBid"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"txns"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignedTxn"}}}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submitBuyFixedBid"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"txns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"txns"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nftIndex"}},{"kind":"Field","name":{"kind":"Name","value":"appId"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"sellerAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"managerPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerRevenueSink"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyRevenueSink"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerShare"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyShare"}},{"kind":"Field","name":{"kind":"Name","value":"managerShare"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"isSetup"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"partialErrors"}}]}}]}}]} as unknown as DocumentNode<SubmitBuyFixedBidMutation, SubmitBuyFixedBidMutationVariables>;
export const SubmitDeployFixedBidDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SubmitDeployFixedBid"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"txns"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignedTxn"}}}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submitDeployFixedBid"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"txns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"txns"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nftIndex"}},{"kind":"Field","name":{"kind":"Name","value":"appId"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"sellerAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"managerPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerRevenueSink"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyRevenueSink"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerShare"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyShare"}},{"kind":"Field","name":{"kind":"Name","value":"managerShare"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"isSetup"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"partialErrors"}}]}}]}}]} as unknown as DocumentNode<SubmitDeployFixedBidMutation, SubmitDeployFixedBidMutationVariables>;
export const SubmitDepositFixedBidDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SubmitDepositFixedBid"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"txns"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignedTxn"}}}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submitDepositFixedBid"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"txns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"txns"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nftIndex"}},{"kind":"Field","name":{"kind":"Name","value":"appId"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"sellerAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"managerPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerRevenueSink"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyRevenueSink"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerShare"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyShare"}},{"kind":"Field","name":{"kind":"Name","value":"managerShare"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"isSetup"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"partialErrors"}}]}}]}}]} as unknown as DocumentNode<SubmitDepositFixedBidMutation, SubmitDepositFixedBidMutationVariables>;
export const SubmitDestroyFixedBidDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SubmitDestroyFixedBid"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"txns"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignedTxn"}}}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submitDestroyFixedBid"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"txns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"txns"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nftIndex"}},{"kind":"Field","name":{"kind":"Name","value":"appId"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"sellerAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"managerPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerRevenueSink"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyRevenueSink"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerShare"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyShare"}},{"kind":"Field","name":{"kind":"Name","value":"managerShare"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"isSetup"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"partialErrors"}}]}}]}}]} as unknown as DocumentNode<SubmitDestroyFixedBidMutation, SubmitDestroyFixedBidMutationVariables>;
export const SubmitExtractFixedBidDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SubmitExtractFixedBid"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"txns"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignedTxn"}}}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submitExtractFixedBid"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"txns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"txns"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nftIndex"}},{"kind":"Field","name":{"kind":"Name","value":"appId"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"sellerAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"managerPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerRevenueSink"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyRevenueSink"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerShare"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyShare"}},{"kind":"Field","name":{"kind":"Name","value":"managerShare"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"isSetup"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"partialErrors"}}]}}]}}]} as unknown as DocumentNode<SubmitExtractFixedBidMutation, SubmitExtractFixedBidMutationVariables>;
export const SubmitSetupFixedBidDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SubmitSetupFixedBid"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"txns"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignedTxn"}}}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submitSetupFixedBid"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"txns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"txns"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nftIndex"}},{"kind":"Field","name":{"kind":"Name","value":"appId"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"sellerAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"managerPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerRevenueSink"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyRevenueSink"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerShare"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyShare"}},{"kind":"Field","name":{"kind":"Name","value":"managerShare"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"isSetup"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"partialErrors"}}]}}]}}]} as unknown as DocumentNode<SubmitSetupFixedBidMutation, SubmitSetupFixedBidMutationVariables>;
export const SubmitUpdatePriceFixedBidDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SubmitUpdatePriceFixedBid"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"txns"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignedTxn"}}}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submitUpdatePriceFixedBid"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"txns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"txns"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nftIndex"}},{"kind":"Field","name":{"kind":"Name","value":"appId"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"sellerAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"managerPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerRevenueSink"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyRevenueSink"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerShare"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyShare"}},{"kind":"Field","name":{"kind":"Name","value":"managerShare"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"isSetup"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"partialErrors"}}]}}]}}]} as unknown as DocumentNode<SubmitUpdatePriceFixedBidMutation, SubmitUpdatePriceFixedBidMutationVariables>;
export const AddNotificationSubscriptionDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddNotificationSubscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subscription"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NotificationSubscription"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addNotificationSubscription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"subscription"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subscription"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscriptions"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"category"}}]}}]}}]}}]} as unknown as DocumentNode<AddNotificationSubscriptionMutation, AddNotificationSubscriptionMutationVariables>;
export const RemoveNotificationSubscriptionDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveNotificationSubscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionHash"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeNotificationSubscription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"subscriptionHash"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionHash"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscriptions"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"category"}}]}}]}}]}}]} as unknown as DocumentNode<RemoveNotificationSubscriptionMutation, RemoveNotificationSubscriptionMutationVariables>;
export const UpdateNotificationCategoriesDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateNotificationCategories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categories"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NotificationCategoryInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateNotificationCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"categories"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categories"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscriptions"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"category"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateNotificationCategoriesMutation, UpdateNotificationCategoriesMutationVariables>;
export const SubmitDestroyV1ListingDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SubmitDestroyV1Listing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"txns"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignedTxn"}}}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submitDestroyV1Listing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"txns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"txns"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"listingAddress"}},{"kind":"Field","name":{"kind":"Name","value":"listingProgram"}},{"kind":"Field","name":{"kind":"Name","value":"listerAddress"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"fundingHistory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sellHistory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buyLimit"}},{"kind":"Field","name":{"kind":"Name","value":"buyLimitOn"}},{"kind":"Field","name":{"kind":"Name","value":"limitList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"partialErrors"}}]}}]}}]} as unknown as DocumentNode<SubmitDestroyV1ListingMutation, SubmitDestroyV1ListingMutationVariables>;
export const UserLoginInfoDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserLoginInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AlgorandAddress"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userLoginInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletAddress"}},{"kind":"Field","name":{"kind":"Name","value":"hasPassword"}},{"kind":"Field","name":{"kind":"Name","value":"newUser"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verifyTxn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"txID"}},{"kind":"Field","name":{"kind":"Name","value":"blob"}},{"kind":"Field","name":{"kind":"Name","value":"signers"}},{"kind":"Field","name":{"kind":"Name","value":"signature"}},{"kind":"Field","name":{"kind":"Name","value":"authAddress"}}]}}]}}]} as unknown as DocumentNode<UserLoginInfoQuery, UserLoginInfoQueryVariables>;
export const GetApplicationsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetApplications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ApplicationStatuses"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getApplications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"applications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}},{"kind":"Field","name":{"kind":"Name","value":"links"}},{"kind":"Field","name":{"kind":"Name","value":"art"}},{"kind":"Field","name":{"kind":"Name","value":"inviteLink"}},{"kind":"Field","name":{"kind":"Name","value":"accountCreated"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"prevPage"}},{"kind":"Field","name":{"kind":"Name","value":"nextPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetApplicationsQuery, GetApplicationsQueryVariables>;
export const GetBandsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBands"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BandStatuses"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getBands"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"period"}},{"kind":"Field","name":{"kind":"Name","value":"date"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"wallets"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"prevPage"}},{"kind":"Field","name":{"kind":"Name","value":"nextPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetBandsQuery, GetBandsQueryVariables>;
export const GetArtistDetailsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetArtistDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getArtistDetails"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletAddress"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bannerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"customLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalMinted"}},{"kind":"Field","name":{"kind":"Name","value":"totalSold"}},{"kind":"Field","name":{"kind":"Name","value":"floor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"joinDate"}},{"kind":"Field","name":{"kind":"Name","value":"featured"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isFeatured"}},{"kind":"Field","name":{"kind":"Name","value":"categories"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"generalStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"followers"}},{"kind":"Field","name":{"kind":"Name","value":"following"}}]}}]}}]}}]} as unknown as DocumentNode<GetArtistDetailsQuery, GetArtistDetailsQueryVariables>;
export const GetArtistSettingsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetArtistSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getArtistSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"joinDate"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bannerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"customLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalMinted"}},{"kind":"Field","name":{"kind":"Name","value":"totalSold"}},{"kind":"Field","name":{"kind":"Name","value":"floor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"featured"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isFeatured"}},{"kind":"Field","name":{"kind":"Name","value":"categories"}}]}}]}}]}}]} as unknown as DocumentNode<GetArtistSettingsQuery, GetArtistSettingsQueryVariables>;
export const GetFeaturedArtistsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFeaturedArtists"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFeaturedArtists"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedTitle"}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bannerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"customLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalMinted"}},{"kind":"Field","name":{"kind":"Name","value":"totalSold"}},{"kind":"Field","name":{"kind":"Name","value":"floor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"joinDate"}},{"kind":"Field","name":{"kind":"Name","value":"featured"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isFeatured"}},{"kind":"Field","name":{"kind":"Name","value":"categories"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetFeaturedArtistsQuery, GetFeaturedArtistsQueryVariables>;
export const GetTwitterVerificationLinkDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTwitterVerificationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTwitterVerificationLink"}}]}}]} as unknown as DocumentNode<GetTwitterVerificationLinkQuery, GetTwitterVerificationLinkQueryVariables>;
export const SearchArtistDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchArtist"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchArtist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchTerm"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bannerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"customLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalMinted"}},{"kind":"Field","name":{"kind":"Name","value":"totalSold"}},{"kind":"Field","name":{"kind":"Name","value":"floor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"joinDate"}},{"kind":"Field","name":{"kind":"Name","value":"featured"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isFeatured"}},{"kind":"Field","name":{"kind":"Name","value":"categories"}}]}}]}}]}}]} as unknown as DocumentNode<SearchArtistQuery, SearchArtistQueryVariables>;
export const GetAllCollectionsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllCollections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CollectionSort"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllCollections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedTitle"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"rarity"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"traitType"}},{"kind":"Field","name":{"kind":"Name","value":"displayType"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rarityScore"}}]}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nNFTs"}},{"kind":"Field","name":{"kind":"Name","value":"sales"}},{"kind":"Field","name":{"kind":"Name","value":"floor"}},{"kind":"Field","name":{"kind":"Name","value":"volume"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"prevPage"}},{"kind":"Field","name":{"kind":"Name","value":"nextPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllCollectionsQuery, GetAllCollectionsQueryVariables>;
export const GetCollectionDetailsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollectionDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCollectionDetails"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedTitle"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"rarity"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"traitType"}},{"kind":"Field","name":{"kind":"Name","value":"displayType"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rarityScore"}}]}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nNFTs"}},{"kind":"Field","name":{"kind":"Name","value":"sales"}},{"kind":"Field","name":{"kind":"Name","value":"floor"}},{"kind":"Field","name":{"kind":"Name","value":"volume"}}]}}]}}]}}]} as unknown as DocumentNode<GetCollectionDetailsQuery, GetCollectionDetailsQueryVariables>;
export const GetCollectionsByArtistDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollectionsByArtist"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCollectionsByArtist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedTitle"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"rarity"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"traitType"}},{"kind":"Field","name":{"kind":"Name","value":"displayType"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rarityScore"}}]}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nNFTs"}},{"kind":"Field","name":{"kind":"Name","value":"sales"}},{"kind":"Field","name":{"kind":"Name","value":"floor"}},{"kind":"Field","name":{"kind":"Name","value":"volume"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"prevPage"}},{"kind":"Field","name":{"kind":"Name","value":"nextPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetCollectionsByArtistQuery, GetCollectionsByArtistQueryVariables>;
export const SearchCollectionDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchTerm"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedTitle"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"rarity"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"traitType"}},{"kind":"Field","name":{"kind":"Name","value":"displayType"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rarityScore"}}]}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nNFTs"}},{"kind":"Field","name":{"kind":"Name","value":"sales"}},{"kind":"Field","name":{"kind":"Name","value":"floor"}},{"kind":"Field","name":{"kind":"Name","value":"volume"}}]}}]}}]}}]} as unknown as DocumentNode<SearchCollectionQuery, SearchCollectionQueryVariables>;
export const GetCollectionSettingsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollectionSettings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCollectionSettings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedTitle"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"private"}},{"kind":"Field","name":{"kind":"Name","value":"locked"}},{"kind":"Field","name":{"kind":"Name","value":"rarity"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"mintingAddresses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"locked"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"traitType"}},{"kind":"Field","name":{"kind":"Name","value":"displayType"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"locked"}},{"kind":"Field","name":{"kind":"Name","value":"rarityScore"}}]}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"usedValues"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nNFTs"}},{"kind":"Field","name":{"kind":"Name","value":"sales"}},{"kind":"Field","name":{"kind":"Name","value":"floor"}},{"kind":"Field","name":{"kind":"Name","value":"volume"}}]}}]}}]}}]} as unknown as DocumentNode<GetCollectionSettingsQuery, GetCollectionSettingsQueryVariables>;
export const GetUserCollectionsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserCollections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserCollections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedTitle"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"private"}},{"kind":"Field","name":{"kind":"Name","value":"locked"}},{"kind":"Field","name":{"kind":"Name","value":"rarity"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"mintingAddresses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"locked"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"traitType"}},{"kind":"Field","name":{"kind":"Name","value":"displayType"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"locked"}},{"kind":"Field","name":{"kind":"Name","value":"rarityScore"}}]}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"usedValues"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nNFTs"}},{"kind":"Field","name":{"kind":"Name","value":"sales"}},{"kind":"Field","name":{"kind":"Name","value":"floor"}},{"kind":"Field","name":{"kind":"Name","value":"volume"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserCollectionsQuery, GetUserCollectionsQueryVariables>;
export const GetConceptNfTsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetConceptNFTs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getConceptNFTs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nfts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"stage"}},{"kind":"Field","name":{"kind":"Name","value":"edit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"info"}},{"kind":"Field","name":{"kind":"Name","value":"collection"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"nsfw"}},{"kind":"Field","name":{"kind":"Name","value":"ai"}},{"kind":"Field","name":{"kind":"Name","value":"aiDescription"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unitName"}},{"kind":"Field","name":{"kind":"Name","value":"assetName"}},{"kind":"Field","name":{"kind":"Name","value":"royalty"}},{"kind":"Field","name":{"kind":"Name","value":"editions"}}]}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"c"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"traitType"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"displayType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"}},{"kind":"Field","name":{"kind":"Name","value":"storageSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"prevPage"}},{"kind":"Field","name":{"kind":"Name","value":"nextPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetConceptNfTsQuery, GetConceptNfTsQueryVariables>;
export const GetDeleteNftParamsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDeleteNFTParams"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"indexes"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDeleteNFTParams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"indexes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"indexes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"blob"}},{"kind":"Field","name":{"kind":"Name","value":"txID"}},{"kind":"Field","name":{"kind":"Name","value":"signers"}},{"kind":"Field","name":{"kind":"Name","value":"signature"}},{"kind":"Field","name":{"kind":"Name","value":"authAddress"}}]}}]}}]} as unknown as DocumentNode<GetDeleteNftParamsQuery, GetDeleteNftParamsQueryVariables>;
export const GetMintNftParamsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMintNFTParams"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMintNFTParams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"txID"}},{"kind":"Field","name":{"kind":"Name","value":"signers"}},{"kind":"Field","name":{"kind":"Name","value":"signature"}},{"kind":"Field","name":{"kind":"Name","value":"authAddress"}},{"kind":"Field","name":{"kind":"Name","value":"blob"}}]}}]}}]} as unknown as DocumentNode<GetMintNftParamsQuery, GetMintNftParamsQueryVariables>;
export const GetNftSettingsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNFTSettings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getNFTSettings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"stage"}},{"kind":"Field","name":{"kind":"Name","value":"edit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"info"}},{"kind":"Field","name":{"kind":"Name","value":"collection"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"nsfw"}},{"kind":"Field","name":{"kind":"Name","value":"ai"}},{"kind":"Field","name":{"kind":"Name","value":"aiDescription"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unitName"}},{"kind":"Field","name":{"kind":"Name","value":"assetName"}},{"kind":"Field","name":{"kind":"Name","value":"royalty"}},{"kind":"Field","name":{"kind":"Name","value":"editions"}}]}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"c"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"traitType"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"displayType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"}},{"kind":"Field","name":{"kind":"Name","value":"storageSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetNftSettingsQuery, GetNftSettingsQueryVariables>;
export const GetNftTemplateDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNFTTemplate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getNFTTemplate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"stage"}},{"kind":"Field","name":{"kind":"Name","value":"edit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"info"}},{"kind":"Field","name":{"kind":"Name","value":"collection"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"nsfw"}},{"kind":"Field","name":{"kind":"Name","value":"ai"}},{"kind":"Field","name":{"kind":"Name","value":"aiDescription"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unitName"}},{"kind":"Field","name":{"kind":"Name","value":"assetName"}},{"kind":"Field","name":{"kind":"Name","value":"royalty"}},{"kind":"Field","name":{"kind":"Name","value":"editions"}}]}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"c"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"traitType"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"displayType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"}},{"kind":"Field","name":{"kind":"Name","value":"storageSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetNftTemplateQuery, GetNftTemplateQueryVariables>;
export const GetBuyFixedBidParamsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBuyFixedBidParams"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"settings"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BuyFixedBidParams"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getBuyFixedBidParams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"settings"},"value":{"kind":"Variable","name":{"kind":"Name","value":"settings"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"blob"}},{"kind":"Field","name":{"kind":"Name","value":"txID"}},{"kind":"Field","name":{"kind":"Name","value":"signers"}},{"kind":"Field","name":{"kind":"Name","value":"signature"}},{"kind":"Field","name":{"kind":"Name","value":"authAddress"}}]}}]}}]} as unknown as DocumentNode<GetBuyFixedBidParamsQuery, GetBuyFixedBidParamsQueryVariables>;
export const GetDeployFixedBidParamsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDeployFixedBidParams"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"settings"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeployFixedBidParams"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDeployFixedBidParams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"settings"},"value":{"kind":"Variable","name":{"kind":"Name","value":"settings"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"blob"}},{"kind":"Field","name":{"kind":"Name","value":"txID"}},{"kind":"Field","name":{"kind":"Name","value":"signers"}},{"kind":"Field","name":{"kind":"Name","value":"signature"}},{"kind":"Field","name":{"kind":"Name","value":"authAddress"}}]}}]}}]} as unknown as DocumentNode<GetDeployFixedBidParamsQuery, GetDeployFixedBidParamsQueryVariables>;
export const GetDepositFixedBidParamsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDepositFixedBidParams"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"settings"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DepositFixedBidParams"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDepositFixedBidParams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"settings"},"value":{"kind":"Variable","name":{"kind":"Name","value":"settings"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"blob"}},{"kind":"Field","name":{"kind":"Name","value":"txID"}},{"kind":"Field","name":{"kind":"Name","value":"signers"}},{"kind":"Field","name":{"kind":"Name","value":"signature"}},{"kind":"Field","name":{"kind":"Name","value":"authAddress"}}]}}]}}]} as unknown as DocumentNode<GetDepositFixedBidParamsQuery, GetDepositFixedBidParamsQueryVariables>;
export const GetDestroyFixedBidParamsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDestroyFixedBidParams"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"settings"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DestroyFixedBidParams"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDestroyFixedBidParams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"settings"},"value":{"kind":"Variable","name":{"kind":"Name","value":"settings"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"blob"}},{"kind":"Field","name":{"kind":"Name","value":"txID"}},{"kind":"Field","name":{"kind":"Name","value":"signers"}},{"kind":"Field","name":{"kind":"Name","value":"signature"}},{"kind":"Field","name":{"kind":"Name","value":"authAddress"}}]}}]}}]} as unknown as DocumentNode<GetDestroyFixedBidParamsQuery, GetDestroyFixedBidParamsQueryVariables>;
export const GetExtractFixedBidParamsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetExtractFixedBidParams"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"settings"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ExtractFixedBidParams"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getExtractFixedBidParams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"settings"},"value":{"kind":"Variable","name":{"kind":"Name","value":"settings"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"blob"}},{"kind":"Field","name":{"kind":"Name","value":"txID"}},{"kind":"Field","name":{"kind":"Name","value":"signers"}},{"kind":"Field","name":{"kind":"Name","value":"signature"}},{"kind":"Field","name":{"kind":"Name","value":"authAddress"}}]}}]}}]} as unknown as DocumentNode<GetExtractFixedBidParamsQuery, GetExtractFixedBidParamsQueryVariables>;
export const GetFixedBidsByArtistDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFixedBidsByArtist"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AlgorandAddress"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFixedBidsByArtist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nftIndex"}},{"kind":"Field","name":{"kind":"Name","value":"appId"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"sellerAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"managerPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerRevenueSink"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyRevenueSink"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerShare"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyShare"}},{"kind":"Field","name":{"kind":"Name","value":"managerShare"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"isSetup"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"unitName"}},{"kind":"Field","name":{"kind":"Name","value":"assetName"}},{"kind":"Field","name":{"kind":"Name","value":"royalty"}},{"kind":"Field","name":{"kind":"Name","value":"editions"}},{"kind":"Field","name":{"kind":"Name","value":"mintAddress"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"}},{"kind":"Field","name":{"kind":"Name","value":"storageSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"prevPage"}},{"kind":"Field","name":{"kind":"Name","value":"nextPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetFixedBidsByArtistQuery, GetFixedBidsByArtistQueryVariables>;
export const GetFixedBidsByCollectorDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFixedBidsByCollector"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AlgorandAddress"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFixedBidsByCollector"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nftIndex"}},{"kind":"Field","name":{"kind":"Name","value":"appId"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"sellerAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"managerPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerRevenueSink"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyRevenueSink"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerShare"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyShare"}},{"kind":"Field","name":{"kind":"Name","value":"managerShare"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"isSetup"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"unitName"}},{"kind":"Field","name":{"kind":"Name","value":"assetName"}},{"kind":"Field","name":{"kind":"Name","value":"royalty"}},{"kind":"Field","name":{"kind":"Name","value":"editions"}},{"kind":"Field","name":{"kind":"Name","value":"mintAddress"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"}},{"kind":"Field","name":{"kind":"Name","value":"storageSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"prevPage"}},{"kind":"Field","name":{"kind":"Name","value":"nextPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetFixedBidsByCollectorQuery, GetFixedBidsByCollectorQueryVariables>;
export const GetFixedBidsByNftDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFixedBidsByNFT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"index"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFixedBidsByNFT"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"index"},"value":{"kind":"Variable","name":{"kind":"Name","value":"index"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nftIndex"}},{"kind":"Field","name":{"kind":"Name","value":"appId"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"sellerAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"managerPayoutAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerRevenueSink"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyRevenueSink"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerShare"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyShare"}},{"kind":"Field","name":{"kind":"Name","value":"managerShare"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"isSetup"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}}]}}]}}]} as unknown as DocumentNode<GetFixedBidsByNftQuery, GetFixedBidsByNftQueryVariables>;
export const GetSetupFixedBidParamsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSetupFixedBidParams"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"settings"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SetupFixedBidParams"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSetupFixedBidParams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"settings"},"value":{"kind":"Variable","name":{"kind":"Name","value":"settings"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"blob"}},{"kind":"Field","name":{"kind":"Name","value":"txID"}},{"kind":"Field","name":{"kind":"Name","value":"signers"}},{"kind":"Field","name":{"kind":"Name","value":"signature"}},{"kind":"Field","name":{"kind":"Name","value":"authAddress"}}]}}]}}]} as unknown as DocumentNode<GetSetupFixedBidParamsQuery, GetSetupFixedBidParamsQueryVariables>;
export const GetUpdatePriceFixedBidParamsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUpdatePriceFixedBidParams"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"settings"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePriceFixedBidParams"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUpdatePriceFixedBidParams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"settings"},"value":{"kind":"Variable","name":{"kind":"Name","value":"settings"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"blob"}},{"kind":"Field","name":{"kind":"Name","value":"txID"}},{"kind":"Field","name":{"kind":"Name","value":"signers"}},{"kind":"Field","name":{"kind":"Name","value":"signature"}},{"kind":"Field","name":{"kind":"Name","value":"authAddress"}}]}}]}}]} as unknown as DocumentNode<GetUpdatePriceFixedBidParamsQuery, GetUpdatePriceFixedBidParamsQueryVariables>;
export const GetCollectedNfTsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollectedNFTs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AlgorandAddress"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCollectedNFTs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nfts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"nsfw"}},{"kind":"Field","name":{"kind":"Name","value":"ai"}},{"kind":"Field","name":{"kind":"Name","value":"aiDescription"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"unitName"}},{"kind":"Field","name":{"kind":"Name","value":"assetName"}},{"kind":"Field","name":{"kind":"Name","value":"royalty"}},{"kind":"Field","name":{"kind":"Name","value":"editions"}},{"kind":"Field","name":{"kind":"Name","value":"mintAddress"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"suspended"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"c"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedTitle"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"traitType"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"displayType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"}},{"kind":"Field","name":{"kind":"Name","value":"storageSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}},{"kind":"Field","name":{"kind":"Name","value":"standard"}}]}},{"kind":"Field","name":{"kind":"Name","value":"listings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listed"}},{"kind":"Field","name":{"kind":"Name","value":"fixedBid"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"auctions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"highestBid"}},{"kind":"Field","name":{"kind":"Name","value":"started"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"statistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sold"}},{"kind":"Field","name":{"kind":"Name","value":"latestSale"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"usdValue"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"prevPage"}},{"kind":"Field","name":{"kind":"Name","value":"nextPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetCollectedNfTsQuery, GetCollectedNfTsQueryVariables>;
export const GetCreatedNfTsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCreatedNFTs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCreatedNFTs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nfts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"nsfw"}},{"kind":"Field","name":{"kind":"Name","value":"ai"}},{"kind":"Field","name":{"kind":"Name","value":"aiDescription"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"unitName"}},{"kind":"Field","name":{"kind":"Name","value":"assetName"}},{"kind":"Field","name":{"kind":"Name","value":"royalty"}},{"kind":"Field","name":{"kind":"Name","value":"editions"}},{"kind":"Field","name":{"kind":"Name","value":"mintAddress"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"suspended"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"c"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"traitType"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"displayType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"}},{"kind":"Field","name":{"kind":"Name","value":"storageSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}},{"kind":"Field","name":{"kind":"Name","value":"standard"}}]}},{"kind":"Field","name":{"kind":"Name","value":"listings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listed"}},{"kind":"Field","name":{"kind":"Name","value":"fixedBid"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"auctions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"highestBid"}},{"kind":"Field","name":{"kind":"Name","value":"started"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"statistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sold"}},{"kind":"Field","name":{"kind":"Name","value":"latestSale"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"usdValue"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"prevPage"}},{"kind":"Field","name":{"kind":"Name","value":"nextPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetCreatedNfTsQuery, GetCreatedNfTsQueryVariables>;
export const GetNfdByAddressDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNFDByAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AlgorandAddress"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getNFDByAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"nfd"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"i"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"asaId"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"commission1Agent"}},{"kind":"Field","name":{"kind":"Name","value":"commission1"}},{"kind":"Field","name":{"kind":"Name","value":"mintingKickoffCreator"}},{"kind":"Field","name":{"kind":"Name","value":"mintingKickoffAmount"}},{"kind":"Field","name":{"kind":"Name","value":"highestSoldAmt"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"sellamt"}},{"kind":"Field","name":{"kind":"Name","value":"saleType"}},{"kind":"Field","name":{"kind":"Name","value":"seller"}},{"kind":"Field","name":{"kind":"Name","value":"timeCreated"}},{"kind":"Field","name":{"kind":"Name","value":"timeChanged"}},{"kind":"Field","name":{"kind":"Name","value":"timePurchased"}},{"kind":"Field","name":{"kind":"Name","value":"ver"}},{"kind":"Field","name":{"kind":"Name","value":"contractLocked"}}]}},{"kind":"Field","name":{"kind":"Name","value":"u"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"banner"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"discord"}},{"kind":"Field","name":{"kind":"Name","value":"telegram"}},{"kind":"Field","name":{"kind":"Name","value":"domain"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"caalgo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"v"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"avatarasaid"}},{"kind":"Field","name":{"kind":"Name","value":"banner"}},{"kind":"Field","name":{"kind":"Name","value":"bannerasaid"}},{"kind":"Field","name":{"kind":"Name","value":"caAlgo"}},{"kind":"Field","name":{"kind":"Name","value":"domain"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"discord"}},{"kind":"Field","name":{"kind":"Name","value":"telegram"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetNfdByAddressQuery, GetNfdByAddressQueryVariables>;
export const GetNfdListByAddressesDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNFDListByAddresses"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addresses"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AlgorandAddress"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getNFDListByAddresses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addresses"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addresses"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"nfd"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"i"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetNfdListByAddressesQuery, GetNfdListByAddressesQueryVariables>;
export const GetAllNfTsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllNFTs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AllNFTSort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllNFTs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nfts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"nsfw"}},{"kind":"Field","name":{"kind":"Name","value":"ai"}},{"kind":"Field","name":{"kind":"Name","value":"aiDescription"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"unitName"}},{"kind":"Field","name":{"kind":"Name","value":"assetName"}},{"kind":"Field","name":{"kind":"Name","value":"royalty"}},{"kind":"Field","name":{"kind":"Name","value":"editions"}},{"kind":"Field","name":{"kind":"Name","value":"mintAddress"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"suspended"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"c"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedTitle"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"traitType"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"displayType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"}},{"kind":"Field","name":{"kind":"Name","value":"storageSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}},{"kind":"Field","name":{"kind":"Name","value":"standard"}}]}},{"kind":"Field","name":{"kind":"Name","value":"listings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listed"}},{"kind":"Field","name":{"kind":"Name","value":"fixedBid"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"auctions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"highestBid"}},{"kind":"Field","name":{"kind":"Name","value":"started"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"statistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sold"}},{"kind":"Field","name":{"kind":"Name","value":"latestSale"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"usdValue"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"prevPage"}},{"kind":"Field","name":{"kind":"Name","value":"nextPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllNfTsQuery, GetAllNfTsQueryVariables>;
export const GetListedNfTsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetListedNFTs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"listingType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListingType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getListedNFTs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"listingType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listingType"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nfts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"nsfw"}},{"kind":"Field","name":{"kind":"Name","value":"ai"}},{"kind":"Field","name":{"kind":"Name","value":"aiDescription"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"unitName"}},{"kind":"Field","name":{"kind":"Name","value":"assetName"}},{"kind":"Field","name":{"kind":"Name","value":"royalty"}},{"kind":"Field","name":{"kind":"Name","value":"editions"}},{"kind":"Field","name":{"kind":"Name","value":"mintAddress"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"suspended"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"c"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedTitle"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"traitType"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"displayType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"}},{"kind":"Field","name":{"kind":"Name","value":"storageSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}},{"kind":"Field","name":{"kind":"Name","value":"standard"}}]}},{"kind":"Field","name":{"kind":"Name","value":"listings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listed"}},{"kind":"Field","name":{"kind":"Name","value":"fixedBid"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"auctions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"highestBid"}},{"kind":"Field","name":{"kind":"Name","value":"started"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"statistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sold"}},{"kind":"Field","name":{"kind":"Name","value":"latestSale"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"usdValue"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"prevPage"}},{"kind":"Field","name":{"kind":"Name","value":"nextPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetListedNfTsQuery, GetListedNfTsQueryVariables>;
export const GetNftDetailsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNFTDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"index"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getNFTDetails"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"index"},"value":{"kind":"Variable","name":{"kind":"Name","value":"index"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"nsfw"}},{"kind":"Field","name":{"kind":"Name","value":"ai"}},{"kind":"Field","name":{"kind":"Name","value":"aiDescription"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"unitName"}},{"kind":"Field","name":{"kind":"Name","value":"assetName"}},{"kind":"Field","name":{"kind":"Name","value":"royalty"}},{"kind":"Field","name":{"kind":"Name","value":"editions"}},{"kind":"Field","name":{"kind":"Name","value":"mintAddress"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"suspended"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"c"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedTitle"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"traitType"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"displayType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"}},{"kind":"Field","name":{"kind":"Name","value":"storageSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}},{"kind":"Field","name":{"kind":"Name","value":"standard"}}]}},{"kind":"Field","name":{"kind":"Name","value":"listings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listed"}},{"kind":"Field","name":{"kind":"Name","value":"fixedBid"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"auctions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"highestBid"}},{"kind":"Field","name":{"kind":"Name","value":"started"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"statistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sold"}},{"kind":"Field","name":{"kind":"Name","value":"latestSale"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"usdValue"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetNftDetailsQuery, GetNftDetailsQueryVariables>;
export const GetNftOwnersDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNFTOwners"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"index"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getNFTOwners"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"index"},"value":{"kind":"Variable","name":{"kind":"Name","value":"index"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"walletBalance"}},{"kind":"Field","name":{"kind":"Name","value":"listingBalance"}}]}}]}}]} as unknown as DocumentNode<GetNftOwnersQuery, GetNftOwnersQueryVariables>;
export const GetNfTsByArtistDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNFTsByArtist"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NFTSort"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NFTSaleStatus"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getNFTsByArtist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nfts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"nsfw"}},{"kind":"Field","name":{"kind":"Name","value":"ai"}},{"kind":"Field","name":{"kind":"Name","value":"aiDescription"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"unitName"}},{"kind":"Field","name":{"kind":"Name","value":"assetName"}},{"kind":"Field","name":{"kind":"Name","value":"royalty"}},{"kind":"Field","name":{"kind":"Name","value":"editions"}},{"kind":"Field","name":{"kind":"Name","value":"mintAddress"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"suspended"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"c"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedTitle"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"traitType"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"displayType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"}},{"kind":"Field","name":{"kind":"Name","value":"storageSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}},{"kind":"Field","name":{"kind":"Name","value":"standard"}}]}},{"kind":"Field","name":{"kind":"Name","value":"listings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listed"}},{"kind":"Field","name":{"kind":"Name","value":"fixedBid"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"auctions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"highestBid"}},{"kind":"Field","name":{"kind":"Name","value":"started"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"statistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sold"}},{"kind":"Field","name":{"kind":"Name","value":"latestSale"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"usdValue"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"prevPage"}},{"kind":"Field","name":{"kind":"Name","value":"nextPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetNfTsByArtistQuery, GetNfTsByArtistQueryVariables>;
export const GetNfTsByCollectionDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNFTsByCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NFTSort"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NFTSaleStatus"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getNFTsByCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nfts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"nsfw"}},{"kind":"Field","name":{"kind":"Name","value":"ai"}},{"kind":"Field","name":{"kind":"Name","value":"aiDescription"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"unitName"}},{"kind":"Field","name":{"kind":"Name","value":"assetName"}},{"kind":"Field","name":{"kind":"Name","value":"royalty"}},{"kind":"Field","name":{"kind":"Name","value":"editions"}},{"kind":"Field","name":{"kind":"Name","value":"mintAddress"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"suspended"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"c"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedTitle"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"traitType"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"displayType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"}},{"kind":"Field","name":{"kind":"Name","value":"storageSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}},{"kind":"Field","name":{"kind":"Name","value":"standard"}}]}},{"kind":"Field","name":{"kind":"Name","value":"listings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listed"}},{"kind":"Field","name":{"kind":"Name","value":"fixedBid"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"auctions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"highestBid"}},{"kind":"Field","name":{"kind":"Name","value":"started"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"statistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sold"}},{"kind":"Field","name":{"kind":"Name","value":"latestSale"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"usdValue"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"prevPage"}},{"kind":"Field","name":{"kind":"Name","value":"nextPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetNfTsByCollectionQuery, GetNfTsByCollectionQueryVariables>;
export const GetNfTsByCollectorDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNFTsByCollector"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AlgorandAddress"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NFTCollectedSort"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NFTCollectedStatus"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getNFTsByCollector"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nfts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"nsfw"}},{"kind":"Field","name":{"kind":"Name","value":"ai"}},{"kind":"Field","name":{"kind":"Name","value":"aiDescription"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"unitName"}},{"kind":"Field","name":{"kind":"Name","value":"assetName"}},{"kind":"Field","name":{"kind":"Name","value":"royalty"}},{"kind":"Field","name":{"kind":"Name","value":"editions"}},{"kind":"Field","name":{"kind":"Name","value":"mintAddress"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"suspended"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"c"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedTitle"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"traitType"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"displayType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"}},{"kind":"Field","name":{"kind":"Name","value":"storageSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}},{"kind":"Field","name":{"kind":"Name","value":"standard"}}]}},{"kind":"Field","name":{"kind":"Name","value":"listings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listed"}},{"kind":"Field","name":{"kind":"Name","value":"fixedBid"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"auctions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"highestBid"}},{"kind":"Field","name":{"kind":"Name","value":"started"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"statistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sold"}},{"kind":"Field","name":{"kind":"Name","value":"latestSale"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"usdValue"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"prevPage"}},{"kind":"Field","name":{"kind":"Name","value":"nextPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetNfTsByCollectorQuery, GetNfTsByCollectorQueryVariables>;
export const SearchNftDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchNFT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchNFT"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchTerm"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}}]}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"}},{"kind":"Field","name":{"kind":"Name","value":"storageSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SearchNftQuery, SearchNftQueryVariables>;
export const GetNotificationSettingsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNotificationSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getNotificationSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscriptions"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"category"}}]}}]}}]}}]} as unknown as DocumentNode<GetNotificationSettingsQuery, GetNotificationSettingsQueryVariables>;
export const TestNotificationDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TestNotification"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"testNotification"}}]}}]} as unknown as DocumentNode<TestNotificationQuery, TestNotificationQueryVariables>;
export const GetCurrentQuotesDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrentQuotes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fiat"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FiatCode"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asa"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AsaCode"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCurrentQuotes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fiat"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fiat"}}},{"kind":"Argument","name":{"kind":"Name","value":"asa"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asa"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"quotes"}}]}}]}}]} as unknown as DocumentNode<GetCurrentQuotesQuery, GetCurrentQuotesQueryVariables>;
export const GetHistoricalQuotesDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHistoricalQuotes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fiat"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FiatCode"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asa"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AsaCode"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"range"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TimeRange"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHistoricalQuotes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fiat"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fiat"}}},{"kind":"Argument","name":{"kind":"Name","value":"asa"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asa"}}},{"kind":"Argument","name":{"kind":"Name","value":"range"},"value":{"kind":"Variable","name":{"kind":"Name","value":"range"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"quotes"}}]}}]}}]} as unknown as DocumentNode<GetHistoricalQuotesQuery, GetHistoricalQuotesQueryVariables>;
export const GetAllSalesDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllSales"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SaleSortingOptions"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SaleFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllSales"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saleType"}},{"kind":"Field","name":{"kind":"Name","value":"nftIndex"}},{"kind":"Field","name":{"kind":"Name","value":"appId"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"nNFTs"}},{"kind":"Field","name":{"kind":"Name","value":"totalPrice"}},{"kind":"Field","name":{"kind":"Name","value":"txIDs"}},{"kind":"Field","name":{"kind":"Name","value":"groupId"}},{"kind":"Field","name":{"kind":"Name","value":"sellerAddress"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyAddres"}},{"kind":"Field","name":{"kind":"Name","value":"buyerAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerShare"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyShare"}},{"kind":"Field","name":{"kind":"Name","value":"managerShare"}},{"kind":"Field","name":{"kind":"Name","value":"round"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"totalValue"}},{"kind":"Field","name":{"kind":"Name","value":"nft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}}]}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"nsfw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"}},{"kind":"Field","name":{"kind":"Name","value":"storageSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"prevPage"}},{"kind":"Field","name":{"kind":"Name","value":"nextPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllSalesQuery, GetAllSalesQueryVariables>;
export const GetSalesByArtistDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSalesByArtist"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSalesByArtist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saleType"}},{"kind":"Field","name":{"kind":"Name","value":"nftIndex"}},{"kind":"Field","name":{"kind":"Name","value":"appId"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"nNFTs"}},{"kind":"Field","name":{"kind":"Name","value":"totalPrice"}},{"kind":"Field","name":{"kind":"Name","value":"txIDs"}},{"kind":"Field","name":{"kind":"Name","value":"groupId"}},{"kind":"Field","name":{"kind":"Name","value":"sellerAddress"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyAddres"}},{"kind":"Field","name":{"kind":"Name","value":"buyerAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerShare"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyShare"}},{"kind":"Field","name":{"kind":"Name","value":"managerShare"}},{"kind":"Field","name":{"kind":"Name","value":"round"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"totalValue"}},{"kind":"Field","name":{"kind":"Name","value":"nft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}}]}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"nsfw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"}},{"kind":"Field","name":{"kind":"Name","value":"storageSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"prevPage"}},{"kind":"Field","name":{"kind":"Name","value":"nextPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetSalesByArtistQuery, GetSalesByArtistQueryVariables>;
export const GetSalesByCollectionDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSalesByCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSalesByCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saleType"}},{"kind":"Field","name":{"kind":"Name","value":"nftIndex"}},{"kind":"Field","name":{"kind":"Name","value":"appId"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"nNFTs"}},{"kind":"Field","name":{"kind":"Name","value":"totalPrice"}},{"kind":"Field","name":{"kind":"Name","value":"txIDs"}},{"kind":"Field","name":{"kind":"Name","value":"groupId"}},{"kind":"Field","name":{"kind":"Name","value":"sellerAddress"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyAddres"}},{"kind":"Field","name":{"kind":"Name","value":"buyerAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerShare"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyShare"}},{"kind":"Field","name":{"kind":"Name","value":"managerShare"}},{"kind":"Field","name":{"kind":"Name","value":"round"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"totalValue"}},{"kind":"Field","name":{"kind":"Name","value":"nft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}}]}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"nsfw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"}},{"kind":"Field","name":{"kind":"Name","value":"storageSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"prevPage"}},{"kind":"Field","name":{"kind":"Name","value":"nextPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetSalesByCollectionQuery, GetSalesByCollectionQueryVariables>;
export const GetSalesByNftDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSalesByNFT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"index"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSalesByNFT"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"index"},"value":{"kind":"Variable","name":{"kind":"Name","value":"index"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saleType"}},{"kind":"Field","name":{"kind":"Name","value":"nftIndex"}},{"kind":"Field","name":{"kind":"Name","value":"appId"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"nNFTs"}},{"kind":"Field","name":{"kind":"Name","value":"totalPrice"}},{"kind":"Field","name":{"kind":"Name","value":"txIDs"}},{"kind":"Field","name":{"kind":"Name","value":"groupId"}},{"kind":"Field","name":{"kind":"Name","value":"sellerAddress"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyAddres"}},{"kind":"Field","name":{"kind":"Name","value":"buyerAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerShare"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyShare"}},{"kind":"Field","name":{"kind":"Name","value":"managerShare"}},{"kind":"Field","name":{"kind":"Name","value":"round"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"totalValue"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"prevPage"}},{"kind":"Field","name":{"kind":"Name","value":"nextPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetSalesByNftQuery, GetSalesByNftQueryVariables>;
export const GetDestroyV1ListingParamsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDestroyV1ListingParams"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"settings"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DestroyV1ListingParams"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDestroyV1ListingParams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"settings"},"value":{"kind":"Variable","name":{"kind":"Name","value":"settings"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"txID"}},{"kind":"Field","name":{"kind":"Name","value":"signers"}},{"kind":"Field","name":{"kind":"Name","value":"signature"}},{"kind":"Field","name":{"kind":"Name","value":"authAddress"}},{"kind":"Field","name":{"kind":"Name","value":"blob"}}]}}]}}]} as unknown as DocumentNode<GetDestroyV1ListingParamsQuery, GetDestroyV1ListingParamsQueryVariables>;
export const GetV1ListingsByAddressDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetV1ListingsByAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AlgorandAddress"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getV1ListingsByAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"listingAddress"}},{"kind":"Field","name":{"kind":"Name","value":"listingProgram"}},{"kind":"Field","name":{"kind":"Name","value":"listerAddress"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"fundingHistory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sellHistory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buyLimit"}},{"kind":"Field","name":{"kind":"Name","value":"buyLimitOn"}},{"kind":"Field","name":{"kind":"Name","value":"limitList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]} as unknown as DocumentNode<GetV1ListingsByAddressQuery, GetV1ListingsByAddressQueryVariables>;
export const VerifyTxnDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VerifyTxn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AlgorandAddress"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyTxn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"txID"}},{"kind":"Field","name":{"kind":"Name","value":"blob"}},{"kind":"Field","name":{"kind":"Name","value":"signers"}},{"kind":"Field","name":{"kind":"Name","value":"signature"}},{"kind":"Field","name":{"kind":"Name","value":"authAddress"}}]}}]}}]} as unknown as DocumentNode<VerifyTxnQuery, VerifyTxnQueryVariables>;
export const ViewApplicationStatusDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ViewApplicationStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewApplicationStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"socialsAdded"}},{"kind":"Field","name":{"kind":"Name","value":"requiresArt"}},{"kind":"Field","name":{"kind":"Name","value":"artUploaded"}},{"kind":"Field","name":{"kind":"Name","value":"links"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}}]}}]}}]} as unknown as DocumentNode<ViewApplicationStatusQuery, ViewApplicationStatusQueryVariables>;
export const NewApplicationsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"NewApplications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newApplications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}},{"kind":"Field","name":{"kind":"Name","value":"links"}},{"kind":"Field","name":{"kind":"Name","value":"art"}}]}}]}}]} as unknown as DocumentNode<NewApplicationsSubscription, NewApplicationsSubscriptionVariables>;
export const NewBandsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"NewBands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newBands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<NewBandsSubscription, NewBandsSubscriptionVariables>;
export const SubAllNewSalesDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SubAllNewSales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subAllNewSales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saleType"}},{"kind":"Field","name":{"kind":"Name","value":"nftIndex"}},{"kind":"Field","name":{"kind":"Name","value":"appId"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"nNFTs"}},{"kind":"Field","name":{"kind":"Name","value":"totalPrice"}},{"kind":"Field","name":{"kind":"Name","value":"totalValue"}},{"kind":"Field","name":{"kind":"Name","value":"txIDs"}},{"kind":"Field","name":{"kind":"Name","value":"groupId"}},{"kind":"Field","name":{"kind":"Name","value":"sellerAddress"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyAddres"}},{"kind":"Field","name":{"kind":"Name","value":"buyerAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerShare"}},{"kind":"Field","name":{"kind":"Name","value":"royaltyShare"}},{"kind":"Field","name":{"kind":"Name","value":"managerShare"}},{"kind":"Field","name":{"kind":"Name","value":"round"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"nft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}}]}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"nsfw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"}},{"kind":"Field","name":{"kind":"Name","value":"storageSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"integrity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileroomId"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"previews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SubAllNewSalesSubscription, SubAllNewSalesSubscriptionVariables>;