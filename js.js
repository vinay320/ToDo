const themeColors =document.querySelectorAll('[name="theme"]');

const storeTheme =function (theme) 
{
 
    localStorage.setItem('theme',theme);
}

const applyTheme=function () {
    const activeTheme=localStorage.getItem('theme');

    themeColors.forEach(themeOption => {
    if(themeOption.id === activeTheme)
    {
        themeOption.checked=true;
    }
});
    
};

themeColors.forEach((themeOption)=>
{
    themeOption.addEventListener('click',()=>
    {
        console.log(themeOption);
        storeTheme(themeOption.id)
    })
})

document.onload=applyTheme();




var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');


form.addEventListener('submit',addEvent);

itemlist.addEventListener('click',removeEvent);


function addEvent(e) 
{
    e.preventDefault();
    var item =document.getElementById('mainitem').value;
    var itemnew=document.createElement('li');
    itemnew.className='list-group-item';
    itemnew.appendChild(document.createTextNode(item));
    console.log(itemnew);    
    var dlt=document.createElement('button');
    dlt.className='btn btn-danger btn-sm float-right delete';
    dlt.appendChild(document.createTextNode('X'));
    dlt.addEventListener("click", function() {
        itemnew.remove()
      })
    itemnew.appendChild(dlt);
    itemlist.appendChild(itemnew);

   



    
}

var lis= document.getElementById("items").getElementsByTagName("li").innerText;
console.log(lis);

