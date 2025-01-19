// FAQ Data
const faqData = [
    {
        question: "Is List View Export free to use?",
        answer: "Yes! List View Export is completely free for all Salesforce users."
    },
    {
        question: "How does it handle large data sets?",
        answer: "List View Export respects Salesforce's list view limits and can export up to 50,000 records at once."
    },
    {
        question: "Does it respect Salesforce security settings?",
        answer: "Absolutely! List View Export respects all field-level security, object permissions, sharing rules, and record access controls."
    }
    // Add more FAQ items as needed
];

// Load FAQ items
document.addEventListener('DOMContentLoaded', () => {
    const faqGrid = document.querySelector('.faq-grid');
    
    faqData.forEach(item => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <h3>${item.question}</h3>
            <p class="faq-answer">${item.answer}</p>
        `;
        faqGrid.appendChild(faqItem);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.style.background = 'white';
        }
    });
}); 