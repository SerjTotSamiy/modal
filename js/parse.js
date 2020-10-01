fetch('./js/home.json', {})
    .then(resolve => resolve.json())
    .then(data => {
            let h2 = document.querySelectorAll('.columm_two h2')
            let grid_columm = document.querySelector(".grid_columm")
            for (let house in data) {

                for (let city in data[house]) {
                    console.log(data[house][city]['listings'][0]['content']['picture']['thumbnail'])
                    //Home
                    let block_home = document.createElement("div")
                    let status = document.createElement("span")
                    let spanGreen = document.createElement("span")
                    let entypoheart = document.createElement("span")
                    let foto_home = document.createElement("img")
                    let div_info_home = document.createElement("div")
                    let pric = document.createElement("span")
                    let info_about = document.createElement("span")
                    let adress = document.createElement("p")
                    //class Name
                    block_home.className = "block_home"
                    status.className = "status"
                    spanGreen.className = "green"
                    entypoheart.className = "entypo-heart"
                    foto_home.className = "foto_home"
                    div_info_home.className = "info_home"
                    pric.className = "price"
                    info_about.className = "info_about_home"
                    adress.className = "adress"
                    //Render html
                    grid_columm.append(block_home)
                    block_home.appendChild(status)
                    status.appendChild(spanGreen)
                    block_home.appendChild(entypoheart)
                    block_home.appendChild(foto_home)
                    block_home.appendChild(div_info_home)
                    div_info_home.appendChild(pric)
                    div_info_home.appendChild(info_about)
                    div_info_home.appendChild((adress))
                    //Out
                    pric.innerText = data[house][city]['address']['full']
                    info_about.innerText = `${data[house][city]['listings'][0]['content']['prices']['basePrice']} ${data[house][city]['listings'][0]['content']['prices']['currency']}`
                    foto_home.setAttribute('src', `${data[house][city]['listings'][0]['content']['picture']['thumbnail']}`)
                }


                /* let price_modal = document.querySelectorAll('.price_modal');
                 price_modal.forEach(elem => {
                     elem.innerText = data[city].paid.slice(-7)
                 })
                 let price = document.querySelectorAll('.price');
                 price.forEach(elem => {
                     elem.innerText = city
                 })
                 let info_about_home = document.querySelectorAll('.info_about_home');
                 info_about_home.forEach(elem => {
                     elem.innerText = data[city].paid.slice(-7)
                 })*/
            }

        }
    )