import AboutSlider from "@/components/AboutSlider/AboutSlider";
import Accordion from "@/components/Accordion";
import HeroSlider from "@/components/HeroSlider/HeroSlider";
import PageContainer from "@/components/PageContainer";
import ProductSection from "@/components/ProductsSection/ProductSection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section id="homepage" className="h-auto">
        <HeroSlider />
      </section>
      <section id="about" className="h-auto py-24 flex justify-center">
        <PageContainer className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          <div className="flex flex-col gap-2">
            <span className="text-[26px]">Despre noi</span>
            <hr className="border-[2px] border-[#312783] w-[70px] !bg-[#312783]" />
            <div className="flex flex-col gap-8 pt-6">
              <p className="text-[14px] text-[#888] leading-[2]">
                Suntem o echipă dinamică care, după 30 de ani de activitate profesională în sectorul chimicalelor pentru construcții, lucrând în companii de top din industrie, a pornit cu entuziasm și hotărâre să folosească această experiență și cunoștințe în propria noastră afacere.
              </p>
              <p className="text-[14px] text-[#888] leading-[2]">
                Suntem o companie producătoare cu o gamă largă de produse de calitate și certificate, oferind soluții în domeniile hidroizolațiilor, hidroizolației poliuretanice, hidroizolației poliureice, acoperirilor industriale pentru pardoseli, injecțiilor poliuretanice și epoxidice, grundurilor poliuretanice și epoxidice, reparațiilor pe bază de rășini epoxidice și ciment, precum și protecția suprafețelor.
              </p>
            </div>
          </div>
          <div>
            <AboutSlider />
          </div>
        </PageContainer>
      </section>
      <section id="products" className="h-auto flex justify-center">
        <PageContainer>
          <div className="flex flex-col gap-6 justify-center items-center">
            <h2 className="text-[30px]">Sisteme de produse</h2>
            <hr className="border-[2px] border-[#312783] w-[70px] !bg-[#312783]" />
          </div>
          <div className="py-18">
            <ProductSection />
          </div>
        </PageContainer>
      </section>
      <section
        id="terapol"
        className="bg-[#312783] py-8 flex justify-center items-center"
      >
        <PageContainer>
          <div className="flex justify-between items-center">
            <p className="text-white text-[22px]">
              TERAPOL PRODUSE CHIMICE PENTRU CONSTRUCȚII S.A.
            </p>
            <Link
              className="py-3 px-8 bg-white font-bold tracking-[.1em] text-[#312783] rounded-[2px]"
              href={"tel:+79853336009"}
            >
              Contact
            </Link>
          </div>
        </PageContainer>
      </section>
      <section className="h-auto py-12 grid grid-cols-1 lg:grid-cols-2">
        <div className="relative">
          <Image
            className="object-cover"
            src="/assets/whyTerapol.png"
            alt="Terapol"
            width={960}
            height={500}
          />
        </div>
        <div className="px-8 py-16 lg:px-18 lg:py-24 flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-[30px]">De ce Terapol?</h2>
            <hr className="border-[2px] border-[#312783] w-[70px] !bg-[#312783]" />
          </div>
          <Accordion />
        </div>
      </section>
    </main>
  );
}
