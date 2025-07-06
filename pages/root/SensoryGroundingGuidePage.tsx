import React from 'react';
import JsonLd from '../../components/seo/JsonLd';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const SensoryGroundingGuidePage: React.FC = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "A Guide to Sensory Grounding Techniques",
    "author": {
      "@type": "Person",
      "name": "ZenRootFeet"
    },
    "datePublished": "2023-10-28",
    "description": "Learn how to use your five senses—touch, sight, sound, smell, and taste—to anchor yourself in the present moment and calm anxiety."
  };

  return (
    <>
      <Meta title="Sensory Grounding Guide: Using Senses to Calm Anxiety | ZenRootFeet.life" description="Feeling overwhelmed? This guide teaches you practical sensory grounding techniques. Use touch, sight, sound, and smell to anchor yourself and quickly calm anxiety." />
      <JsonLd schema={articleSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <BackButton to="/root-grounding" text="Back to Grounding Techniques" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header>
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">A Guide to Sensory Grounding 👂</h1>
              <p className="text-xl text-stone-600 !mt-2">Using your senses as an anchor to the present moment.</p>
            </header>
            
            <p>When my mind feels like a stormy sea, my senses are the lighthouse. Sensory grounding is the practice of intentionally shifting your focus to the information your senses are giving you *right now*. It's a powerful way to get out of your head and into your body. The 5-4-3-2-1 technique is a great, structured way to do this, but you can also focus on just one sense at a time.</p>
            
            <h2>🖐️ Touch</h2>
            <p>Touch is one of the most immediate ways to ground yourself. Try one of these:</p>
            <ul>
                <li><strong>Hold an ice cube:</strong> The intense cold is a jolt to the system that's hard to ignore. It can quickly cut through mental fog or panic.</li>
                <li><strong>Feel a texture:</strong> Find something with a distinct texture—a soft blanket, a rough brick wall, a smooth stone. Really focus on how it feels under your fingertips.</li>
                <li><strong>Notice your feet on the floor:</strong> Press your feet firmly down. Feel the solid ground beneath you. Wiggle your toes. This reminds you that you are physically supported.</li>
                <li><strong>Run your hands under water:</strong> Pay attention to the temperature and the sensation of the water flowing over your skin.</li>
            </ul>

            <h2>👁️ Sight</h2>
            <p>Your eyes can be a powerful tool for anchoring your attention.</p>
            <ul>
                <li><strong>Focus on one object:</strong> Pick a single object in your vicinity—a pen, a leaf, a coffee mug. Try to notice everything about it: its exact colors, shapes, textures, and how the light hits it.</li>
                <li><strong>Play the color game:</strong> Look around and silently name everything you can see that is blue. Then switch to red. Then green.</li>
                <li><strong>Watch movement:</strong> If you're near a window, watch the clouds drift by, or the leaves rustling in the wind. Don't analyze, just observe.</li>
            </ul>

            <h2>👃 Smell & 👅 Taste</h2>
            <p>Smell and taste are strongly linked to memory and can be very powerful for grounding.</p>
            <ul>
                <li><strong>Inhale a strong scent:</strong> Keep something with a strong, pleasant scent nearby. A small bottle of essential oil, a bag of coffee beans, a piece of citrus peel. Take a deep, intentional sniff.</li>
                <li><strong>Savor one bite or sip:</strong> Take a small piece of food (a raisin, a piece of chocolate) or a sip of a drink (tea, lemon water). Experience it fully. Notice the flavor, the texture, the temperature, from start to finish. A sour candy can be especially effective.</li>
            </ul>
            <p>The key to all of these is to approach them with curiosity, not judgment. You're simply gathering data from the world around you, reminding your nervous system that you are here, and you are safe.</p>

          </article>
        </div>
      </main>
    </>
  );
};

export default SensoryGroundingGuidePage;