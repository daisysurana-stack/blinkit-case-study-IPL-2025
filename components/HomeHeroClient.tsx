"use client";

import { useEffect } from "react";

const variations = [
  { key: 0, label: "White Daisy" },
  { key: 1, label: "Frost Daisy" },
  { key: 2, label: "Pink Daisy" }
];

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
  useEffect(() => {
    const importMapId = "home-hero-importmap";
    const sceneScriptId = "home-hero-scene-script";
    let bootToken = 0;

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

      if (root.querySelector("canvas")) {
        return;
      }

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
      document.getElementById(sceneScriptId)?.remove();
      document.getElementById(importMapId)?.remove();
    };
  }, []);

  return (
    <div className="hero-shell" data-scroll-track>
      <section className="home-hero hero-section" aria-label="Landing screen">
        <div className="hero-scene home-hero__scene" aria-hidden="true">
          <div id="root" className="home-hero__root" />
        </div>

        <div
          id="hero-interaction-zone"
          className="home-hero__interaction-zone"
          aria-hidden="true"
        />

        <div id="variation-bar" className="home-hero__variation-bar">
          {variations.map((variation, index) => (
            <button
              key={variation.label}
              type="button"
              className={`morph-btn${index === 0 ? " active" : ""}`}
              data-variation={variation.key}
            >
              {variation.label}
            </button>
          ))}
        </div>

        <div className="home-hero__scroll-cue" aria-hidden="true">
          <span className="home-hero__scroll-text">Scroll to view work</span>
          <span className="home-hero__scroll-line" />
          <span className="home-hero__scroll-dot" />
        </div>
      </section>
    </div>
  );
}
