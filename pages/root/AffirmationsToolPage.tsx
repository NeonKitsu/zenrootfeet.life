import React from 'react';
import AffirmationGenerator from '../../components/tools/AffirmationGenerator';
import FaqSection from '../../components/ui/FaqSection';
import JsonLd from '../../components/seo/JsonLd';
import { FaqItem } from '../../types';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const faqs: FaqItem[] = [
  {
    question: "Does this actually work? It feels a little silly.",
    answer: "I totally get that! It can feel awkward at first. But think of it this way: we often have a constant stream of negative self-talk running in our heads. Affirmations are a way to consciously interrupt that pattern and introduce a different, kinder voice. It's a practice, and the more you do it, the more natural it feels."
  },
  {
    question: "Should I say the affirmation out loud?",
    answer: "You can if you're comfortable! Saying it aloud can make it feel more powerful and real. But saying it silently to yourself is just as valid and effective, especially if you're in a public place."
  },
  {
    question: "What if I don't believe the affirmation?",
    answer: "You don't have to believe it 100% for it to work. Just the act of repeating a calming phrase can help soothe your nervous system. You can also rephrase it slightly to feel more true for you, for example, changing 'I am calm' to 'I am learning to be calm'."
  }
];

const AffirmationsToolPage: React.FC = () => {
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
      <Meta title="Soothing Affirmations Generator for Self-Kindness | ZenRootFeet.life" description="Combat negative self-talk with our soothing affirmation generator. Get a dose of kindness and a grounding reminder to find your strength in tough moments." />
      <JsonLd schema={faqSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <BackButton to="/root-grounding" text="Back to Grounding Techniques" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">Soothing Affirmations ❤️‍🩹</h1>
              <p className="text-xl text-stone-600 !mt-2">Kind words to ground you in your own strength.</p>
            </header>
            
            <section className="flex justify-center not-prose">
              <div className="w-full max-w-md">
                 <AffirmationGenerator />
              </div>
            </section>
            
            <section className="mt-12">
              <h2 className="text-center">How It Works & Who It's For</h2>
              <p>Soothing grounding is about self-kindness. It's about offering yourself the same comfort and reassurance you would offer a good friend. Affirmations are a powerful way to do this. They are simple, positive statements that can help challenge and overcome self-sabotaging and negative thoughts. When you're feeling overwhelmed, a simple reminder that you are safe can make all the difference.</p>
              <p>This tool is for you when you're feeling:</p>
              <ul>
                <li>Overwhelmed by intense emotions.</li>
                <li>Caught in a cycle of negative self-talk.</li>
                <li>In need of a quick dose of comfort and reassurance.</li>
              </ul>
              <p>Click the button to get a simple reminder. Take a deep breath, read it slowly, and let the words sink in. You deserve kindness, especially from yourself.</p>
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

export default AffirmationsToolPage;