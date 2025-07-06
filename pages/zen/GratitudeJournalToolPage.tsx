import React from 'react';
import GratitudeJournal from '../../components/tools/GratitudeJournal';
import FaqSection from '../../components/ui/FaqSection';
import JsonLd from '../../components/seo/JsonLd';
import { FaqItem } from '../../types';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const faqs: FaqItem[] = [
  {
    question: "What if I can't think of anything to write?",
    answer: "Start small! It doesn't have to be profound. 'A warm cup of coffee.' 'The sun on my face.' 'My comfy bed.' Acknowledging small joys is a powerful practice. Use the prompt generator if you get stuck!"
  },
  {
    question: "Is my data saved or stored anywhere?",
    answer: "Your entries are saved directly in your web browser's 'local storage.' They are not sent to any server and are completely private to you and your device. If you clear your browser data, your entries will be deleted."
  },
  {
    question: "How often should I do this?",
    answer: "A daily practice can have a wonderful compounding effect on your outlook. But there are no rules. Use it whenever you need a mood boost or a shift in perspective. Any amount of practice is better than none."
  }
];

const GratitudeJournalToolPage: React.FC = () => {
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
      <Meta title="Simple Private Gratitude Journal with Prompts | ZenRootFeet.life" description="Shift your mindset towards positivity with our free, private gratitude journal. Get daily prompts to focus on the good. 100% private - your data never leaves your device." />
      <JsonLd schema={faqSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <BackButton to="/zen-meditation" text="Back to Zen Tools" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">A Simple Gratitude Journal 🙏</h1>
              <p className="text-xl text-stone-600 !mt-2">A private space to focus on the good.</p>
            </header>
            
            <section className="flex justify-center not-prose">
              <div className="w-full max-w-md">
                 <GratitudeJournal />
              </div>
            </section>
            
            <section className="mt-12">
              <h2 className="text-center">How It Works & Who It's For</h2>
              <p>It's easy to get caught up in what's wrong with the world or our lives. A gratitude practice is a simple but powerful antidote. By intentionally shifting our focus to what we're thankful for, we can actively rewire our brains to notice more of the good that's already around us. It's not about ignoring the bad; it's about balancing the scales.</p>
              <p>This tool is for you if:</p>
              <ul>
                <li>You want to cultivate a more positive and optimistic mindset.</li>
                <li>You're looking for a simple, quick daily practice to improve your mental well-being.</li>
                <li>You need a tool to help you find perspective on difficult days.</li>
              </ul>
              <p>Use the prompt or write whatever comes to mind. Your entries are saved in your browser, for your eyes only. I hope it brings a little more light to your day.</p>
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

export default GratitudeJournalToolPage;