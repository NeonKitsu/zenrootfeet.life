import React from 'react';
import JsonLd from '../../components/seo/JsonLd';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const FindingStillnessAlaskaPage: React.FC = () => {
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Finding Stillness in the Untamed: My Barefoot Adventures and What They Mean for You",
    "author": {
      "@type": "Person",
      "name": "ZenRootFeet"
    },
    "datePublished": "2023-10-30",
    "description": "How a journey to the wild can help you find the quiet place within yourself.",
    "articleBody": "My stories about Alaska—going barefoot, unplugging—might sound extreme. You might be thinking, 'That's nice for you, but I'm not going to Alaska anytime soon.' But here's the secret: you don't have to. The Alaskan wilderness was my classroom, but the lesson it taught is universal. The lesson is about finding stillness. When I stood barefoot on the cold ground, the sheer intensity of the sensation forced my chattering mind to go quiet. When I unplugged my phone, the absence of external noise forced me to listen to the quiet within. The wild, untamed landscape was a mirror for the wild, untamed landscape of my own mind. By learning to be still and present in one, I learned how to be still and present in the other. You can find this stillness anywhere. You can find it by taking your shoes off in your own backyard. You can find it by turning off your phone for an hour. You can find it by closing your eyes and just listening to your own breath. You don't need to travel to the wilderness to find stillness. You just need to be willing to create a little bit of untamed space in your own life."
  };

  return (
    <>
      <Meta title={`${blogPostingSchema.headline} | ZenRootFeet Blog`} description="You don't need to go to Alaska to find peace. Learn how the lessons from an untamed wilderness can help you find stillness right where you are." />
      <JsonLd schema={blogPostingSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <BackButton to="/blog" text="Back to Blog" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header>
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">Finding Stillness in the Untamed: My Adventures & What They Mean for You</h1>
              <p className="text-stone-500 text-sm">Published on October 30, 2023</p>
            </header>
            
            <p>My stories about Alaska—going barefoot on cold ground, unplugging for a whole day—might sound a little extreme. You might be thinking, 'That's nice for you, but I have a job and a family. I'm not going to Alaska anytime soon.'</p>
            <p>But here's the secret: you don't have to.</p>
            <p>The Alaskan wilderness was my classroom, but the lesson it taught is universal. The lesson is about finding stillness. The untamed landscape was a powerful mirror for the untamed landscape of my own mind.</p>
            <p>When I stood barefoot on the ground, the sheer intensity of the cold sensation forced my chattering, anxious thoughts to go quiet. When I unplugged my phone, the absence of external noise forced me to confront my own internal noise. By learning to be still and present in the external wild, I learned how to be still and present in the internal one.</p>
            <p>This is a practice you can do anywhere.</p>
            <ul>
                <li>You can find that stillness by taking your shoes off in your own backyard and feeling the grass.</li>
                <li>You can find it by turning off your phone for just one hour and sitting with the quiet.</li>
                <li>You can find it by closing your eyes, and for one minute, just listening to the sound of your own breath.</li>
            </ul>
            <p>You don't need to travel to the untamed wilderness to find stillness. You just need to be brave enough to create a little patch of untamed, quiet space in your own life.</p>
          </article>
        </div>
      </main>
    </>
  );
};

export default FindingStillnessAlaskaPage;