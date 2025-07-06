import React from 'react';
import Breathing478Exercise from '../../components/tools/Breathing478Exercise';
import FaqSection from '../../components/ui/FaqSection';
import JsonLd from '../../components/seo/JsonLd';
import { FaqItem } from '../../types';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const faqs: FaqItem[] = [
  {
    question: "Why this specific 4-7-8 ratio?",
    answer: "This ratio is thought to be particularly effective for calming the nervous system. The long exhale helps stimulate the vagus nerve, which activates the 'rest and digest' system, promoting relaxation. I find it more potent than simple deep breathing when I'm really stressed."
  },
  {
    question: "It feels hard to hold my breath for 7 seconds. What should I do?",
    answer: "Don't strain yourself! The ratio is more important than the exact seconds. You can try a shorter version like 2-3.5-4 seconds and work your way up. The key is to keep the exhale twice as long as the inhale. Comfort is key."
  },
   {
    question: "How will I feel afterwards?",
    answer: "Many people, myself included, feel a sense of calm and sometimes even a little lightheaded at first (in a good way!). It's a great technique to use before bed or during a particularly stressful moment to bring your body back to a state of balance."
  }
];

const Breathing478ToolPage: React.FC = () => {
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
      <Meta title="4-7-8 Breathing Exercise for Relaxation & Sleep | ZenRootFeet.life" description="Anxious or can't sleep? Try the 4-7-8 breathing technique. Our free guided tool helps you master this powerful exercise to calm your nervous system in minutes." />
      <JsonLd schema={faqSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <BackButton to="/root-grounding" text="Back to Grounding Techniques" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">The 4-7-8 Breathing Tool 😮‍💨</h1>
              <p className="text-xl text-stone-600 !mt-2">A powerful technique to calm your nervous system.</p>
            </header>
            
            <section className="flex justify-center not-prose">
              <div className="w-full max-w-md">
                 <Breathing478Exercise />
              </div>
            </section>
            
            <section className="mt-12">
              <h2 className="text-center">How It Works & Who It's For</h2>
              <p>The 4-7-8 breathing technique, popularized by Dr. Andrew Weil, is a simple yet profound practice. I think of it as a natural tranquilizer for the nervous system. The pattern of a 4-second inhale, a 7-second hold, and an 8-second exhale has a powerful effect on our physiology, helping to combat stress and induce relaxation.</p>
              <p>This tool is for you if you want to:</p>
              <ul>
                <li>Quickly reduce feelings of anxiety or panic.</li>
                <li>Calm a racing mind before sleep.</li>
                <li>Manage cravings or emotional responses.</li>
              </ul>
              <p>It's a very active form of breathwork. Just a few rounds can create a noticeable shift in your state of being. I hope you find it as helpful as I have.</p>
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

export default Breathing478ToolPage;