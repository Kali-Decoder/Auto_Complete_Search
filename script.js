import cities from './Data.js';
        
var search_terms=[];
 cities.map((ele)=>{
    search_terms.push(ele.name);
 });
 console.log(search_terms);

const text=document.querySelector("#text");

text.addEventListener("input",()=>{
    showresults(text.value);
});

function checking(input)
{
    if(input==='')
    return [];

    var reg=new RegExp(input);
    return search_terms.filter((item)=>{
        if(item.match(reg))
        return item;
    });
};

function showresults(val) {
    const result=document.querySelector(".result");
    result.innerHTML='';
    let list='';
    let terms = checking(val);
    for(let i=0; i<terms.length;i++)
    {
        list+=`<li class="list-group-item list-group-item-success ">${terms[i]}</li>`
    }
   result.innerHTML=`<ul class="list-group ">${list}</ul>`;

   var li=document.querySelectorAll("li");
   li.forEach((ele)=>{
       ele.addEventListener("click",()=>{
           text.value=ele.innerHTML;
       });
   })
}