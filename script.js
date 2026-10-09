const sections = [
  {
    id: 'premium', title: 'Seleção Premium de Vape e POD', subtitle: 'Destaques e Novidades',
    products: [
      ['Cartucho Argus Series | Voopoo','assets/products/cartucho-argus.png','R$97,92','R$119,90','-14%','3x de R$34,00 sem juros',['POD System','Voopoo']],
      ['Vape Mod Armour Max | Vaporesso','assets/products/armour-max.jpg','R$528,05','R$649,90','-9%','3x de R$183,35 sem juros',['Vape','Vaporesso']],
      ['Cartucho Pré-carregado Eco 8000 puffs | Life Pod','assets/products/lifepod-eco.jpg','R$74,78','R$89,00','-12%','2x de R$39,00 sem juros',['POD Descartável','Life Pod']],
      ['Cartucho Xros Corex 2.0 | Vaporesso','assets/products/cartucho-xros.jpg','R$120,00','R$139,90','-8%','3x de R$41,66 sem juros',['POD System','Vaporesso']]
    ]
  },
  {
    id:'descartaveis',title:'Pod Descartável',subtitle:'Prático de usar com até 30.000 puffs',
    products:[
      ['Pod Descartável Ignite V15 1500 Puffs','assets/products/ignite-v15.jpg','R$55,52','R$69,90','-17%','1x de R$57,00 sem juros',['POD Descartável','Ignite']],
      ['Pod Ignite V150 15000 puffs','assets/products/ignite-v150.jpg','R$141,12','R$169,90','-13%','3x de R$49,00 sem juros',['POD Descartável','Ignite']],
      ['Pod Descartável Glow 10000 puffs | Black Sheep','assets/products/glow-black-sheep.jpg','R$108,53','R$139,90','-19%','3x de R$37,68 sem juros',['POD Descartável','Black Sheep']],
      ['Pod Descartável Insta Bar 15000 puffs | Zomo','assets/products/instabar-zomo.jpg','R$114,24','R$149,90','-21%','3x de R$39,67 sem juros',['POD Descartável','Zomo']]
    ]
  },
  {
    id:'vaporizadores',title:'Vaporizador de Ervas',subtitle:'Somente Originais',
    products:[
      ['Bateria 510 Airis Mystica Ace | Airistech','assets/products/airis-mystica.jpg','R$151,78','R$189,90','-17%','3x de R$52,70 sem juros',['Vaporizador de Ervas','Airistech']],
      ['Vaporizador de Ervas XMax V3 Nano | XVape','assets/products/nano-atmos.jpg','R$354,24','R$429,90','-14%','3x de R$123,00 sem juros',['Vaporizador de Ervas','XVape']],
      ['Vaporizador de Ervas Vexil | Boundless','assets/products/vexil.jpg','R$651,84','R$789,90','-14%','3x de R$226,33 sem juros',['Vaporizador de Ervas','Boundless']],
      ['Vaporizador de Ervas IQC | DaVinci','assets/products/iqc.jpg','R$1.532,16','R$1.899,90','-16%','3x de R$532,00 sem juros',['Vaporizador de Ervas','DaVinci']]
    ]
  },
  {
    id:'juices',title:'Juice Nicsalt / Freebase',subtitle:'Importados e Nacionais',
    products:[
      ['Juice Nic Salt Strawberry Kiwi Ice | Nikbar','assets/products/nikbar-strawberry.jpg','R$71,90','R$89,90','-16%','2x de R$37,45 sem juros',['Juices','Nic Salt']],
      ['Joyetech Free - Líquido Cigar','assets/products/joyetech-cigar.jpg','R$80,64','R$99,90','-16%','2x de R$42,00 sem juros',['Juices','Freebase']],
      ['Juice NicSalt Fruit Punch Ice | Hypnos','assets/products/hypnos-fruit.jpg','R$71,90','R$89,90','-16%','2x de R$37,45 sem juros',['Juices','Nic Salt']],
      ['Juice NicSalt Berry Lemonade Chill | Ignite','assets/products/ignite-berry.jpg','R$85,44','R$109,90','-19%','2x de R$44,50 sem juros',['Juices','Ignite']]
    ]
  },
  {
    id:'tobacco',title:'Juice Tobacco',subtitle:'Líquidos Atabacados para sabores rústicos',
    products:[
      ['Joyetech Free - Líquido Cigar','assets/products/joyetech-cigar.jpg','R$80,64','R$99,90','-16%','2x de R$42,00 sem juros',['Juices','Tobacco']],
      ['Líquido Tabaco Doce | LS Juices','assets/products/tabaco-doce.jpg','R$27,56','R$34,90','-18%','1x de R$29,00 sem juros',['Juices','Nacional']],
      ['Líquido Brute Rage Tobacco | Joyetech','assets/products/joyetech-cigar.jpg','R$80,64','R$99,90','-16%','2x de R$42,00 sem juros',['Juices','Tobacco']],
      ['Líquido RY4 Tabaco & Caramelo | BrLiquid','assets/products/ry4.jpg','R$38,30','R$49,90','-20%','1x de R$39,90 sem juros',['Juices','BrLiquid']]
    ]
  },
  {
    id:'promocoes',title:'Promoções',subtitle:'',
    products:[
      ['Pod descartável 5K 5000 puffs | Mr. Freeze','assets/products/mr-freeze.jpg','R$47,04','R$79,00','-38%','1x de R$49,00 sem juros',['POD Descartável','Oferta']],
      ['Bateria 510 Airis Janus | Airistech','assets/products/janus.jpg','R$104,64','R$129,90','-16%','3x de R$36,33 sem juros',['Vaporizador','Airistech']],
      ['Pod Descartável HQD Cuvie Box 5500 Puffs','assets/products/hqd-cuvie.jpg','R$75,84','R$110,00','-28%','2x de R$39,50 sem juros',['POD Descartável','HQD']],
      ['Pod descartável 5K 5000 puffs | Mr. Freeze','assets/products/mr-freeze.jpg','R$47,04','R$79,00','-38%','1x de R$49,00 sem juros',['POD Descartável','Mr. Freeze']]
    ]
  }
];

