let db = new Localbase('db');

let save_btn = document.getElementById("save_btn");
let get_btn = document.getElementById("get_btn");
let update_btn = document.getElementById("update_btn");
let overWrite_btn = document.getElementById("overWrite_btn");
let delete_btn = document.getElementById("delete_btn");
let deleteAllCollection_btn = document.getElementById("deleteAllCollection_btn");
let deleteDataBase_btn = document.getElementById("deleteDataBase_btn");

save_btn.addEventListener("click", addData);
get_btn.addEventListener("click", getData);
update_btn.addEventListener("click", updateData);
overWrite_btn.addEventListener("click", overWriteData);
delete_btn.addEventListener("click", deleteData);
deleteAllCollection_btn.addEventListener("click", deleteAllCollection);
deleteDataBase_btn.addEventListener("click", deleteDataBase);


function addData(){
    db.collection('users').add({
        id: 1,
        name: 'Bill',
        age: 47
      });
}

function getData(){
    db.collection('users').get().then(users => {
        console.log(users)
      })
}

function updateData(){
    db.collection('users').doc({ id: 1 }).update({
        name: 'William'
      })
}

function overWriteData(){
    db.collection('users').doc({ id: 1 }).set({
        id: 4, 
        name: 'Pauline',
        age: 27
      })
}

function deleteData(){
    db.collection('users').doc({ id: 1 }).delete()
}


function deleteAllCollection(){
    db.collection('users').delete()
}

function deleteDataBase(){
    db.delete()
}