import React from 'react';
import JsonLd from '../../components/seo/JsonLd';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const TheUnpluggedPathPage: React.FC = () => {
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "The Unplugged Path: Finding Peace in Nature's Embrace (No Wi-Fi Required)",
    "author": {
      "@type": "Person",
      "name": "ZenRootFeet"
    },
    "datePublished": "2023-10-30",
    "description": "No Wi-Fi required. Discover the profound calm that comes from true disconnection.",
    "articleBody": "My phone is my tool, my connection, my library... and my cage. I realized one day that even when I was 'in nature,' I wasn't really there. I was photographing it, geotagging it, looking up what kind of bird I just saw. I was filtering the experience through a screen. The Unplugged Path is a conscious choice. It's deciding to leave the phone in your pocket, or even at home. It's walking into the woods or a park with the sole intention of being present. The first ten minutes are weird. You'll feel a phantom buzz in your pocket. You'll have an urge to 'check' something. But then, something magical happens. Your senses wake up. You notice the crunch of leaves under your feet, the intricate patterns of bark on a tree, the way the light changes. You start to notice the world instead of the notifications. This is where the peace is. It's not in the place itself, but in the quality of attention you bring to it. And that requires only one thing: that you choose to unplug."
  };

  return (
    <>
      <Meta title={`${blogPostingSchema.headline} | ZenRootFeet Blog`} description="Even in nature, is your phone still in your hand? Learn how to truly unplug and find the profound peace that only comes from genuine disconnection." />
      <JsonLd schema={blogPostingSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <BackButton to="/blog" text="Back to Blog" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header>
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">The Unplugged Path: Finding Peace in Nature's Embrace (No Wi-Fi Required)</h1>
              <p className="text-stone-500 text-sm">Published on October 30, 2023</p>
            </header>
            
            <p>My phone is my tool, my connection, my library... and my cage. I had this startling realization one day while walking through a beautiful park. I wasn't actually *in* the park. I was photographing it, trying to get the perfect shot for Instagram. I was using an app to identify a flower. I was checking a text message. I was filtering the entire experience through a 6-inch screen.</p>
            <p>The Unplugged Path isn't a physical trail; it's a conscious choice. It's the decision to leave the digital world behind, even for just thirty minutes, to fully enter the physical one.</p>
            <p>The challenge: Next time you go for a walk, put your phone on airplane mode, or better yet, leave it at home. </p>
            <p>The first ten minutes will feel strange. You'll have an urge to 'check' something. You might feel a phantom buzz in your pocket. This is the withdrawal. Breathe through it. It will pass.</p>
            <p>Then, something magical happens. Your senses, which have been dulled by constant digital input, start to wake up. You'll notice the crispness of the air. You'll hear the specific crunch of leaves under your feet. You'll see the subtle variations of green in the grass. You start to notice the world instead of the notifications.</p>
            <p>This is where the real peace lies. It's not in the location itself, but in the quality of attention you bring to it. And that requires only one thing: that you choose, just for a little while, to walk the unplugged path.</p>
          </article>
        </div>
      </main>
    </>
  );
};

export default TheUnpluggedPathPage;