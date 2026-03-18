"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface MobileNavProps {
  links: ReadonlyArray<{ href: string; label: string }>;
}

export function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={<Button variant="ghost" size="icon" className="md:hidden" />}
      >
        <Menu className="size-5" />
        <span className="sr-only">Toggle menu</span>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle className="text-left text-lg font-bold">
            Brew &amp; Bean
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 px-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
