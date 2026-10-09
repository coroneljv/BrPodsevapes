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

function productCard(product){
  const [name,image,price,oldPrice,discount,installment,tags] = product;
  return `<article class="product-card" data-name="${escapeHtml(name.toLowerCase())}">
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
  if(buy){const count=document.querySelector('.cart-count');count.textContent=Number(count.textContent)+1;showToast('Produto adicionado ao carrinho')}
});

document.querySelector('#search-form').addEventListener('submit',event=>{event.preventDefault();renderCatalog(document.querySelector('#search-input').value);document.querySelector('#catalog').scrollIntoView({behavior:'smooth'})});
document.querySelector('.menu-button').addEventListener('click',event=>{const nav=document.querySelector('.category-nav');nav.classList.toggle('open');event.currentTarget.setAttribute('aria-expanded',nav.classList.contains('open'))});
document.querySelector('#newsletter-form').addEventListener('submit',event=>{event.preventDefault();event.currentTarget.reset();showToast('Cadastro realizado com sucesso!')});
document.querySelector('.telegram').addEventListener('click',()=>showToast('Canal do Telegram'));
document.querySelector('.loyalty').addEventListener('click',()=>showToast('Programa de Fidelidade'));
