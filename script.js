console.log("Fonctionnalité 1:");
  let clickFooter = document.getElementsByTagName("footer")[0];
  let onFooterClick = function(){
    console.log("Clique");
  };
  clickFooter.addEventListener("click", onFooterClick);

  // Bien penser au [0] dans document.getElementsByTagName("footer")[0];
  // autre façon de faire avec document.querySelector("footer");
console.log(" ");


console.log("Fonctionnalité 1-bis:")
  let clicknum = 0
  let clickFooter2 = document.getElementsByTagName("footer")[0];
  let onFooterClick2 = function(){
    console.log("Clique");
    clicknum += 1
    console.log(clicknum)
  };
  clickFooter2.addEventListener("click", onFooterClick2);
console.log(" ")


console.log("Fonctionnalité 2:")
  let hamburger = document.querySelector("button.navbar-toggler");
  let clickhamburger = document.getElementById("navbarHeader");
    let looseCollapse = function(){
      clickhamburger.classList.toggle("collapse");
    };
  hamburger.addEventListener("click", looseCollapse);
console.log(" ")


console.log("Fonctionnalité 3:")
  let firstcard = document.getElementsByClassName("card")[0];
  let editfirstcard = document.getElementsByClassName("card")[0].querySelector("button.btn-outline-secondary");
    console.log("Simple affichage de test, voici la first card et le bouton Edit : ");
    console.log(firstcard);  
    console.log(editfirstcard);
  let clickedit = function (){
    firstcard.style.color = 'red';
  };
  editfirstcard.addEventListener('click', clickedit);
console.log(" ")


console.log("Fonctionnalité 4:")
  let secondcard = document.getElementsByClassName("card")[1];
  let editsecondcard = document.getElementsByClassName("card")[1].querySelector("button.btn-outline-secondary");
  let clickedit2 = function (){
    if (secondcard.style.color === 'green'){
      secondcard.style.color = ''} 
    else{ secondcard.style.color = 'green' };
  };
  editsecondcard.addEventListener('click', clickedit2);
console.log(" ")


console.log("Fonctionnalité 5:")
// désactiver le tag <link> avec JavaScript : https://stackoverflow.com/questions/5376444/how-do-i-disable-a-href-link-in-javascript
// changer la valeur du tag avec setAttribute : https://developer.mozilla.org/fr/docs/Web/API/Element/setAttribute
  let allbootstrap = document.getElementsByTagName('link')[0];
  let header = document.getElementsByTagName('header')[0];
  let nuclearsauce = function (){
    if (allbootstrap.href == "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"){
      allbootstrap.setAttribute("href", "#");
    }else{allbootstrap.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
    };
  };
  header.addEventListener("dblclick", nuclearsauce);
console.log(" ")
