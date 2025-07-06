import React from 'react';
import JsonLd from '../../components/seo/JsonLd';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const DailyDoseOfGreenPage: React.FC = () => {
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Your Daily Dose of Green: Cultivating Connection to the Natural World",
    "author": {
      "@type": "Person",
      "name": "ZenRootFeet"
    },
    "datePublished": "2023-10-30",
    "description": "Actionable tips to weave the natural world into your everyday modern life.",
    "articleBody": "Just like we need a daily dose of vitamins, I believe our souls need a daily dose of green. It's not about grand gestures, but small, consistent acts of connection that weave nature back into the fabric of our modern lives. Here are some simple 'prescriptions' I try to follow. 1. Morning Sunlight: Before looking at a screen, I try to spend two minutes by a window, just letting natural light hit my face. It helps set my body's internal clock and feels like a gentle 'good morning' from the world. 2. Desk Plant: I have a small, hardy plant on my desk. Just looking at its green leaves for a moment during a stressful workday is like a mini-meditation. 3. 'Sky Break': Instead of a coffee break, I take a 'sky break.' I step outside, or look out a window, and just watch the sky for a few minutes. Are there clouds? What color is it? It's a simple way to get perspective. 4. Eat Something Natural: Consciously eating a piece of fruit and thinking about where it came from—the tree, the sun, the rain—is a small act of gratitude and connection. These aren't time-consuming. They are small sips of nature, but when taken daily, they nourish the spirit."
  };

  return (
    <>
      <Meta title={`${blogPostingSchema.headline} | ZenRootFeet Blog`} description="Feeling nature-deprived? Get your daily dose of green with these simple, actionable tips to weave the natural world into your busy modern life." />
      <JsonLd schema={blogPostingSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <BackButton to="/blog" text="Back to Blog" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header>
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">Your Daily Dose of Green: Cultivating Connection</h1>
              <p className="text-stone-500 text-sm">Published on October 30, 2023</p>
            </header>
            
            <p>Just like we need our daily dose of vitamins, I'm convinced our souls need a daily dose of green. It's not about grand gestures, but small, consistent acts of connection that weave nature back into the fabric of our busy, modern lives. Here are a few simple 'prescriptions' I try to follow.</p>
            
            <h3>1. The Morning Sunlight Gaze</h3>
            <p>Before looking at any screen, I spend two minutes by a window. I don't check the weather or my email. I just let the natural morning light hit my face and eyes. It helps set my body's internal clock and feels like a gentle 'good morning' from the world.</p>

            <h3>2. The Desk Plant Companion</h3>
            <p>I keep a small, hardy succulent on my desk. During a stressful workday, just looking at its green leaves for thirty seconds is like a visual deep breath. It's a quiet, living reminder of a world beyond my to-do list.</p>

            <h3>3. The 'Sky Break'</h3>
            <p>Instead of another coffee break, I take a 'sky break.' I step outside, or just look out a window, and watch the sky for two minutes. Are there clouds? What shapes are they? What is the exact shade of blue today? It's a simple way to gain instant perspective.</p>

            <h3>4. The Mindful Bite</h3>
            <p>When I eat a piece of fruit, like an apple, I try to take the first bite mindfully. I think about where it came from—the tree, the sun, the rain, the earth. It turns a simple snack into a small act of connection and gratitude.</p>

            <p>These are not time-consuming chores. They are small sips of nature. But when taken daily, they have a powerful, cumulative effect that nourishes the spirit.</p>
          </article>
        </div>
      </main>
    </>
  );
};

export default DailyDoseOfGreenPage;