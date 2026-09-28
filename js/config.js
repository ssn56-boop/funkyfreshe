/* ============================================================
   STORE CONFIG — edit these values, then save the file.

   Payment, shipping cost, and sales tax are no longer configured
   here. Each purse checks out through its own Square payment
   link (set per-item in products.js as squareCheckoutUrl) —
   Square's hosted checkout page calculates real shipping and
   tax and handles payment there. Two things to set up on
   Square's side, once, in your Square Dashboard (not here):
     - Sales tax: Account & Settings > Business > Sales Taxes —
       add a tax rate for your state and Square applies it
       automatically at checkout.
     - Shipping: ask me and I can attach a flat shipping fee to
       a payment link, or set one up yourself per-link in
       Square's Checkout Links dashboard page.

   CUSTOM_BANNER_FORM_URL
     Your Google Form link for custom celebration banner requests
     (the same one in your Instagram bio). Shown as a short button
     labeled "Request a Custom Banner" on the Contact and Home
     pages, instead of a long raw link.
   ============================================================ */

window.FF_CONFIG = {
  CONTACT_EMAIL: "ssn56@cornell.edu",
  CUSTOM_BANNER_FORM_URL: "banner.html"
};
