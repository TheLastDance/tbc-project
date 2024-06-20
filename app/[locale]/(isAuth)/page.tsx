import { CyberCanvas } from "@/components/CyberSphere3d/CyberCanvas";
import { Landing } from "@/components/Landing/Landing";
import { setStaticParamsLocale } from "next-international/server";
import { SliderMainPage } from "@/components/Sliders/SliderMainPage/SliderMainPage";
import { MotionDiv } from "@/components/MotionDiv/MotionDiv";
import { animation } from "@/services/animations";
import { TranslateTextServer } from "@/components/TranslateText/TranslateTextServer";

export default async function Home({ params: { locale } }: { params: { locale: Locale } }) {
  setStaticParamsLocale(locale);

  return (
    <div className="mainPage">
      <CyberCanvas />
      <Landing />
      <MotionDiv
        initial="hidden"
        whileInView='visible'
        viewport={{ once: true }}
        variants={animation}
      >
        <h3><TranslateTextServer translationKey="slider.browseCategories" /></h3>
        <SliderMainPage />
      </MotionDiv>
    </div>
  );
}
