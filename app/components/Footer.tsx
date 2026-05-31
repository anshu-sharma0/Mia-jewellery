import Link from "next/link";

const jewelleryLinks = [
  "Rings", "Necklaces", "Earrings", "Bracelets", "Bangles",
  "Chains", "Mangalsutra", "Pendants", "Nose Pins", "Coins", "Diamond", "Gold", "Silver",
];

const collectionLinks = [
  "Sunkissed", "Bee My Valentine", "Aspire", "Manifest", "Mia Minis",
  "Starburst", "Disco", "Mia Sutra", "Native", "Evil Eye",
  "Homecoming", "Wanderlust", "Men's Edition", "Lovestruck",
];

const infoLinks = [
  { title: "About Us", href: "#" },
  { title: "Blog", href: "#" },
  { title: "Loyalty Programs", href: "#" },
  { title: "Offers T&Cs", href: "#" },
  { title: "Help & FAQs", href: "#" },
  { title: "Legal Policies", href: "#" },
  { title: "Cyber Security Policy", href: "#" },
];

const trendingLinks = [
  { title: "Gifting Range", href: "#" },
  { title: "Gift Cards", href: "#" },
];

const serviceLinks = [
  { title: "Delivery Information", href: "#" },
  { title: "International Shipping", href: "#" },
  { title: "Returns", href: "#" },
  { title: "Find a Store", href: "#" },
  { title: "Lifetime Exchange Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-footer text-white mt-8" id="footer">
      {/* Main Footer Content */}
      <div className="section-container pt-16 pb-10">
        {/* Logo */}
        <div className="mb-10">
          <h2 className="text-4xl font-heading italic font-bold text-white/90">Mia</h2>
          <p className="text-[10px] tracking-[0.3em] text-white/50 font-body mt-0.5">by TANISHQ</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Jewellery */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Jewellery</h3>
            <ul className="space-y-2.5">
              {jewelleryLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-white/70 hover:text-[var(--color-gold-light)] transition-colors font-body">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Collections</h3>
            <ul className="space-y-2.5">
              {collectionLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-white/70 hover:text-[var(--color-gold-light)] transition-colors font-body">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trending + Information */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Trending</h3>
            <ul className="space-y-2.5 mb-8">
              {trendingLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-[var(--color-gold-light)] transition-colors font-body">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-heading font-semibold mb-4">Information</h3>
            <ul className="space-y-2.5">
              {infoLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-[var(--color-gold-light)] transition-colors font-body">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service + Contact */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2.5 mb-8">
              {serviceLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-[var(--color-gold-light)] transition-colors font-body">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2.5">
              <li className="text-sm text-white/70 font-body">1800-266-0123</li>
              <li><Link href="#" className="text-sm text-white/70 hover:text-[var(--color-gold-light)] transition-colors font-body">Write to Us</Link></li>
              <li><Link href="#" className="text-sm text-white/70 hover:text-[var(--color-gold-light)] transition-colors font-body">Chat with us</Link></li>
              <li><Link href="#" className="text-sm text-white/70 hover:text-[var(--color-gold-light)] transition-colors font-body">WhatsApp Chat</Link></li>
              <li className="text-sm text-white/70 font-body">+91 81473 49478</li>
            </ul>
          </div>

          {/* App + Social + Currency */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Download the Mia app</h3>
            <p className="text-sm text-white/70 font-body mb-6">for exclusive offers!</p>

            {/* QR Code placeholder */}
            <div className="w-28 h-28 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-8">
              <div className="grid grid-cols-5 gap-0.5 w-20 h-20">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={i} className={`w-full h-full ${Math.random() > 0.4 ? "bg-white/80" : "bg-transparent"}`} />
                ))}
              </div>
            </div>

            {/* Social */}
            <h3 className="text-base font-heading font-semibold mb-3">Social</h3>
            <div className="flex items-center gap-3 mb-8">
              {/* Instagram */}
              <Link href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none" />
                </svg>
              </Link>
              {/* X/Twitter */}
              <Link href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              {/* Facebook */}
              <Link href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
            </div>

            {/* Currency */}
            <h3 className="text-base font-heading font-semibold mb-3">Currency</h3>
            <div className="flex items-center gap-2">
              <button className="px-4 py-1.5 rounded-full bg-white/20 text-sm font-medium font-body">INR(₹)</button>
              <button className="px-4 py-1.5 rounded-full bg-white/5 text-sm font-medium text-white/60 hover:bg-white/10 transition-colors font-body">Dollar</button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-white/10">
        <div className="section-container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60 font-body">Stay updated with our latest collections & offers</p>
          <div className="flex items-center gap-2 w-full sm:w-auto max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-10 px-4 rounded-full bg-white/10 border border-white/20 text-sm text-white placeholder:text-white/40 outline-none focus:border-[var(--color-gold)] transition-colors font-body"
              id="newsletter-email"
            />
            <button className="btn-gold text-xs px-5 py-2.5">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40 font-body">
            © 2025 Mia by Tanishq. All Rights Reserved. A TATA Product.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/40 font-body">Visa</span>
            <span className="text-xs text-white/40 font-body">Mastercard</span>
            <span className="text-xs text-white/40 font-body">UPI</span>
            <span className="text-xs text-white/40 font-body">Net Banking</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
