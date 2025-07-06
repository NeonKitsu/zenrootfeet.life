import React from 'react';
import { Link } from 'react-router-dom';
import JsonLd from '../components/seo/JsonLd';
import Meta from '../components/seo/Meta';

const HomePage: React.FC = () => {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ZenRootFeet.life",
    "url": "https://zenrootfeet.life/",
    "description": "Interactive tools and educational content focused on Zen meditation, grounding techniques, and holistic foot care."
  };
  
  return (
    <>
      <Meta title="ZenRootFeet.life | Find Balance from the Ground Up" description="Reconnect with yourself and the earth. Explore simple, powerful tools for Zen meditation, grounding techniques, and holistic foot care. Start your journey here." />
      <JsonLd schema={websiteSchema} />
      <header className="bg-stone-100 text-center py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-stone-800 leading-tight">
            Find your balance, from the ground up.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-stone-600">
            Hey, I'm glad you're here. This little corner of the internet is my passion project, a place to share simple, powerful ways to reconnect with yourself and the earth. Let's explore together. 🌿
          </p>
        </div>
      </header>
      <main className="py-16">
        <div className="container mx-auto px-4">
          <section className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-stone-200">
              <h2 className="text-5xl mb-4">🧘</h2>
              <h3 className="text-2xl font-bold text-stone-800 mb-2">Zen</h3>
              <p className="text-stone-600 mb-4">Quiet the noise and find your center with timeless meditation practices and simple tools.</p>
              <Link to="/zen-meditation" className="font-semibold text-amber-800 hover:text-amber-700">Explore Zen &rarr;</Link>
            </div>
             <div className="bg-white p-8 rounded-lg shadow-lg border border-stone-200">
              <h2 className="text-5xl mb-4">🌳</h2>
              <h3 className="text-2xl font-bold text-stone-800 mb-2">Root</h3>
              <p className="text-stone-600 mb-4">Reconnect with the earth's energy through grounding techniques for calm and stability.</p>
              <Link to="/root-grounding" className="font-semibold text-amber-800 hover:text-amber-700">Explore Root &rarr;</Link>
            </div>
             <div className="bg-white p-8 rounded-lg shadow-lg border border-stone-200">
              <h2 className="text-5xl mb-4">👣</h2>
              <h3 className="text-2xl font-bold text-stone-800 mb-2">Feet</h3>
              <p className="text-stone-600 mb-4">Your foundation matters. Discover holistic care for happy, healthy feet.</p>
              <Link to="/holistic-foot-care" className="font-semibold text-amber-800 hover:text-amber-700">Explore Feet &rarr;</Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default HomePage;