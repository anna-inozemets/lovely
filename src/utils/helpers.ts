export const handleScrollWithModal = () => {
  document.body.classList.toggle('no-scroll');
  document.querySelector('html')?.classList.toggle('no-scroll');
};
