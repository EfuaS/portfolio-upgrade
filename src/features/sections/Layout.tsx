/* Generated with Copilot — reviewed */
import { Header } from "../navigation-ui/Header";
import "aos/dist/aos.css";
import { Home } from "./Home";
import { About } from "./About";
import { Works } from "./Works";
import { Education } from "./Education";
import Footer from "./Footer";

export function Layout() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="space-y-32 md:space-y-16">
        <Home />
        <About />
        <Education />
        <Works />
      </main>
      <Footer/>
    </div>
  );
}
