const ulQuadrado = document.querySelector ("ul.quadrado")

for (let i = 0; i <11; i++){
  const li = document.createElement ("li");
  
  const size = Math.floor(Math.random( )* (120 - 10) + 10);
  
   const position = Math.random( ) * (99-1)+1 ;
  
  li.style.widht = '${size}px';
  li.style.heigth = '${size}px';
  li.style.bottom =  '-${size}px';
  li.style.left = '${position}%';
  ulQuadrado.appendChild(li)
}