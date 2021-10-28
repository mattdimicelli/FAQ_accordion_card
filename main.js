let aQuestionIsCurrentlyOpened = false;

const questionsAndArrowBtns = document.querySelectorAll('dt');
const answers = [...document.querySelectorAll('dd')];
questionsAndArrowBtns.forEach(clickableThing => clickableThing.addEventListener('click', clickHandler));

function clickHandler(e) {
    const target = e.currentTarget;
    const arrow = target.lastElementChild.firstElementChild;
    const answer = target.nextElementSibling;
    if (!aQuestionIsCurrentlyOpened && getComputedStyle(answer).display === 'none') {
        openUp(answer, arrow, target);
    } else if (aQuestionIsCurrentlyOpened && getComputedStyle(answer).display === 'none') {
        // if a question is currently selected but the answer for the question 
        // that the user just clicked on isn't visible, then the user has clicked
        // on a second question, so the first question/answer will be automatically
        // close up
        const prevDisplayedAnswer = answers.find(answer => getComputedStyle(answer).display === 'block');
        const prevQuestion = prevDisplayedAnswer.previousElementSibling;
        const prevArrow = prevQuestion.lastElementChild.firstElementChild;
        prevDisplayedAnswer.style.display = '';
        prevQuestion.style.fontWeight = '';
        prevArrow.style.transform = '';

        openUp(answer, arrow, target);
    } else if (aQuestionIsCurrentlyOpened && getComputedStyle(answer).display === 'block') {
        /* the user has clicked on the same question that is already open, so close
        it up! */
        /* set the inline styles to '' so the class styles can kick in  */
        answer.style.display = ''; 
        target.style.fontWeight = '';
        arrow.style.transform = '';
        aQuestionIsCurrentlyOpened = false;
    }
}

function openUp(answer, arrow, target) {
    answer.style.display = 'block';
    target.style.fontWeight = '700';
    arrow.style.transform = 'rotate(180deg)';
    aQuestionIsCurrentlyOpened = true;
}