import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: 'Reservations',
      questions: [
        {
          question: 'How far in advance should I book?',
          answer: 'We recommend booking at least 48 hours in advance, especially for weekend dinners. For special occasions or large groups (6+), we suggest booking 1-2 weeks ahead to ensure availability.',
        },
        {
          question: 'Can I modify or cancel my reservation?',
          answer: 'Yes! You can modify or cancel your reservation up to 24 hours before your booking time. Please call us at +44 (0) 20 7946 0958 or email hello@noirandember.com with your booking reference.',
        },
        {
          question: 'Do you accept walk-ins?',
          answer: 'We do our best to accommodate walk-ins based on availability, but we highly recommend making a reservation to guarantee a table, especially during peak hours (Friday-Sunday evenings).',
        },
      ],
    },
    {
      category: 'Dining Experience',
      questions: [
        {
          question: 'Is there a dress code?',
          answer: 'We maintain a smart casual dress code. While we don\'t require formal attire, we kindly ask guests to avoid sportswear, beachwear, or overly casual clothing. Think elegant and comfortable!',
        },
        {
          question: 'How long is a typical dining experience?',
          answer: 'A typical dinner service lasts 2-2.5 hours. Our Chef\'s Tasting Menu experience is approximately 3 hours. We never rush our guests - please take your time and enjoy!',
        },
        {
          question: 'Can you accommodate dietary restrictions?',
          answer: 'Absolutely! We cater to vegetarian, vegan, gluten-free, and other dietary requirements. Please inform us when booking or notify your server. Our chef will create a customized menu for you.',
        },
      ],
    },
    {
      category: 'Menu & Pricing',
      questions: [
        {
          question: 'Do you have a kids menu?',
          answer: 'Yes, we offer a specially curated children\'s menu for guests under 12. The dishes are crafted with the same quality ingredients but with more familiar flavors. Price: £25 for three courses.',
        },
        {
          question: 'What is the price range?',
          answer: 'Appetizers: £18-38, Mains: £38-145, Desserts: £14-24. Our Chef\'s Tasting Menu is £380 per person. Wine pairings are available from £85. We also offer à la carte options.',
        },
        {
          question: 'Do you serve alcohol? Can we bring our own wine?',
          answer: 'We have an extensive wine list with over 200 selections. Corkage is available at £45 per bottle. Please note we don\'t allow BYO for spirits or beer, only wine.',
        },
      ],
    },
    {
      category: 'Special Occasions',
      questions: [
        {
          question: 'Can you help with special celebrations?',
          answer: 'Yes! We love celebrating with our guests. Whether it\'s a birthday, anniversary, or proposal, let us know in advance and we\'ll arrange something special - from custom dessert presentations to private dining setups.',
        },
        {
          question: 'Do you offer private dining?',
          answer: 'Yes, we have a private dining room that seats up to 12 guests and the Chef\'s Table that accommodates 8. Both require a minimum spend. Contact us for availability and pricing.',
        },
        {
          question: 'Are gift vouchers available?',
          answer: 'Yes! Gift vouchers are available in any denomination from £50. They\'re valid for 12 months and can be used for food, drinks, or our tasting menu experiences. Purchase online or in person.',
        },
      ],
    },
    {
      category: 'Practical Information',
      questions: [
        {
          question: 'Is there parking available?',
          answer: 'We offer complimentary valet parking for all guests. Alternatively, there\'s a public car park 2 minutes walk away (£8/hour). Green Park Underground station is also just 5 minutes on foot.',
        },
        {
          question: 'Is the restaurant wheelchair accessible?',
          answer: 'Yes, our restaurant is fully wheelchair accessible with step-free access, accessible restrooms, and adjustable seating. Please inform us when booking so we can ensure the best table placement.',
        },
        {
          question: 'Can I purchase a gift card?',
          answer: 'Yes! Gift cards are available in amounts from £50 to £500. They can be purchased online and are delivered via email within 24 hours, or you can pick up a physical card at the restaurant.',
        },
      ],
    },
  ];

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  const isOpen = (categoryIndex, questionIndex) => {
    return openIndex === `${categoryIndex}-${questionIndex}`;
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq__header">
          <span className="section-eyebrow">Questions & Answers</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="faq__subtitle">
            Find answers to common questions about dining at Noir & Ember. 
            Can't find what you're looking for? <Link to="/contact" className="faq__contact-link">Contact us</Link>.
          </p>
        </div>

        <div className="faq__content">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="faq__category">
              <h3 className="faq__category-title">
                <HelpCircle size={20} className="faq__category-icon" />
                {category.category}
              </h3>

              <div className="faq__questions">
                {category.questions.map((item, questionIndex) => {
                  const isItemOpen = isOpen(categoryIndex, questionIndex);
                  return (
                    <div
                      key={questionIndex}
                      className={`faq__item ${isItemOpen ? 'faq__item--open' : ''}`}
                    >
                      <button
                        className="faq__question"
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        aria-expanded={isItemOpen}
                      >
                        <span className="faq__question-text">{item.question}</span>
                        <span className="faq__toggle-icon">
                          {isItemOpen ? <Minus size={20} /> : <Plus size={20} />}
                        </span>
                      </button>

                      <div className={`faq__answer ${isItemOpen ? 'faq__answer--open' : ''}`}>
                        <div className="faq__answer-content">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="faq__cta">
          <h3 className="faq__cta-title">Still Have Questions?</h3>
          <p className="faq__cta-text">
            Our team is here to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <div className="faq__cta-buttons">
            <a href="tel:+442079460958" className="btn-gold">
              Call Us Now
            </a>
            <a href="mailto:hello@noirandember.com" className="btn-ghost">
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
