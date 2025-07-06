import React from 'react';
import JsonLd from '../../components/seo/JsonLd';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const ArtOfUnpluggingAlaskaPage: React.FC = () => {
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "The Art of Unplugging: My Extreme Grounding Experience in the Alaskan Wild",
    "author": {
      "@type": "Person",
      "name": "ZenRootFeet"
    },
    "datePublished": "2023-10-30",
    "description": "An intentional journey into the silence of the wild, and what it gave back.",
    "articleBody": "Going to Alaska was one thing. Going to Alaska and intentionally leaving my phone turned off in my bag for an entire day was another. I called it my 'extreme grounding' experiment. It wasn't just about being in nature; it was about being completely, technologically naked in it. The first hour was hell. I felt anxious, disconnected, and bored. My brain, so used to constant stimulation, didn't know what to do with the quiet. But then, a shift. I started noticing things I would have missed. The way a raven's feathers shimmered with iridescent colors. The precise, geometric patterns of ice crystals on a frozen puddle. The subtle change in the wind's direction. My senses came alive because they were the only input I had. I wasn't documenting the journey; I was living it. By the end of the day, I felt a deep, unshakable calm. Unplugging so completely wasn't about depriving myself; it was about giving myself the gift of undiluted reality. It was a reminder that the best connection doesn't require a signal."
  };

  return (
    <>
      <Meta title={`${blogPostingSchema.headline} | ZenRootFeet Blog`} description="What happens when you go completely offline in the Alaskan wild for a day? Read about this extreme grounding experiment and the power of undiluted reality." />
      <JsonLd schema={blogPostingSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <BackButton to="/blog" text="Back to Blog" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header>
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">The Art of Unplugging: My Extreme Grounding Experience in the Alaskan Wild</h1>
              <p className="text-stone-500 text-sm">Published on October 30, 2023</p>
            </header>
            
            <p>Going to Alaska was one thing. Going to Alaska and intentionally leaving my phone switched off, buried at the bottom of my bag for an entire day, was another thing entirely. I called it my 'extreme grounding' experiment. This wasn't just about being in nature; it was about being completely, technologically naked in it.</p>
            <p>The first hour was a special kind of hell. I felt anxious, antsy, and profoundly bored. My brain, so accustomed to constant stimulation, didn't know what to do with the quiet. What was happening in the world? What if someone needed me? What was I missing? The urge to 'just check' was a physical pull.</p>
            <p>But then, a shift. A slow, quiet turning.</p>
            <p>Without a camera to point, I started truly *seeing*. I noticed the way a raven's feathers shimmered with a surprising iridescence of blue and purple. I saw the precise, geometric patterns of ice crystals forming on the edge of a frozen puddle. Without a podcast in my ears, I started truly *hearing*. I could distinguish the low whistle of the wind through pine needles from the higher rustle of birch leaves.</p>
            <p>My senses came alive because they were the only input I had. I wasn't documenting the journey; I was finally living it. By the end of the day, I felt a deep, unshakable calm that I hadn't felt in years. The world hadn't ended. No one had urgently needed me. All I had missed was the noise.</p>
            <p>Unplugging so completely wasn't about depriving myself. It was about giving myself the rare gift of undiluted reality. It was a powerful reminder that the best connection doesn't require a signal.</p>
          </article>
        </div>
      </main>
    </>
  );
};

export default ArtOfUnpluggingAlaskaPage;