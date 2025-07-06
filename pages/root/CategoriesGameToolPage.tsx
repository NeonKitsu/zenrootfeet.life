import React from 'react';
import CategoriesGame from '../../components/tools/CategoriesGame';
import FaqSection from '../../components/ui/FaqSection';
import JsonLd from '../../components/seo/JsonLd';
import { FaqItem } from '../../types';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const faqs: FaqItem[] = [
  {
    question: "How does naming things help with anxiety?",
    answer: "When we're anxious, our emotional brain (the amygdala) is in overdrive. This simple game forces you to use your logical, thinking brain (the prefrontal cortex). It's hard for your brain to panic and list types of cheese at the same time. It effectively distracts and redirects your mental resources."
  },
  {
    question: "What if I get stuck and can't think of many things?",
    answer: "That's completely fine! The goal isn't to be an expert on the category. The goal is simply to engage your thinking brain. Even naming one or two things is a success. Just the act of trying is the technique."
  },
  {
    question: "Are there other similar mental games I can play?",
    answer: "Yes! You can count backward from 100 by 7s, which is surprisingly difficult and very absorbing. Or you can play the 'alphabet game'—pick a category like 'animals' and name one for each letter (Aardvark, Bear, Cat, etc.)."
  }
];

const CategoriesGameToolPage: React.FC = () => {
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
      <Meta title="The Categories Game: A Mental Trick for Anxiety | ZenRootFeet.life" description="Caught in an anxiety spiral? Use this simple 'Categories Game' mental trick to instantly shift your focus, engage your logical brain, and find calm." />
      <JsonLd schema={faqSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <BackButton to="/root-grounding" text="Back to Grounding Techniques" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">The Categories Game 🧠</h1>
              <p className="text-xl text-stone-600 !mt-2">A quick mental trick to pull you out of an anxiety spiral.</p>
            </header>
            
            <section className="flex justify-center not-prose">
              <div className="w-full max-w-md">
                 <CategoriesGame />
              </div>
            </section>
            
            <section className="mt-12">
              <h2 className="text-center">How It Works & Who It's For</h2>
              <p>This is my secret weapon for when my mind starts spinning out of control. It's a mental grounding technique that works by forcing your brain to switch from emotional, abstract worrying to concrete, logical thinking. You simply can't stay lost in a 'what if' spiral when you're busy trying to think of different kinds of car brands.</p>
              <p>This tool is for you if:</p>
              <ul>
                <li>You get caught in repetitive, anxious thought loops.</li>
                <li>You need a discreet way to ground yourself in a public or stressful situation.</li>
                <li>You want a quick, non-physical tool to regain a sense of mental control.</li>
              </ul>
              <p>Hit the button for a category and challenge yourself to name as many items as you can. It's a simple, surprisingly effective way to tell your anxious mind, "Not right now, I'm busy."</p>
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

export default CategoriesGameToolPage;