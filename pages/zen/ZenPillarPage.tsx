import React from 'react';
import PillarCard from '../../components/ui/PillarCard';
import { ZEN_CARDS } from '../../constants';
import JsonLd from '../../components/seo/JsonLd';
import Meta from '../../components/seo/Meta';

const ZenPillarPage: React.FC = () => {
   const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Zen Meditation Tools & Resources",
    "description": "Explore Zen meditation and use our free tools to help with your practice.",
    "url": "https://zenrootfeet.life/zen-meditation"
  };
  return (
    <>
      <Meta title="Zen Meditation Tools & Practices | ZenRootFeet.life" description="Quiet the noise and find your inner calm. Explore free Zen meditation tools like timers, breathing guides, and visualizations to support your practice." />
      <JsonLd schema={collectionPageSchema} />
      <header className="bg-stone-100 py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold text-stone-800">Zen: The Art of Being Present 🧘‍♂️</h1>
          <p className="mt-4 text-lg text-stone-600">
            Ever feel like your mind is a web browser with a thousand tabs open? I've been there. Zen, or Chán Buddhism, isn't about forcefully closing those tabs. It's about learning to just... be. It's an invitation to find the quiet, stable center that's already within you, buried under all the noise.
          </p>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <section>
            <h2 className="text-3xl font-bold text-center mb-8">Simple Tools for Your Practice</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {ZEN_CARDS.map(card => (
                <PillarCard key={card.slug} {...card} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default ZenPillarPage;