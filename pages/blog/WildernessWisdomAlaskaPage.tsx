import React from 'react';
import JsonLd from '../../components/seo/JsonLd';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const WildernessWisdomAlaskaPage: React.FC = () => {
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Wilderness Wisdom: Lessons from My Barefoot Journey in Alaska",
    "author": {
      "@type": "Person",
      "name": "ZenRootFeet"
    },
    "datePublished": "2023-10-30",
    "description": "The Alaskan wild taught me more than any book could. Here are the lessons.",
    "articleBody": "I went to Alaska expecting to be impressed by the scale of it all—the giant glaciers, the vast tundra. And I was. But the real lessons came in smaller moments, particularly when I took my shoes off and stood on the wild earth. Here's the wisdom the wilderness shared. 1. Discomfort is a Doorway: The initial shock of the cold ground on my feet wasn't pleasant. But pushing through that initial discomfort opened up a new level of sensory experience. The wilderness taught me that true experience often lies just on the other side of what's comfortable. 2. The Power of Small Things: In the shadow of a giant mountain, I found myself fascinated by the intricate patterns of moss at my feet. The wild reminds you that grandeur and importance exist at every scale, from the monumental to the microscopic. 3. True Silence Has a Sound: Away from all human noise, I discovered that silence isn't empty. It's filled with the sound of the wind, the creak of a distant tree, the beat of your own heart. The wilderness teaches you to listen to the fullness of silence. These weren't lessons I sought out, but lessons that found me when I was quiet enough to receive them."
  };

  return (
    <>
      <Meta title={`${blogPostingSchema.headline} | ZenRootFeet Blog`} description="What can you learn from standing barefoot in the Alaskan wilderness? Discover three powerful lessons about discomfort, perspective, and true silence." />
      <JsonLd schema={blogPostingSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <BackButton to="/blog" text="Back to Blog" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header>
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">Wilderness Wisdom: Lessons from My Barefoot Journey in Alaska</h1>
              <p className="text-stone-500 text-sm">Published on October 30, 2023</p>
            </header>
            
            <p>I went to Alaska expecting to be impressed by the sheer scale of it all—the giant glaciers, the towering mountains, the vast tundra. And I was. But the real lessons, the wisdom that stuck with me, came in much smaller moments. They came when I took my shoes off and let the wild earth speak to me directly.</p>

            <h3>1. Discomfort is a Doorway</h3>
            <p>The initial shock of the cold ground on my bare feet wasn't pleasant. My first instinct was to pull back. But the wilderness taught me that true experience often lies just on the other side of what's comfortable. By breathing through that initial discomfort, I opened up a new level of sensory experience—the texture of the moss, the firmness of the soil. It was a powerful reminder not to shy away from uncomfortable feelings.</p>
            
            <h3>2. The Power of Small Things</h3>
            <p>In the shadow of a mountain that was millions of years old, I found myself mesmerized by the intricate, fractal patterns of a patch of lichen at my feet. The wild reminds you that grandeur and importance exist at every scale, from the monumental to the microscopic. You don't have to climb the mountain to witness a miracle.</p>

            <h3>3. True Silence Has a Sound</h3>
            <p>Away from all human noise—cars, electricity, chatter—I discovered that silence isn't empty. It's filled with the sound of the wind moving through different kinds of trees, the creak of a distant glacier, the beat of your own heart in your ears. The wilderness teaches you to stop talking and start listening to the fullness of silence.</p>
            
            <p>These weren't lessons I read in a brochure or sought out with a checklist. They were lessons that found me when I was finally quiet enough to receive them.</p>
          </article>
        </div>
      </main>
    </>
  );
};

export default WildernessWisdomAlaskaPage;