// Aorabyte concept pages: quiz reveal. Dependency-free.
// Clicking an option in a .quiz__q marks it right or wrong, highlights the
// option carrying data-correct, and shows that question's .quiz__answer.

(function () {
    'use strict';

    document.addEventListener('click', (event) => {
        const option = event.target.closest('.quiz__option');
        if (!option) return;

        const question = option.closest('.quiz__q');
        if (!question || question.classList.contains('is-answered')) return;

        const isCorrect = option.hasAttribute('data-correct');
        question.classList.add('is-answered');
        question.querySelectorAll('.quiz__option').forEach((btn) => {
            btn.setAttribute('aria-disabled', 'true');
            if (btn.hasAttribute('data-correct')) btn.classList.add('is-correct');
        });
        if (!isCorrect) option.classList.add('is-wrong');

        const answer = question.querySelector('.quiz__answer');
        if (!answer) return;
        const result = answer.querySelector('.quiz__result');
        if (result) result.textContent = isCorrect ? 'Correct.' : 'Not quite.';
        answer.hidden = false;
    });
})();
