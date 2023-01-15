// 1. Спросить у пользователя хочет ли он активировать темную тему(можно использовать confirm), если пользователь выбирает темную тему, то тогда мы меняем фон боди(темная тема: черный фон, белый текст; светлая тема: белый фон, черный текст), все темы должны быть указаны в классах CSS

// 1 variant
// let btn1 = document.createElement('button');
// btn1.innerText = 'Apply dark theme';
// document.body.append(btn1);
// btn1.addEventListener('click', () => {
//        document.body.classList.toggle('dark');
// });

// 2 variant
// let conf = confirm('Активировать темную тему?');
//        if (conf) {
//               // document.body.classList.add('dark');
//               document.body.style.background = 'black'
//        } else document.body.style.background = 'white'
//               // document.body.classList.add('light');

// 2. Создать пустой список в html документе, затем спросить у пользователя какие продукты добавить в список, пользователь может добавлять продукты в список бесконечно, пока не решит остановиться сам, список необходимо выводить на страницу html(у продукта должны быть название и цена)


// let btn = document.querySelector('button');
// let list = document.querySelector('ul');

// btn.addEventListener('click', () => {
//        let order = prompt('Add prod and price').split(' ')
//        list.innerHTML += `<li>Name:${order[0]}, price: ${order[1]}$</li>`
// });

// 3. Запросить у пользователя информацию, что он хочет добавить на страницу, картинку(путь к картинке, ширина, высота) или блок(цвет фона блока, ширина, высота), затем добавить этот элемент на страницу и спросить у пользователя, хочет ли он добавить еще элменты на страницу, если да, то заново спросить что добавить и так до бесконечности(либо цикл, либо кнопки), пока пользователь сам не захочет остановиться(элементы должны именно добавляться, а не перезаписывать предыдущие)

// let btnImg = document.querySelector('#img');
// let btnBlock = document.querySelector('#block');

// btnImg.addEventListener('click', () => {
//        let img = document.createElement('img');
//        document.body.append(img)
//        let order = prompt('Укажите путь к картинке, ширину, высоту').split(' ');
//        img.src = order[0];
//        img.width = order[1];
//        img.height = order[2];


// });

// btnBlock.addEventListener('click', e => {
//        let ask = prompt('Enter color, width and height with space between them').split(' ');
//        let div = document.createElement('div')
//        document.body.append(div);
//        div.style.background = ask[0]
//        div.style.width = ask[1] + "px"
//        div.style.height = ask[2] + "px"
// });

// 4. Дан массив с продуктами, задача: отобразить все продукты на странице(обязательно нужно выводить картинку, категорию, название, остальное на ваше усмотрение), также должна быть функция фильтрации по категории, то есть, вызываем функцию и она спрашивает у пользователя по какой категории нужно отфильтровать товары, указываем категорию и на странице остаются только те товары, которые относятся к данной категории(вызов функции фильтрации производить по нажатию на кнопку ОТФИЛЬТРОВАТЬ)

// let db = [
//        {
//               title: 'Samsung S10',
//               category: 'electronics',
//               price: 700,
//               desc: 'Super phone for your life!',
//               img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_1809_0_6.png'
//        },
//        {
//               title: 'iPhone 13 Pro',
//               category: 'electronics',
//               price: 1100,
//               desc: 'One of the most powerful cameras!',
//               img: 'https://www.tradeinn.com/f/13885/138855059/apple-iphone-13-pro-256gb-6.1-%D0%A1%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD.jpg'
//        },
//        {
//               title: 'Apple',
//               category: 'fruits',
//               price: 2,
//               desc: 'Healthy fruit that is used in many dishes and desserts.',
//               img: 'https://post.healthline.com/wp-content/uploads/2020/09/health-benefits-of-apples-732x549-thumbnail-732x549.jpg'
//        },
//        {
//               title: 'Orange',
//               category: 'fruits',
//               price: 7,
//               desc: 'Fruit for one of the most popular types of juice.',
//               img: 'https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/whole-halved-oranges.jpg'
//        },
//        {
//               title: 'Audi R8',
//               category: 'cars',
//               price: 98000,
//               desc: 'A sports car that can reach tremendous speed.',
//               img: 'https://cdn.motor1.com/images/mgl/JmVR6/s1/2019-audi-r8-onlocation.jpg'
//        }
// ];

// let list = document.createElement('ul');
// document.body.append(list)

// function render(category = 'all') {
//        let filteredDb = JSON.parse(JSON.stringify(db));
//        if (category == '' || category == ' ') {
//               return alert('Empty! Enter category!')
//        }
//        if (category != 'all') {
//               filteredDb = filteredDb.filter(item => item.category == category)
//        }
//        list.innerHTML = '';
//        filteredDb.forEach(i => {
//               list.innerHTML += `<li>Product: ${i.title}, Category: ${i.category}, <img src = "${i.img}" width = "50" height ="50"></li>`
//        })
// }
// render()

