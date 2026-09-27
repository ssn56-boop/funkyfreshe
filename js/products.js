/* ============================================================
   PRODUCTS — edit this list to add, remove, or update purses.

   Each purse is an object with these fields:
   - id          a short unique slug, e.g. "purse-001" — used in
                 the URL for its product page (product.html?id=...)
   - name        shown as the title everywhere
   - price       a number, no $ sign (e.g. 65, not "$65")
   - description a sentence or two shown on the shop grid and
                 product page
   - image       the main photo, path relative to this folder's
                 parent (e.g. "images/products/my-photo.jpg")
   - gallery     an array of additional photo paths shown as
                 thumbnails on the product page (can be empty: [])
   - inStock     true  = shows normally with "Add to cart"
                 false = since every purse is one-of-a-kind, this marks it
                         "Sold" on the shop page and sinks it to the bottom
                         of the grid instead of removing it — so visitors
                         can still see it (and see that you have real
                         customers), they just can't buy it. Its product
                         page still works too, showing "Sold".
   - squareCheckoutUrl
                 the Square-hosted payment link for this exact purse —
                 its own dedicated checkout page (square.link/u/...) with
                 real shipping and tax calculated by Square. When you send
                 me photos + details for a new purse, I'll create it in
                 your Square catalog and generate this link for you.
   ============================================================ */

