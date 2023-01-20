const elForm = document.querySelector('.form')
const elInput = document.querySelector('.input')
const redBalls = document.querySelector('.red_balls')
const yellowBalls = document.querySelector('.yellow_balls')
elForm.addEventListener('submit', function(evt){
    evt.preventDefault()
   const value = elInput.value;
    if(value <= 9){
        redBalls.className = ('border-solid border-2 border-sky-500 flex rounded-3xl mt-8 gap-x-2.5 p-10 ml-52 rounded-full border-red-600 ' )
        yellowBalls.className = ('flex mt-8 gap-x-2.5 p-10 justify-center ml-52')
    }else{
        yellowBalls.className = ('border-solid border-2 border-yellow-300 flex rounded-3xl mt-8 gap-x-2.5 p-10 justify-center ml-52 rounded-full 	border-color: rgb(253 224 71);')
        redBalls.className = ('flex mt-8 gap-x-2.5 p-10 justify-center ml-52')
    }
})