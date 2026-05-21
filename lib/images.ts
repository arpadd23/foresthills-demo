/**
 * Curated Unsplash photo URLs for the demo.
 * Real Forest Hills photography replaces these in Phase 1.
 * Footer of the site labels all images as "sample" — never claimed as Forest Hills's own.
 */

const u = (id: string, w = 1920, h?: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=80`;

export const images = {
  hero: u('1535131749006-b7f58c99034b', 1280, 854),
  story: u('1593111774240-d529f12cf4bb', 1600, 2000),
  pillarGolf: u('1592919505780-303950717480', 1200, 1500),
  pillarFootgolf: u('1599661046289-e31897846e41', 1200, 1500),
  pillarStay: u('1571896349842-33c89424de2d', 1200, 1500),
  gallery: [
    u('1587174486073-ae5e5cff23aa', 1200, 1500),
    u('1768396747921-5a18367415d2', 1200, 1500),
    u('1621005570352-6418df03796b', 1200, 1500),
    u('1535132011086-b8818f016104', 1200, 1500),
    u('1775482074225-a9952613f20a', 1200, 1500),
    u('1593111774240-d529f12cf4bb', 1200, 1500),
  ],
} as const;
