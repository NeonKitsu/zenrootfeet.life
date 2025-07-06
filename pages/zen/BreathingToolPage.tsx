import React from 'react';
import BreathingExercise from '../../components/tools/BreathingExercise';
import FaqSection from '../../components/ui/FaqSection';
import JsonLd from '../../components/seo/JsonLd';
import { FaqItem } from '../../types';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const faqs: FaqItem[] = [
  {
    question: "How often should I do this?",
    answer: "Whenever you feel stressed or just need a moment of calm. Even 1-2 minutes a day can make a big difference. I try to do it before a big meeting or after a long day."
  },
  {
    question: "Is it okay if I can't hold my breath for 4 seconds?",
    answer: "Absolutely! Don't force it. The numbers are just a guide. Adjust the timing to what feels comfortable for you. The goal is relaxation, not a breathing competition."
  },
   {
    question: "Can I do this anywhere?",
    answer: "Yes! That's the beauty of it. You can do it at your desk, in your car (while parked, of course!), or waiting in line. It's your little portable peace-bringer."
  }
];

const BreathingToolPage: React.FC = () => {
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
      <Meta title="Guided Box Breathing Tool for Instant Calm | ZenRootFeet.life" description="Feeling stressed? Use our simple, guided box breathing exercise to calm your nervous system in minutes. A free tool to find your center." />
      <JsonLd schema={faqSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <BackButton to="/zen-meditation" text="Back to Zen Tools" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">Guided Breathing Tool 🌬️</h1>
              <p className="text-xl text-stone-600 !mt-2">A simple way to calm your nervous system with box breathing.</p>
            </header>
            
            <section className="flex justify-center not-prose">
              <div className="w-full max-w-md">
                 <BreathingExercise />
              </div>
            </section>
            
            <section className="mt-12">
              <h2 className="text-center">How It Works & Who It's For</h2>
              <p>I discovered box breathing during a particularly stressful time, and it was a game-changer. The technique is simple: you breathe in, hold, breathe out, and hold again, all for the same amount of time. This simple rhythm can help regulate your autonomic nervous system, pulling you out of a "fight-or-flight" state and into a "rest-and-digest" mode.</p>
              <p>This tool is for anyone and everyone:</p>
              <ul>
                <li>Feeling anxious or overwhelmed? Give this a try.</li>
                <li>Need to focus before a big task? A few rounds can clear your head.</li>
                <li>Struggling to fall asleep? This can help calm a racing mind.</li>
              </ul>
              <p>There's no magic, just the simple, profound power of your own breath. I hope it brings you a moment of peace.</p>
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

export default BreathingToolPage;