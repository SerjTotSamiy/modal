function Gusty() {
	let guesty = document.querySelector('#Guesty')
	let minus = document.querySelector(".minus")
	let plus = document.querySelector(".plus")
	let mathe = 0
	minus.onclick = function () {
		if (parseInt(guesty.value) > 0){
			minus_guesty()
		}
		else if (parseInt(guesty.value) == 0){
			guesty.value = ''
		}
		else{
			alert("В минус уйти нельзя")
		}
	}
	plus.onclick = function () {
			plus_guesty()
		
	}
	function minus_guesty() {
		mathe -= 1
		guesty.value = mathe
		console.log(guesty.value)
	}
	function plus_guesty() {
		mathe += 1
		guesty.value = mathe
		console.log(guesty.value)
	}
}
Gusty()
function add_user_select() {
	let inp_interes = document.querySelector("#interes")
	let inp_sphere = document.querySelector("#sphere")
	let block_select = document.querySelector("#user_select_one")
	let block_selecte = document.querySelector("#user_select_two")
	inp_interes.onchange = function() {
		inp_one_val = inp_interes.value	
		for(i=0; i < inp_one_val.length; i++){
			if(inp_one_val[i] == ','){
				span = document.createElement("span")
				span.className = 'select_use'
				span.innerHTML = inp_one_val + '<span class="del">X</span>'
				block_select.appendChild(span)
				inp_interes.value = ''
				console.log(1)
			}
			}
			console.log(inp_interes.value)
			add_user_select()
		}
		inp_sphere.onchange = function() {
			inp_two_val = inp_sphere.value
			for(i=0; i < inp_two_val.length; i++){
				if(inp_two_val[i] == ','){
					span = document.createElement("span")
					span.className = 'select_use'
					span.innerHTML = inp_two_val + '<span class="del">X</span>'
					block_selecte.appendChild(span)
					inp_sphere.value = ''
					console.log(1)
				}
			}
			console.log(inp_interes.value)
			add_user_select()
		}
		
			
		
	let user = document.querySelectorAll('.select_use')
	for (i = 0; i<user.length; i++){
		user[i].onclick = function(){
			this.remove()
		}
	}
}
add_user_select()
function more_block(){
	let content = document.querySelector('.more_block')
	let button = document.querySelector('.but_more')
	button.onclick = function(e){
		e.preventDefault()
		if (content.classList.contains('more_block_active')){
			content.classList.remove('more_block_active')
		}
		else{
			content.classList.add('more_block_active')
		}
	}
}
more_block()

//modal window

document.querySelector(".grid_columm").addEventListener('click', (e) => {
    if (e.target == e.currentTarget) return
    const card = e.path.find(elem => elem.className == "block_home")
    const cardIndex = [...e.currentTarget.children].indexOf(card)
    document.querySelector(`.modal:nth-child(${cardIndex+1})`).hidden = false
})
document.querySelector(".modals").addEventListener('click', (e) => {
    if (e.target.className == "close_modal" || e.target.className == "modal") {
        e.target.closest(".modal").hidden = true
    }
})  