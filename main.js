
title = document.getElementsByClassName("page-title")[0]
title.style.color = "lightskyblue"
title.style.backgroundColor = "lightgrey"
// Q2
name1 = document.getElementById("name")
name1.classList.add('family')
name1.style.fontWeight = 900;
// Q3
console.log(title);
image = document.getElementsByTagName('img')[0].setAttribute('src' , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ7fTFb3G8JZJy_oWg4rfoketLxdUnUF2eLw&s")

// Q4
let ul = document.querySelector('ul');
for (let i = 1; i <= 3; i++) {
    let li = document.createElement('li');
    li.textContent = `element ${i}`;
    ul.appendChild(li);
}


