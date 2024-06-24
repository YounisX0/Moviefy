let availablekeywords = [
    'Hit-man',
    'Jumanji: Welcome to the Jungle',
    'El-feel el-azraa',
    'Tesbah 3la 5eer',
    'The Eternals',
    'Spectre',
    'Money-Heist',
    'Ra8da el Motwa7sha',
    'Dune Part-Two',
    'Agents ofShield',
    'Loki',
    'Squid game',
    'Hamlet Pheron',
    'Hawk eye',
    'Jungle cruise',
    'Spider-Man: No-way home',
  ];
  const resultBox = document.querySelector(".result-box");
  const inputBox= document.getElementById("search-input");
  inputBox.onkeyup=function(){
  let result=[];
  let input = inputBox.value;
  if(input.length){
    result= availablekeywords.filter((keyword)=>{
    return keyword.toLowerCase().includes(input.toLowerCase());
  });
  console.log(result);
  }
  display(result);
  if(!result.length){
    resultBox.innerHTML='';
  }
  }
  function display(result){
    const content= result.map((list)=>{
      return"<li onclick=selectInput(this)>"+list+"</li>";
    });
    resultBox.innerHTML= "<ul>"+ content.join('') +"</ul>";
  }
  function selectInput(list){
  inputBox.value=list.innerHTML;
  resultBox.innerHTML='';
  }