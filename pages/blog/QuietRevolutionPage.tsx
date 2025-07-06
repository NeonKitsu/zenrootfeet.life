import React from 'react';
import JsonLd from '../../components/seo/JsonLd';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const QuietRevolutionPage: React.FC = () => {
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "The Quiet Revolution: Embracing Stillness in a Noisy World",
    "author": {
      "@type": "Person",
      "name": "ZenRootFeet"
    },
    "datePublished": "2023-10-30",
    "description": "Choosing calm is a radical act. Join the quiet revolution.",
    "articleBody": "Productivity. Hustle. Grind. Our culture worships at the altar of 'doing.' Stillness is often seen as laziness, and quiet is seen as empty space that needs to be filled—with a podcast, with music, with notifications. But I've come to believe that choosing stillness is a revolutionary act. It's a quiet protest against the relentless demand to be always 'on.' The quiet revolution doesn't have a manifesto or a leader. Its only practice is to intentionally create moments of stillness in your day. It's the five minutes you spend meditating instead of scrolling. It's the conscious choice to go for a walk without your headphones. It's the moment you pause before reacting to a stressful email and just take a single, deep breath. Each small act of choosing stillness over noise, calm over chaos, is a vote for a different way of being. It's a way of saying, 'My inner peace is more important than my productivity.' It won't be televised, and it won't trend on social media. It's a revolution that happens in the quiet, sacred space of your own mind."
  };

  return (
    <>
      <Meta title={`${blogPostingSchema.headline} | ZenRootFeet Blog`} description="In a world that celebrates 'the hustle,' choosing stillness is a revolutionary act. Discover how small moments of quiet can spark your own personal revolution." />
      <JsonLd schema={blogPostingSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <BackButton to="/blog" text="Back to Blog" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header>
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">The Quiet Revolution: Embracing Stillness in a Noisy World</h1>
              <p className="text-stone-500 text-sm">Published on October 30, 2023</p>
            </header>
            
            <p>Productivity. Hustle. Grind. Our culture worships at the altar of 'doing.' Stillness is often seen as laziness or a waste of time. Quiet is seen as empty space that needs to be filled—with a podcast, with music, with the endless scroll.</p>
            <p>But I've come to believe that in today's world, choosing stillness is a revolutionary act. It's a quiet protest against the relentless demand to be always 'on,' always producing, always available.</p>
            <p>The Quiet Revolution doesn't have a manifesto or a leader. Its only practice is to intentionally carve out moments of stillness in your day. It is fought in small, powerful skirmishes:</p>
            <ul>
                <li>It's the five minutes you spend meditating instead of scrolling through your phone first thing in the morning.</li>
                <li>It's the conscious choice to go for a walk and leave your headphones at home.</li>
                <li>It's the moment you pause before reacting to a stressful email and just take a single, deep, grounding breath.</li>
            </ul>
            <p>Each small act of choosing stillness over noise, calm over chaos, is a vote for a different way of being. It's a powerful way of saying, 'My inner peace is more valuable than my productivity.' This revolution won't be televised, and it won't trend on social media. It's a revolution that happens in the quiet, sacred space of your own mind.</p>
          </article>
        </div>
      </main>
    </>
  );
};

export default QuietRevolutionPage;