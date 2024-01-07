import { env } from '@/functions/env'

let mainnet = env.LEDGER !== "TestNet"

// if (process.client) {
//   const settingsStore = useSettingsStore()


//   mainnet = settingsStore.appSettings.network === 'MAINNET'
// } else {
//   mainnet = env.LEDGER !== "TestNet"
// }

export const fiatList = [
  { name: "Algorand", symbol: "A",	code: "ALGO", cmcId: 4030 },
  { name: "United States Dollar", symbol: "$",	code: "USD", cmcId:	2781 },
  { name: "Euro", symbol: "€",	code: "EUR", cmcId:	2790 },
  { name: "Pound Sterling", symbol: "£",	code: "GBP", cmcId:	2791 },
  { name: "Albanian Lek", symbol: "L",	code: "ALL", cmcId:	3526 },
  { name: "Algerian Dinar", symbol: "د.ج",	code: "DZD", cmcId:	3537 },
  { name: "Argentine Peso", symbol: "$",	code: "ARS", cmcId:	2821 },
  { name: "Armenian Dram", symbol: "֏",	code: "AMD", cmcId:	3527 },
  { name: "Australian Dollar", symbol: "$",	code: "AUD", cmcId:	2782 },
  { name: "Azerbaijani Manat", symbol: "₼",	code: "AZN", cmcId:	3528 },
  { name: "Bahraini Dinar", symbol: ".د.ب",	code: "BHD", cmcId:	3531 },
  { name: "Bangladeshi Taka", symbol: "৳",	code: "BDT", cmcId:	3530 },
  { name: "Belarusian Ruble", symbol: "Br",	code: "BYN", cmcId:	3533 },
  { name: "Bermudan Dollar", symbol: "$",	code: "BMD", cmcId:	3532 },
  { name: "Bolivian Boliviano", symbol: "Bs.",	code: "BOB", cmcId:	2832 },
  // { name: "Bosnia-Herzegovina Convertible Mark", symbol: "KM",	code: "BAM", cmcId:	3529 },
  { name: "Brazilian Real", symbol: "R$",	code: "BRL", cmcId:	2783 },
  { name: "Bulgarian Lev", symbol: "лв",	code: "BGN", cmcId:	2814 },
  { name: "Cambodian Riel", symbol: "៛",	code: "KHR", cmcId:	3549 },
  { name: "Canadian Dollar", symbol: "$",	code: "CAD", cmcId:	2784 },
  { name: "Chilean Peso", symbol: "$",	code: "CLP", cmcId:	2786 },
  { name: "Chinese Yuan", symbol: "¥",	code: "CNY", cmcId:	2787 },
  { name: "Colombian Peso", symbol: "$",	code: "COP", cmcId:	2820 },
  { name: "Costa Rican Colón", symbol: "₡",	code: "CRC", cmcId:	3534 },
  { name: "Croatian Kuna", symbol: "kn",	code: "HRK", cmcId:	2815 },
  { name: "Cuban Peso", symbol: "$",	code: "CUP", cmcId:	3535 },
  { name: "Czech Koruna", symbol: "Kč",	code: "CZK", cmcId:	2788 },
  { name: "Danish Krone", symbol: "kr",	code: "DKK", cmcId:	2789 },
  { name: "Dominican Peso", symbol: "$",	code: "DOP", cmcId:	3536 },
  { name: "Egyptian Pound", symbol: "£",	code: "EGP", cmcId:	3538 },
  { name: "Georgian Lari", symbol: "₾",	code: "GEL", cmcId:	3539 },
  { name: "Ghanaian Cedi", symbol: "₵",	code: "GHS", cmcId:	3540 },
  // { name: "Guatemalan Quetzal", symbol: "Q",	code: "GTQ", cmcId:	3541 },
  { name: "Honduran Lempira", symbol: "L",	code: "HNL", cmcId:	3542 },
  { name: "Hong Kong Dollar", symbol: "$",	code: "HKD", cmcId:	2792 },
  // { name: "Hungarian Forint", symbol: "Ft",	code: "HUF", cmcId:	2793 },
  { name: "Icelandic Króna", symbol: "kr",	code: "ISK", cmcId:	2818 },
  { name: "Indian Rupee", symbol: "₹",	code: "INR", cmcId:	2796 },
  { name: "Indonesian Rupiah", symbol: "Rp",	code: "IDR", cmcId:	2794 },
  { name: "Iranian Rial", symbol: "﷼",	code: "IRR", cmcId:	3544 },
  { name: "Iraqi Dinar", symbol: "ع.د",	code: "IQD", cmcId:	3543 },
  { name: "Israeli New Shekel", symbol: "₪",	code: "ILS", cmcId:	2795 },
  { name: "Jamaican Dollar", symbol: "$",	code: "JMD", cmcId:	3545 },
  { name: "Japanese Yen", symbol: "¥",	code: "JPY", cmcId:	2797 },
  { name: "Jordanian Dinar", symbol: "د.ا",	code: "JOD", cmcId:	3546 },
  { name: "Kazakhstani Tenge", symbol: "₸",	code: "KZT", cmcId:	3551 },
  { name: "Kenyan Shilling", symbol: "Sh",	code: "KES", cmcId:	3547 },
  { name: "Kuwaiti Dinar", symbol: "د.ك",	code: "KWD", cmcId:	3550 },
  { name: "Kyrgystani Som", symbol: "с",	code: "KGS", cmcId:	3548 },
  { name: "Lebanese Pound", symbol: "ل.ل",	code: "LBP", cmcId:	3552 },
  { name: "Macedonian Denar", symbol: "ден",	code: "MKD", cmcId:	3556 },
  { name: "Malaysian Ringgit", symbol: "RM",	code: "MYR", cmcId:	2800 },
  { name: "Mauritian Rupee", symbol: "₨",	code: "MUR", cmcId:	2816 },
  { name: "Mexican Peso", symbol: "$",	code: "MXN", cmcId:	2799 },
  { name: "Moldovan Leu", symbol: "L",	code: "MDL", cmcId:	3555 },
  { name: "Mongolian Tugrik", symbol: "₮",	code: "MNT", cmcId:	3558 },
  { name: "Moroccan Dirham", symbol: "د.م.",	code: "MAD", cmcId:	3554 },
  { name: "Myanma Kyat", symbol: "Ks",	code: "MMK", cmcId:	3557 },
  { name: "Namibian Dollar", symbol: "$",	code: "NAD", cmcId:	3559 },
  { name: "Nepalese Rupee", symbol: "₨",	code: "NPR", cmcId:	3561 },
  { name: "New Taiwan Dollar", symbol: "NT$",	code: "TWD", cmcId:	2811 },
  { name: "New Zealand Dollar", symbol: "$",	code: "NZD", cmcId:	2802 },
  { name: "Nicaraguan Córdoba", symbol: "C$",	code: "NIO", cmcId:	3560 },
  { name: "Nigerian Naira", symbol: "₦",	code: "NGN", cmcId:	2819 },
  { name: "Norwegian Krone", symbol: "kr",	code: "NOK", cmcId:	2801 },
  { name: "Omani Rial", symbol: "ر.ع.",	code: "OMR", cmcId:	3562 },
  { name: "Pakistani Rupee", symbol: "₨",	code: "PKR", cmcId:	2804 },
  { name: "Panamanian Balboa", symbol: "B/.",	code: "PAB", cmcId:	3563 },
  { name: "Peruvian Sol", symbol: "S/.",	code: "PEN", cmcId:	2822 },
  { name: "Philippine Peso", symbol: "₱",	code: "PHP", cmcId:	2803 },
  // { name: "Polish Złoty", symbol: "zł",	code: "PLN", cmcId:	2805 },
  { name: "Qatari Rial", symbol: "ر.ق",	code: "QAR", cmcId:	3564 },
  // { name: "Romanian Leu", symbol: "lei",	code: "RON", cmcId:	2817 },
  { name: "Russian Ruble", symbol: "₽",	code: "RUB", cmcId:	2806 },
  { name: "Saudi Riyal", symbol: "ر.س",	code: "SAR", cmcId:	3566 },
  // { name: "Serbian Dinar", symbol: "дин.",	code: "RSD", cmcId:	3565 },
  { name: "Singapore Dollar", symbol: "S$",	code: "SGD", cmcId:	2808 },
  { name: "South African Rand", symbol: "R",	code: "ZAR", cmcId:	2812 },
  { name: "South Korean Won", symbol: "₩",	code: "KRW", cmcId:	2798 },
  { name: "South Sudanese Pound", symbol: "£",	code: "SSP", cmcId:	3567 },
  { name: "Sovereign Bolivar", symbol: "Bs.",	code: "VES", cmcId:	3573 },
  // { name: "Sri Lankan Rupee", symbol: "Rs",	code: "LKR", cmcId:	3553 },
  { name: "Swedish Krona", symbol: " kr",	code: "SEK", cmcId:	2807 },
  { name: "Swiss Franc", symbol: "Fr",	code: "CHF", cmcId:	2785 },
  { name: "Thai Baht", symbol: "฿",	code: "THB", cmcId:	2809 },
  { name: "Trinidad and Tobago Dollar", symbol: "$",	code: "TTD", cmcId:	3569 },
  { name: "Tunisian Dinar", symbol: "د.ت",	code: "TND", cmcId:	3568 },
  { name: "Turkish Lira", symbol: "₺",	code: "TRY", cmcId:	2810 },
  { name: "Ugandan Shilling", symbol: "Sh",	code: "UGX", cmcId:	3570 },
  { name: "Ukrainian Hryvnia", symbol: "₴",	code: "UAH", cmcId:	2824 },
  { name: "United Arab Emirates Dirham", symbol: "د.إ",	code: "AED", cmcId:	2813 },
  { name: "Uruguayan Peso", symbol: "$",	code: "UYU", cmcId:	3571 },
  { name: "Uzbekistan Som", symbol: "so'm",	code: "UZS", cmcId:	3572 },
  { name: "Vietnamese Dong", symbol: "₫",	code: "VND", cmcId:	2823 },
  { name: "Gold Troy Ounce", symbol: "XAU",	code: "XAU", cmcId:	3575 },
  { name: "Silver Troy Ounce", symbol: "XAG",	code: "XAG", cmcId:	3574 },
  // { name: "Platinum Ounce", symbol: "XPT",	code: "XPT", cmcId:	3577 },
  { name: "Palladium Ounce", symbol: "XPD",	code: "XPD", cmcId:	3576 },
]

