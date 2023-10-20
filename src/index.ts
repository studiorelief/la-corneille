import { greetUser } from '$utils/greet';
import { swipeElement } from '$utils/jquery';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'John Doe';
  greetUser(name);

  // Load swipeElement
  swipeElement();
});
