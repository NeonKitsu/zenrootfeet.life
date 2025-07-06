import React from 'react';
import PillarCard from '../../components/ui/PillarCard';
import { ROOT_CARDS } from '../../constants';
import JsonLd from '../../components/seo/JsonLd';
import Meta from '../../components/seo/Meta';

const RootPillarPage: React.FC = () => {
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Grounding Techniques & Resources",
    "description": "Learn about grounding (earthing) and discover simple techniques to find calm and stability.",
    "url": "https://zenrootfeet.life/root-grounding"
  };

  return (
    <>
      <Meta title="Grounding Techniques for Anxiety & Calm | ZenRootFeet.life" description="Feeling anxious or overwhelmed? Discover simple physical and mental grounding techniques to reconnect with the present moment and find stability." />
      <JsonLd schema={collectionPageSchema} />
      <header className="bg-stone-100 py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold text-stone-800">Root: Get Grounded 🌳</h1>
          <p className="mt-4 text-lg text-stone-600">
            Remember the feeling of walking barefoot on cool grass? That's grounding. It's the simple, powerful idea of physically connecting with the Earth. But it's also a mental practice—techniques to pull your mind out of the 'what if' storm and plant it firmly in the 'right now'. Let's find our footing.
          </p>
        </div>
      </header>
      
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <section className="prose prose-stone lg:prose-lg max-w-none mb-12">
              <h2>What is Grounding, Anyway?</h2>
              <p>It's two things, really, and they're beautifully connected:</p>
              <ol>
                <li><strong>Physical Grounding (Earthing):</strong> This is about direct skin contact with the Earth's surface. Think bare feet on dirt, sand, or grass. The theory is that we absorb the Earth's natural, subtle electrical charge, which might help balance our own systems. Some studies suggest it can reduce inflammation and improve sleep, but honestly, I just do it because it feels good.</li>
                <li><strong>Mental Grounding:</strong> These are life-saving exercises for when you're feeling anxious, overwhelmed, or disconnected. They use your senses to bring your focus back to the present moment, away from distressing thoughts. They are your anchor in an emotional storm.</li>
              </ol>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-center mb-8">Grounding Techniques to Try</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {ROOT_CARDS.map(card => (
                <PillarCard key={card.slug} {...card} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default RootPillarPage;