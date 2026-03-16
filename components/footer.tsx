import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/50">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Brew &amp; Bean</h3>
            <p className="text-sm text-muted-foreground">
              Crafting exceptional coffee experiences since 2024.
            </p>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Brew &amp; Bean. All rights
              reserved.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Hours
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Monday &ndash; Friday: 7:00 AM &ndash; 8:00 PM</li>
              <li>Saturday: 8:00 AM &ndash; 9:00 PM</li>
              <li>Sunday: 8:00 AM &ndash; 6:00 PM</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Facebook
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
