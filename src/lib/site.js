// Single source of truth for Brentwood Tow Truck. Schema, nav, communities, and contact all build from here.

export const SITE = {
  brand: "Brentwood Tow Truck",
  domain: "https://brentwoodtowtruck.com",
  phoneDisplay: "(925) 220-8422",
  phoneTel: "+19252208422",
  email: "dispatch@brentwoodtowtruck.com",
  city: "Brentwood",
  region: "CA",
  zip: "94513",
  // Brentwood, CA city point (real area centroid, not a fake doorstep)
  geo: { lat: 37.9319, lng: -121.6958 },
  priceRange: "$$",
  sameAs: [],
};

// Nearby East Contra Costa towns served. Mirrored in copy and in areaServed.
export const AREAS = [
  { name: "Antioch", url: "/antioch-ca/" },
  { name: "Oakley", url: "/oakley-ca/" },
  { name: "Discovery Bay", url: "/discovery-bay-ca/" },
  { name: "Byron", url: "/byron-ca/" },
  { name: "Pittsburg", url: "/pittsburg-ca/" },
];

// Brentwood communities and master-planned neighborhoods. Powers the community directory.
export const NEIGHBORHOODS = [
  { name: "Deer Ridge", note: "Golf-course homes off Foothill Dr" },
  { name: "Shadow Lakes", note: "The 18-hole course community" },
  { name: "Trilogy at The Vineyards", note: "55+ active-adult, south Brentwood" },
  { name: "Summerset", note: "Original age-restricted community" },
  { name: "Garin Ranch", note: "Family streets near Garin Pkwy" },
  { name: "Apple Hill", note: "Established central neighborhood" },
  { name: "Rose Garden", note: "Off Balfour, near downtown" },
  { name: "Barrington", note: "Newer phases on the south side" },
  { name: "Brentwood Country Club", note: "By Shadow Lakes and Deer Ridge" },
  { name: "Sterling Preserve", note: "East-side growth area" },
];

// The arteries that thread Brentwood and East County. Powers the route panel and local strip.
export const ROADS = [
  { road: "Highway 4", note: "The East County freeway and Bypass" },
  { road: "Vasco Road", note: "South to Livermore and I-580" },
  { road: "Balfour Road", note: "The Highway 4 interchange" },
  { road: "Brentwood Blvd", note: "Old SR-4, the main drag" },
  { road: "Lone Tree Way", note: "Retail row at the Antioch line" },
  { road: "Marsh Creek Rd", note: "Out to the ranch country" },
];

// Named local arteries grouped for the East County route panel (signature module).
export const CORRIDORS = [
  { road: "Highway 4", shield: "4", along: "Bypass · Sand Creek · Lone Tree · into Antioch & Oakley" },
  { road: "Vasco Road", shield: "VAS", along: "Walnut Blvd · Camino Diablo · south to Byron & I-580" },
  { road: "Balfour Road", shield: "BAL", along: "Downtown · Deer Ridge · Trilogy · Marsh Creek Rd" },
];

// Local landmarks used as drive-time anchors in copy.
export const LANDMARKS = [
  "Downtown City Park",
  "Streets of Brentwood",
  "Marsh Creek Trail",
  "Harvest Time farms",
  "Liberty High School",
];

// Services. `klass` is the short tag used on cards. Slugs match the live site exactly.
export const SERVICES = [
  { name: "Towing & Vehicle Recovery", serviceType: "Towing and vehicle recovery", url: "/towing-and-vehicle-recovery-brentwood-ca/", klass: "Tow", icon: "i-flatbed", blurb: "Cars, trucks, and SUVs hooked and hauled on a flatbed or wheel-lift, anywhere in Brentwood." },
  { name: "Roadside Assistance", serviceType: "Roadside assistance", url: "/roadside-assistance-brentwood-ca/", klass: "Roadside", icon: "i-bolt", blurb: "Stuck on Highway 4 or a side street off Balfour Road? Help rolls out to you fast." },
  { name: "Flat Tire Changing", serviceType: "Flat tire changing", url: "/flat-tire-changing-brentwood-ca/", klass: "Tire", icon: "i-wrench", blurb: "A spare mounted on the roadside, or a tow to a tire shop if the spare will not hold." },
  { name: "Jump Starts", serviceType: "Jump start service", url: "/jump-start-dead-battery-brentwood-ca/", klass: "Battery", icon: "i-battery", blurb: "A dead battery in a driveway or the Streets of Brentwood lot gets a quick jump." },
  { name: "Car Lockout", serviceType: "Car lockout service", url: "/car-lockout-locksmith-service-brentwood-ca/", klass: "Lockout", icon: "i-key", blurb: "Keys locked inside? Doors opened with the right tools, no damage to the vehicle." },
  { name: "Fuel Delivery", serviceType: "Emergency fuel delivery", url: "/fuel-delivery-out-of-gas-brentwood-ca/", klass: "Fuel", icon: "i-fuel", blurb: "Run dry on Vasco Road or out toward Discovery Bay? Enough fuel brought to get you going." },
];

const ORG_ID = SITE.domain + "/#org";
const SITE_ID = SITE.domain + "/#website";

function geoCircle(radius = 24000) {
  return {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    geoRadius: radius,
  };
}

function cityNodes() {
  return [
    { "@type": "City", name: "Brentwood", addressRegion: SITE.region },
    ...AREAS.map((a) => ({ "@type": "City", name: a.name, addressRegion: SITE.region })),
  ];
}

export function orgNode() {
  const node = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "@id": ORG_ID,
    additionalType: "https://en.wikipedia.org/wiki/Towing",
    name: SITE.brand,
    description:
      "24/7 towing, vehicle recovery, and roadside assistance across Brentwood, CA 94513 and the nearby East Contra Costa towns of Antioch, Oakley, Discovery Bay, Byron, and Pittsburg.",
    url: SITE.domain + "/",
    logo: SITE.domain + "/favicon.svg",
    image: [SITE.domain + "/images/og.jpg"],
    telephone: SITE.phoneTel,
    priceRange: SITE.priceRange,
    areaServed: [...cityNodes(), geoCircle()],
    geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phoneTel,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
  };
  if (SITE.sameAs.length) node.sameAs = SITE.sameAs;
  return node;
}

export function websiteNode() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    url: SITE.domain + "/",
    name: SITE.brand,
    publisher: { "@id": ORG_ID },
  };
}

export function serviceNode({ name, serviceType, description, url, cities }) {
  const area = cities
    ? cities.map((c) => ({ "@type": "City", name: c, addressRegion: SITE.region }))
    : cityNodes();
  area.push(geoCircle());
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name, serviceType, description,
    url: SITE.domain + url,
    provider: { "@id": ORG_ID },
    areaServed: area,
  };
}

export function breadcrumb(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem", position: i + 1, name: it.name, item: SITE.domain + it.url,
    })),
  };
}

export function itemListNode(services) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem", position: i + 1, name: s.name, url: SITE.domain + s.url,
    })),
  };
}

export function faqNode(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question", name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleNode({ headline, description, url, datePublished, dateModified }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline, description,
    url: SITE.domain + url,
    datePublished, dateModified,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: SITE.domain + url,
  };
}
