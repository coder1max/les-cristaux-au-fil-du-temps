const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('afficher');
      } else {
        entry.target.classList.remove('afficher')
      }
    });
  });
  
const sectionsCachees = document.querySelectorAll('.caché');
sectionsCachees.forEach((el) => observer.observe(el))
