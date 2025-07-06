
import React from 'react';
import JsonLd from '../../components/seo/JsonLd';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const FootSoaksPage: React.FC = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "A Guide to Soothing Foot Soaks & Self-Care Rituals",
    "author": {
      "@type": "Person",
      "name": "ZenRootFeet"
    },
    "datePublished": "2023-10-28",
    "description": "Learn how to create comforting DIY foot soaks and scrubs to soothe tired feet, with simple recipes and important safety tips."
  };

  return (
    <>
      <Meta title="Soothing DIY Foot Soak Recipes & Rituals | ZenRootFeet.life" description="Discover the best DIY foot soak recipes for ultimate relaxation. Learn how to make soothing Epsom salt soaks and exfoliating scrubs to pamper your tired feet." />
      <JsonLd schema={articleSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <BackButton to="/holistic-foot-care" text="Back to Holistic Foot Care" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header>
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">Soothing Foot Soaks & Rituals 🛀</h1>
              <p className="text-xl text-stone-600 !mt-2">Simple recipes to show your feet some love.</p>
            </header>
            
            <p>There are few things more comforting than a warm foot soak after a long day. It feels like a full-body sigh of relief. Creating a foot soak is a simple, beautiful ritual of self-care. Here are a few of my favorite simple recipes and ideas.</p>
            
            <h2>Classic Epsom Salt Soak</h2>
            <p>Epsom salt (magnesium sulfate) is famed for its ability to soothe sore muscles and reduce swelling. It's my go-to after a long hike or a day spent on my feet.</p>
            <ul>
                <li><strong>Recipe:</strong> Add 1/2 cup of Epsom salt to a basin of warm water. Stir to dissolve.</li>
                <li><strong>Ritual:</strong> Soak your feet for 15-20 minutes. Close your eyes, listen to some calming music, and just relax.</li>
            </ul>

            <h2>DIY Exfoliating Foot Scrub</h2>
            <p>Slough off dry skin and leave your feet feeling soft and smooth with this incredibly simple scrub.</p>
             <ul>
                <li><strong>Recipe:</strong> Mix 1/2 cup of coarse sea salt or sugar with 1/4 cup of coconut or olive oil.</li>
                <li><strong>Ritual:</strong> After soaking, gently massage the scrub all over your feet, focusing on rough areas like heels. Rinse thoroughly and pat dry. Your feet will feel brand new.</li>
            </ul>

            <h2>Essential Oil Infusions (With Caution!)</h2>
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 my-6" role="alert">
                <p className="font-bold">Important Safety Note!</p>
                <p>Essential oils are potent. <strong>Never</strong> add them directly to water, as they won't dissolve and can burn your skin. Always dilute them in a carrier substance first, like Epsom salt or a tablespoon of carrier oil (coconut, jojoba, etc.) before adding to your soak.</p>
            </div>
            <ul>
                <li><strong>For Relaxation:</strong> Mix 5-7 drops of Lavender oil with your Epsom salts before adding to the water.</li>
                <li><strong>For Invigoration:</strong> Mix 5-7 drops of Peppermint oil with salts for a cooling, energizing soak (great for tired, hot feet).</li>
            </ul>

            <h2>When to Use Heat vs. Cold</h2>
            <p><strong>Use a warm soak</strong> for general relaxation, soothing tired muscles, and softening skin. <strong>Use a cool or cold soak</strong> to reduce swelling and inflammation, especially after an injury or a very long, hot day.</p>
            <p>Enjoy these simple rituals. They are a wonderful way to thank your feet for all the hard work they do.</p>
            
          </article>
        </div>
      </main>
    </>
  );
};

export default FootSoaksPage;
