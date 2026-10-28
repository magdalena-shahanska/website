document.getElementById('year').textContent=new Date().getFullYear();
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));document.querySelectorAll('.hire-checklist li').forEach(li=>li.hidden=button.dataset.filter!=='all'&&li.dataset.category!==button.dataset.filter);}));

document.querySelectorAll('.flow-step').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.flow-step').forEach(b=>b.setAttribute('aria-expanded',String(b===button)));document.querySelectorAll('.process-panel').forEach(p=>p.hidden=p.id!=='step-'+button.dataset.step);}));

const form=document.getElementById('contact-form');
const endpoint=(window.SITE_CONFIG?.contactFormEndpoint||'').trim();
if(endpoint && /^https:\/\//i.test(endpoint)) {
 form.hidden=false;
 document.getElementById('contact-fallback').hidden=true;
 form.action=endpoint;
 form.addEventListener('submit',async event=>{
  event.preventDefault();
  const status=document.getElementById('form-status');const button=form.querySelector('button');
  const data=new FormData(form);if(data.get('website'))return;
  data.delete('website');button.disabled=true;status.textContent='Sending your enquiry…';
  try {
   const response=await fetch(endpoint,{method:'POST',body:data,headers:{Accept:'application/json'}});
   if(!response.ok)throw new Error('Your enquiry could not be sent. Please try again or connect on LinkedIn.');
   status.textContent='Thank you. Your enquiry has been sent.';form.reset();
  }catch(error){status.textContent='Your enquiry could not be sent. Please try again or connect on LinkedIn.';}
  finally{button.disabled=false;}
 });
}
