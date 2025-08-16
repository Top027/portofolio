
// Theme toggle
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const stored = localStorage.getItem('theme');
if (stored === 'light') document.documentElement.classList.add('light');
if (!stored && !prefersDark) document.documentElement.classList.add('light');

function toggleTheme(){
  document.documentElement.classList.toggle('light');
  localStorage.setItem('theme', document.documentElement.classList.contains('light') ? 'light' : 'dark');
}

// Smooth scroll for internal links
document.addEventListener('click', (e)=>{
  const a = e.target.closest('a[href^="#"]');
  if (a) {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
      history.pushState(null, '', '#'+id);
    }
  }
});

// Mobile nav (very light)
(function(){
  const btn = document.querySelector('[data-menu]');
  const nav = document.querySelector('nav ul');
  if(!btn || !nav) return;
  btn.addEventListener('click', ()=> nav.classList.toggle('open'));
})();

// Contact form (mailto fallback)
(function(){
  const form = document.querySelector('form#contact-form');
  if(!form) return;
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    const msg = data.get('message');
    const subject = encodeURIComponent('Website Contact from ' + name);
    const body = encodeURIComponent(msg + '\n\nFrom: ' + data.get('email'));
    window.location.href = `mailto:dayattaufiq027@gmail.com?subject=${subject}&body=${body}`;
    toast('Terima kasih! Pesan Anda disiapkan via email client.');
    form.reset();
  })
})();

function toast(text){
  let t = document.querySelector('.toast');
  if(!t){
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = text;
  t.classList.add('show');
  setTimeout(()=> t.classList.remove('show'), 2800);
}
