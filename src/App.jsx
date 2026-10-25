import { useRevealAnimation } from "./hooks/useRevealAnimation";
import { useActiveSection } from "./hooks/useActiveSection";
import { ProgressBar } from "./components/layout/ProgressBar";
import { SectionRail } from "./components/layout/SectionRail";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { MarqueeSection } from "./components/sections/MarqueeSection";
import { IntroductionSection } from "./components/sections/IntroductionSection";
import { CareerPathSection } from "./components/sections/CareerPathSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { CultureSection } from "./components/sections/CultureSection";
import { LetterSection } from "./components/sections/LetterSection";
import { FAQSection } from "./components/sections/FAQSection";
import { CTASection } from "./components/sections/CTASection";

export function App() {
    useRevealAnimation();
    const activeSection = useActiveSection();

    return (
        <>
            <ProgressBar />
            <SectionRail activeSection={activeSection} />
            <Header activeSection={activeSection} />

            <main id="main">
                <HeroSection />
                <MarqueeSection />
                <IntroductionSection />
                <CareerPathSection />
                <ProjectsSection />
                <CultureSection />
                <LetterSection />
                <FAQSection />
                <CTASection />
            </main>

            <Footer />
        </>
    );
}

export default App;
