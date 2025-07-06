import React from 'react';
import JsonLd from '../../components/seo/JsonLd';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const ZenOfBeingPage: React.FC = () => {
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "The Zen of Being: Cultivating Calm in the Chaos",
    "author": {
      "@type": "Person",
      "name": "ZenRootFeet"
    },
    "datePublished": "2023-10-30",
    "description": "Life is chaotic. Let's explore the simple, profound practice of just 'being'.",
    "articleBody": "We are human doings, not human beings. That's what a wise person once told me, and it hit me hard. My entire sense of self-worth was tied to what I did: my job, my accomplishments, my to-do list. The idea of just 'being' felt lazy and unproductive. But Zen practice isn't about doing nothing. It's about fully inhabiting the present moment, whether you are doing something or not. The Zen of Being is found in the space between your thoughts during meditation. It's found in the simple act of feeling the sun on your skin without needing to capture it in a photo. It's found in the acceptance that some days are messy and chaotic, and that's okay. Cultivating this sense of 'being' is about loosening our grip. It's about letting go of the need to control every outcome, to fill every silence, to optimize every moment. It's the radical trust that we are enough, even when we are not 'doing' anything at all. In the midst of life's inevitable chaos, the practice of just being is our anchor and our calmest port."
  };

  return (
    <>
      <Meta title={`${blogPostingSchema.headline} | ZenRootFeet Blog`} description="Are you a 'human doing' instead of a 'human being'? Explore the Zen of Being and discover the profound peace in letting go of the need to always be productive." />
      <JsonLd schema={blogPostingSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <BackButton to="/blog" text="Back to Blog" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header>
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">The Zen of Being: Cultivating Calm in the Chaos</h1>
              <p className="text-stone-500 text-sm">Published on October 30, 2023</p>
            </header>
            
            <p>"We are human doings, not human beings."</p>
            <p>A wise person once said that to me, and it hit me like a ton of bricks. My entire sense of self-worth was tied to what I *did*: my job, my accomplishments, my ever-expanding to-do list. The idea of just 'being' felt terrifyingly lazy and unproductive.</p>
            <p>But Zen practice isn't about 'doing nothing.' It's about fully inhabiting the present moment, whether you are actively doing something or sitting in complete stillness. The Zen of Being is the practice of showing up for your own life.</p>
            <p>It is found in the quiet space between your thoughts during meditation. It's found in the simple act of feeling the warmth of the sun on your skin without feeling the need to capture it in a photo. It's found in the gentle acceptance that some days are messy and chaotic, and that's okay.</p>
            <p>Cultivating this sense of 'being' is about loosening our desperate grip on life. It's about letting go of the need to control every outcome, to fill every silence, to optimize every moment. It is the radical, courageous trust that we are enough, even when we are not 'doing' anything at all. In the midst of life's inevitable chaos, the practice of just being is our anchor and our calmest port.</p>
          </article>
        </div>
      </main>
    </>
  );
};

export default ZenOfBeingPage;