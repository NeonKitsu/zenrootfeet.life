import React from 'react';
import JsonLd from '../../components/seo/JsonLd';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const SubtlePowerOfPresencePage: React.FC = () => {
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "The Subtle Power of Presence: How Small Shifts Create Big Peace",
    "author": {
      "@type": "Person",
      "name": "ZenRootFeet"
    },
    "datePublished": "2023-10-30",
    "description": "It's the little moments that matter. Discover the huge impact of small acts of presence.",
    "articleBody": "We often think that finding peace requires a big, dramatic change—a new job, a long vacation, a total life overhaul. We're waiting for the earthquake of transformation. But in my experience, real, lasting peace doesn't arrive like an earthquake. It seeps in through the small cracks we create in our busy lives. It's found in the subtle power of small shifts in presence. It's the decision to listen to a friend without simultaneously planning your response. It's the choice to eat your lunch without scrolling through your phone, just for five minutes. It's the act of pausing at a red light and noticing the color of the sky instead of feeling impatient. These moments seem insignificant. They don't produce anything. They can't be measured or added to a resume. But they are everything. Each tiny act of presence is a stitch that mends our frayed connection to ourselves and the world. Peace isn't a destination you arrive at. It's a state you cultivate, one small, present moment at a time."
  };

  return (
    <>
      <Meta title={`${blogPostingSchema.headline} | ZenRootFeet Blog`} description="Peace isn't found in grand gestures. Discover the subtle power of presence and how small shifts in awareness can create profound calm in your life." />
      <JsonLd schema={blogPostingSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <BackButton to="/blog" text="Back to Blog" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header>
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">The Subtle Power of Presence: How Small Shifts Create Big Peace</h1>
              <p className="text-stone-500 text-sm">Published on October 30, 2023</p>
            </header>
            
            <p>We often think that finding peace requires a big, dramatic change—a new job, a long vacation, a total life overhaul. We're waiting for the earthquake of transformation, the lightning strike of enlightenment.</p>
            <p>But in my experience, real, lasting peace doesn't arrive like an earthquake. It seeps in quietly through the small cracks we create in our armor of busyness. It is found in the subtle, almost invisible power of small shifts in presence.</p>
            <p>It is found in moments like these:</p>
            <ul>
                <li>The decision to truly listen to a friend's story, without simultaneously planning your response in your head.</li>
                <li>The choice to eat your lunch for just five minutes without scrolling through your phone, simply tasting your food.</li>
                <li>The act of pausing at a red light and noticing the color of the sky instead of sighing with impatience.</li>
                <li>The feeling of your feet on the ground as you walk from your car to your front door.</li>
            </ul>
            <p>These moments seem insignificant. They don't produce anything. They can't be measured or added to a resume. But they are everything. Each tiny, conscious act of presence is a stitch that mends our frayed connection to ourselves and to the present moment. Peace isn't a destination you finally arrive at. It's a state you cultivate, one small, present moment at a time.</p>
          </article>
        </div>
      </main>
    </>
  );
};

export default SubtlePowerOfPresencePage;