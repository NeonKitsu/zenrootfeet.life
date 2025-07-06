import React from 'react';
import JsonLd from '../../components/seo/JsonLd';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const BeyondTheMapAlaskaPage: React.FC = () => {
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Beyond the Map: What the Alaskan Wilderness Taught Me About Being Present",
    "author": {
      "@type": "Person",
      "name": "ZenRootFeet"
    },
    "datePublished": "2023-10-30",
    "description": "It's not about the destination, but the transformation. A story of being truly present.",
    "articleBody": "Before I went to Alaska, I had a map. Not just a physical map, but a mental one. I had a checklist of things to see: Denali, a glacier, maybe a moose. My trip was a series of destinations, points on a map to be reached and documented. But the Alaskan wilderness doesn't care about your map. It operates on a different timescale, with a different set of priorities. One day, a dense fog rolled in, completely obscuring the famous mountain view I had driven hours to see. My initial reaction was frustration. My 'map' was ruined. But with nothing to see, I was forced to simply 'be'. I sat on a rock in the fog and started to notice the world that was right in front of me. The way the mist clung to my jacket. The amplified sound of my own breathing in the muffled air. The earthy smell of the wet tundra. The destination had vanished, but the experience had arrived. Alaska taught me that the most profound journeys are the ones that take you off your mental map. The real treasure isn't checking off a list of sights; it's the ability to be fully present wherever you are, even if it's sitting on a rock in the middle of a cloud."
  };

  return (
    <>
      <Meta title={`${blogPostingSchema.headline} | ZenRootFeet Blog`} description="My plans in Alaska were ruined by fog, and it was the best thing that happened. A story about letting go of the map and finding true presence." />
      <JsonLd schema={blogPostingSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <BackButton to="/blog" text="Back to Blog" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header>
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">Beyond the Map: What the Alaskan Wilderness Taught Me About Being Present</h1>
              <p className="text-stone-500 text-sm">Published on October 30, 2023</p>
            </header>
            
            <p>Before I went to Alaska, I had a map. Not just a physical map, but a mental one. I had a checklist of things to see: Denali, a calving glacier, maybe a moose if I was lucky. My trip was a series of destinations, points on a map to be reached and documented.</p>
            <p>But the Alaskan wilderness doesn't care about your map. It operates on a different timescale, with a different set of priorities.</p>
            <p>One day, a dense fog rolled in, completely obscuring the famous, epic mountain view I had driven hours to see. My initial reaction was a hot surge of frustration. My plan was ruined. My 'map' was useless.</p>
            <p>But with nothing to see 'out there,' I was forced to simply *be* right where I was. I sat on a rock in the thick, grey fog and started to notice the world that was within arm's reach. I noticed the way the mist collected in tiny, perfect droplets on the sleeve of my jacket. I noticed the amplified sound of my own breathing in the muffled air. I noticed the rich, earthy smell of the wet tundra. </p>
            <p>The destination had vanished, but the experience had finally arrived.</p>
            <p>Alaska taught me that the most profound journeys are the ones that take you off your mental map. The real treasure isn't checking off a list of sights. It's the ability to be fully present wherever you find yourself, even if it's just sitting on a rock in the middle of a cloud.</p>
          </article>
        </div>
      </main>
    </>
  );
};

export default BeyondTheMapAlaskaPage;