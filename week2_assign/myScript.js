//기존 기능에 고정하기 기능 추가함

const todoContainer = document.querySelector(".todoContainer");
reload(); //기존에 있던 애들의 eventlistner 달아주기용


function makeNewTodo(text) {  //일정에다가 새로운 일과 등록
    
    const newTodoBox = document.createElement("div");
    newTodoBox.className = "todo";
  
    const newTodoCheck = document.createElement("input");
    newTodoCheck.type = "checkbox";
    newTodoCheck.className = "checkbox";
  
    const newTodoText = document.createElement("div");
    newTodoText.className = "todoText";
    newTodoText.innerHTML = text;

    const setPinIcon = document.createElement("div");
    setPinIcon.className = "setPin";
    setPinIcon.innerHTML = "📌";
  
    const trashIcon = document.createElement("div");
    trashIcon.className = "trash";
    trashIcon.innerHTML = "🗑️";
  
    newTodoBox.appendChild(newTodoCheck);
    newTodoBox.appendChild(newTodoText);
    newTodoBox.appendChild(setPinIcon);
    newTodoBox.appendChild(trashIcon);
    console.log(todoContainer);
  
    todoContainer.prepend(newTodoBox);


  }

  const todoForm = document.getElementsByTagName("form")[0];
  const inputTodo = document.getElementById("newTodoText");
  
  todoForm.addEventListener("submit", (e) => { //새로운 일과 등록을 위해 '추가'버튼 눌렀을 경우
    e.preventDefault();
    const newTodoText = inputTodo.value;
    makeNewTodo(newTodoText);
    inputTodo.value = "";
    reload(); //새로 등록된 일과의 체크박스, trash, set icon을 기존 checkboxs, trashicons, seticons에 추가하기 위함
  });
 

  
  function toggleTodo(e) { //일 다 끝냈을 경우
    const toggledTodo = e.target.parentElement;
    console.log(toggledTodo);
  
    const toggleTodoText = toggledTodo.children[1];
    toggleTodoText.classList.toggle("done");
  }

 
  
  function deleteTodo(e) { //지우기
    const toggledTodo = e.target.parentElement;
    const toggleTodoText = toggledTodo.children[1].innerHTML;
    console.log(toggleTodoText);
    const ok = confirm("[" + toggleTodoText + "] 할 일을 삭제하시겠습니까?");
    if (ok) {
      todoContainer.removeChild(toggledTodo);
    }
  }
  
  function setTodo(e){  //고정시키기
    const settedTodo = e.target.parentElement;
    console.log(settedTodo);
    todoContainer.prepend(settedTodo);

    const showSetted = settedTodo.children[2];
    console.log(showSetted);
    showSetted.classList.toggle("setted");
  }
 
  function reload(){
    let checkboxes = document.querySelectorAll("input.checkbox");
    let trashIcons = document.querySelectorAll(".trash");
    let setPinIcons = document.querySelectorAll(".setPin");

    checkboxes.forEach.call(checkboxes, function(col){
      col.addEventListener("click", toggleTodo, false)
    });

    trashIcons.forEach((element) => element.addEventListener("click", deleteTodo));

    setPinIcons.forEach((element) => element.addEventListener("click", setTodo));
  }