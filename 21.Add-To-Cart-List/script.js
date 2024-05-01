document.body.style.padding="0";
document.body.style.margin="0";
document.body.style.boxSizing="border-box";


let backgroundEle=document.createElement('div');
backgroundEle.style.backgroundImage='url("https://images.unsplash.com/photo-1611279522012-6c3e2d2c604f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
backgroundEle.style.height='100vh';
backgroundEle.style.width='100%';
backgroundEle.style.fontFamily="sans-serif"
backgroundEle.style.backgroundSize="cover";     
backgroundEle.style.backgroundPosition="center";
document.body.appendChild(backgroundEle);

let imageOverlayEle=document.createElement('div');
imageOverlayEle.style.backgroundColor="rgba(0,0,0,0.7)";
imageOverlayEle.style.height="100vh";
imageOverlayEle.style.width='100%';
imageOverlayEle.style.display="flex";
imageOverlayEle.style.alignItems="center";
imageOverlayEle.style.flexDirection="column"
imageOverlayEle.style.justifyContent="center"
backgroundEle.appendChild(imageOverlayEle);


let headingEle=document.createElement('h1');
headingEle.style.color="white"; 
headingEle.style.fontSize="50px"; 
headingEle.textContent="Add To Cart";
imageOverlayEle.appendChild(headingEle);



let searchEleContainer=document.createElement('div');
imageOverlayEle.appendChild(searchEleContainer);

let searchElement=document.createElement('input');
searchElement.style.height="35px";
searchElement.style.width="350px";
searchElement.style.borderRadius="7px"
searchElement.style.fontSize="18px" 
searchElement.style.padding="10px";
searchElement.style.outline="none";
searchEleContainer.appendChild(searchElement);

let buttonEle=document.createElement('button');
buttonEle.textContent="Add";
buttonEle.style.color="white";
buttonEle.style.marginLeft="10px";
buttonEle.style.background="teal";
buttonEle.style.height="60px";
buttonEle.style.width="120px";
buttonEle.style.borderRadius="7px";
buttonEle.style.fontWeight="600";
buttonEle.style.fontSize="18px";
searchEleContainer.appendChild(buttonEle);


let listContainer=document.createElement("div");
imageOverlayEle.appendChild(listContainer);

let ListItemsElement=document.createElement('ol');
ListItemsElement.style.textAlign="left";
ListItemsElement.style.height="500px";
ListItemsElement.style.width="500px";
listContainer.appendChild(ListItemsElement);



buttonEle.addEventListener('click',function(){
    if (searchElement.value!==""){
        let searchValue=searchElement.value;
        let ListElement=document.createElement('li');
        ListElement.style.color="white";
        ListElement.style.fontSize="20px";
        ListElement.style.margin="15px 0px";
        ListItemsElement.appendChild(ListElement);
        ListElement.textContent=searchValue;
        localStorage.setItem('items',searchElement.value);
        searchElement.value="";
    }


});

searchElement.addEventListener('keydown',function(event){
    if (event.key==="Enter"){
        if (searchElement.value!==""){
            let searchValue=searchElement.value;
            let ListElement=document.createElement('li');
            ListElement.style.color="white";
            ListElement.style.fontSize="20px";
            ListElement.style.margin="15px 0px";
            ListItemsElement.appendChild(ListElement);
            ListElement.textContent=searchValue;
            localStorage.setItem('items',searchElement.value);
            searchElement.value="";
        }
    }

});