export interface Currency {
  name: string
  symbol: string
  index: number
  decimals: number
  minPrice: number
  apiKey: string
}

export const asaList = [
  { name: "Algorand", symbol: "ALGO", apiKey: "ALGO", index: 0, decimals: 6, minPrice: 1, issuer: {
    name: "Algorand Foundation", url: "https://www.algorand.foundation/"
  } },
  { name: "USDC", symbol: "USDC", apiKey: "USDC", index: mainnet ? 31566704 : 10458941, decimals: 6, minPrice: 1, issuer: {
    name: "Circle", url: "https://www.circle.com/en/usdc"
  } },
  { name: "STBL2", symbol: "STBL2", apiKey: "STBL2", index: 841126810, decimals: 6, minPrice: 1, issuer: {
    name: "Algofi", url: "https://www.algofi.org/"
  }  },
  { name: "goBTC", symbol: "goBTC", apiKey: "goBTC", index: 386192725, decimals: 8, minPrice: 0.0001, issuer: {
    name: "Algomint", url: "https://algomint.io/"
  }  },
  { name: "goETH", symbol: "goETH", apiKey: "goETH", index: 386195940, decimals: 8, minPrice: 0.0001, issuer: {
    name: "Algomint", url: "https://algomint.io/"
  }  },
  { name: "Meld Gold (g)", symbol: "GOLD$", apiKey: "GOLD", index: 246516580, decimals: 6, minPrice: 0.01, issuer: {
    name: "Meld Gold", url: "https://meld.gold/"
  }  },
  { name: "Meld Silver (g)", symbol: "SILVER$", apiKey: "SILVER", index: 246519683, decimals: 6, minPrice: 1, issuer: {
    name: "Meld Gold", url: "https://meld.gold/"
  }  },
]

