const AMERICAN_PARENT_COMPANIES = {
  // PepsiCo brands
  doritos: "pepsico",
  lays: "pepsico",
  fritos: "pepsico",
  cheetos: "pepsico",
  tostitos: "pepsico",
  ruffles: "pepsico",
  quaker: "pepsico",
  gatorade: "pepsico",
  pepsi: "pepsico",
  "mountain-dew": "pepsico",
  tropicana: "pepsico",
  aquafina: "pepsico",
  sierra_mist: "pepsico",
  naked: "pepsico",
  bubly: "pepsico",
  muscle_milk: "pepsico",
  rockstar: "pepsico",
  starbucks_frappuccino: "pepsico",

  // Coca-Cola brands
  "coca-cola": "coca-cola",
  sprite: "coca-cola",
  fanta: "coca-cola",
  "minute-maid": "coca-cola",
  powerade: "coca-cola",
  dasani: "coca-cola",
  vitaminwater: "coca-cola",
  smartwater: "coca-cola",
  gold_peak: "coca-cola",
  simply: "coca-cola",
  fuse: "coca-cola",
  fairlife: "coca-cola",
  honest_tea: "coca-cola",
  innocent_smoothies: "coca-cola",
  topo_chico: "coca-cola",

  // Mondelez brands
  oreo: "mondelez",
  ritz: "mondelez",
  "chips-ahoy": "mondelez",
  trident: "mondelez",
  cadbury: "mondelez",
  toblerone: "mondelez",
  halls: "mondelez",
  philadelphia: "mondelez",
  milka: "mondelez",
  belvita: "mondelez",
  wheat_thins: "mondelez",
  honey_maids: "mondelez",
  dentyne: "mondelez",
  clorets: "mondelez",

  // Kraft Heinz brands
  kraft: "kraft-heinz",
  heinz: "kraft-heinz",
  "oscar-mayer": "kraft-heinz",
  planters: "kraft-heinz",
  "jell-o": "kraft-heinz",
  "maxwell-house": "kraft-heinz",
  "capri-sun": "kraft-heinz",
  grey_poupon: "kraft-heinz",
  kool_aid: "kraft-heinz",
  velveeta: "kraft-heinz",
  "lunchables": "kraft-heinz",
  "classico": "kraft-heinz",
  "boca-burger": "kraft-heinz",

  // Kellogg brands
  kelloggs: "kellogg",
  pringles: "kellogg",
  "cheez-it": "kellogg",
  eggo: "kellogg",
  "nutri-grain": "kellogg",
  "pop-tarts": "kellogg",
  "rice-krispies": "kellogg",
  "special-k": "kellogg",
  "frosted-flakes": "kellogg",
  "corn-flakes": "kellogg",
  "raisin-bran": "kellogg",

  // General Mills brands
  "general-mills": "general-mills",
  "betty-crocker": "general-mills",
  pillsbury: "general-mills",
  cheerios: "general-mills",
  "nature-valley": "general-mills",
  yoplait: "general-mills",
  "haagen-dazs": "general-mills",
  annie: "general-mills",
  lucky_charms: "general-mills",
  cocoa_puffs: "general-mills",
  wheaties: "general-mills",

  // Mars brands
  mars: "mars",
  mms: "mars",
  snickers: "mars",
  twix: "mars",
  "milky-way": "mars",
  skittles: "mars",
  "uncle-bens": "mars",
  pedigree: "mars",
  whiskas: "mars",
  orbit: "mars",
  starburst: "mars",
  five_gum: "mars",

  // Unilever brands
  dove: "unilever",
  axe: "unilever",
  "ben-jerrys": "unilever",
  breyers: "unilever",
  degree: "unilever",
  hellmanns: "unilever",
  knorr: "unilever",
  lipton: "unilever",
  vaseline: "unilever",
  tresemme: "unilever",
  surf: "unilever",
  suave: "unilever",
  ponds: "unilever",

  // Procter & Gamble brands
  tide: "p&g",
  pampers: "p&g",
  gillette: "p&g",
  pantene: "p&g",
  "head-shoulders": "p&g",
  "oral-b": "p&g",
  crest: "p&g",
  dawn: "p&g",
  febreze: "p&g",
  charmin: "p&g",
  bounty: "p&g",
  always: "p&g",
  olay: "p&g",
  braun: "p&g",

  // Johnson & Johnson brands
  johnson: "j&j",
  "band-aid": "j&j",
  neutrogena: "j&j",
  tylenol: "j&j",
  listerine: "j&j",
  "clean-clear": "j&j",
  aveeno: "j&j",
  zyrtec: "j&j",

  // Colgate-Palmolive brands
  colgate: "colgate-palmolive",
  palmolive: "colgate-palmolive",
  "speed-stick": "colgate-palmolive",
  "irish-spring": "colgate-palmolive",
  softsoap: "colgate-palmolive",

  // Campbell Soup Company brands
  campbells: "campbell",
  "pepperidge-farm": "campbell",
  swanson: "campbell",
  prego: "campbell",
  v8: "campbell",
  pace: "campbell",

  // Hershey brands
  hersheys: "hershey",
  reeses: "hershey",
  kisses: "hershey",
  "kit-kat": "hershey",
  brookside: "hershey",
  whoppers: "hershey",
  twizzlers: "hershey",

  // ConAgra brands
  conagra: "conagra",
  "healthy-choice": "conagra",
  "slim-jim": "conagra",
  "orville-redenbachers": "conagra",
  hunts: "conagra",
  "chef-boyardee": "conagra",
  "pinnacle-foods": "conagra",
  "earth-balance": "conagra",

  // Post Holdings brands
  post: "post",
  "honey-bunches": "post",
  "grape-nuts": "post",
  hostess: "post",
  powerbar: "post",
  dymatize: "post",

  // Clorox brands
  clorox: "clorox",
  "pine-sol": "clorox",
  "liquid-plumr": "clorox",
  brita: "clorox",
  glad: "clorox",
  "hidden-valley": "clorox",
  burt_bees: "clorox"
};


export function isAmericanBrand(brandName: string): boolean {
  if (!brandName) return false

  // Convert brand name to lowercase and remove special characters
  const normalizedBrand = brandName.toLowerCase().replace(/[^a-z0-9]/g, "")

  // Check if the brand is in our mapping
  return Object.keys(AMERICAN_PARENT_COMPANIES).some((brand) =>
    normalizedBrand.includes(brand.replace(/[^a-z0-9]/g, "")),
  )
}

export function getProductOrigin(product: any): string {
  // Check if the product is from a known American brand
  if (product.brands && isAmericanBrand(product.brands)) {
    return "Owned by US"
  }

  // Check country tags
  if (product.countries_tags?.includes("en:canada")) {
    return "Owned by Canada"
  } else if (product.countries_tags?.includes("en:united-states")) {
    return "Owned by US"
  }

  // If no matches found
  return "Not Canadian or American"
}

export function getPrimaryLocation(product: any): string {
  if (!product.countries) return "Location unknown"
  return product.countries.split(",")[0].trim()
}

