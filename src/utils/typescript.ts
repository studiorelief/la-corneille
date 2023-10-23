// Trigger button hero (news)
function triggerHero(): void {
  // Sélection de l'élément déclencheur
  const trigger: HTMLElement | null = document.querySelector('#newsletter-hero-trigger');

  if (!trigger) {
    return;
  }

  // Ajout d'un écouteur d'événement sur l'élément déclencheur
  trigger.addEventListener('click', function () {
    // Sélection de l'élément à cliquer
    const button: HTMLElement | null = document.querySelector('#newsletter-hero-button');

    if (!button) {
      return;
    }

    // Simule un clic sur l'élément
    button.click();
  });
}

document.addEventListener('DOMContentLoaded', function () {
  triggerHero();
});

// Scroll Top button
function scrollTop(): void {
  const btnTop: HTMLElement | null = document.getElementById('btnTop');

  if (!btnTop) return; // Si btnTop est null, terminez la fonction

  window.onscroll = function (): void {
    // Supposons que 1rem = 16px par défaut, vous pouvez ajuster selon votre configuration
    const remInPixels: number = 16 * 10;

    if (document.body.scrollTop > remInPixels || document.documentElement.scrollTop > remInPixels) {
      btnTop.style.display = 'block';
    } else {
      btnTop.style.display = 'none';
    }
  };

  btnTop.addEventListener('click', function (): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  scrollTop();
});

export { scrollTop, triggerHero };
