import React from 'react';
import JsonLd from '../components/seo/JsonLd';
import Meta from '../components/seo/Meta';

const ContactPage: React.FC = () => {
   const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact ZenRootFeet",
    "description": "Get in touch with us with your questions or feedback.",
    "url": "https://zenrootfeet.life/contact"
  };

  return (
    <>
      <Meta title="Contact Us | Share Your Story with ZenRootFeet.life" description="Have a question, feedback, or a story to share? We'd love to hear from you. Get in touch with the team at ZenRootFeet.life here." />
      <JsonLd schema={contactPageSchema} />
      <header className="bg-stone-100 py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold text-stone-800">Get In Touch 👋</h1>
          <p className="mt-4 text-lg text-stone-600">
            Have a question, a suggestion, or just want to share your own story? I'd genuinely love to hear from you. This project is a conversation, and your voice is welcome.
          </p>
        </div>
      </header>
      
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-xl text-center">
            <p className="text-stone-700 mb-8">
                To keep things simple and secure, I'm using a Google Form to handle messages. Clicking the button below will open it in a new tab. Thanks for taking the time to reach out!
            </p>
            <a
                href="https://forms.gle/MFBcbhAw4GWQwVVN9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-amber-800 text-white font-bold text-lg rounded-lg shadow-md hover:bg-amber-700 transition-colors duration-300"
            >
                Open Contact Form
            </a>
        </div>
      </main>
    </>
  );
};

export default ContactPage;