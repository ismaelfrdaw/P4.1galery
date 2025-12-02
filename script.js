const galleryItems = [
  { id: 'aves', desc: 'Un grupo de aves marinas descansando sobre rocas con el océano azul de fondo.' },
  { id: 'canastaazul', desc: 'Una canasta azul, suspendida contra un cielo claro.' },
  { id: 'hombrecimamontaña', desc: 'Un corredor alcanza la cima, con las nubes a sus pies.' },
  { id: 'hombrenegroboina', desc: 'Hombre elegante con boina, gafas y anillos, posando con actitud.' },
  { id: 'hombreyperroenlanieve', desc: 'Un hombre y su fiel compañero caminan juntos por la nieve, con la ciudad dormida al fondo.' },
  { id: 'leñacortadabajolosarboles', desc: 'Troncos caídos reposan bajo la sombra de árboles de otoño, junto a un sendero solitario.' },
  { id: 'lorotropical', desc: 'Un loro tropical, vibrante y lleno de vida, con plumas que parecen pintadas por la mano de la selva.' },
  { id: 'perronieve', desc: 'Un perro disfruta la nieve con los ojos cerrados, como si estuviera soñando.' }
];

const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-image');
const modalCaption = document.getElementById('modal-caption');
const closeBtn = document.querySelector('.close');

function buildSrcSet(id) {
  const sizes = ['small', 'medium', 'large', 'xlarge'];
  const widths = { small: 400, medium: 800, large: 1200, xlarge: 1600 };
  let srcset = '';
  sizes.forEach(size => {
    const baseWidth = widths[size];
    srcset += `src/images/optimized/${size}/${id}-${size}@1x.webp ${baseWidth}w, `;
    srcset += `src/images/optimized/${size}/${id}-${size}@2x.webp ${baseWidth * 2}w, `;
  });
  return srcset.slice(0, -2);
}

galleryItems.forEach(item => {
  const div = document.createElement('div');
  div.className = 'gallery-item';

  const img = document.createElement('img');
  img.className = 'gallery-img';
  img.src = `src/images/optimized/small/${item.id}-small@1x.webp`;
  img.srcset = buildSrcSet(item.id);
  img.sizes = "(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw";
  img.alt = item.desc;

  const caption = document.createElement('p');
  caption.className = 'caption';
  caption.textContent = item.desc;

  div.appendChild(img);
  div.appendChild(caption);
  gallery.appendChild(div);

  div.addEventListener('click', () => {
    const screenWidth = window.innerWidth;
    let size = 'xlarge';
    if (screenWidth <= 480) size = 'medium';
    else if (screenWidth <= 768) size = 'large';
    else if (screenWidth <= 1200) size = 'xlarge';
    
    const density = (screenWidth <= 768) ? '2x' : '1x';
    modalImg.src = `src/images/optimized/${size}/${item.id}-${size}@${density}.webp`;
    modalImg.alt = item.desc;
    modalCaption.textContent = item.desc;
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});