// let btn = document.createElement('button');
// btn.innerText = 'Filter';
// document.body.append(btn)


// btn.addEventListener('click', () => {
//        let order = prompt('Choose category');
//        render(order);
// })

// let btnClear = document.createElement('button');
// btnClear.innerText = 'Clear category'
// document.body.append(btnClear);
// btnClear.addEventListener('click', () => render())

// 5. Сохранение продуктов. Запросить у пользователя название, цену и картинку. Необходимо выводить данные о продуктах на страницу в любом удобном виде(карточки, список, блоки), если цена продукта ниже, чем 100$, то текстовая информация о товаре должна подсвечиваться красным цветом, если цена больше 100$, текст должен подсвечиваться зеленым

// let list = document.createElement('ul');
// document.body.innerHTML = `<button>Add products</button><h3>Products List</h3>`
// document.body.append(list);
// let btn = document.querySelector('button')
// let db = [];

// btn.addEventListener('click', () => {
//        list.innerHTML = '';

//        let order = prompt('Enter product name, price, image-URL with space').split(' ');

//        db.push({
//               name: order[0],
//               price: order[1],
//               img: order[2]
//        });

//        db.forEach((item) => {
//               let li = document.createElement("li");
//               list.append(li);
//               li.innerHTML = `Product: ${item.name}<br>Price: ${item.price}$<br><img src=${item.img} width = '30px' height= '30px'></img>`;
//               if (item.price > 100) {
//                 li.style.color = "green";
//               } else if (item.price < 100) {
//                 li.style.color = "red";
//               }
//        });
// });

// 6. Регистрация пользователей, создать форму в которой будем запрашивать информацию о пользователе(имя, пароль, возраст, имя может быть не уникальным, но у каждого должен быть айди, также при сохранении объекта пользователя добавляется ключ mailing со значением false - это рассылка новостей), также реализовать вывод пользователей на страницу(вывод может быть в любом удобном виде), напротив каждого пользователя должен быть инпут с типом чекбокс, как раз он и будет отвечать за рассылку, изменяется инпут - изменяется значение ключа mailing, также должна быть сама функция рассылки(на странице должна быть кнопка по нажатию на которую и будет запускаться функция), которая будет отправлять сообщение только тем пользователям, которые подписаны на рассылку(вывод может быть любым, алерт, консоль, страница)

let form = document.createElement('form');
form.innerHTML = `<input id = "inp-name" type = "text" placeholder ="Enter name"></input><br>
<input id = "inp-pass" type = "password" placeholder ="Enter password"></input><br>
<input id = "inp-age" type = "number" placeholder ="Enter age"></input><br>
<button id ="btn-reg">Register</button>`;
let blockUsers = document.createElement('div');
let list = document.createElement('ul');
document.body.append(form, blockUsers);
blockUsers.innerHTML = `<h3>User List:</h3><button id = "btn-send">Send mailing</button>`;
blockUsers.append(list)

let inpName = document.querySelector('#inp-name');
let inpPass = document.querySelector('#inp-pass');
let inpAge = document.querySelector('#inp-age');
// console.log(inpName);

let btnReg = document.querySelector('#btn-reg');
// console.log(btnReg);
let db = [];

btnReg.addEventListener('click', (e) => {
       e.preventDefault()

       if (!inpName.value.trim() || !inpPass.value.trim() || !inpAge.value.trim()) {
              alert('Some inputs are empty!');
              return;
       };

       let user = {
              name: inpName.value,
              id: Date.now(),
              pass: inpPass.value,
              age: inpAge.value,
              mailing: false
       };

       db.push(user)

       inpName.value = '';
       inpPass.value = '';
       inpAge.value = '';

       render();
});

function render() {
       list.innerHTML = '';
       db.forEach(item => {
              list.innerHTML += `<li>id: ${item.id}<br>name: ${item.name}<br>age: ${item.age}<br>mailing: <input id = "${item.id}" class = "inp-send" type = "checkbox"></input></li>`
       });
};
render();

let btnSend = document.querySelector('#btn-send');
       
function sendMailing() {
       let inpCheck = document.querySelectorAll('.inp-send');

       inpCheck.forEach(item => {
              if (item.checked === true) {
                     db.forEach(elem => {
                            if (elem.id == item.id) {
                                   elem.mailing = true;
                                   alert(`'Messages send - ${elem.name}'`)
                          }
                   })  
              }
       })
};

btnSend.addEventListener('click', sendMailing);
