document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const icon = button.querySelector('.icon');

        // Toggle the visibility of the answer
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.textContent = '+';
            button.style.color = '#A9D6B9';
        } else {
            answer.style.display = 'block';
            icon.textContent = '–';
            button.style.color = '#A9D6B9;';
        }

        // Collapse other open answers
        document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
            if (otherAnswer !== answer) {
                otherAnswer.style.display = 'none';
            }
        });

        // Reset icons of other questions
        document.querySelectorAll('.faq-question .icon').forEach(otherIcon => {
            if (otherIcon !== icon) {
                otherIcon.textContent = '+';
            }
        });
    });
});
