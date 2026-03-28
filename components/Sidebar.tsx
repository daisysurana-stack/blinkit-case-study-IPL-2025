"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const navItems = [
  {
    href: "/",
    label: "My Works",
    match: (pathname: string) =>
      pathname === "/" || pathname.startsWith("/case-study")
  },
  {
    href: "/interest",
    label: "Interest",
    match: (pathname: string) => pathname.startsWith("/interest")
  },
  {
    href: "/about",
    label: "About",
    match: (pathname: string) => pathname.startsWith("/about")
  },
  {
    href: "/contact",
    label: "Contact",
    match: (pathname: string) => pathname.startsWith("/contact")
  }
];

export default function Sidebar() {
  const pathname = usePathname();
  const isCaseStudy = pathname.startsWith("/case-study");
  const isUnityCase = pathname.startsWith("/case-study");

  useEffect(() => {
    document.body.classList.toggle("case-study-mode", isCaseStudy);
    document.body.classList.toggle("case-study-no-rail", isUnityCase);

    return () => {
      document.body.classList.remove("case-study-mode");
      document.body.classList.remove("case-study-no-rail");
    };
  }, [isUnityCase, isCaseStudy]);

  if (isCaseStudy) {
    return null;
  }

  return (
    <aside className="side-rail">
      <div className="rail-top">
        <div className="logo-unit">
          <div className="sidebar-logo-mark">
            <Image
              src="/assets/daisy-logo.png"
              alt="Daisy Surana logo"
              width={74}
              height={82}
              priority
            />
          </div>
        </div>

        <p className="rail-copy">
          Currently a visual &amp; motion designer at Blinkit with 4 years of
          experience
        </p>
      </div>

      <nav className="rail-nav" aria-label="Primary">
        {navItems.map((item) => {
          const isActive = item.match(pathname);

          return (
            <Link
              key={item.href}
              className={isActive ? "is-active" : undefined}
              href={item.href}
            >
              {isActive ? <span className="nav-dot" /> : null}
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