const catalog = document.querySelector('#catalog');
const escapeHtml = value => value.replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
const allProducts = sections.flatMap(section => section.products);
const findProduct = name => allProducts.find(product => product[0] === name);
const moneyToCents = value => Math.round(Number(value.replace('R$','').replace(/\./g,'').replace(',','.').trim()) * 100);
const formatMoney = cents => (cents / 100).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
let cart = [];

function productCard(product){
  const [name,image,price,oldPrice,discount,installment,tags] = product;
  return `<article class="product-card" data-name="${escapeHtml(name.toLowerCase())}" data-key="${escapeHtml(name)}">
    <div class="product-image"><img src="${image}" alt="${escapeHtml(name)}"><span class="discount">${discount}</span><button class="favorite" type="button" aria-label="Favoritar ${escapeHtml(name)}">♡</button></div>
    <h3>${escapeHtml(name)}</h3><div class="stars" aria-label="5 de 5 estrelas">★★★★★</div>
    <p class="old-price">de <s>${oldPrice}</s> por</p><p class="price">${price}</p><p class="pix">no PIX</p>
    <p class="installment">${installment}</p><div class="tags">${tags.map(tag=>`<span>+ ${escapeHtml(tag)}</span>`).join('')}</div>
    <button class="buy-button" type="button">Comprar</button></article>`;
}

function renderCatalog(query=''){
  const needle=query.trim().toLowerCase();
  let visible=0;
  catalog.innerHTML=sections.map(section=>{
    const products=section.products.filter(item=>!needle||item[0].toLowerCase().includes(needle)||item[6].some(tag=>tag.toLowerCase().includes(needle)));
    visible+=products.length;
    if(!products.length)return '';
    return `<section class="product-section container" id="${section.id}"><h2 class="section-heading">${section.title}</h2>${section.subtitle?`<span class="section-subtitle">${section.subtitle}</span>`:''}<div class="product-grid">${products.map(productCard).join('')}</div><div class="section-dots" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div></section>`;
  }).join('');
  if(!visible)catalog.innerHTML='<div class="container empty-search">Nenhum produto encontrado. Tente outro termo.</div>';
}

renderCatalog();

const slides=[...document.querySelectorAll('.hero-slide')];
const dots=document.querySelector('.hero-dots');
let slideIndex=0;
slides.forEach((_,index)=>{const button=document.createElement('button');button.type='button';button.setAttribute('aria-label',`Mostrar banner ${index+1}`);button.addEventListener('click',()=>showSlide(index));dots.append(button)});
function showSlide(index){slideIndex=(index+slides.length)%slides.length;slides.forEach((slide,i)=>slide.classList.toggle('active',i===slideIndex));[...dots.children].forEach((dot,i)=>dot.classList.toggle('active',i===slideIndex))}
document.querySelector('.hero-prev').addEventListener('click',()=>showSlide(slideIndex-1));
document.querySelector('.hero-next').addEventListener('click',()=>showSlide(slideIndex+1));
showSlide(0);setInterval(()=>showSlide(slideIndex+1),7000);

