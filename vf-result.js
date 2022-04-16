



function verificaX()
{
            let t1, t2, t3, t4, t5, t6, t7, t8, t9
            t1 = document.getElementById("btn1-click")
            t2 = document.getElementById("btn2-click")
            t3 = document.getElementById("btn3-click")
            t4 = document.getElementById("btn4-click")
            t5 = document.getElementById("btn5-click")
            t6 = document.getElementById("btn6-click")
            t7 = document.getElementById("btn7-click")
            t8 = document.getElementById("btn8-click")
            t9 = document.getElementById("btn9-click")
            let pri, seg, terc, quart, quint, sexta, setm, oita, nove

    let busca = document.querySelectorAll("button:disabled > .x-confirm")
    let espaços = document.querySelectorAll("#jogo-btn > button:disabled")
    for (let i=0; i<= busca.length - 1; i++)
     {
        if(busca[i].parentNode == t1)
        {
            pri = 1
        }    

        else if(busca[i].parentNode == t2)
        {
            seg = 2
        }
        
        else if(busca[i].parentNode == t3)
        {
            terc = 3
        }

        else if(busca[i].parentNode == t4)
        {
            quart = 4
        }

        else if(busca[i].parentNode == t5)
        {
            quint = 5
        }

        else if(busca[i].parentNode == t6)
        {
            sexta = 6
        }

        else if(busca[i].parentNode == t7)
        {
            setm = 7
        }

        else if(busca[i].parentNode == t8)
        {
            oita = 8
        }

        else if(busca[i].parentNode == t9)
        {
           nove = 9
        }

        else
        {
        }
    }

    if(pri + seg + terc == 6 || quart + quint + sexta == 15 || setm + oita + nove == 24)
    {
        victoriaX()
    }
    else if(pri + quart + setm == 12 || seg + quint + oita == 15 || terc + sexta + nove == 18)
    {
        victoriaX()
    }
    
    else if(terc + quint + setm == 15 || pri + quint + nove == 15)
    {
        victoriaX()
    }
    
    else if(espaços.length > 8)
    {
        empate()
    }
    else
    {
        let tempo = setTimeout(verificaO, 1)
    }
}



function verificaO()
{
            let t1, t2, t3, t4, t5, t6, t7, t8, t9
            t1 = document.getElementById("btn1-click")
            t2 = document.getElementById("btn2-click")
            t3 = document.getElementById("btn3-click")
            t4 = document.getElementById("btn4-click")
            t5 = document.getElementById("btn5-click")
            t6 = document.getElementById("btn6-click")
            t7 = document.getElementById("btn7-click")
            t8 = document.getElementById("btn8-click")
            t9 = document.getElementById("btn9-click")
            let pri, seg, terc, quart, quint, sexta, setm, oita, nove

    let busca = document.querySelectorAll("button:disabled > .bola-confirm")
    let espaços = document.querySelectorAll("#jogo-btn > button:disabled")
    for (let i=0; i<= busca.length - 1; i++)
     {
        if(busca[i].parentNode == t1)
        {
            pri = 1
        }    

        else if(busca[i].parentNode == t2)
        {
            seg = 2
        }
        
        else if(busca[i].parentNode == t3)
        {
            terc = 3
        }

        else if(busca[i].parentNode == t4)
        {
            quart = 4
        }

        else if(busca[i].parentNode == t5)
        {
            quint = 5
        }

        else if(busca[i].parentNode == t6)
        {
            sexta = 6
        }

        else if(busca[i].parentNode == t7)
        {
            setm = 7
        }

        else if(busca[i].parentNode == t8)
        {
            oita = 8
        }

        else if(busca[i].parentNode == t9)
        {
           nove = 9
        }

        else
        {
        }
    }

    if(pri + seg + terc == 6 || quart + quint + sexta == 15 || setm + oita + nove == 24)
    {
        victoriaO()
    }
    else if(pri + quart + setm == 12 || seg + quint + oita == 15 || terc + sexta + nove == 18)
    {
        victoriaO()
    }
    
    else if(terc + quint + setm == 15 || pri + quint + nove == 15)
    {
        victoriaO()
    }

    else if(espaços.length > 8)
    {
        empate()
    }

    else
    {
        let tempo = setTimeout(verificaX, 1)
    }
}



