import React from 'react';
import JsonLd from '../../components/seo/JsonLd';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const BeyondTheBackdoorPage: React.FC = () => {
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Beyond the Backdoor: Simple Ways to Rediscover Your Wild Self",
    "author": {
      "@type": "Person",
      "name": "ZenRootFeet"
    },
    "datePublished": "2023-10-30",
    "description": "You don't need a grand expedition. The wilderness in you is waiting right outside your door.",
    "articleBody": "I used to think that 'connecting with nature' required a plane ticket, a backpack, and a lot of bug spray. It felt like something you had to plan for, an event you had to schedule. My daily life, with its concrete sidewalks and deadlines, felt like the opposite of 'wild'. But I was wrong. The 'wild self' isn't something you have to go find; it's something you rediscover. And the journey starts right beyond your backdoor. It starts with noticing the single weed pushing its way through the pavement, a testament to resilience. It's about taking a different path on your daily walk and seeing your neighborhood with new eyes. It's about stepping outside during a gentle rain, closing your eyes, and just listening. The wild isn't just in the national parks; it's in the untamed parts of our own environment and, more importantly, within ourselves. The trick is to start looking for it in the small, overlooked details of your everyday world."
  };

  return (
    <>
      <Meta title={`${blogPostingSchema.headline} | ZenRootFeet Blog`} description="Rediscover your wild self without leaving your neighborhood. Learn simple, powerful ways to find nature and connect with it right outside your backdoor." />
      <JsonLd schema={blogPostingSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <BackButton to="/blog" text="Back to Blog" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header>
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">Beyond the Backdoor: Simple Ways to Rediscover Your Wild Self</h1>
              <p className="text-stone-500 text-sm">Published on October 30, 2023</p>
            </header>
            
            <p>I used to believe that 'connecting with nature' required a plane ticket, an expensive backpack, and a lot of bug spray. It was an event, something to be scheduled and conquered. My daily life, with its concrete sidewalks and email notifications, felt like the very opposite of 'wild'.</p>
            <p>But I was wrong. I was waiting for a grand invitation from the wilderness, when all along it was leaving me little notes right on my doorstep.</p>
            <p>The 'wild self'—that intuitive, grounded, curious part of us—isn't something you have to go out and 'find'. It's something you remember, something you rediscover. And that journey of rediscovery can start the moment you step outside your own door.</p>
            <ul>
                <li><strong>Notice the rebels:</strong> Look for the single weed pushing its way through a crack in the pavement. That's nature. It's a tiny, powerful lesson in resilience.</li>
                <li><strong>Follow an ant:</strong> Seriously. Spend one minute just watching an ant on its journey. You'll be amazed at the drama and determination in its tiny world.</li>
                <li><strong>Listen to the rain:</strong> Next time it rains, don't just run inside. Stand under an overhang for a moment. Close your eyes. Listen to the rhythm of the drops. Smell the change in the air.</li>
            </ul>
            <p>The wild isn't just in the bear-filled forests and soaring mountains. It's in the tenacious spirit of life that exists everywhere. It's in the untamed corners of your local park, in the flight of a city pigeon, and in the quiet, instinctual parts of you. You don't need to go on an expedition to find it. You just need to open your backdoor and pay attention.</p>
          </article>
        </div>
      </main>
    </>
  );
};

export default BeyondTheBackdoorPage;