const toast=document.querySelector('.toast');let toastTimer;
function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2200)}
catalog.addEventListener('click',event=>{
  const favorite=event.target.closest('.favorite');
  if(favorite){favorite.classList.toggle('active');favorite.textContent=favorite.classList.contains('active')?'♥':'♡';showToast(favorite.classList.contains('active')?'Produto adicionado aos favoritos':'Produto removido dos favoritos');return}
  const buy=event.target.closest('.buy-button');
  if(buy){const product=findProduct(buy.closest('.product-card').dataset.key);if(product)addToCart(product)}
});

document.querySelector('#search-form').addEventListener('submit',event=>{event.preventDefault();renderCatalog(document.querySelector('#search-input').value);document.querySelector('#catalog').scrollIntoView({behavior:'smooth'})});
document.querySelector('.menu-button').addEventListener('click',event=>{const nav=document.querySelector('.category-nav');nav.classList.toggle('open');event.currentTarget.setAttribute('aria-expanded',nav.classList.contains('open'))});
document.querySelector('#newsletter-form').addEventListener('submit',event=>{event.preventDefault();event.currentTarget.reset();showToast('Cadastro realizado com sucesso!')});
document.querySelector('.telegram').addEventListener('click',()=>showToast('Canal do Telegram'));
document.querySelector('.loyalty').addEventListener('click',()=>showToast('Programa de Fidelidade'));

const cartDrawer=document.querySelector('.cart-drawer');
const cartBackdrop=document.querySelector('.cart-backdrop');
const cartItems=document.querySelector('.cart-items');
const cartEmpty=document.querySelector('.cart-empty');
const cartFooter=document.querySelector('.cart-footer');
const checkoutOverlay=document.querySelector('.checkout-overlay');
const checkoutForm=document.querySelector('#checkout-form');
let checkoutStep=1;
let paymentMethod='card';

function cartSubtotal(){return cart.reduce((total,item)=>total+item.price*item.qty,0)}

function addToCart(product){
  const existing=cart.find(item=>item.name===product[0]);
  if(existing)existing.qty+=1;
  else cart.push({name:product[0],image:product[1],price:moneyToCents(product[2]),qty:1});
  renderCart();
  showToast('Produto adicionado ao carrinho');
}

function renderCart(){
  const quantity=cart.reduce((total,item)=>total+item.qty,0);
  const subtotal=cartSubtotal();
  document.querySelector('.cart-count').textContent=quantity;
  cartItems.innerHTML=cart.map((item,index)=>`<article class="cart-line">
    <img src="${item.image}" alt="${escapeHtml(item.name)}"><div><h3>${escapeHtml(item.name)}</h3><strong class="cart-line-price">${formatMoney(item.price)}</strong></div>
    <div class="cart-line-actions"><button type="button" data-remove="${index}">Remover</button><div class="qty"><button type="button" data-minus="${index}" aria-label="Diminuir quantidade">−</button><span>${item.qty}</span><button type="button" data-plus="${index}" aria-label="Aumentar quantidade">+</button></div></div>
  </article>`).join('');
  cartEmpty.hidden=cart.length>0;
  cartItems.hidden=cart.length===0;
  cartFooter.hidden=cart.length===0;
  document.querySelector('.cart-subtotal strong').textContent=formatMoney(subtotal);
  document.querySelector('.go-checkout').disabled=!cart.length;
  const progress=Math.min(100,subtotal/29900*100);
  document.querySelector('.free-shipping i').style.width=`${progress}%`;
  document.querySelector('.free-shipping small').textContent=subtotal>=29900?'Você ganhou frete grátis!':`Faltam ${formatMoney(29900-subtotal)} para o frete grátis`;
  updateCheckoutSummary();
}

function openCart(){cartBackdrop.hidden=false;document.body.classList.add('locked');requestAnimationFrame(()=>{cartBackdrop.classList.add('show');cartDrawer.classList.add('open')});cartDrawer.setAttribute('aria-hidden','false')}
function closeCart(){cartBackdrop.classList.remove('show');cartDrawer.classList.remove('open');cartDrawer.setAttribute('aria-hidden','true');setTimeout(()=>{cartBackdrop.hidden=true;if(checkoutOverlay.hidden)document.body.classList.remove('locked')},250)}
document.querySelector('.cart-button').addEventListener('click',openCart);
document.querySelector('.cart-close').addEventListener('click',closeCart);
cartBackdrop.addEventListener('click',closeCart);
document.querySelectorAll('.continue-shopping').forEach(button=>button.addEventListener('click',closeCart));
cartItems.addEventListener('click',event=>{
  const plus=event.target.closest('[data-plus]'),minus=event.target.closest('[data-minus]'),remove=event.target.closest('[data-remove]');
  if(plus)cart[Number(plus.dataset.plus)].qty+=1;
  if(minus){const item=cart[Number(minus.dataset.minus)];item.qty-=1;if(item.qty<=0)cart.splice(Number(minus.dataset.minus),1)}
  if(remove)cart.splice(Number(remove.dataset.remove),1);
  if(plus||minus||remove)renderCart();
});

