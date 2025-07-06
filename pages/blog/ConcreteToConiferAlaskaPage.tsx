import React from 'react';
import JsonLd from '../../components/seo/JsonLd';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const ConcreteToConiferAlaskaPage: React.FC = () => {
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "From Concrete to Conifer: My Journey to Deeper Grounding in Alaska",
    "author": {
      "@type": "Person",
      "name": "ZenRootFeet"
    },
    "datePublished": "2023-10-30",
    "description": "An evocative story of leaving the city behind to find my roots in the forest.",
    "articleBody": "I'm a city person, born and raised. My natural habitat is concrete. My idea of 'grounding' was feeling the familiar rumble of the subway through the soles of my shoes. The forest felt like a foreign country. But a trip to the vast conifer forests of Alaska was a complete system reset. Standing in a grove of ancient spruce trees, the first thing I noticed was the quiet. A deep, heavy silence that absorbed sound. The second was the smell—a rich, resinous scent of pine and damp earth that felt like breathing in life itself. I put my hand on the bark of a tree that was alive long before my city was ever built. In that moment, the frantic energy of the concrete jungle drained out of me, replaced by the slow, patient energy of the forest. I felt my own roots, the ones I had forgotten, sinking down past the pavement and into the real earth. The journey from concrete to conifer wasn't just a physical one; it was a journey from my head to my feet, from thinking to feeling. It taught me that no matter how disconnected we become, the patient wisdom of the forest is always there, waiting for us to come home."
  };

  return (
    <>
      <Meta title={`${blogPostingSchema.headline} | ZenRootFeet Blog`} description="From a life lived on concrete to a moment of deep connection in a conifer forest. A story about finding your footing and coming home to yourself." />
      <JsonLd schema={blogPostingSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <BackButton to="/blog" text="Back to Blog" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header>
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">From Concrete to Conifer: My Journey to Deeper Grounding</h1>
              <p className="text-stone-500 text-sm">Published on October 30, 2023</p>
            </header>
            
            <p>I'm a city person, born and raised. My natural habitat is concrete. My idea of 'grounding' for most of my life was feeling the familiar, reassuring rumble of the subway through the soles of my shoes. The forest, to me, was a foreign country, a place you visited on a field trip.</p>
            <p>But a trip to the vast conifer forests of Alaska was a complete system reset. It was an immersion into a world that operated on different rules.</p>
            <p>Standing in a grove of ancient Sitka spruce trees, the first thing I noticed was the quiet. A deep, heavy silence that seemed to absorb sound, that muffled my own thoughts. The second thing was the smell—a rich, sharp, resinous scent of pine and damp earth that felt like breathing in life itself.</p>
            <p>I put my hand on the rough bark of a tree that was alive long before my city was ever a blueprint. In that moment, I could feel the frantic, buzzing energy of the concrete jungle draining out of me through my feet. It was replaced by the slow, patient, powerful energy of the forest.</p>
            <p>I felt my own roots, the ones I had forgotten I had, sinking down past the pavement, past the pipes and wires, and into the real, living earth. The journey from concrete to conifer wasn't just a physical one. It was a journey from my head to my feet, from thinking to feeling, from rushing to being.</p>
            <p>It taught me that no matter how disconnected we become, the patient wisdom of the forest is always there, waiting for us to come home.</p>
          </article>
        </div>
      </main>
    </>
  );
};

export default ConcreteToConiferAlaskaPage;