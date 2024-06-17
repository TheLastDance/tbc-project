import "./page.css";
import { CyberCanvas } from "@/components/CyberSphere3d/CyberCanvas";


export default async function Home() {
  return (
    <div className="mainPage">
      <CyberCanvas />
    </div>
  );
}
