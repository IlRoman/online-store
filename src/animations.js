export const runAnimation = () => {
    const animatedElement = document.querySelector('.products-container')
    animatedElement.classList.remove('animation')
    void animatedElement.offsetWidth;
    animatedElement.classList.add('animation')
}