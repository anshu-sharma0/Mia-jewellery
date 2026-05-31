import Link from "next/link";
import { businessData } from "@/data/business";

const jewelleryLinks = businessData.services.jewelleryLinks;
const collectionLinks = businessData.services.collectionLinks;
const infoLinks = businessData.services.infoLinks;
const trendingLinks = businessData.services.trendingLinks;
const serviceLinks = businessData.services.customerServiceLinks;
const contactLinks = businessData.contact.supportLinks;

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const qrPattern = Array.from({ length: 25 }, (_, index) =>
  index % 4 === 0 || index % 7 === 0 ? "bg-white/80" : "bg-transparent"
);

function SocialIcon({ platform }: { platform: string }) {
  if (platform === "instagram") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none" />
      </svg>
    );
  }

  if (platform === "twitter") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }

  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gradient-footer text-white mt-8" id="footer">
      {/* Main Footer Content */}
      <div className="section-container pt-16 pb-10">
        {/* Logo */}
        <div className="mb-10">
          <h2 className="text-4xl font-heading italic font-bold text-white/90">{businessData.company.logo.primaryText}</h2>
          <p className="text-[10px] tracking-[0.3em] text-white/50 font-body mt-0.5">{businessData.company.logo.secondaryText}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Jewellery */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Jewellery</h3>
            <ul className="space-y-2.5">
              {jewelleryLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-white/70 hover:text-gold-light transition-colors font-body">
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
                  <Link href={`/collections?collection=${slugify(link)}`} className="text-sm text-white/70 hover:text-gold-light transition-colors font-body">
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
                  <Link href={link.href} className="text-sm text-white/70 hover:text-gold-light transition-colors font-body">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-heading font-semibold mb-4">Information</h3>
            <ul className="space-y-2.5">
              {infoLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-gold-light transition-colors font-body">
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
                  <Link href={link.href} className="text-sm text-white/70 hover:text-gold-light transition-colors font-body">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2.5">
              <li className="text-sm text-white/70 font-body">{businessData.contact.primaryPhone}</li>
              {contactLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-gold-light transition-colors font-body">
                    {link.title}
                  </Link>
                </li>
              ))}
              <li className="text-sm text-white/70 font-body">{businessData.contact.secondaryPhone}</li>
            </ul>
          </div>

          {/* App + Social + Currency */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">{businessData.footer.appDownloadTitle}</h3>
            <p className="text-sm text-white/70 font-body mb-6">{businessData.footer.appDownloadSubtitle}</p>

            {/* QR Code placeholder */}
            <div className="w-28 h-28 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-8">
              <div className="grid grid-cols-5 gap-0.5 w-20 h-20">
                {qrPattern.map((className, index) => (
                  <div key={index} className={`w-full h-full ${className}`} />
                ))}
              </div>
            </div>

            {/* Social */}
            <h3 className="text-base font-heading font-semibold mb-3">Social</h3>
            <div className="flex items-center gap-3 mb-8">
              {businessData.socialLinks.map((social) => (
                <Link
                  key={social.platform}
                  href={social.url}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.ariaLabel}
                >
                  <SocialIcon platform={social.platform} />
                </Link>
              ))}
            </div>

            {/* Currency */}
            <h3 className="text-base font-heading font-semibold mb-3">Currency</h3>
            <div className="flex items-center gap-2">
              <button className="px-4 py-1.5 rounded-full bg-white/20 text-sm font-medium font-body">{businessData.footer.currencyOptions[0]}</button>
              <button className="px-4 py-1.5 rounded-full bg-white/5 text-sm font-medium text-white/60 hover:bg-white/10 transition-colors font-body">{businessData.footer.currencyOptions[1]}</button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-white/10">
        <div className="section-container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60 font-body">{businessData.footer.newsletterText}</p>
          <div className="flex items-center gap-2 w-full sm:w-auto max-w-md">
            <input
              type="email"
              placeholder={businessData.footer.newsletterPlaceholder}
              className="flex-1 h-10 px-4 rounded-full bg-white/10 border border-white/20 text-sm text-white placeholder:text-white/40 outline-none focus:border-gold transition-colors font-body"
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
            {businessData.legal.copyrightText}
          </p>
          <div className="flex items-center gap-4">
            {businessData.footer.paymentMethods.map((method) => (
              <span key={method} className="text-xs text-white/40 font-body">{method}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
