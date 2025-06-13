window.addEventListener("DOMContentLoaded", () => {
  try {
    init();
  } catch (e) {
    // Handle
    alert(e);
  }
});

function init() {
  const focus = base64Param("f");
  const name = base64Param("n");
  const phone = base64Param("p");
  const email = base64Param("e");

  const article = buildArticle(focus, name, phone, email);
  document.querySelector("body").appendChild(article);
}

function base64Param(key) {
  const params = new URLSearchParams(window.location.search);

  if (!params.has(key) || params.get(key) === "") {
    throw new Error("malformed query parameters");
  }

  return atob(params.get(key));
}

function buildArticle(focus, name, phone, email) {
  const header = buildHeader(focus, name);
  const footer = buildFooter(phone, email);

  const article = document.createElement("article");
  article.append(header, footer);
  return article;
}

function buildHeader(focus, name) {
  const header = document.createElement("header");

  const small = document.createElement("small");
  small.textContent = focus;
  const h1 = document.createElement("h1");
  h1.textContent = name;

  header.append(small, h1);
  return header;
}

function buildFooter(phone, email) {
  const footer = document.createElement("footer");

  const phoneLabel = document.createElement("div");
  const phoneLabelSmall = document.createElement("small");
  phoneLabelSmall.textContent = "Phone";
  phoneLabel.appendChild(phoneLabelSmall);

  const emailLabel = document.createElement("div");
  const emailLabelSmall = document.createElement("small");
  emailLabelSmall.textContent = "Email";
  emailLabel.appendChild(emailLabelSmall);

  const phoneValue = document.createElement("div");
  const phoneValueAnchor = document.createElement("a");
  const phoneHref = `tel:+44${phone.split(" ").join("").slice(1)}`;
  phoneValueAnchor.setAttribute("href", phoneHref);
  phoneValueAnchor.textContent = phone;
  phoneValue.appendChild(phoneValueAnchor);

  const emailValue = document.createElement("div");
  const emailValueAnchor = document.createElement("a");
  const emailHref = `mailto:${email}`;
  emailValueAnchor.setAttribute("href", emailHref);
  emailValueAnchor.textContent = email;
  emailValue.appendChild(emailValueAnchor);

  footer.append(phoneLabel, phoneValue, emailLabel, emailValue);
  return footer;
}
