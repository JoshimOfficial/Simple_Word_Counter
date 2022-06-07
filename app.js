let btn = document.querySelector(".chk_btn");
let user_input = document.querySelector(".user_input");

total_letter_arr =[];
btn.addEventListener("click", ()=>{
     let get_value = user_input.value;

     
     let total_word = document.querySelector(".word_text");
     let input_word_split = get_value.split(" ");
     total_word.innerText = input_word_split.length;

     let spaces = get_value.split(' ').length - 1;
     let total_space = document.querySelector(".space_text");
     total_space.innerText = spaces;
     
     let total_letter_sec = document.querySelector(".letter_text");
     total_letter_sec.innerText = get_value.length-spaces;








})