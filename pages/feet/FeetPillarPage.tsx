import React from 'react';
import PillarCard from '../../components/ui/PillarCard';
import { FEET_CARDS_HOME, FEET_CARDS_PRO } from '../../constants';
import JsonLd from '../../components/seo/JsonLd';
import Meta from '../../components/seo/Meta';

const FeetPillarPage: React.FC = () => {
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Holistic Foot Care",
    "description": "Learn about holistic and natural approaches to foot health, from daily care to advanced therapies.",
    "url": "https://zenrootfeet.life/holistic-foot-care"
  };

  return (
    <>
      <Meta title="Holistic Foot Care for Health & Well-being | ZenRootFeet.life" description="Your feet are your foundation. Explore holistic foot care tips, DIY remedies, stretches, and educational guides for happy, healthy feet." />
      <JsonLd schema={collectionPageSchema} />
      <header className="bg-stone-100 py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold text-stone-800">Feet: Your Body's Foundation 👣</h1>
          <p className="mt-4 text-lg text-stone-600">
            Let's be honest, we don't think about our feet much... until they hurt. I learned the hard way that happy feet are the foundation of a happy body. Holistic foot care is about looking at the bigger picture—from the shoes you wear to your posture, and treating your feet with the kindness and respect they deserve.
          </p>
        </div>
      </header>
      
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Things You Can Do at Home</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {FEET_CARDS_HOME.map(card => (
                <PillarCard key={card.slug} {...card} />
              ))}
            </div>
          </section>
          
          <section>
            <h2 className="text-3xl font-bold text-center mb-8">Done by the Pros (For Your Info)</h2>
             <p className="text-center text-stone-600 mb-8 max-w-2xl mx-auto">This is purely educational! Please, please, please do not try these yourself. Always consult a licensed professional.</p>
            <div className="grid md:grid-cols-2 gap-8">
              {FEET_CARDS_PRO.map(card => (
                <PillarCard key={card.slug} {...card} />
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
};

export default FeetPillarPage;