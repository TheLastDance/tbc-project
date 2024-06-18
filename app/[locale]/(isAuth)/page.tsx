import "./page.css";
import { CyberCanvas } from "@/components/CyberSphere3d/CyberCanvas";
import { Landing } from "@/components/Landing/Landing";
import { setStaticParamsLocale } from "next-international/server";


export default async function Home({ params: { locale } }: { params: { locale: Locale } }) {
  setStaticParamsLocale(locale);

  return (
    <div className="mainPage">
      <CyberCanvas />
      <Landing />
    </div>
  );
}
