import React from 'react';
import GuidedVisualizations from '../../components/tools/GuidedVisualizations';
import FaqSection from '../../components/ui/FaqSection';
import JsonLd from '../../components/seo/JsonLd';
import { FaqItem } from '../../types';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const faqs: FaqItem[] = [
  {
    question: "What if I'm not a 'visual' person?",
    answer: "That's perfectly okay! The goal isn't to see a movie-quality scene in your head. Just hold the *idea* or the *feeling* of the prompt. If it says 'calm forest,' just think 'calm' and 'forest.' Your imagination will do the rest, even if it's not vivid."
  },
  {
    question: "My mind keeps wandering off. Am I doing it wrong?",
    answer: "You're not! The mind's job is to wander. The practice is to notice when it has wandered and then gently, without judgment, guide it back to the prompt. Every time you do that, you're strengthening your focus."
  },
  {
    question: "Is there any audio with this?",
    answer: "No, this tool is intentionally silent and text-based. This approach allows your own imagination to create the scene, making it a more personal and deeply engaging experience without external distractions."
  }
];

const GuidedVisualizationsToolPage: React.FC = () => {
    const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Meta title="Free Guided Visualization Tool for Deep Relaxation | ZenRootFeet.life" description="Escape the noise and find deep relaxation with our free guided visualization tool. Choose a calming scene and let our simple text prompts soothe your mind." />
      <JsonLd schema={faqSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <BackButton to="/zen-meditation" text="Back to Zen Tools" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">Guided Visualization Tool 🏞️</h1>
              <p className="text-xl text-stone-600 !mt-2">Let your mind paint a picture of peace.</p>
            </header>
            
            <section className="flex justify-center not-prose">
              <div className="w-full max-w-lg">
                 <GuidedVisualizations />
              </div>
            </section>
            
            <section className="mt-12">
              <h2 className="text-center">How It Works & Who It's For</h2>
              <p>Sometimes, focusing on the breath is hard. The mind needs a story, a place to go. That's where visualization comes in. It's like a mini-vacation for your brain. By focusing on a peaceful, imaginary scene, you give your mind a gentle anchor, making it easier to let go of stress and distracting thoughts.</p>
              <p>This tool is for you if:</p>
              <ul>
                <li>You find traditional meditation challenging and want a different way to focus.</li>
                <li>You're feeling stressed and need a quick mental escape.</li>
                <li>You want to harness the power of your imagination to create a sense of calm and well-being.</li>
              </ul>
              <p>Just select a theme, set your timer, and allow the prompts to gently guide your attention. There's no right or wrong way to do it. Just relax and let your mind create.</p>
            </section>
            
            <div className="not-prose">
              <FaqSection faqs={faqs} />
            </div>

          </article>
        </div>
      </main>
    </>
  );
};

export default GuidedVisualizationsToolPage;