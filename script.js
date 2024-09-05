let main=document.getElementById("main");
let arr =[
    "https://i.pinimg.com/236x/3f/72/2e/3f722e7be5a952584063a35048820e89.jpg",
    "https://i.pinimg.com/236x/4c/a0/57/4ca057215fc1e2c9950b36797603e0a8.jpg",
    "https://i.pinimg.com/236x/51/64/42/51644205861f741271891faa6d758768.jpg",
    "https://i.pinimg.com/474x/e6/e1/45/e6e1457b6a612d2ce9f890991c3923f2.jpg",
    "https://i.pinimg.com/236x/f6/7e/61/f67e61ab43454fd66a3830ee20b76701.jpg",
    "https://i.pinimg.com/474x/6b/7a/b9/6b7ab92553c4f85dd599d67ab1c49bba.jpg",
    "https://i.pinimg.com/474x/0f/b4/5d/0fb45de2c9014d557c3ec0ea91a185f3.jpg",
    "https://i.pinimg.com/474x/98/4a/3f/984a3f4a3991c6c346468f73f252254e.jpg",
    "https://i.pinimg.com/236x/4a/c4/58/4ac458b8bc53756a40af5c1c947e4a5d.jpg",
    "https://i.pinimg.com/236x/d8/ff/ed/d8ffed41f8249509c7b3afd564d3686e.jpg",
    "https://i.pinimg.com/236x/fd/b4/5c/fdb45ca73f25da55e594f6b57d0f931a.jpg",
    "https://i.pinimg.com/236x/fe/e8/fd/fee8fdd14a4b098ed11499155b374da5.jpg",
    "https://i.pinimg.com/236x/ac/36/51/ac3651e64257475dff8596d312eb3d88.jpg"];
    let s="";
for(let i=1;i<=65;i++){
    let r=Math.floor(Math.random()*arr.length);

    s += `<div class="card"><img src=${arr[r]}></div>`
}
main.innerHTML=s;
    



        