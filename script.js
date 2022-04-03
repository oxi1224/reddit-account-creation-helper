// ==UserScript==
// @name        reddit account gen
// @namespace   Violentmonkey Scripts
// @match       https://www.reddit.com/register/
// @grant       none
// @version     1.0
// @author      oxi
// @description script to make creating new reddit accounts easier
// ==/UserScript==

(async () => {
  const newEL = document.createElement('div');
  newEL.setAttribute('id', 'email');
  newEL.innerHTML = `<div style="position: absolute; top: 0px; right: 0px;">
                        <iframe id="frame" src="https://www.1secmail.com/api/v1/?action=genRandomMailbox&amp;count=1" style="width: 50vw, height: 20vh; background-color: white;"></iframe>
                     </div>`
  await document.body.appendChild(newEL);
  document.getElementById('regEmail').addEventListener('change', () => {document.getElementsByClassName('AnimatedForm__submitButton')[0].click()})
  const login = `POlishWARior_${Math.floor(Math.random() * 9999999)}`;
  const password = parseInt((Math.floor(Math.random() * 9999999999)).toFixed(15));
  document.getElementById("regUsername").value = login;
  document.getElementById("regUsername").setAttribute('data-empty', 'false');
  document.getElementById("regPassword").value = password;
  document.getElementById("regPassword").setAttribute('data-empty', 'false');
  console.log(`
  login: ${login}
  haslo: ${password}
  `);
})();