function currentShipping(){const selected=checkoutForm.querySelector('[name="shipping"]:checked');return selected?Number(selected.value):1990}
function checkoutTotals(){
  const subtotal=cartSubtotal();
  const shipping=subtotal>=29900?0:currentShipping();
  const discount=paymentMethod==='pix'?Math.round(subtotal*.05):0;
  return {subtotal,shipping,discount,total:subtotal+shipping-discount};
}

function updateCheckoutSummary(){
  if(!document.querySelector('.summary-items'))return;
  const totals=checkoutTotals();
  document.querySelector('.summary-items').innerHTML=cart.map(item=>`<div class="summary-line"><img src="${item.image}" alt=""><div><h3>${escapeHtml(item.name)}</h3><small>Quantidade: ${item.qty}</small></div><b>${formatMoney(item.price*item.qty)}</b></div>`).join('');
  document.querySelector('.summary-subtotal').textContent=formatMoney(totals.subtotal);
  document.querySelector('.summary-shipping').textContent=totals.shipping?formatMoney(totals.shipping):'Grátis';
  document.querySelector('.summary-discount-row').hidden=!totals.discount;
  document.querySelector('.summary-discount').textContent=`- ${formatMoney(totals.discount)}`;
  document.querySelector('.summary-total strong').textContent=formatMoney(totals.total);
  const installment=checkoutForm.querySelector('[name="installments"]');
  if(installment){const previous=installment.value;installment.innerHTML=[1,2,3].map(number=>`<option value="${number}">${number}x de ${formatMoney(Math.ceil(totals.total/number))} sem juros</option>`).join('');installment.value=previous||'1'}
}

function setCheckoutStep(step){
  checkoutStep=step;
  document.querySelectorAll('.checkout-step').forEach(item=>item.classList.toggle('active',Number(item.dataset.step)===step));
  document.querySelectorAll('[data-progress]').forEach(item=>item.classList.toggle('active',Number(item.dataset.progress)<=step));
  const back=document.querySelector('.checkout-back');
  const next=document.querySelector('.checkout-next');
  back.hidden=step===1;
  next.textContent=step===1?'Continuar para pagamento':step===2?'Revisar pedido':'FINALIZAR PEDIDO SIMULADO';
  document.querySelector('.checkout-overlay').scrollTo({top:0,behavior:'smooth'});
  updateCheckoutSummary();
}

function openCheckout(){
  if(!cart.length){showToast('Adicione um produto antes de continuar');return}
  closeCart();
  checkoutOverlay.hidden=false;
  document.body.classList.add('locked');
  document.querySelector('.checkout-header').hidden=false;
  document.querySelector('.checkout-progress').hidden=false;
  document.querySelector('.checkout-body').hidden=false;
  document.querySelector('.checkout-nav').hidden=false;
  document.querySelector('.checkout-success').hidden=true;
  setCheckoutStep(1);
}
function closeCheckout(){checkoutOverlay.hidden=true;document.body.classList.remove('locked')}
document.querySelector('.go-checkout').addEventListener('click',openCheckout);
document.querySelector('.checkout-close').addEventListener('click',closeCheckout);
document.querySelector('.finish-demo').addEventListener('click',closeCheckout);

function validateStep(step){
  const fields=[...document.querySelector(`.checkout-step[data-step="${step}"]`).querySelectorAll('input,select')].filter(field=>!field.disabled);
  const invalid=fields.find(field=>!field.checkValidity());
  if(invalid){invalid.reportValidity();invalid.focus();return false}
  return true;
}

