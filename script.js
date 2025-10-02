const username = document.getElementById('user');
const max = '19'; 
const imageUrl = 'images/gateau.jfif'; 
const finalText = "'And give thanks for everything to God the Father in the name of our Lord Jesus Christ.' - Eph 5:20";

const pass = document.getElementById('pass');
const error = document.getElementById('err');
const goBtn = document.getElementById('go');
const loginCard = document.getElementById('loginCard');
const surpriseCard = document.getElementById('surpriseCard');
const surpriseImg = document.getElementById('surpriseImg');
const surpriseTitle = document.getElementById('surpriseTitle');
const surpriseText = document.getElementById('surpriseText');

surpriseText.textContent = finalText;

function showError(msg){
  error.textContent = msg;
  error.classList.remove('hidden');
//   setTimeout(()=>error.classList.add('hidden'), 3000);
}

async function check(p){
  if( p === max) return true;
  return false;
}

goBtn.addEventListener('click', async () => {;
    surpriseImg.setAttribute("src", imageUrl);
    const u = username.value;
    const finalTitle = 'happy birthday ' + u + ' ! 🥳';
    surpriseTitle.textContent = finalTitle;

    const p = pass.value;
    if(!u || !p || u===" ") { showError('remplis les champs gros'); return; }
    const ok = await check(p);
    if(ok){
        loginCard.classList.add('hidden');
        surpriseCard.classList.remove('hidden');
    } else {
        showError('mdp incorrect, donne le vrai age');
    }
});

// Enter key submits
// [userEl,passwd].forEach(el => el.addEventListener('keydown', (e)=>{ if(e.key==='Enter'){ goBtn.click(); } }));