const codeList = [ 
  "USD", "ALL", "DZD", "ARS", "AMD", "AUD", "AZN", "BHD", "BDT", "BYN", "BMD", "BOB", "BAM", "BRL", "BGN", "KHR", "CAD", "CLP", "CNY", "COP", "CRC", "HRK", "CUP", "CZK", "DKK", "DOP", "EGP", "EUR", "GEL", "GHS", "GTQ", "HNL", "HKD", "HUF", "ISK", "INR", "IDR", "IRR", "IQD", "ILS", "JMD", "JPY", "JOD", "KZT", "KES", "KWD", "KGS", "LBP", "MKD", "MYR", "MUR", "MXN", "MDL", "MNT", "MAD", "MMK", "NAD", "NPR", "TWD", "NZD", "NIO", "NGN", "NOK", "OMR", "PKR", "PAB", "PEN", "PHP", "PLN", "GBP", "QAR", "RON", "RUB", "SAR", "RSD", "SGD", "ZAR", "KRW", "SSP", "VES", "LKR", "SEK", "CHF", "THB", "TTD", "TND", "TRY", "UGX", "UAH", "AED", "UYU", "UZS", "VND", "XAU", "XAG", "XPT", "XPD"
] as const

export type FiatCode = typeof codeList[number]

const asaCodeList = [ 
  "goBTC", "goETH", "USDC", "ALGO", "STBL2", "GOLD$", "SILVER$"
] as const

export type ASACode = typeof asaCodeList[number]