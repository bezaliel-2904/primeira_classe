import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .image-reveal');

    // Never leave the page visually hidden if the browser does not provide
    // IntersectionObserver (or if an observer cannot be created).
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    let observer: IntersectionObserver;

    try {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin: '0px 0px -60px 0px',
        }
      );

      elements.forEach((element) => observer.observe(element));
    } catch (error) {
      console.warn('Scroll reveal desativado; exibindo conteúdo normalmente.', error);
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    return () => observer.disconnect();
  }, []);
}
