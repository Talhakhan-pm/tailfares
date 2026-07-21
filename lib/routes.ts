export type Route = {
  slug: string;
  from: string;
  to: string;
  fromCode: string; // airport-style 3-letter display code for the boarding-pass motif
  toCode: string;
  miles: number;
  days: string; // typical ground-transport duration
};

export const ROUTES: Route[] = [
  { slug: "los-angeles-to-new-york", from: "Los Angeles, CA", to: "New York, NY", fromCode: "LAX", toCode: "NYC", miles: 2790, days: "4–6 days" },
  { slug: "dallas-to-seattle", from: "Dallas, TX", to: "Seattle, WA", fromCode: "DAL", toCode: "SEA", miles: 2110, days: "3–5 days" },
  { slug: "miami-to-chicago", from: "Miami, FL", to: "Chicago, IL", fromCode: "MIA", toCode: "CHI", miles: 1380, days: "2–3 days" },
  { slug: "san-diego-to-houston", from: "San Diego, CA", to: "Houston, TX", fromCode: "SAN", toCode: "HOU", miles: 1470, days: "2–3 days" },
  { slug: "phoenix-to-denver", from: "Phoenix, AZ", to: "Denver, CO", fromCode: "PHX", toCode: "DEN", miles: 820, days: "1–2 days" },
  { slug: "atlanta-to-boston", from: "Atlanta, GA", to: "Boston, MA", fromCode: "ATL", toCode: "BOS", miles: 1080, days: "2–3 days" },
  { slug: "portland-to-austin", from: "Portland, OR", to: "Austin, TX", fromCode: "PDX", toCode: "AUS", miles: 2050, days: "3–5 days" },
  { slug: "nashville-to-tampa", from: "Nashville, TN", to: "Tampa, FL", fromCode: "BNA", toCode: "TPA", miles: 710, days: "1–2 days" },
  { slug: "charlotte-to-las-vegas", from: "Charlotte, NC", to: "Las Vegas, NV", fromCode: "CLT", toCode: "LAS", miles: 2280, days: "3–5 days" },
  { slug: "minneapolis-to-orlando", from: "Minneapolis, MN", to: "Orlando, FL", fromCode: "MSP", toCode: "MCO", miles: 1550, days: "2–4 days" },
];

export function getRoute(slug: string): Route | undefined {
  return ROUTES.find((r) => r.slug === slug);
}