window.FF_PRODUCTS = [
  {
    id: "purse-001",
    name: "Paisley Tapestry Watch Purse",
    price: 110,
    description: "I made this crossbody from a vintage paisley tapestry fabric with a brown leather trim and top zip closure. The strap is eight vintage watch faces I linked together myself, several trimmed in rhinestones, so the whole thing doubles as a wearable timepiece.",
    image: "images/products/purse-001-paisley-main.jpg",
    gallery: ["images/products/purse-001-paisley-side.jpg", "images/products/purse-001-paisley-worn.jpg"],
    inStock: true,
    squareCheckoutUrl: "https://square.link/u/Xnh75w4i"
  },
  {
    id: "purse-002",
    name: "Taupe Leather Watch Purse",
    price: 90,
    description: "Taupe leather flap purse with a playful strap. Made from an array of eight colorful watch faces.",
    image: "images/products/purse-002-taupe-main.jpg",
    gallery: ["images/products/purse-002-taupe-side.jpg", "images/products/purse-002-taupe-worn.jpg", "images/products/purse-002-taupe-worn-back.jpg"],
    inStock: true,
    squareCheckoutUrl: "https://square.link/u/cwhcMip1"
  },
  {
    id: "purse-003",
    name: "Silver Mesh Clutch Watch Purse",
    price: 85,
    description: "Shimmery silver metal-mesh envelope clutch with eight red and pink watch faces.",
    image: "images/products/purse-003-silver-mesh-stand.jpg",
    gallery: ["images/products/purse-003-silver-mesh-worn-front.jpg", "images/products/purse-003-silver-mesh-worn-back.jpg"],
    inStock: false
  },
  {
    id: "belt-001",
    name: "Rainbow Watch Belt",
    price: 65,
    description: "Denim-ready chain belt from an unbroken row of twelve colorful watch faces.",
    image: "images/products/belt-001-rainbow-front.jpg",
    gallery: ["images/products/belt-001-rainbow-side.jpg", "images/products/belt-001-rainbow-close.jpg"],
    inStock: false
  },
  {
    id: "purse-004",
    name: "Turquoise Watch Crossbody",
    price: 95,
    description: "Black thrifted purse with a strap of thirteen turquoise and white watches.",
    image: "images/products/purse-004-ck-crossbody-stand.jpg",
    gallery: ["images/products/purse-004-ck-crossbody-worn.jpg", "images/products/purse-004-ck-crossbody-stand-close.jpg"],
    inStock: false
  },
  {
    id: "purse-005",
    name: "Red Patent Watch Bag",
    price: 100,
    description: "Glossy red patent leather bag with a mixed strap of eight watch faces.",
    image: "images/products/purse-005-red-patent-stand.jpg",
    gallery: ["images/products/purse-005-red-patent-worn.jpg", "images/products/purse-005-red-patent-stand-close.jpg"],
    inStock: false
  },
  {
    id: "purse-006",
    name: "Burgundy Watch Pouch",
    price: 85,
    description: "Burgundy leather zip pouch with a strap of eight vintage watch faces.",
    image: "images/products/purse-006-burgundy-stand.jpg",
    gallery: ["images/products/purse-006-burgundy-worn-1.jpg", "images/products/purse-006-burgundy-worn-2.jpg", "images/products/purse-006-burgundy-worn-3.jpg"],
    inStock: false,
    squareCheckoutUrl: "https://square.link/u/afPs3wZ3"
  },
  {
    id: "purse-007",
    name: "Cognac Croc Tote",
    price: 80,
    description: "Cognac croc-embossed tote with a strap of seven yellow, green rhinestone, and blue watch faces.",
    image: "images/products/purse-007-cognac-croc-stand.jpg",
    gallery: ["images/products/purse-007-cognac-croc-worn-1.jpg", "images/products/purse-007-cognac-croc-worn-2.jpg", "images/products/purse-007-cognac-croc-worn-3.jpg"],
    inStock: false,
    squareCheckoutUrl: "https://square.link/u/74JXJe7V"
  },
  {
    id: "purse-008",
    name: "Silver Metallic Croc Bag",
    price: 90,
    description: "Silver metallic croc-embossed bag with a strap of seven black, gray, and silver watch faces.",
    image: "images/products/purse-008-silver-croc-stand.jpg",
    gallery: ["images/products/purse-008-silver-croc-worn-1.jpg", "images/products/purse-008-silver-croc-worn-2.jpg"],
    inStock: false,
    squareCheckoutUrl: "https://square.link/u/uu6cj4eV"
  },
  {
    id: "purse-009",
    name: "Black Leather Flower-Charm Bag",
    price: 75,
    description: "Black leather bag finished with a strap of seven rhinestone watch faces and flower-shaped charms.",
    image: "images/products/purse-009-black-flower-stand.jpg",
    gallery: ["images/products/purse-009-black-flower-worn-1.jpg", "images/products/purse-009-black-flower-worn-2.jpg"],
    inStock: true,
    squareCheckoutUrl: "https://square.link/u/pVHc8s2V"
  },
  {
    id: "purse-010",
    name: "XOXO Monogram Shoulder Bag",
    price: 80,
    description: "XOXO monogram shoulder bag with a strap of seven oval black watch faces.",
    image: "images/products/purse-010-xoxo-stand.jpg",
    gallery: ["images/products/purse-010-xoxo-worn-1.jpg", "images/products/purse-010-xoxo-worn-2.jpg", "images/products/purse-010-xoxo-worn-3.jpg"],
    inStock: true,
    squareCheckoutUrl: "https://square.link/u/OwvEdRUY"
  },
  {
    id: "purse-011",
    name: "Orange Croc Flap Satchel",
    price: 70,
    description: "Orange croc-embossed flap satchel with a strap of nine orange and white watch faces.",
    image: "images/products/purse-011-orange-croc-stand.jpg",
    gallery: ["images/products/purse-011-orange-croc-worn-1.jpg", "images/products/purse-011-orange-croc-worn-2.jpg"],
    inStock: true,
    squareCheckoutUrl: "https://square.link/u/ffVKYafM"
  },
  {
    id: "purse-012",
    name: "Black Leather Buckle-Flap Bag",
    price: 75,
    description: "Black leather flap bag with a D-ring buckle, finished with a strap of nine black and white rhinestone watch faces.",
    image: "images/products/purse-012-black-buckle-stand.jpg",
    gallery: ["images/products/purse-012-black-buckle-worn-1.jpg", "images/products/purse-012-black-buckle-worn-2.jpg"],
    inStock: true,
    squareCheckoutUrl: "https://square.link/u/vBIr7S2g"
  },
  {
    id: "purse-013",
    name: "Pink Glitter Shoulder Bag",
    price: 90,
    description: "Pink glitter shoulder bag with a strap of green square and silver rhinestone watch faces.",
    image: "images/products/purse-013-pink-glitter-stand.jpg",
    gallery: ["images/products/purse-013-pink-glitter-worn-1.jpg", "images/products/purse-013-pink-glitter-worn-2.jpg"],
    inStock: false,
    squareCheckoutUrl: "https://square.link/u/YMAGlLmR"
  },
  {
    id: "purse-014",
    name: "Black Nine West Hobo Bag",
    price: 75,
    description: "Black Nine West hobo bag with a strap of white and red watch faces.",
    image: "images/products/purse-014-nine-west-stand.jpg",
    gallery: ["images/products/purse-014-nine-west-worn-1.jpg", "images/products/purse-014-nine-west-worn-2.jpg"],
    inStock: true,
    squareCheckoutUrl: "https://square.link/u/EebUek5i"
  },
  /* Add new purses here as you send me photos — copy the pattern
     above (id, name, price, description, image, gallery,
     inStock: true, squareCheckoutUrl). */
];
