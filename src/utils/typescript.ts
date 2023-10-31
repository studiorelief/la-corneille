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

// Trigger button footer (news)
function triggerFooter(): void {
  // Sélection de l'élément déclencheur
  const trigger: HTMLElement | null = document.querySelector('#newsletter-footer-trigger');

  if (!trigger) {
    return;
  }

  // Ajout d'un écouteur d'événement sur l'élément déclencheur
  trigger.addEventListener('click', function () {
    // Sélection de l'élément à cliquer
    const button: HTMLElement | null = document.querySelector('#newsletter-footer-button');

    if (!button) {
      return;
    }

    // Simule un clic sur l'élément
    button.click();
  });
}

// Trigger button contact (lead)
function triggerContact(): void {
  // Sélection de l'élément déclencheur
  const trigger: HTMLElement | null = document.querySelector('#contact-trigger');
  if (!trigger) {
    return;
  }

  // Ajout d'un écouteur d'événement sur l'élément déclencheur
  trigger.addEventListener('click', function () {
    // Sélection de l'élément à cliquer
    const button: HTMLElement | null = document.querySelector('#contact-button');
    if (!button) {
      return;
    }

    // Simule un clic sur l'élément
    button.click();
  });
}

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

function LogoScroll(): void {
  const logo = document.querySelector('.navbar_logo-link');

  // Si logo n'existe pas, quittez la fonction
  if (!logo) return;

  // Écoutez l'événement de défilement
  window.addEventListener('scroll', () => {
    // Convertir 5rem en pixels (en supposant que 1rem est égal à 16px par défaut)
    const triggerDistance = 15 * 16;

    if (window.scrollY >= triggerDistance) {
      logo.classList.add('visible');
    } else {
      logo.classList.remove('visible');
    }
  });
}

export { LogoScroll, scrollTop, triggerContact, triggerFooter, triggerHero };
