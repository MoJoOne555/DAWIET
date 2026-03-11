/** Dawiet LUTs Theme — JS **/
document.addEventListener('DOMContentLoaded', function () {

  // Scroll reveal for product cards
  const cards = document.querySelectorAll('.oe_product_cart, .o_wsale_product');
  if (cards.length) {
    cards.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    const obs = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
          }, i * 60);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    cards.forEach(el => obs.observe(el));
  }

  // Navbar scroll effect — add border on scroll
  const header = document.querySelector('header, .o_header_standard');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.style.borderBottom = '1px solid rgba(240,192,64,0.15)';
      } else {
        header.style.borderBottom = '1px solid rgba(255,255,255,0.08)';
      }
    });
  }

});
