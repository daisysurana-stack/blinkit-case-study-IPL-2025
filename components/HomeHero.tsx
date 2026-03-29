import dynamic from "next/dynamic";

const HomeHeroClient = dynamic(() => import("./HomeHeroClient"), {
  ssr: false
});

export default function HomeHero() {
  return <HomeHeroClient />;
}
