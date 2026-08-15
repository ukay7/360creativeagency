import React from "react";
import { MainMenuRootList } from "@/shared/mobile-menu/MobileMenuCloneContext";

function LinkSwap({ label }: { label: string }) {
  return (
    <span className="at-link-swap">
      <span className="text-1">{label}</span>
      <span className="text-2">{label}</span>
    </span>
  );
}

export default function MainMenu() {
  return (
    <MainMenuRootList>
      <li>
        <a href="/">
          <LinkSwap label="Home" />
        </a>
      </li>

      <li>
        <a href="/about">
          <LinkSwap label="About Us" />
        </a>
      </li>

      <li>
        <a href="/services">
          <LinkSwap label="Services" />
        </a>
      </li>

      <li>
        <a href="/portfolio">
          <LinkSwap label="Portfolio" />
        </a>
      </li>

      <li>
        <a href="/contact">
          <LinkSwap label="Contact Us" />
        </a>
      </li>
    </MainMenuRootList>
  );
}
