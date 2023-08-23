const emailLabel = document.getElementById("emailLabel");
const passwordElement = document.getElementById("passwordLabel");

const passwordElementValue = passwordElement?.textContent;

const letterSplitter = (el: HTMLElement) => {
  const text = el?.textContent;

  if (text !== null && text !== undefined) {
    const newvalues = text.split("");
    const letters = newvalues.map(
      (letter, index) =>
        `<span style="transition-delay:${index * 30}ms;">${letter}</span>`
    );

    if (el != null) {
      el.innerHTML = letters?.join("");
    }
  }
};
if (emailLabel !== null && passwordElement) {
  letterSplitter(emailLabel);
  letterSplitter(passwordElement);
}
