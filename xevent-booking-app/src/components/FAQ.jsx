import { useState } from 'react';

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Why choose our event tracking platform?",
            answer: "Our platform offers real-time tracking, comprehensive analytics, and seamless integration with popular calendar apps."
        },
        {
            question: "What makes us different from others?",
            answer: "We provide AI-powered recommendations, offline functionality, and premium customer support 24/7."
        },
        {
            question: "How do we ensure data security?",
            answer: "We use bank-level encryption, regular security audits, and comply with GDPR and other privacy regulations."
        },
        {
            question: "How can I get support for my events?",
            answer: "Contact our support team via live chat, email, or phone. We offer dedicated event managers for enterprise clients."
        }
    ];

    return (
        <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div
                            className="faq-question"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <h4>{faq.question}</h4>
                            <span>{openIndex === index ? '−' : '+'}</span>
                        </div>
                        {openIndex === index && (
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQ;