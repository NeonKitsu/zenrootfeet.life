import React from 'react';
import JsonLd from '../components/seo/JsonLd';
import Meta from '../components/seo/Meta';

const AboutPage: React.FC = () => {
    const aboutPageSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About ZenRootFeet.life",
        "url": "https://zenrootfeet.life/about"
    };

  return (
    <>
      <Meta title="About ZenRootFeet.life | Our Mission & Story" description="Learn the story behind ZenRootFeet.life. Discover our mission to provide simple, ad-free tools for Zen meditation, grounding, and holistic self-care." />
      <JsonLd schema={aboutPageSchema} />
      <header className="bg-stone-100 py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold text-stone-800">So, what's this all about?</h1>
        </div>
      </header>
      
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-stone lg:prose-lg max-w-none">
            <h2>The short story.</h2>
            <p>
              Hi there. I'm the person behind this little project. For years, I felt completely disconnected. I was living in my head, constantly stressed, and my body was starting to send me some pretty clear signals that things weren't right. I had persistent anxiety, weird aches and pains, and a general feeling of being... unmoored.
            </p>
            <p>
              My journey back to myself started with three simple, separate ideas that eventually clicked together:
            </p>
            <ul>
              <li><strong>Zen:</strong> I started exploring meditation, not to 'fix' my anxiety, but just to learn how to sit with it. To my surprise, this created space in my mind.</li>
              <li><strong>Root:</strong> I stumbled upon the concept of grounding, both literally (walking barefoot) and figuratively (mental exercises). This anchored me in the present when my mind wanted to spiral away.</li>
              <li><strong>Feet:</strong> A nagging foot injury forced me to learn about holistic foot care, and I realized my body's foundation was something I had completely ignored. </li>
            </ul>
            <p>
              ZenRootFeet.life is my way of sharing the simple, practical tools and ideas that helped me. It's not about achieving some perfect state of enlightenment or health. It's about the ongoing practice of coming back to yourself and connecting with the world around you.
            </p>
            <h2>My Goal</h2>
            <p>
              My goal is simple: to provide a calm, ad-free space with useful tools and honest information. I'm not a guru or a doctor. I'm just someone who's found a little more peace by paying attention to my mind (Zen), my connection to the earth (Root), and my body's foundation (Feet). I hope you find something useful here, too.
            </p>
            <h2>The All-Important Disclaimer</h2>
            <p>
              I have to say this loud and clear: I am not a medical professional. The content on this website is based on my personal experience and research, and it's for informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. If you have a health concern, please, please talk to a qualified doctor or healthcare provider. Your health is precious, so treat it with professional care.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;