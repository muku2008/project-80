function getParagraph()
{
 var input=[];

 for(var i=1 ; i<=6 ; i++)
 {
     input.push(document.getElementById("input_box_"+ i).value);
 }
 document.getElementById("show_paragraph").innerHTML=input.join(" ");
}