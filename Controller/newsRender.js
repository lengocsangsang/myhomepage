import newsFunction from "./newsFunction.js";

import {
  ai,
  technology,
  crypto,
  business,
  sports,
  travel,
  finance,
} from "./config.js";

const backButton = document.querySelector(".back-to-homepage");

export default async function newsRender() {
  // AI BUTTON CLICK
  ai.addEventListener("click", async function () {
    newsFunction("ai");
  });

  // CRYPTO BUTTON CLICK
  crypto.addEventListener("click", async function () {
    newsFunction("crypto");
  });

  // BUSINESS BUTTON CLICK
  business.addEventListener("click", async function () {
    newsFunction("business");
  });

  // SPORTS BUTTON CLICK
  sports.addEventListener("click", async function () {
    newsFunction("sports");
  });

  // TRAVEL BUTTON CLICK
  travel.addEventListener("click", async function () {
    newsFunction("travel");
  });

  // FINANCE BUTTON CLICK
  finance.addEventListener("click", async function () {
    newsFunction("finance");
  });

  // FINANCE BUTTON CLICK
  technology.addEventListener("click", async function () {
    newsFunction("technology");
  });

  backButton.addEventListener("click", function () {
    const element = document.querySelector(".general-container");
    element.scrollIntoView();
  });
}
