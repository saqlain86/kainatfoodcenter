let navToggler = document.querySelector('.nav-toggler');
let linkContainers = document.querySelector('.link-containers');

navToggler.addEventListener('click',() => {
    navToggler.classList.toggle('active');
    linkContainers.classList.toggle('active');
}) 






let reviews = document.querySelectorAll('.review-wrapper');

let currentReviews = [ 0 , 2];

let updateReviewSlider = (cards) => {

    cards.forEach((card_index) =>{
reviews[card_index].classList.add('active');
    });
}

setInterval(() => {
currentReviews.forEach((card_index , i) =>{
        reviews[card_index].classList.remove('active');

currentReviews[i] = card_index >= reviews.length - 1 ? 0 : card_index + 1;



            });

            setTimeout(() => {
updateReviewSlider(currentReviews);
            }, 250)
}, 5000)

updateReviewSlider(currentReviews)



let faqs = [...document.querySelectorAll('.faq')];
faqs.map(faq =>{
    let ques = faq.querySelector('.question-box');

    ques.addEventListener('click',() => {
        faq.classList.toggle('active');
    })
}) ;






let dishSlider = document.querySelector('.dish-slide');
let rotationVal = 0;

setInterval(() => {
    rotationVal += 120;
    dishSlider.style.transform = `translateY(-50%) rotate(${rotationVal}deg)`;
}, 3000);



AOS.init();




