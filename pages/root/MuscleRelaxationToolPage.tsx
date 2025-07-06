import React from 'react';
import MuscleRelaxationExercise from '../../components/tools/MuscleRelaxationExercise';
import FaqSection from '../../components/ui/FaqSection';
import JsonLd from '../../components/seo/JsonLd';
import { FaqItem } from '../../types';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const faqs: FaqItem[] = [
  {
    question: "Should I tense my muscles as hard as I can?",
    answer: "You should tense them enough to notice a clear feeling of tightness, but not to the point of pain or cramping. The key is creating a contrast between tension and relaxation."
  },
  {
    question: "What's the point of tensing up if I want to relax?",
    answer: "It's a great question! By intentionally tensing a muscle first, it's much easier to feel what true relaxation in that muscle feels like when you let go. It teaches your body the difference and can lead to a deeper state of physical calm."
  },
  {
    question: "Can I do this in bed to help me sleep?",
    answer: "Absolutely! This is one of my favorite ways to use it. Going through the sequence while lying in bed can be an incredibly effective way to release physical tension and prepare your body for sleep."
  }
];

const MuscleRelaxationToolPage: React.FC = () => {
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
      <Meta title="Guided Progressive Muscle Relaxation (PMR) Tool | ZenRootFeet.life" description="Holding stress in your body? Release it with our guided Progressive Muscle Relaxation (PMR) tool. Systematically tense and relax muscles to achieve deep physical calm." />
      <JsonLd schema={faqSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <BackButton to="/root-grounding" text="Back to Grounding Techniques" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">Progressive Muscle Relaxation 💪</h1>
              <p className="text-xl text-stone-600 !mt-2">A guided exercise to melt tension from your body.</p>
            </header>
            
            <section className="flex justify-center not-prose">
              <div className="w-full max-w-md">
                 <MuscleRelaxationExercise />
              </div>
            </section>
            
            <section className="mt-12">
              <h2 className="text-center">How It Works & Who It's For</h2>
              <p>Progressive Muscle Relaxation (PMR) is a deep relaxation technique based on the simple practice of tensing one muscle group at a time, and then releasing the tension. I was amazed at how much tension I was holding in my shoulders and jaw without even realizing it until I did this exercise.</p>
              <p>This tool is for you if you:</p>
              <ul>
                <li>Carry stress physically in your body (e.g., tight shoulders, clenched jaw).</li>
                <li>Have trouble falling asleep due to physical restlessness.</li>
                <li>Want a very tangible, body-focused relaxation method.</li>
              </ul>
              <p>Follow the prompts to move through your body, and pay close attention to the wonderful feeling of release after each period of tension. It's a powerful way to reconnect with your physical self.</p>
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

export default MuscleRelaxationToolPage;