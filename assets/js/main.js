const navItems = [
  {label:'Home',href:'index.html',id:'home'},
  {label:'About',href:'about.html',id:'about'},
  {label:'Services',href:'services.html',id:'services',children:[['All Services','services.html'],['Real Estate Development','real-estate.html'],['Construction & Civil','construction.html'],['Interiors & Fit-outs','interiors.html']]},
  {label:'Projects',href:'projects.html',id:'projects'},
  {label:'Gallery',href:'gallery.html',id:'gallery'},
  {label:'Our Approach',href:'approach.html',id:'approach'},
  {label:'Contact',href:'contact.html',id:'contact'}
];
const current = document.body.dataset.page || 'home';
const logo = '<img src="assets/images/logo.svg" alt="Emporio Developers" width="228" height="54">';
function header(){
 const links=navItems.map(n=> n.children ? `<div class="nav-drop"><button type="button" aria-haspopup="true" aria-expanded="false">${n.label}⌄</button><div class="dropdown">${n.children.map(c=>`<a href="${c[1]}">${c[0]}</a>`).join('')}</div></div>` : `<a class="${current===n.id?'active':''}" href="${n.href}">${n.label}</a>`).join('');
 return `<div class="topbar"><div class="container"><span>Architecture · Development · Construction</span><span class="top-right">Business enquiries: <a href="mailto:contact@emporiogroupinc.com">contact@emporiogroupinc.com</a></span></div></div><header class="site-header"><div class="container header-inner"><a class="brand" href="index.html" aria-label="Emporio Developers home">${logo}</a><nav class="nav" id="main-nav" aria-label="Main navigation">${links}</nav><a class="btn header-cta" href="contact.html">Contact Us <span>↗</span></a><button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="main-nav">☰</button></div></header>`;
}
function footer(){return `<footer class="site-footer"><div class="container"><div class="footer-grid"><div class="footer-brand"><a href="index.html">${logo}</a><p>Building foundations. Creating possibilities. A development-focused corporate presence spanning construction, real estate and design-led spaces.</p><a class="text-link" href="about.html">Discover Emporio</a></div><div class="footer-col"><h4>Company</h4><a href="about.html">About Us</a><a href="approach.html">Our Approach</a><a href="leadership.html">Leadership</a><a href="careers.html">Careers</a><a href="news.html">News & Updates</a></div><div class="footer-col"><h4>Explore</h4><a href="services.html">All Services</a><a href="real-estate.html">Real Estate</a><a href="construction.html">Construction & Civil</a><a href="interiors.html">Interiors & Fit-outs</a><a href="projects.html">Projects</a><a href="gallery.html">Gallery</a></div><div class="footer-col"><h4>Contact</h4><a href="mailto:contact@emporiogroupinc.com">contact@emporiogroupinc.com</a><a href="contact.html">Send an Inquiry</a><a href="company.html">Company Information</a><p style="font-size:11px;color:#8795a8;margin-top:18px">Registered office details are being verified.</p></div></div><div class="footer-bottom"><span>© <span id="year"></span> EMPORIO DEVELOPERS PRIVATE LIMITED. All rights reserved.</span><span><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a><a href="cookies.html">Cookies</a></span></div></div></footer>`}
document.getElementById('site-header').innerHTML=header();
document.getElementById('site-footer').innerHTML=footer();
document.getElementById('year').textContent=new Date().getFullYear();
const toggle=document.querySelector('.menu-toggle'), nav=document.querySelector('.nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰'});
// Reveal content when it enters the viewport.
const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObserver.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
// A form opens a pre-addressed email draft; it does not claim the message has been sent.
const form=document.querySelector('#inquiry-form');
form?.addEventListener('submit',e=>{e.preventDefault();const status=document.querySelector('#form-status');if(!form.reportValidity()){status.textContent='Please complete the required fields.';return;}const d=new FormData(form);const subject=encodeURIComponent(`Website inquiry: ${d.get('inquiryType')||'General inquiry'}`);const body=encodeURIComponent(`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nPhone: ${d.get('phone')||'Not provided'}\nCompany: ${d.get('company')||'Not provided'}\nInquiry type: ${d.get('inquiryType')}\nSubject: ${d.get('subject')||'Not provided'}\n\nMessage:\n${d.get('message')}`);status.textContent='Opening your email application with the inquiry details. Review and send the email from there.';window.location.href=`mailto:contact@emporiogroupinc.com?subject=${subject}&body=${body}`;});
// Gallery lightbox
const modal=document.querySelector('.modal');
document.querySelectorAll('[data-lightbox]').forEach(card=>card.addEventListener('click',()=>{const img=card.querySelector('img');if(!img||!modal)return;modal.querySelector('img').src=img.src;modal.querySelector('img').alt=img.alt;modal.classList.add('open');modal.setAttribute('aria-hidden','false')}));
modal?.querySelector('button')?.addEventListener('click',()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true')});
modal?.addEventListener('click',e=>{if(e.target===modal){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}});
