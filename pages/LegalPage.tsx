import React from 'react';
import JsonLd from '../components/seo/JsonLd';
import Meta from '../components/seo/Meta';

const LegalPage: React.FC = () => {
    const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Legal Information, Disclaimers, and Privacy Policy",
    "url": "https://zenrootfeet.life/legal"
  };

  return (
    <>
      <Meta title="Legal, Privacy & Medical Disclaimers | ZenRootFeet.life" description="Read our important legal information, including our terms of service, privacy policy, and the crucial medical disclaimer for all site content." />
      <JsonLd schema={webpageSchema} />
      <header className="bg-stone-100 py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold text-stone-800">The Legal Stuff</h1>
        </div>
      </header>
      
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-stone lg:prose-lg max-w-none">
            <p>Last Updated: October 27, 2023</p>
            
            <h2>1. General Information</h2>
            <p>Welcome to ZenRootFeet.life. This page outlines the terms, policies, and disclaimers governing your use of this website. By accessing and using this site, you accept and agree to be bound by the terms and provisions of this agreement.</p>
            
            <h2>2. Medical Disclaimer</h2>
            <p><strong>The information provided on ZenRootFeet.life is for educational and informational purposes only and is not intended as, nor should it be considered a substitute for, professional medical advice, diagnosis, or treatment.</strong></p>
            <p>Do not use the information on this website for diagnosing or treating any health problem or disease. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.</p>

            <h2>3. Educational Disclaimer</h2>
            <p>The content related to practices such as dry needling, cupping, and shockwave therapy is purely for educational insight into treatments you may discuss with a licensed professional. <strong>Under no circumstances should any user attempt these or similar procedures on themselves or others.</strong> These treatments must be performed by trained and licensed medical professionals.</p>

            <h2>4. Terms of Service</h2>
            <p>Your use of the site is at your sole risk. The website is provided on an "AS IS" and "AS AVAILABLE" basis. We expressly disclaim all warranties of any kind, whether express or implied. We are not liable for any direct, indirect, incidental, or consequential damages resulting from the use of this website.</p>
            
            <h2>5. Privacy Policy</h2>
            <p>We respect your privacy. ZenRootFeet.life does not collect any personally identifiable information about its visitors. The site does not use cookies for tracking and does not require user registration. We use simple, privacy-respecting analytics to see how many people visit the site, but this data is anonymized and aggregated.</p>
            <p>If you choose to contact us via an external link (like the Google Form on our Contact page), your data will be handled by that third-party service according to their privacy policy. We do not store that information on our servers.</p>

            <h2>6. Affiliate Disclaimer</h2>
            <p>This website does not currently use affiliate links. If this changes in the future, this policy will be updated to reflect that, and all affiliate links will be clearly disclosed.</p>

            <h2>7. Changes to This Page</h2>
            <p>We reserve the right to modify these terms at any time. We do so by posting and drawing attention to the updated terms on the site. Your decision to continue to visit and make use of the site after such changes have been made constitutes your formal acceptance of the new terms.</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default LegalPage;