function showList(){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState==4 && xhr.status==200){
            let myTable = JSON.parse(this.responseText);

            tableSet(myTable);
        }
    };
    xhr.open("GET" , "https://jsonplaceholder.typicode.com/todos",true);
    xhr.send();
}

function tableSet(item){
    
    document.getElementById("things").style.display="none";
    //let item=obj.item;
    let table ="<thead><tr><th>TITLE</th><th>STATUS</th></tr></thead>";
    for(let i=0;i<item.length;i++)
    {       
        table+="<tr>";
        if(item[i].completed==true){
            table+="<td>"+item[i].title+"</td><td><input type=checkbox  checked disabled></td>";
        }else{
            table+="<td>"+item[i].title+"</td><td><input type=checkbox name=check onclick=checkcounter()></td>";  
        }
        
        table+="</tr>";
    }
    table+="</table>";
    document.getElementById("list").innerHTML=table;
}

function checkcounter()
{
    var i=0;
    var count=0;
    check = document.getElementsByName("check");
    for(i=0;i<check.length;i++)
    {
        if(check[i].checked==true){
            count=count+1
            console.log(count);
        }
    }
    if(count==5){
        alert("Congrats!!! You have been completed 5 tasks");
        location.reload();
    }
    
}
    