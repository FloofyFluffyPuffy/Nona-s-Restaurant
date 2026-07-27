import Menu from "@/code/components/Menu/Menu";
import MenuHero from "@/code/components/Menu/MenuHero";
import SectionHashScrollHandler from "@/code/components/Layout/SectionHashScrollHandler";

export default function MenuPage() {
  return (
    <main>
      <MenuHero />
      <Menu />
      <SectionHashScrollHandler />
    </main>
  );
}
