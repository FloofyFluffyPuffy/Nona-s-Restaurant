import Menu from "@/code/components/Menu/Menu";
import MenuHero from "@/code/components/Menu/MenuHero";
import BackTopBtn from "@/code/components/utilities/BackTopBtn";
import SectionHashScrollHandler from "@/code/components/utilities/SectionHashScrollHandler";
export default function MenuPage() {
  return (
    <main>
      <MenuHero />
      <Menu />
      <BackTopBtn/>
      <SectionHashScrollHandler/>
    </main>
  );
}
