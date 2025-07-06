import React from 'react';
import PillarCard from '../../components/ui/PillarCard';
import { BLOG_POSTS } from '../../constants';
import JsonLd from '../../components/seo/JsonLd';
import Meta from '../../components/seo/Meta';

const BlogIndexPage: React.FC = () => {
    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "The ZenRootFeet Blog",
        "description": "Stories, insights, and personal experiences on grounding, meditation, and connecting with the world around us.",
        "url": "https://zenrootfeet.life/blog"
    };

  return (
    <>
      <Meta title="The ZenRootFeet Blog | Stories on Grounding & Mindfulness" description="Read our latest blog posts. Personal stories and insights on meditation, grounding, connecting with nature, and living a more present life." />
      <JsonLd schema={blogSchema} />
      <header className="bg-stone-100 py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold text-stone-800">The Blog ✍️</h1>
          <p className="mt-4 text-lg text-stone-600">
            Just some stories and thoughts from my own journey of trying to live a more grounded, present life. No experts here, just honest experiences. Hope you find something that resonates.
          </p>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <section>
            <h2 className="text-3xl font-bold text-center mb-8">Latest Posts</h2>
            <div className="grid md:grid-cols-1 gap-8">
              {BLOG_POSTS.map(card => (
                <PillarCard key={card.slug} {...card} />
              ))}
            </div>
            <p className="text-center mt-12 text-stone-500">More stories coming soon...</p>
          </section>
        </div>
      </main>
    </>
  );
};

export default BlogIndexPage;