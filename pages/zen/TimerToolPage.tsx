import React from 'react';
import MeditationTimer from '../../components/tools/MeditationTimer';
import FaqSection from '../../components/ui/FaqSection';
import JsonLd from '../../components/seo/JsonLd';
import { FaqItem } from '../../types';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const faqs: FaqItem[] = [
  {
    question: "Why use a timer? Isn't that distracting?",
    answer: "It can seem that way, but for me, setting a timer is an act of commitment. It frees my mind from wondering 'how long has it been?'. I set it, forget it, and just sit. It creates a defined space for my practice."
  },
  {
    question: "What if I can't sit still for 5 minutes?",
    answer: "Start with 1 minute! Or even 30 seconds. The goal isn't to hit a number, it's to practice showing up for yourself. Be kind, start small, and celebrate that you did it at all."
  },
  {
    question: "Should my eyes be open or closed?",
    answer: "Whatever feels most comfortable and least distracting for you. Many people close their eyes to reduce visual input. I sometimes prefer a 'soft gaze' at the floor a few feet in front of me."
  }
];

const TimerToolPage: React.FC = () => {
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
      <Meta title="Minimalist Meditation Timer for Focused Practice | ZenRootFeet.life" description="Enhance your meditation with our clean, simple, and free timer. Set your duration, press start, and sink into stillness without distraction." />
      <JsonLd schema={faqSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <BackButton to="/zen-meditation" text="Back to Zen Tools" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">Minimalist Meditation Timer ⏳</h1>
              <p className="text-xl text-stone-600 !mt-2">Create a space for your practice without the fuss.</p>
            </header>
            
            <section className="flex justify-center not-prose">
              <div className="w-full max-w-md">
                 <MeditationTimer />
              </div>
            </section>
            
            <section className="mt-12">
              <h2 className="text-center">How It Works & Who It's For</h2>
              <p>I wanted a meditation timer that did one thing: time my meditation. No guided tracks, no distracting bells and whistles, just a simple, reliable countdown. So, I built this.</p>
              <p>This timer is for you if:</p>
              <ul>
                <li>You want to build a consistent meditation habit.</li>
                <li>You find other meditation apps too cluttered or distracting.</li>
                <li>You simply need to set aside a specific amount of time to sit quietly and be with your thoughts.</li>
              </ul>
              <p>Just choose your duration, hit start, and give yourself the gift of stillness. You've earned it.</p>
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

export default TimerToolPage;