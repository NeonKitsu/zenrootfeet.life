import React from 'react';
import MindfulMovement from '../../components/tools/MindfulMovement';
import FaqSection from '../../components/ui/FaqSection';
import JsonLd from '../../components/seo/JsonLd';
import { FaqItem } from '../../types';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const faqs: FaqItem[] = [
  {
    question: "Is this a workout?",
    answer: "Not at all! Think of it as a 'work-in.' The goal isn't physical exertion, but gentle awareness. It's about noticing how your body feels during the movement, not about pushing your limits."
  },
  {
    question: "How long should I do each prompt for?",
    answer: "A minute or two is a great place to start. Some prompts might feel good for longer. The duration is less important than the quality of your attention while you're doing it."
  },
  {
    question: "Do I need special equipment or a lot of space?",
    answer: "Nope! I designed these prompts to be simple and accessible. Most can be done right at your desk, in your kitchen, or in a small corner of a room. The only equipment you need is your own body."
  }
];

const MindfulMovementToolPage: React.FC = () => {
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
      <Meta title="Mindful Movement Prompts to Reconnect With Your Body | ZenRootFeet.life" description="Can't sit still to meditate? Get simple prompts for mindful movement that help you reconnect with your body, release restlessness, and find presence." />
      <JsonLd schema={faqSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <BackButton to="/zen-meditation" text="Back to Zen Tools" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">Mindful Movement Prompts 🚶‍♀️</h1>
              <p className="text-xl text-stone-600 !mt-2">Connect with your body, one small movement at a time.</p>
            </header>
            
            <section className="flex justify-center not-prose">
              <div className="w-full max-w-md">
                 <MindfulMovement />
              </div>
            </section>
            
            <section className="mt-12">
              <h2 className="text-center">How It Works & Who It's For</h2>
              <p>Meditation doesn't have to be perfectly still. In fact, sometimes the best way to get out of our heads is to get into our bodies. Zen practice often includes walking meditation (kinhin) for this very reason. Mindful movement is about bringing a curious, non-judgmental awareness to simple physical actions.</p>
              <p>This tool is for you if:</p>
              <ul>
                <li>You feel restless or fidgety when trying to sit still.</li>
                <li>You spend a lot of time sitting and want a quick way to break up your day.</li>
                <li>You want to feel more connected and 'at home' in your own body.</li>
              </ul>
              <p>Click the button for a simple prompt. There's no need to perform it perfectly. Just move, breathe, and notice. That's the entire practice.</p>
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

export default MindfulMovementToolPage;