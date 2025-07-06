
import React from 'react';
import JsonLd from '../../components/seo/JsonLd';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const ShockwaveTherapyPage: React.FC = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What is Shockwave Therapy? (For Your Info!)",
    "author": {
      "@type": "Person",
      "name": "ZenRootFeet"
    },
    "datePublished": "2023-10-29",
    "description": "An educational overview of Extracorporeal Shock Wave Therapy (ESWT), a non-invasive treatment used by professionals for chronic soft tissue conditions like plantar fasciitis."
  };

  return (
    <>
      <Meta title="What is Shockwave Therapy for Chronic Foot Pain? | ZenRootFeet.life" description="Is your plantar fasciitis or Achilles pain not healing? Learn about Shockwave Therapy (ESWT), a non-invasive treatment that can jump-start healing for chronic injuries." />
      <JsonLd schema={articleSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <BackButton to="/holistic-foot-care" text="Back to Holistic Foot Care" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header>
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6" role="alert">
                <p className="font-bold">Heads Up!</p>
                <p>This is for educational purposes ONLY. Shockwave therapy is a medical procedure performed by trained professionals like podiatrists and physical therapists.</p>
              </div>
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">What is Shockwave Therapy? ⚡</h1>
              <p className="text-xl text-stone-600 !mt-2">A high-tech approach to healing chronic foot pain.</p>
            </header>
            
            <p>When my plantar fasciitis just wouldn't quit after months of traditional treatments, my podiatrist suggested Extracorporeal Shock Wave Therapy (ESWT), or shockwave. It sounds intense, but it's a non-invasive treatment that was surprisingly effective for my stubborn case.</p>
            
            <h2>The Gist: What is it?</h2>
            <p>Shockwave therapy uses a device to deliver acoustic pressure waves to the injured area of your foot. It's not an electrical shock! Think of it more like very targeted, powerful sound waves. The therapist applies a gel to your skin and then uses a handheld applicator to deliver the waves to the precise location of your pain.</p>
            
            <h2>How It Works (The Theory)</h2>
            <p>The main idea is to create a "micro-trauma" in the tissue that has been stuck in a chronic, non-healing state. This is thought to re-start your body's natural healing process by:</p>
            <ul>
                <li><strong>Stimulating Blood Flow:</strong> The waves increase blood circulation and the formation of new blood vessels in the area, which is vital for healing.</li>
                <li><strong>Reducing Pain:</strong> The waves can over-stimulate pain receptors, which can have a short-term numbing effect and disrupt the chronic pain cycle.</li>
                <li><strong>Breaking Down Scar Tissue:</strong> It can help to break up calcifications and scar tissue that may be contributing to the problem.</li>
            </ul>

            <h2>How It Felt for Me</h2>
            <p>The session was pretty short, only about 5-10 minutes. As the therapist moved the applicator over the most painful part of my heel, it was definitely uncomfortable—a strong, deep tapping or pulsing sensation. It wasn't unbearable, though, and the therapist adjusted the intensity to my tolerance. My foot was a little sore for a day afterward, but over the course of a few treatments, I noticed a significant, lasting reduction in my morning heel pain.</p>
            
            <p>Shockwave is typically used for chronic conditions that haven't responded to other treatments, like plantar fasciitis or Achilles tendinopathy. It's a cool piece of technology that can be a great option to discuss with your doctor if you're feeling stuck with an injury.</p>

          </article>
        </div>
      </main>
    </>
  );
};

export default ShockwaveTherapyPage;