function victoriaX()
{
    let buscador = document.querySelectorAll("#nwIMG")
    if(buscador.length > 0)
    {

    }
    else
    {
                    var cont,t1, t2, t3, t4, t5, t6, t7, t8, t9
            t1 = document.getElementById("btn1-click")
            t2 = document.getElementById("btn2-click")
            t3 = document.getElementById("btn3-click")
            t4 = document.getElementById("btn4-click")
            t5 = document.getElementById("btn5-click")
            t6 = document.getElementById("btn6-click")
            t7 = document.getElementById("btn7-click")
            t8 = document.getElementById("btn8-click")
            t9 = document.getElementById("btn9-click")
            var adiv = document.createElement("div")
            adiv.className = "alert alert-success"
            adiv.role = "alert"
            adiv.textContent = "X Vence a Partida, Parabéns"
            var bte = document.createElement("button")
            bte.className = "btn btn-lg btn-block"
            bte.onclick = function(){voltar()}
            var bte_img = document.createElement("img")
            bte_img.id = "nwIMG"
            bte_img.style.width = "3.5rem"
            bte_img.src = "icons/arrow-counterclockwise.svg"

            var cima = document.getElementById("jogo-btn")
            cima.appendChild(adiv)
            cima.appendChild(bte)
            bte.appendChild(bte_img)
            cima.appendChild(document.createElement("BR"))
            cima.appendChild(document.createElement("BR"))
            t1.disabled = "disable"
            t2.disabled = "disable"
            t3.disabled = "disable"
            t4.disabled = "disable"
            t5.disabled = "disable"
            t6.disabled = "disable"
            t7.disabled = "disable"
            t8.disabled = "disable"
            t9.disabled = "disable"
            function voltar()
            {
            document.getElementById("div-Jogo").remove();
            jogo();
            } 

    }
}


function victoriaO()
{    let buscador = document.querySelectorAll("#nwIMG")
if(buscador.length > 0)
{

}
else
{
                var cont,t1, t2, t3, t4, t5, t6, t7, t8, t9
        t1 = document.getElementById("btn1-click")
        t2 = document.getElementById("btn2-click")
        t3 = document.getElementById("btn3-click")
        t4 = document.getElementById("btn4-click")
        t5 = document.getElementById("btn5-click")
        t6 = document.getElementById("btn6-click")
        t7 = document.getElementById("btn7-click")
        t8 = document.getElementById("btn8-click")
        t9 = document.getElementById("btn9-click")
        var adiv = document.createElement("div")
        adiv.className = "alert alert-success"
        adiv.role = "alert"
        adiv.textContent = "O Vence a Partida, Parabéns"
        var bte = document.createElement("button")
        bte.className = "btn btn-lg btn-block"
        bte.onclick = function(){voltar()}
        var bte_img = document.createElement("img")
        bte_img.id = "nwIMG"
        bte_img.style.width = "3.5rem"
        bte_img.src = "icons/arrow-counterclockwise.svg"

        var cima = document.getElementById("jogo-btn")
        cima.appendChild(adiv)
        cima.appendChild(bte)
        bte.appendChild(bte_img)
        cima.appendChild(document.createElement("BR"))
        cima.appendChild(document.createElement("BR"))
        t1.disabled = "disable"
        t2.disabled = "disable"
        t3.disabled = "disable"
        t4.disabled = "disable"
        t5.disabled = "disable"
        t6.disabled = "disable"
        t7.disabled = "disable"
        t8.disabled = "disable"
        t9.disabled = "disable"
        function voltar()
        {
        document.getElementById("div-Jogo").remove();
        jogo();
        } 

}
}

function empate()
{

    let buscador = document.querySelectorAll("#nwIMG")
    if(buscador.length>0)
    {

    }
    else
    {
        var adiv = document.createElement("div")
        adiv.className = "alert alert-info"
        adiv.role = "alert"
        adiv.textContent = "Ohhh, Partida empatada"
        var bte = document.createElement("button")
        bte.className = "btn btn-lg btn-block"
        bte.onclick = function(){voltar()}
        var bte_img = document.createElement("img")
        bte_img.id = "nwIMG"
        bte_img.style.width = "3.5rem"
        bte_img.src = "icons/arrow-counterclockwise.svg"
        var cima = document.getElementById("jogo-btn")
        cima.appendChild(adiv)
        cima.appendChild(bte)
        bte.appendChild(bte_img)
        cima.appendChild(document.createElement("BR"))
        cima.appendChild(document.createElement("BR"))


        function voltar()
        {
        document.getElementById("div-Jogo").remove();
        jogo(); 
        }
    }
}