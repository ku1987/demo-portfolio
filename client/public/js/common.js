const targets = document.querySelectorAll('.img-container img');

const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.classList.add('fade');
        observer.disconnect();
      }
    });
    console.log(entries);
    
  });
  io.observe(target);
};

targets.forEach(lazyLoad);