function buildReview(){
  const data=new FormData(checkoutForm);
  const shippingLabel=checkoutForm.querySelector('[name="shipping"]:checked').closest('label').querySelector('strong').textContent;
  const last4=(String(data.get('cardNumber')||'').replace(/\D/g,'').slice(-4)||'0000');
  document.querySelector('#checkout-review').innerHTML=`
    <div class="review-block"><h3>Entrega</h3><p><strong>${escapeHtml(String(data.get('name')))}</strong><br>${escapeHtml(String(data.get('street')))}, ${escapeHtml(String(data.get('number')))}${data.get('complement')?` — ${escapeHtml(String(data.get('complement')))}`:''}<br>${escapeHtml(String(data.get('district')))} — ${escapeHtml(String(data.get('city')))}/${escapeHtml(String(data.get('state')))}<br>CEP ${escapeHtml(String(data.get('cep')))} • ${shippingLabel}</p><button type="button" data-edit-step="1">Editar entrega</button></div>
    <div class="review-block"><h3>Contato</h3><p>${escapeHtml(String(data.get('email')))}<br>${escapeHtml(String(data.get('phone')))}</p><button type="button" data-edit-step="1">Editar contato</button></div>
    <div class="review-block"><h3>Pagamento</h3><p>${paymentMethod==='card'?`Cartão final ${last4} • ${escapeHtml(String(data.get('installments')))}x sem juros`:'PIX com 5% de desconto'}<br><small>Simulação — nenhuma cobrança será realizada.</small></p><button type="button" data-edit-step="2">Editar pagamento</button></div>`;
}

document.querySelector('.checkout-next').addEventListener('click',()=>{
  if(checkoutStep===1){if(validateStep(1))setCheckoutStep(2);return}
  if(checkoutStep===2){if(validateStep(2)){buildReview();setCheckoutStep(3)}return}
  const order=`ALD-${String(Date.now()).slice(-8)}`;
  document.querySelector('.fake-order strong').textContent=order;
  document.querySelector('.checkout-header').hidden=true;
  document.querySelector('.checkout-progress').hidden=true;
  document.querySelector('.checkout-body').hidden=true;
  document.querySelector('.checkout-nav').hidden=true;
  document.querySelector('.checkout-success').hidden=false;
  cart=[];renderCart();
  checkoutForm.reset();paymentMethod='card';selectPaymentMethod('card');
});
document.querySelector('.checkout-back').addEventListener('click',()=>setCheckoutStep(Math.max(1,checkoutStep-1)));
document.querySelector('#checkout-review').addEventListener('click',event=>{const edit=event.target.closest('[data-edit-step]');if(edit)setCheckoutStep(Number(edit.dataset.editStep))});

function selectPaymentMethod(method){
  paymentMethod=method;
  document.querySelectorAll('.payment-tabs button').forEach(button=>button.classList.toggle('active',button.dataset.method===method));
  document.querySelector('.card-panel').classList.toggle('active',method==='card');
  document.querySelector('.pix-panel').classList.toggle('active',method==='pix');
  checkoutForm.querySelectorAll('.card-fields input').forEach(input=>{input.disabled=method!=='card';input.required=method==='card'});
  updateCheckoutSummary();
}
document.querySelectorAll('.payment-tabs button').forEach(button=>button.addEventListener('click',()=>selectPaymentMethod(button.dataset.method)));
checkoutForm.addEventListener('change',event=>{if(event.target.name==='shipping')updateCheckoutSummary()});

function digits(value,max){return value.replace(/\D/g,'').slice(0,max)}
checkoutForm.querySelector('[name="phone"]').addEventListener('input',event=>{const value=digits(event.target.value,11);event.target.value=value.replace(/^(\d{2})(\d)/,'($1) $2').replace(/(\d{5})(\d)/,'$1-$2')});
checkoutForm.querySelector('[name="cep"]').addEventListener('input',event=>{const value=digits(event.target.value,8);event.target.value=value.replace(/(\d{5})(\d)/,'$1-$2')});
checkoutForm.querySelector('[name="cardNumber"]').addEventListener('input',event=>{const value=digits(event.target.value,16);event.target.value=value.replace(/(\d{4})(?=\d)/g,'$1 ');document.querySelector('.card-last').textContent=(value.slice(-4)||'0000').padStart(4,'0')});
checkoutForm.querySelector('[name="cardExpiry"]').addEventListener('input',event=>{const value=digits(event.target.value,4);event.target.value=value.replace(/(\d{2})(\d)/,'$1/$2')});
checkoutForm.querySelector('[name="cardCvv"]').addEventListener('input',event=>{event.target.value=digits(event.target.value,4)});
checkoutForm.querySelector('[name="cardName"]').addEventListener('input',event=>{event.target.value=event.target.value.toUpperCase();document.querySelector('.card-preview small').textContent=event.target.value||'SEU NOME'});
renderCart();
