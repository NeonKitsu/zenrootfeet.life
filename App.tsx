
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ZenPillarPage from './pages/zen/ZenPillarPage';
import BreathingToolPage from './pages/zen/BreathingToolPage';
import TimerToolPage from './pages/zen/TimerToolPage';
import RootPillarPage from './pages/root/RootPillarPage';
import FiveSensesToolPage from './pages/root/FiveSensesToolPage';
import FeetPillarPage from './pages/feet/FeetPillarPage';
import DailyFootHygienePage from './pages/feet/DailyFootHygienePage';
import DryNeedlingPage from './pages/feet/DryNeedlingPage';
import StressReductionPage from './pages/feet/StressReductionPage';
import BlogIndexPage from './pages/blog/BlogIndexPage';
import ConnectingWithNaturePage from './pages/blog/ConnectingWithNaturePage';
import AlaskaGroundingPage from './pages/blog/AlaskaGroundingPage';
import AboutPage from './pages/AboutPage';
import LegalPage from './pages/LegalPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

import GuidedVisualizationsToolPage from './pages/zen/GuidedVisualizationsToolPage';
import MindfulMovementToolPage from './pages/zen/MindfulMovementToolPage';
import GratitudeJournalToolPage from './pages/zen/GratitudeJournalToolPage';
import FocusObjectToolPage from './pages/zen/FocusObjectToolPage';

import Breathing478ToolPage from './pages/root/4-7-8-BreathingToolPage';
import MuscleRelaxationToolPage from './pages/root/MuscleRelaxationToolPage';
import CategoriesGameToolPage from './pages/root/CategoriesGameToolPage';
import AffirmationsToolPage from './pages/root/AffirmationsToolPage';
import SensoryGroundingGuidePage from './pages/root/SensoryGroundingGuidePage';
import MentalGroundingGuidePage from './pages/root/MentalGroundingGuidePage';

import FootStretchesPage from './pages/feet/FootStretchesPage';
import FootSoaksPage from './pages/feet/FootSoaksPage';
import ConsciousFootwearPage from './pages/feet/ConsciousFootwearPage';

import PodiatryServicesPage from './pages/feet/PodiatryServicesPage';
import PhysicalTherapyPage from './pages/feet/PhysicalTherapyPage';
import CuppingPage from './pages/feet/CuppingPage';
import ShockwaveTherapyPage from './pages/feet/ShockwaveTherapyPage';
import ReflexologyPage from './pages/feet/ReflexologyPage';

// Import new blog pages
import BeyondTheBackdoorPage from './pages/blog/BeyondTheBackdoorPage';
import TheUnpluggedPathPage from './pages/blog/TheUnpluggedPathPage';
import NaturesWhisperPage from './pages/blog/NaturesWhisperPage';
import DailyDoseOfGreenPage from './pages/blog/DailyDoseOfGreenPage';
import ReclaimingNaturalRhythmPage from './pages/blog/ReclaimingNaturalRhythmPage';
import WildernessWisdomAlaskaPage from './pages/blog/WildernessWisdomAlaskaPage';
import ArtOfUnpluggingAlaskaPage from './pages/blog/ArtOfUnpluggingAlaskaPage';
import BeyondTheMapAlaskaPage from './pages/blog/BeyondTheMapAlaskaPage';
import FindingStillnessAlaskaPage from './pages/blog/FindingStillnessAlaskaPage';
import ConcreteToConiferAlaskaPage from './pages/blog/ConcreteToConiferAlaskaPage';
import QuietRevolutionPage from './pages/blog/QuietRevolutionPage';
import UnlockingInnerCompassPage from './pages/blog/UnlockingInnerCompassPage';
import BeyondTheMatPage from './pages/blog/BeyondTheMatPage';
import SubtlePowerOfPresencePage from './pages/blog/SubtlePowerOfPresencePage';
import YourHolisticToolkitPage from './pages/blog/YourHolisticToolkitPage';
import ZenOfBeingPage from './pages/blog/ZenOfBeingPage';
import MindfulMorningsPage from './pages/blog/MindfulMorningsPage';
import EnergyOfSilencePage from './pages/blog/EnergyOfSilencePage';


