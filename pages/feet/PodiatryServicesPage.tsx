
import React from 'react';
import JsonLd from '../../components/seo/JsonLd';
import BackButton from '../../components/ui/BackButton';
import Meta from '../../components/seo/Meta';

const PodiatryServicesPage: React.FC = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What is Podiatry? An Intro to Professional Foot Care",
    "author": {
      "@type": "Person",
      "name": "ZenRootFeet"
    },
    "datePublished": "2023-10-29",
    "description": "An educational overview of podiatry (chiropody) services, including routine care, diabetic foot care, and biomechanical assessments."
  };

  return (
    <>
      <Meta title="What Does a Podiatrist Do? An Intro to Foot Specialists | ZenRootFeet.life" description="When should you see a foot doctor? Learn what a podiatrist does, from treating ingrown toenails and corns to providing custom orthotics and diabetic foot care." />
      <JsonLd schema={articleSchema} />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <BackButton to="/holistic-foot-care" text="Back to Holistic Foot Care" />
          <article className="prose prose-stone lg:prose-lg max-w-none">
            <header>
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6" role="alert">
                <p className="font-bold">Professional Care</p>
                <p>This information is for educational purposes. A podiatrist (or chiropodist) is a medical specialist. Always consult with one for diagnosis and treatment.</p>
              </div>
              <h1 className="text-4xl font-bold text-stone-800 !mb-2">What Does a Podiatrist Do? 🩺</h1>
              <p className="text-xl text-stone-600 !mt-2">More than just 'foot doctors,' they are the mechanics for your body's foundation.</p>
            </header>
            
            <p>For a long time, I thought you only saw a podiatrist for something dramatic, like surgery. But after talking to one, I realized they are essential partners in keeping you moving comfortably and preventing future problems. They are specialists in the foot, ankle, and related structures of the leg.</p>
            
            <h2>Routine Foot Care</h2>
            <p>This is the bread and butter for many podiatrists. While most of us can manage our own feet, a podiatrist provides crucial care for:</p>
            <ul>
                <li><strong>Complex Nail Care:</strong> Safely trimming thick, fungal, or ingrown toenails that are difficult or risky to manage at home.</li>
                <li><strong>Corns and Calluses:</strong> Expertly removing painful corns and calluses to provide immediate relief and identify the underlying pressure points causing them.</li>
            </ul>

            <h2>Diabetic Foot Care</h2>
            <p>For individuals with diabetes, regular podiatrist visits are not a luxury; they are essential. Diabetes can cause nerve damage (neuropathy) and reduced blood flow to the feet, meaning small cuts or sores can become serious problems without being noticed. A podiatrist performs regular checks and provides preventative care to avoid complications.</p>

            <h2>Biomechanical Assessments & Orthotics</h2>
            <p>This was fascinating to me. A podiatrist can perform an assessment to watch how you walk and stand (your gait and biomechanics). By analyzing your movement, they can identify imbalances that might be causing pain not just in your feet, but in your knees, hips, and back.</p>
            <p>Based on this, they can prescribe <strong>custom orthotics</strong>—specialized shoe inserts designed specifically for your feet to provide support, correct alignment, and absorb shock. These are worlds apart from the one-size-fits-all inserts you find at a pharmacy.</p>
            
            <p>Seeing a podiatrist is a proactive step in your overall health. If you have persistent foot pain, a medical condition like diabetes, or just want to ensure your foundation is as healthy as possible, a consultation can be incredibly valuable.</p>

          </article>
        </div>
      </main>
    </>
  );
};

export default PodiatryServicesPage;
