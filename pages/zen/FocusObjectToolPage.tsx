import React from 'react';
import FocusObject from '../../components/tools/FocusObject';
import FaqSection from '../../components/ui/FaqSection';
import JsonLd from '../../components/seo/JsonLd';
import { FaqItem } from '../../types';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const faqs: FaqItem[] = [
  {
    question: "Should I stare intensely at the object?",
    answer: "Not at all. The key is a 'soft gaze.' Let your eyes rest gently on the object without straining. It's meant to be a calm anchor for your attention, not a target for intense concentration."
  },
  {
    question: "What is an 'Ensō'?",
    answer: "An Ensō is a circle that is hand-drawn in one uninhibited brushstroke in Zen practice. It symbolizes enlightenment, strength, elegance, the universe, and 'mu' (the void). It represents a moment when the mind is free to let the body create."
  },
  {
    question: "My mind still wanders. What's the point?",
    answer: "A wandering mind is normal! The focus object isn't meant to stop thoughts, but to give you a place to return to when you notice you've wandered. Each time you gently bring your attention back to the object, you are strengthening your meditative 'muscle'."
  }
];

const FocusObjectToolPage: React.FC = () => {
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
      <Meta title="Focus Object Tool for Deeper Meditation | ZenRootFeet.life" description="Is your mind too busy for meditation? Anchor your focus with our visual meditation tool. Choose an object like a flickering candle or ensō circle to gently hold your attention." />
      <JsonLd schema={faqSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <BackButton to="/zen-meditation" text="Back to Zen Tools" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">Focus Object Selector 🎯</h1>
              <p className="text-xl text-stone-600 !mt-2">A simple anchor for a wandering mind.</p>
            </header>
            
            <section className="flex justify-center not-prose">
              <div className="w-full max-w-md">
                 <FocusObject />
              </div>
            </section>
            
            <section className="mt-12">
              <h2 className="text-center">How It Works & Who It's For</h2>
              <p>In many meditation traditions, practitioners use a visual focal point to help stabilize their attention. It's a simple concept: by giving your eyes a single, unchanging thing to rest on, you give your mind a home base to return to every time it gets distracted. It can be a much more approachable practice than simply closing your eyes and dealing with the chaos of your thoughts.</p>
              <p>This tool is for you if:</p>
              <ul>
                <li>You find your mind is extra 'busy' when you close your eyes to meditate.</li>
                <li>You want to practice single-pointed concentration.</li>
                <li>You are looking for a simple, secular aid for your sitting practice.</li>
              </ul>
              <p>Choose an object that feels calming to you, set the timer, adopt a soft, gentle gaze, and begin. When you notice your mind has wandered, simply and kindly guide your attention back to the object on the screen.</p>
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

export default FocusObjectToolPage;