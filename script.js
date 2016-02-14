var tytul = document.getElementById("duzy").innerHTML;
tytul = tytul.toUpperCase();
document.getElementById("duzy").innerHTML=tytul;
//to było trudne XD

var koniec=false;
var tura=0;

function start()
{
    makeElements();
}

function makeElements() // tworzy pola do gry
{
  var przycisk="";
  for(i=0; i<9 ;i++)
  {
    var radek="p"+i;
    przycisk+='<div class="button" onclick="wykonaj('+i+')" id='+radek+'></div>';
    if(i+1%3==0) przycisk +='<div style="clear:both;"></div>';
  }
  document.getElementById("game").innerHTML=przycisk; // wprowadza zmienną z blokami do id game

}

function wykonaj(numer) // zajmuje pole danym znakiem - zależnie od tury gry
{
  podswietlPole(numer);
  if(tura % 2 !=1)
  {
    document.getElementById("p"+numer).innerText="X";
    tura++;
    wygasOnClick(numer);
  }
  else
  {
    document.getElementById("p"+numer).innerText="O";
    tura++;
    wygasOnClick(numer);
  }
  wypiszElementy(numer);
  znajdzWygrana();
}

function wypiszElementy(numer) // opsisuje zdarzenie w bloku po prawej stronie ekranu
{

  var waldo=document.getElementById("description");
  waldo.innerHTML+="Tura "+tura+": "+document.getElementById("p"+numer).textContent+" pole: "+(numer+1)+" <br/>";
  if(tura==9) document.getElementById("output").textContent="REMIS!!!";
}


function znajdzWygrana() //znajduje ciag znakow
{
  var pole0i="";
  var pole1i="";
  var pole2i="";

  for(i=0; i<9; i+=3) // pionowo
  {
    pole0i=document.getElementById("p"+(0+i)).textContent;
    pole1i=document.getElementById("p"+(1+i)).textContent;
    pole2i=document.getElementById("p"+(2+i)).textContent;
    if(pole0i==pole1i&&pole0i==pole2i&&pole0i!="")
    {
      animuj("p"+(0+i),"p"+(1+i),"p"+(2+i));
      document.getElementById("output").innerHTML="WYGRANA!!!";
    }
  }

  for(i=0; i<3; i+=1) //poziomo
  {
    pole0i=document.getElementById("p"+(0+i)).textContent;
    pole1i=document.getElementById("p"+(3+i)).textContent;
    pole2i=document.getElementById("p"+(6+i)).textContent;
    if(pole0i==pole1i&&pole0i==pole2i&&pole0i!="")
    {
      animuj("p"+(0+i),"p"+(3+i),"p"+(6+i));
      document.getElementById("output").innerHTML="WYGRANA!!!";
    }
  }

  for(i=0; i<1;i++) // przekatna w prawo
  {
    pole0i=document.getElementById("p0").textContent;
    pole1i=document.getElementById("p4").textContent;
    pole2i=document.getElementById("p8").textContent;
    if(pole0i==pole1i&&pole0i==pole2i&&pole0i!="")
    {
      animuj("p0","p4","p8");
      document.getElementById("output").innerHTML="WYGRANA!!!";
    }
  }

  for(i=0; i<1;i++) //przektna w lewo
  {
    pole0i=document.getElementById("p2").textContent;
    pole1i=document.getElementById("p4").textContent;
    pole2i=document.getElementById("p6").textContent;
    if(pole0i==pole1i&&pole0i==pole2i&&pole0i!="")
    {
      animuj("p2","p4","p6");
      document.getElementById("output").innerHTML="WYGRANA!!!";
    }
  }

}

function podswietlPole(numer) //podswietlenie pola w zależności od tego czy jest juz zajete czy nie
{
  var warunek = document.getElementById("p"+numer);
  if(warunek.innerHTML.lenght !== 0) warunek.setAttribute("class","button none");
}

function wygasOnClick(numer) // usuwa funkcje z onclick w razie potrzeby
{
  document.getElementById("p"+numer).setAttribute("onclick",";");
}

function animuj(p1,p2,p3) // dodaje animacje do danego buttona jezeli wygra
{
    document.getElementById(p1).setAttribute("class","button animuj");
    document.getElementById(p2).setAttribute("class","button animuj");
    document.getElementById(p3).setAttribute("class","button animuj");
    for(i=0;i<9;i++)
    {
      document.getElementById("p"+i).setAttribute("onclick",";");
    }


}


window.onload = start;
