"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const variations = [
  { key: 0, label: "White Daisy" },
  { key: 1, label: "Frost Daisy" },
  { key: 2, label: "Pink Daisy" }
];

const themeCopy = {
  0: {
    heading: "Visual & Motion Designer at Blinkit",
    subheading: "I build things that look crafted and work at scale"
  },
  1: {
    heading: "3 years shipping motion-first product design",
    subheading: "Systems thinker. Figma archaeologist. QC until midnight"
  },
  2: {
    heading: "Currently making a grocery app feel like a game",
    subheading: "Open to what comes next"
  }
} as const;

const importMap = {
  imports: {
    three: "https://cdn.jsdelivr.net/npm/three@0.183.2/build/three.module.js",
    "three/webgpu": "https://cdn.jsdelivr.net/npm/three@0.183.2/build/three.webgpu.js",
    "three/tsl": "https://cdn.jsdelivr.net/npm/three@0.183.2/build/three.tsl.js",
    "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.183.0/examples/jsm/",
    "three/examples/jsm/": "https://cdn.jsdelivr.net/npm/three@0.183.0/examples/jsm/"
  }
};

export default function HomeHeroClient() {
  const [activeTheme, setActiveTheme] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    const importMapId = "home-hero-importmap";
    const sceneScriptId = "home-hero-scene-script";
    let bootToken = 0;
    const sceneWindow = window as Window & {
      __homeHeroSceneCleanup?: () => void;
    };

    const teardownScene = () => {
      sceneWindow.__homeHeroSceneCleanup?.();
      delete sceneWindow.__homeHeroSceneCleanup;
    };

    const ensureImportMap = () => {
      if (document.getElementById(importMapId)) {
        return;
      }

      const importMapScript = document.createElement("script");
      importMapScript.id = importMapId;
      importMapScript.type = "importmap";
      importMapScript.textContent = JSON.stringify(importMap);
      document.head.appendChild(importMapScript);
    };

    const mountScene = () => {
      const root = document.getElementById("root");
      if (!root) {
        return;
      }

      const hasCanvas = Boolean(root.querySelector("canvas"));
      const hasLiveScene = typeof sceneWindow.__homeHeroSceneCleanup === "function";

      if (hasCanvas && hasLiveScene) {
        return;
      }

      teardownScene();
      ensureImportMap();
      document.getElementById(sceneScriptId)?.remove();
      root.replaceChildren();

      bootToken += 1;
      const sceneScript = document.createElement("script");
      sceneScript.id = sceneScriptId;
      sceneScript.type = "module";
      sceneScript.src = `/scene.js?boot=${bootToken}`;
      document.body.appendChild(sceneScript);
    };

    const handlePageShow = () => {
      window.requestAnimationFrame(() => {
        mountScene();
      });
    };

    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        handlePageShow();
      }
    };

    mountScene();
    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("focus", handlePageShow);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("focus", handlePageShow);
      document.removeEventListener("visibilitychange", handleVisibility);
      teardownScene();
      document.getElementById(sceneScriptId)?.remove();
      document.getElementById(importMapId)?.remove();
    };
  }, []);

  const copy = themeCopy[activeTheme];

  return (
    <div className="hero-shell" data-scroll-track>
      <section className="home-hero hero-section" aria-label="Landing screen">
        <header className="home-top-nav" aria-label="Primary">
          <div className="home-top-nav__inner">
            <div className="home-top-nav__zone home-top-nav__zone--left">
              <a className="home-top-nav__logo" href="/" aria-label="Daisy Surana home">
                <Image
                  src="/assets/Daisy Logo.png"
                  alt="Daisy Surana"
                  width={133}
                  height={36}
                  className="home-top-nav__logo-image"
                  priority
                />
              </a>
            </div>

            <div className="home-top-nav__zone home-top-nav__zone--center" aria-hidden="true" />

            <div className="home-top-nav__zone home-top-nav__zone--right">
              <nav className="home-top-nav__links" aria-label="Section navigation">
                <a className="home-top-nav__link" href="#about">
                  ABOUT
                </a>
                <a className="home-top-nav__link" href="#work">
                  WORKS
                </a>
                <a className="home-top-nav__link" href="/contact">
                  CONTACT
                </a>
              </nav>
            </div>
          </div>
        </header>

        <div className="hero-scene home-hero__scene" aria-hidden="true">
          <div id="root" className="home-hero__root" />
        </div>

        <div className="home-hero__text-overlay" aria-hidden="true">
          <div className="home-hero__theme-copy" key={activeTheme}>
            <p className="home-hero__theme-copy-heading">{copy.heading}</p>
            <p className="home-hero__theme-copy-subheading">{copy.subheading}</p>
          </div>
        </div>

        <div
          id="hero-interaction-zone"
          className="home-hero__interaction-zone"
          aria-hidden="true"
        />

        <div id="variation-bar" className="home-hero__variation-bar" aria-label="Theme selection">
          {variations.map((variation) => (
            <button
              key={variation.label}
              type="button"
              className={`morph-btn${activeTheme === variation.key ? " active" : ""}`}
              data-variation={variation.key}
              aria-pressed={activeTheme === variation.key}
              onClick={() => setActiveTheme(variation.key as 0 | 1 | 2)}
            >
              {variation.label.toUpperCase()}
            </button>
          ))}
        </div>

      </section>
    </div>
  );
}
