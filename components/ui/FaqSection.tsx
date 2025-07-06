
import React, { useState } from 'react';
import { FaqItem } from '../../types';

interface FaqSectionProps {
  faqs: FaqItem[];
}

const FaqItemComponent: React.FC<{ item: FaqItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stone-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <h4 className="text-lg font-semibold text-stone-700">{item.question}</h4>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="mt-3 text-stone-600 prose">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqSection: React.FC<FaqSectionProps> = ({ faqs }) => {
  return (
    <section className="mt-12">
      <h3 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h3>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <FaqItemComponent key={index} item={faq} />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;