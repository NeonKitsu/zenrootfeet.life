import React from 'react';
import JsonLd from '../../components/seo/JsonLd';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const MindfulMorningsPage: React.FC = () => {
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Mindful Mornings, Peaceful Days: Starting Your Day with Intention",
    "author": {
      "@type": "Person",
      "name": "ZenRootFeet"
    },
    "datePublished": "2023-10-30",
    "description": "How you start your morning can change your whole day. Here's a simple ritual.",
    "articleBody": "For years, my morning routine was a frantic scramble. The alarm would go off, and my first act would be to grab my phone and flood my brain with emails, news, and social media. I was starting my day from a place of reaction and anxiety. A mindful morning ritual changed everything. It doesn't have to be long or complicated. My ritual is just 10 minutes, but it sets the tone for the entire day. 1. No Phone First: This is the hardest and most important rule. The first 10 minutes of the day are for me, not for the world's demands. 2. Hydrate: I drink a glass of water, and as I do, I think of it as waking up my body gently. 3. Sit in Silence: I sit on the edge of my bed for just 5 minutes. I don't try to meditate perfectly. I just sit. I notice the light, listen to the sounds outside, and feel my breath. It's an act of greeting the day on my own terms. 4. Set One Intention: As I get up, I ask myself, 'What is one quality I want to bring to this day?' (e.g., patience, curiosity, kindness). That's it. This simple, quiet start doesn't prevent stress from happening, but it builds a foundation of calm that makes the day's challenges much easier to navigate."
  };

  return (
    <>
      <Meta title={`${blogPostingSchema.headline} | ZenRootFeet Blog`} description="Stop starting your day with stress. Learn a simple, 10-minute mindful morning ritual that can build a foundation of calm for your entire day." />
      <JsonLd schema={blogPostingSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <BackButton to="/blog" text="Back to Blog" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header>
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">Mindful Mornings, Peaceful Days: Starting Your Day with Intention</h1>
              <p className="text-stone-500 text-sm">Published on October 30, 2023</p>
            </header>
            
            <p>For years, my morning routine was a frantic, anxious scramble. The alarm would jolt me awake, and my first act would be to grab my phone and flood my half-asleep brain with emails, bad news, and the curated perfection of social media. I was starting every single day from a place of reaction, stress, and comparison.</p>
            <p>A mindful morning ritual changed everything for me. It doesn't have to be an hour long or involve complicated yoga poses. My ritual is just 10 minutes, but it sets a completely different tone for the rest of the day.</p>
            
            <h3>My 10-Minute Morning Ritual</h3>
            <ol>
              <li><strong>No Phone First (5 mins):</strong> This is the hardest and most important rule. The first five minutes of my day are for me, not for the world's demands. I leave my phone across the room.</li>
              <li><strong>Hydrate Mindfully (1 min):</strong> I drink a glass of water. As I do, I think of it as gently waking up my body from the inside out.</li>
              <li><strong>Sit in Silence (3 mins):</strong> I sit on the edge of my bed or a chair. I don't try to meditate perfectly. I just sit. I notice the light coming in the window, listen to the sounds of the morning, and feel my feet on the floor. It's an act of greeting the day on my own terms.</li>
              <li><strong>Set One Intention (1 min):</strong> Before I stand up to start my day, I ask myself one question: "What is one quality I want to bring to this day?" Sometimes it's 'patience,' other times it's 'curiosity' or 'kindness.' This becomes my compass.</li>
            </ol>
            
            <p>This simple, quiet start doesn't prevent stressful things from happening later. But it builds a foundation of inner calm that makes the day's challenges much easier to navigate, rather than being knocked over by the first wave.</p>
          </article>
        </div>
      </main>
    </>
  );
};

export default MindfulMorningsPage;