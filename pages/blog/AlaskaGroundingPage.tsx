import React from 'react';
import JsonLd from '../../components/seo/JsonLd';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const AlaskaGroundingPage: React.FC = () => {
    const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Grounding in The Last Frontier: My Alaskan Adventure",
    "author": {
      "@type": "Person",
      "name": "ZenRootFeet"
    },
    "datePublished": "2023-10-27",
    "description": "Barefoot in Alaska? You bet. Here's what I learned about true wild connection.",
  };
  return (
    <>
      <Meta title={`${blogPostingSchema.headline} | ZenRootFeet Blog`} description={blogPostingSchema.description} />
      <JsonLd schema={blogPostingSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <BackButton to="/blog" text="Back to Blog" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header>
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">Grounding in The Last Frontier: My Alaskan Adventure 🐻</h1>
              <p className="text-stone-500 text-sm">Published on October 27, 2023</p>
            </header>
            
            <p>"You're going to what?" my friend asked, laughing. "You're going to take your shoes off? In Alaska? Are you insane?"</p>

            <p>Maybe. But I was on a trip to Alaska, and the entire philosophy of this website is about connecting with the earth. How could I go to one of the wildest places on the planet and not truly *feel* it?</p>

            <p>So, on a surprisingly mild afternoon near a glacial river, I did it. I slipped off my hiking boots and socks and stepped onto the mossy ground. </p>

            <p>And it was... electric. </p>
            
            <p>It was cold, yes. A sharp, clear, undeniable cold that shot up my legs and made me gasp. But it wasn't painful. It was... alive. The moss was like a damp, springy carpet. Underneath, the soil felt dense and ancient. I could feel the immense, wild energy of the place seeping into me through the soles of my feet.</p>
            
            <p>I only stood there for about five minutes. My feet were bright pink when I put my socks back on. But for the rest of the day, I felt different. I felt charged, awake, and profoundly calm all at once. I felt like I hadn't just *seen* Alaska, but that a small part of it had seen me back.</p>
            
            <p>It was a good reminder. Grounding isn't always about comfort. Sometimes it's about feeling something real, something intense, something that jolts you out of your head and into the world. Even if it's just for a few crazy, cold, wonderful minutes.</p>

          </article>
        </div>
      </main>
    </>
  );
};

export default AlaskaGroundingPage;