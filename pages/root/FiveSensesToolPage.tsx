import React from 'react';
import FiveSensesExercise from '../../components/tools/FiveSensesExercise';
import FaqSection from '../../components/ui/FaqSection';
import JsonLd from '../../components/seo/JsonLd';
import { FaqItem } from '../../types';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const faqs: FaqItem[] = [
  {
    question: "What if I can't find 5 things to see?",
    answer: "No problem at all! The numbers aren't a strict rule. If you can only find 3 things, that's perfect. The point is the act of looking and noticing, not hitting a specific count."
  },
  {
    question: "My mind keeps wandering back to my worries. Am I doing it wrong?",
    answer: "You're doing it exactly right! The mind's job is to think and wander. Your job is to gently guide it back, over and over, without judgment. Every time you bring your focus back to your senses, that's a win."
  },
  {
    question: "How is this different from meditation?",
    answer: "It's a great question! I see this as a form of 'in-the-moment' meditation. While some meditation is about observing the mind over a set time, this technique is a quick, powerful tool to anchor you when you're feeling actively overwhelmed or spiraling."
  }
];

const FiveSensesToolPage: React.FC = () => {
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
      <Meta title="5-4-3-2-1 Grounding Technique Tool for Anxiety | ZenRootFeet.life" description="Quickly stop an anxiety spiral with our interactive 5-4-3-2-1 grounding exercise. Use your five senses to anchor yourself in the present moment." />
      <JsonLd schema={faqSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <BackButton to="/root-grounding" text="Back to Grounding Techniques" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">The 5-4-3-2-1 Grounding Tool 🖐️</h1>
              <p className="text-xl text-stone-600 !mt-2">A simple path back to the present moment, using your senses.</p>
            </header>
            
            <section className="flex justify-center not-prose">
              <div className="w-full max-w-md">
                 <FiveSensesExercise />
              </div>
            </section>
            
            <section className="mt-12">
              <h2 className="text-center">How It Works & Who It's For</h2>
              <p>This technique has been my lifeline on days when anxiety feels like a tidal wave. It works because it's impossible to be lost in anxious thoughts about the past or future when you are fully engaged with what your senses are experiencing *right now*. It short-circuits the anxiety spiral by redirecting your brain's attention.</p>
              <p>This tool is for you when you feel:</p>
              <ul>
                <li>Anxiety starting to build.</li>
                <li>Caught in a flashback or a distressing memory.</li>
                <li>Disconnected from your body or your surroundings (dissociation).</li>
                <li>Generally overwhelmed and need a quick reset.</li>
              </ul>
              <p>It's a discreet, powerful anchor you can use anywhere, anytime. I hope it serves you as well as it has served me.</p>
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

export default FiveSensesToolPage;