const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/zen-meditation" element={<ZenPillarPage />} />
        <Route path="/zen-meditation/breathing-tool" element={<BreathingToolPage />} />
        <Route path="/zen-meditation/meditation-timer" element={<TimerToolPage />} />
        <Route path="/zen-meditation/guided-visualizations" element={<GuidedVisualizationsToolPage />} />
        <Route path="/zen-meditation/mindful-movement" element={<MindfulMovementToolPage />} />
        <Route path="/zen-meditation/gratitude-journal" element={<GratitudeJournalToolPage />} />
        <Route path="/zen-meditation/focus-object" element={<FocusObjectToolPage />} />
        
        <Route path="/root-grounding" element={<RootPillarPage />} />
        <Route path="/root-grounding/5-4-3-2-1-technique" element={<FiveSensesToolPage />} />
        <Route path="/root-grounding/4-7-8-breathing" element={<Breathing478ToolPage />} />
        <Route path="/root-grounding/muscle-relaxation" element={<MuscleRelaxationToolPage />} />
        <Route path="/root-grounding/categories-game" element={<CategoriesGameToolPage />} />
        <Route path="/root-grounding/affirmations" element={<AffirmationsToolPage />} />
        <Route path="/root-grounding/sensory-guide" element={<SensoryGroundingGuidePage />} />
        <Route path="/root-grounding/mental-guide" element={<MentalGroundingGuidePage />} />
        
        <Route path="/holistic-foot-care" element={<FeetPillarPage />} />
        <Route path="/holistic-foot-care/daily-hygiene" element={<DailyFootHygienePage />} />
        <Route path="/holistic-foot-care/dry-needling" element={<DryNeedlingPage />} />
        <Route path="/holistic-foot-care/stress-reduction" element={<StressReductionPage />} />
        <Route path="/holistic-foot-care/foot-stretches" element={<FootStretchesPage />} />
        <Route path="/holistic-foot-care/foot-soaks-rituals" element={<FootSoaksPage />} />
        <Route path="/holistic-foot-care/conscious-footwear" element={<ConsciousFootwearPage />} />
        <Route path="/holistic-foot-care/podiatry-services" element={<PodiatryServicesPage />} />
        <Route path="/holistic-foot-care/physical-therapy" element={<PhysicalTherapyPage />} />
        <Route path="/holistic-foot-care/cupping" element={<CuppingPage />} />
        <Route path="/holistic-foot-care/shockwave-therapy" element={<ShockwaveTherapyPage />} />
        <Route path="/holistic-foot-care/reflexology" element={<ReflexologyPage />} />
        
        <Route path="/blog" element={<BlogIndexPage />} />
        {/* Existing Posts */}
        <Route path="/blog/connecting-with-nature" element={<ConnectingWithNaturePage />} />
        <Route path="/blog/alaska-grounding" element={<AlaskaGroundingPage />} />
        {/* New Posts */}
        <Route path="/blog/beyond-the-backdoor" element={<BeyondTheBackdoorPage />} />
        <Route path="/blog/unplugged-path" element={<TheUnpluggedPathPage />} />
        <Route path="/blog/natures-whisper" element={<NaturesWhisperPage />} />
        <Route path="/blog/daily-dose-of-green" element={<DailyDoseOfGreenPage />} />
        <Route path="/blog/reclaiming-natural-rhythm" element={<ReclaimingNaturalRhythmPage />} />
        <Route path="/blog/wilderness-wisdom-alaska" element={<WildernessWisdomAlaskaPage />} />
        <Route path="/blog/art-of-unplugging-alaska" element={<ArtOfUnpluggingAlaskaPage />} />
        <Route path="/blog/beyond-the-map-alaska" element={<BeyondTheMapAlaskaPage />} />
        <Route path="/blog/finding-stillness-alaska" element={<FindingStillnessAlaskaPage />} />
        <Route path="/blog/concrete-to-conifer-alaska" element={<ConcreteToConiferAlaskaPage />} />
        <Route path="/blog/quiet-revolution" element={<QuietRevolutionPage />} />
        <Route path="/blog/unlocking-inner-compass" element={<UnlockingInnerCompassPage />} />
        <Route path="/blog/beyond-the-mat" element={<BeyondTheMatPage />} />
        <Route path="/blog/subtle-power-of-presence" element={<SubtlePowerOfPresencePage />} />
        <Route path="/blog/your-holistic-toolkit" element={<YourHolisticToolkitPage />} />
        <Route path="/blog/zen-of-being" element={<ZenOfBeingPage />} />
        <Route path="/blog/mindful-mornings" element={<MindfulMorningsPage />} />
        <Route path="/blog/energy-of-silence" element={<EnergyOfSilencePage />} />
        
        <Route path="/about" element={<AboutPage />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
