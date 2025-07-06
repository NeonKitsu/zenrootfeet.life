import React from 'react';
import JsonLd from '../../components/seo/JsonLd';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const BeyondTheMatPage: React.FC = () => {
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Beyond the Mat: Weaving Mindfulness into Your Everyday Life",
    "author": {
      "@type": "Person",
      "name": "ZenRootFeet"
    },
    "datePublished": "2023-10-30",
    "description": "Meditation isn't just for the cushion. Take your practice into the real world.",
    "articleBody": "I used to treat meditation like exercise. I'd 'do' my 10 minutes on the cushion, check it off my list, and then go about my day on complete autopilot. My 'mat time' was separate from my 'real life'. The real transformation began when I realized that the goal of meditation isn't to be good at meditating; it's to be more mindful in your life. The mat is just the training ground. 'Beyond the mat' practice means weaving mindfulness into the mundane moments of your day. It's about noticing the warmth of the water and the smell of the soap while you wash the dishes. It's about truly tasting the first sip of your morning coffee. It's about feeling your feet on the floor as you walk to your car. It's about putting your phone down and giving someone your full, undivided attention for two minutes. These moments are the real practice. The cushion is where you build the muscle of awareness. The rest of your life is where you get to use it."
  };

  return (
    <>
      <Meta title={`${blogPostingSchema.headline} | ZenRootFeet Blog`} description="Is your meditation practice stuck on the cushion? Learn how to take mindfulness 'beyond the mat' and weave it into the simple moments of your everyday life." />
      <JsonLd schema={blogPostingSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <BackButton to="/blog" text="Back to Blog" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header>
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">Beyond the Mat: Weaving Mindfulness into Your Everyday Life</h1>
              <p className="text-stone-500 text-sm">Published on October 30, 2023</p>
            </header>
            
            <p>I used to treat meditation like going to the gym. I'd 'do' my 10 minutes on the cushion in the morning, check it off my to-do list, and then go about my day on complete, stressed-out autopilot. My 'mat time' was a separate, isolated event from my 'real life'.</p>
            <p>The real transformation began when I had a crucial realization: the goal of meditation isn't to get good at meditating. The goal is to get better at living. The cushion is just the training ground.</p>
            <p>'Beyond the mat' practice is about taking the awareness you cultivate in stillness and weaving it into the mundane, messy, beautiful moments of your day. It's where the real work—and the real peace—is found.</p>
            <ul>
                <li><strong>Mindful Dishwashing:</strong> Instead of rushing through it, notice the warmth of the water on your hands, the smell of the soap, the feeling of a clean plate.</li>
                <li><strong>The First Sip:</strong> Before diving into your day, take the first sip of your morning coffee or tea with your full attention. Notice the aroma, the heat, the taste.</li>
                <li><strong>The Doorway Pause:</strong> Every time you walk through a doorway, use it as a trigger to take one conscious breath and notice where you are.</li>
            </ul>
            <p>These tiny moments are the real practice. They are the threads you use to weave mindfulness into the fabric of your life. The mat is where you build the muscle of awareness. The rest of your day is where you get to use it.</p>
          </article>
        </div>
      </main>
    </>
  );
};

export default BeyondTheMatPage;