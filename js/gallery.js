const images = [
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
        description: 'Hokkaido Flower',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea',
      },
    ];
const ul = document.querySelector(".gallery");

for (let i = 0; i < images.length; i++) {
    const li = document.createElement("li"); // создаем теги
    const img = document.createElement("img"); 
    const a = document.createElement("a"); 

// добавляем классы
    li.classList.add("gallery-item");
    img.classList.add("gallery-image");
    a.classList.add("gallery-link");

    img.src = images[i].preview; // устанавливаем источник картинки
    img.alt = images[i].description; // добавляем описание alt
    a.href = images[i].original;
    img.setAttribute("data-source", images[i].original); //setAttribute используется для работы с любыми атрибутами, включая стандартные (href, src, id и т.д.) и кастомные.

    // Добавляем обработчик события клика на ссылку
    a.addEventListener("click", function(event) {
        event.preventDefault(); // предотвращаем переход по ссылке
        });

  li.appendChild(a); // добавляем а в элемент <li>
  a.appendChild(img); // добавляем изображение в элемент <а>
  ul.appendChild(li); 
}
    // console.log(document.body);
    
// додати функціонал прослуховування кліка по елементах галереї та отримання посилання на велике зображення при кліку. Для цього використовуй прийом делегування на ul.gallery. Поки що при кліку на елемент галереї виводь у консоль посилання на велике зображення.
    
// уже выбран ul с классом "gallery"
// Добавляем обработчик события click на ul
ul.addEventListener("click", function(event) {
  // Проверяем, что клик произошел на изображении
  if (event.target.nodeName === "IMG") {
    // Получаем ссылку на большое изображение из атрибута data-source
    const largeImageURL = event.target.dataset.source;
      //   console.log(largeImageURL);
      
    //   Доповни свій код так, щоб при кліку по елементу галереї відкривалось модальне вікно підключеної бібліотеки
    //   Бібліотека basicLightbox представляє повністю функціональне модальне вікно, яке відмінно підходить під нашу задачу
      const instance = basicLightbox.create(`
        <img src="${largeImageURL}" width="1112" height="640">
    `);

    // Открываем модальное окно
    instance.show();
  }
});