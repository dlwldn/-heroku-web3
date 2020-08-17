const shirts = document.querySelector(".shirts");
const pants = document.querySelector(".pants");
const skirt = document.querySelector(".skirt");
const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");
const pink = document.querySelector(".pink");
const logo = document.querySelector(".logo");
const listItem = document.querySelector(".list-item"); 

const lists = [
    {item: "pink_t", gender: "female", size: "large size"},
    {item: "blue_p", gender: "man", size: "small size"},
    {item: "yellow_p", gender: "man", size: "large size"},
    {item: "yellow_s", gender: "female", size: "large size"},
    {item: "blue_s", gender: "female", size: "large size"},
    {item: "blue_t", gender: "male", size: "large size"},
    {item: "yellow_t", gender: "male", size: "large size"},
    {item: "pink_s", gender: "female", size: "large size"},
    {item: "yellow_p", gender: "man", size: "large size"},
    {item: "yellow_s", gender: "female", size: "large size"},
    {item: "blue_s", gender: "female", size: "large size"},
    {item: "blue_t", gender: "male", size: "large size"},
    {item: "yellow_t", gender: "male", size: "large size"},
    {item: "pink_s", gender: "female", size: "large size"},
]

logo.addEventListener("click", ()=> {
    const listAll = document.querySelectorAll(".item");
    listAll.forEach((list) => {
        list.classList = "item";
    })
})

shirts.addEventListener("click", ()=> {
    const listAll = document.querySelectorAll(".item");
    listAll.forEach((list) => {
        list.classList = "item";
    })

    listAll.forEach((list)=> {
        const imgAttr = list.querySelector("img").getAttribute("alt");
        const length = imgAttr.length;
        const initial = imgAttr.slice(length-1, length);
        if(initial !== "t") {
            list.classList = "item hidden";
        }
    })
})

pants.addEventListener("click", ()=> {
    const listAll = document.querySelectorAll(".item");
    listAll.forEach((list) => {
        list.classList = "item";
    })

    listAll.forEach((list)=> {
        const imgAttr = list.querySelector("img").getAttribute("alt");
        const length = imgAttr.length;
        const initial = imgAttr.slice(length-1, length);
        if(initial !== "p") {
            list.classList = "item hidden";
        }
    })
})

skirt.addEventListener("click", ()=> {
    const listAll = document.querySelectorAll(".item");
    listAll.forEach((list) => {
        list.classList = "item";
    })

    listAll.forEach((list)=> {
        const imgAttr = list.querySelector("img").getAttribute("alt");
        const length = imgAttr.length;
        const initial = imgAttr.slice(length-1, length);
        if(initial !== "s") {
            list.classList = "item hidden";
        }
    })
})


blue.addEventListener("click", ()=> {
    const listAll = document.querySelectorAll(".item");
    listAll.forEach((list) => {
        list.classList = "item";
    })

    listAll.forEach((list)=> {
        const imgAttr = list.querySelector("img").getAttribute("alt");
        const initial = imgAttr.slice(0, 1);
        if(initial !== "b") {
            list.classList = "item hidden";
        }
    })
})

yellow.addEventListener("click", ()=> {
    const listAll = document.querySelectorAll(".item");
    listAll.forEach((list) => {
        list.classList = "item";
    })

    listAll.forEach((list)=> {
        const imgAttr = list.querySelector("img").getAttribute("alt");
        const initial = imgAttr.slice(0, 1);
        if(initial !== "y") {
            list.classList = "item hidden";
        }
    })
})

pink.addEventListener("click", ()=> {
    const listAll = document.querySelectorAll(".item");
    listAll.forEach((list) => {
        list.classList = "item";
    })

    listAll.forEach((list)=> {
        const imgAttr = list.querySelector("img").getAttribute("alt");
        const initial = imgAttr.slice(0, 1);
        if(initial !== "p") {
            list.classList = "item hidden";
        }
    })
})

createListItem = (lists) => {
    lists.map((list)=> {
        const item = list.item;
        const gender = list.gender;
        const size = list.size;
        
        const li = document.createElement("li");
        const img = document.createElement("img");
        const p = document.createElement("p");

        li.classList = "item";
        img.classList = "list-img";
        img.setAttribute("src", `./assets/imgs/${item}.png`);
        img.setAttribute("alt", item);
        p.innerHTML = `${gender}, ${size}`
        li.appendChild(img);
        li.appendChild(p);
        listItem.appendChild(li);
    })
}

createListItem(lists);

