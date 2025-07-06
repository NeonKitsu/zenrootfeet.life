
import React from 'react';
import FootStretchesExercise from '../../components/tools/FootStretchesExercise';
import FaqSection from '../../components/ui/FaqSection';
import JsonLd from '../../components/seo/JsonLd';
import { FaqItem } from '../../types';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const faqs: FaqItem[] = [
  {
    question: "Should these stretches hurt?",
    answer: "No, never. You should feel a gentle stretch or tension, but never sharp pain. If you feel pain, ease up or stop the stretch immediately. Listen to your body."
  },
  {
    question: "How often should I do these exercises?",
    answer: "Doing them daily can be incredibly beneficial, especially if you sit for long periods or wear restrictive shoes. I like to do a few while I'm watching TV or during a break from work. Consistency is more important than intensity."
  },
  {
    question: "What are the benefits of these stretches?",
    answer: "These simple movements can help improve flexibility in your feet and ankles, reduce stiffness, increase circulation, and can even help prevent common issues like plantar fasciitis and bunions by strengthening the small muscles in your feet."
  }
];

const FootStretchesPage: React.FC = () => {
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
      <Meta title="Interactive Foot Stretches for Flexibility & Relief | ZenRootFeet.life" description="Got tired, achy feet? Follow our free interactive guide through a series of simple stretches to relieve pain, improve flexibility, and prevent common foot problems." />
      <JsonLd schema={faqSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <BackButton to="/holistic-foot-care" text="Back to Holistic Foot Care" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">Interactive Foot Stretches 🧘‍♀️</h1>
              <p className="text-xl text-stone-600 !mt-2">A guided routine to awaken and care for your feet.</p>
            </header>
            
            <section className="flex justify-center not-prose">
              <div className="w-full max-w-md">
                 <FootStretchesExercise />
              </div>
            </section>
            
            <section className="mt-12">
              <h2 className="text-center">How It Works & Who It's For</h2>
              <p>Our feet have dozens of muscles, ligaments, and bones, yet we often neglect them until they complain. This simple, guided routine is designed to bring gentle movement and awareness back to your body's foundation. Think of it as yoga for your toes and ankles!</p>
              <p>This tool is for you if you:</p>
              <ul>
                <li>Experience stiffness in your feet or ankles.</li>
                <li>Want to improve your balance and mobility.</li>
                <li>Spend a lot of time in shoes and want to counteract the effects.</li>
              </ul>
              <p>Follow the prompts for a short but effective routine. It's a small act of kindness for the parts of you that carry you through the world every day.</p>
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

export default FootStretchesPage;
