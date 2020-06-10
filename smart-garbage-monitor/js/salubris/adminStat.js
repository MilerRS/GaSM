//aici aduc cartierle impreuna cu gunoaiele aferente

window.onload=populateCartiere();
window.onload=deleteComplaint();
function deleteComplaint(mesaj)
{
    var xhr=new XMLHttpRequest(),method='POST',overrideMimeType='application/json',url="https://smart-garbage-monitor.herokuapp.com/rest/rest.php/deleteComplaint";
    var txt={mesaj:mesaj}
    var obj=JSON.stringify(txt);
    console.log(obj);
    xhr.onreadystatechange=function()
    {

        if(this.readyState==4 && this.status==200)
        {
            alert("Campania a fost stearsa");
            
        }
    };
    xhr.open(method,url,true);
    xhr.send(obj);
}

function showComments(id)
{

    
            


    var xhr=new XMLHttpRequest(),method='GET',overrideMimeType='application/json',url="https://smart-garbage-monitor.herokuapp.com/rest/rest.php/comments/"+id;
    var elementCartier=document.getElementById(id);
    if(elementCartier.nextElementSibling.style.display==="block" )
            {
               
                
                elementCartier.nextElementSibling.style.display="none";
                return;
            }
    var sectiuneaDeComentarii=document.createElement('div');
    elementCartier.parentNode.insertBefore(sectiuneaDeComentarii,elementCartier.nextSibling);
    
    xhr.onreadystatechange=function()
    {

        if(this.readyState==4 && this.status==200)
        {
            var comentarii=JSON.parse(xhr.responseText);
            
            for(var i=0;i<comentarii.length;i++)
            {
                //ele.innerHTML=ele.innerHTML+'<div>'+comentarii[i].complaint+'</div>'+'<br>';
                var comentariu=document.createElement('button');
                comentariu.className="complaint";
                
                
                comentariu.innerText=comentarii[i].complaint;
               
                sectiuneaDeComentarii.appendChild(comentariu);
               
            }
            var items=document.getElementsByClassName('complaint');
     
            for(var i=0;i<items.length;i++)
            {
                items[i].onclick=function()
                {
                 deleteComplaint(this.innerText);
                }
            }
            elementCartier.classList.toggle("active");
            sectiuneaDeComentarii.style.display="block";
           
            
        }
    }
     xhr.open(method,url,true);
     xhr.send();
    
}

function populateCartiere()
{

    var xhr=new XMLHttpRequest(),method='GET',overrideMimeType='application/json',url="https://smart-garbage-monitor.herokuapp.com/rest/rest.php/cartiereSimplu"; 
xhr.onreadystatechange=function(){
  if (this.readyState == 4 && this.status == 200) {
  var cartiere=JSON.parse(xhr.responseText);
  var ele=document.getElementById("cartiere1");

  for(var i=0;i<cartiere.length;i++)
  {
      ele.innerHTML=ele.innerHTML+'<button  class="cartierDupaHover" id="'+cartiere[i].cartiere+'" onclick="showComments(this.id)">'+cartiere[i].cartiere+'</button>';

  }
}
};
xhr.open(method,url,true);
xhr.send();
}
