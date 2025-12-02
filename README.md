# Galería de Imágenes Responsiva – Práctica 4.1

**Autor:** Ismael Franco Ruiz  
**Curso:** 2º DAW – Desarrollo Web en Entorno Cliente

## Descripción
Galería de 8 imágenes optimizadas para múltiples dispositivos, con:
- Redimensionamiento automático (small, medium, large, xlarge × 1x y 2x)
- Formato WebP para mejor rendimiento
- Uso de `srcset` y `sizes` para carga adaptativa
- Modal interactivo que muestra la imagen en alta resolución
- Diseño responsive con CSS Grid y efectos visuales

## Vista previa
✅ **Visita la galería desplegada en GitHub Pages:**  
👉 [https://ismaelfrdaw.github.io/P4.1galery/](https://ismaelfrdaw.github.io/P4.1galery/)

## Tecnologías usadas
- HTML5
- CSS3 (Grid, Responsive Design)
- JavaScript (generación dinámica de la galería)
- Node.js + Sharp (optimización de imágenes)

## Notas
- Las versiones optimizadas se generan ejecutando: `node resize-images.js`
- La carpeta `src/images/optimized/` está ignorada en `.gitignore` (se regenera fácilmente)
- Proyecto listo para entregar y desplegar en cualquier hosting estático