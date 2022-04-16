           function alterar_modo() {
           var g = document.querySelectorAll("#new-content")
           var gn = g.length
           if(gn>0)
           {
            var a
            a = document.getElementById("html-5-body")
            a.style.backgroundColor = "black"
            var c,d,h,n=0
            d = document.querySelectorAll("b,p,i")
            var z = d.length
            if(z > 0)
            {
              var n=0
               d = document.querySelectorAll("b,p,i")
              for(n=n; n<=10; n++)
              {
                d[n].style.color ="white"
              }
            }
            var m 
            m = document.querySelectorAll("#moon")
            if(m.length > 0)
            {
            var m = document.getElementById("moon")
            m.remove()
            var b = document.createElement("img")
            b.style.width = "1.6rem"
            b.src = "icons/ligth.svg"
            b.id = "moon"
            var icon
            icon = document.getElementById("btn-cimo")
            icon.appendChild(b)
            var img1
            img1 = document.getElementById("icon")
            img1.style.backgroundColor = "white"
            var img2
            img2 = document.getElementById("icon1")
            img2.style.backgroundColor = "white"
           
            }
            else
            {

            }
            var btnw
            btnw = document.getElementById("btn-cimo")
            btnw.onclick = function (){modo_normal()}
           }



           else
           {
             var body = document.getElementById("html-5-body")
             body.style.backgroundColor = "black"
             var b = document.querySelectorAll(".row")
             var H = b.length - 1
             for (var we = 0; we <= H; we++)
             {
               b[we].style.backgroundColor = "rgb(4, 97, 71)"
             }
             
             var m 
             m = document.querySelectorAll("#moon")
             if(m.length > 0)
             {
             var m = document.getElementById("moon")
             m.remove()
             var b = document.createElement("img")
             b.style.width = "1.6rem"
             b.src = "icons/ligth.svg"
             b.id = "moon"
             var icon
             icon = document.getElementById("btn-cimo")
             icon.appendChild(b)
             }
             else
             {
               
             }
             var letras = document.querySelectorAll("b")
             letras[0].style.color = "white"
             var todo = document.querySelectorAll("#jogo-btn > button")
             var z = todo.length - 1
             for (var i = 0 ; i <= z; i++)
             {
               todo[i].className = "btn btn-lg btn-dark btn-block" 
               
             }
             var btnw
             btnw = document.getElementById("btn-cimo")
             btnw.onclick = function (){modo_normal()}
           }
            
          }

          function modo_normal(){
            
            var d = document.querySelectorAll("#new-content")
            var z = d.length
            if (z > 0)
              {
                var a
                a = document.getElementById("html-5-body")
                a.style.backgroundColor = "white"
                var c,d,h,n=0
                d = document.querySelectorAll("b,p,i")
                var z = d.length
                if(z > 0)
                {
                  var n=0
                   d = document.querySelectorAll("b,p,i")
                  for(n=n; n<=8; n++)
                  {
                    d[n].style.color ="black"
                  }
                }
                var m 
                m = document.querySelectorAll("#moon")
                if(m.length > 0)
                {
                var m = document.getElementById("moon")
                m.remove()
                var b = document.createElement("img")
                b.style.width = "1.6rem"
                b.src = "icons/moon.svg"
                b.id = "moon"
                var icon
                icon = document.getElementById("btn-cimo")
                icon.appendChild(b)
                var img1
                img1 = document.getElementById("icon")
                img1.style.backgroundColor = "white"
                var img2
                img2 = document.getElementById("icon1")
                img2.style.backgroundColor = "white"
                }
                else
                {
    
                }
                var btnw
                btnw = document.getElementById("btn-cimo")
                btnw.onclick = function (){alterar_modo()}
              }

              else
              {
                var c
                c = document.getElementById("html-5-body")
                c.style.backgroundColor = "white"
                var d = document.querySelectorAll(".row");
                d[0].style.backgroundColor = "white"
                d[1].style.backgroundColor = "white"
                d[2].style.backgroundColor = "white"
                var b = document.getElementsByClassName("text-list")
                b[0].style.color = "rgb(4, 97, 71)"
                var todo = document.querySelectorAll("#jogo-btn > button")
                var z = todo.length - 1
                for (var i = 0 ; i <= z; i++)
                  {
                    todo[i].className = "btn btn-lg btn-block" 
                    
                  }
                  var m 
                  m = document.querySelectorAll("#moon")
                  if(m.length > 0)
                  {
                  var m = document.getElementById("moon")
                  m.remove()
                  var b = document.createElement("img")
                  b.style.width = "1.6rem"
                  b.src = "icons/moon.svg"
                  b.id="moon"
                  var icon
                  icon = document.getElementById("btn-cimo")
                  icon.appendChild(b)
                  }
                  else
                  {
                  var btnw
                  btnw = document.getElementById("btn-cimo")
                  btnw.onclick = function (){alterar_modo()}
      
                  } 

                  var btnw
                  btnw = document.getElementById("btn-cimo")
                  btnw.onclick = function (){alterar_modo()}
      
              }
              
            }



          
          function pt_En(){
            var pt1
            pt1 = document.querySelectorAll("#pt-en-1")
            var n = pt1.length
            if (n == 1) {
            var imgg = document.getElementById("pt-en-1")
            imgg.remove()
            var lg = document.querySelectorAll("html:lang(pt)")
            for(var b = 0; b<=lg.length; lg++)
            {
              lg[b].lang = "en"
            }
            var newImg = document.createElement("img")
            newImg.style.width = "3rem"
            newImg.id = "pt-en-2"
            newImg.src = "icons/pt-en2.svg"
            var btn1 = document.getElementById("btn-cimo1")
            btn1.appendChild(newImg)
              
            }
            else
            {
              var lg = document.querySelectorAll("html:lang(en)")
            for(var b = 0; b<=lg.length; lg++)
            {
              lg[b].lang = "pt"
            }
            var imgg = document.getElementById("pt-en-2")
            imgg.remove()
            var newImg = document.createElement("img")
            newImg.style.width = "3rem"
            newImg.id = "pt-en-1"
            newImg.src = "icons/pt-en1.svg"
            var btn1 = document.getElementById("btn-cimo1")
            btn1.appendChild(newImg)
            }

          }
          

          function ajuda()
          {
            var cls = document.querySelectorAll("#new-content") 
            var d = cls.length
            if (d > 0)
            {
              var c = window.confirm("Comece o Jogo para Obter Ajuda.")
              if (c == true) {
  
                processar()
              }
              else
              {
              }
            }

            else
            {
              alert(" X e O é um conhecido jogo com dois jogadores em que tiver um sequencia de 3 obejctos(X/O) de um dos jogadores, esse jogador vence a disputa, para Jogar clique em um dos icones a cima da area de jogo e depois clique em um dos espaços que deseja cobrir")
            }
          }
      
          function processar()
          {
            var playBtn = document.querySelectorAll("#btn-local")
            var i = playBtn.length
            if (i == 1 )
            {
             playBtn[0].remove()
             var div_all = document.getElementById("new-content")
             var div1 = document.createElement("div")
             div1.className = "progress"
             var div2 = document.createElement("div")
             div2.className = "progress-bar progress-bar-striped progress-bar-animated"
             div2.ariaValueNow = "0"
             div2.ariaValueMin = "0"
             div2.ariaValueMax = "100"
             div2.style.width = "25%"
             div2.id = "progress-content"
             div_all.appendChild(div2)
             var i = 0
               if (i == 0) 
               {
                 i = 1;
                 var elemento = document.getElementById("progress-content");
                 var largura = 10
                 var identificador = setInterval(frame, 1)
                 function frame()
                 {
                   if(largura >= 100)
                   {
                     clearInterval(identificador)
                     i = 0;
                     var new_time = setTimeout(jogo, 100)
                   }

                   else
                   {
                     largura++
                     elemento.style.width = largura + "%"
                     elemento.innerHTML = largura + "%"
                   }
                }
              }
            }
            else
                 {

                }
         

          } 
          function sugestao()
          {
            var d = document.getElementById("textarea-0")
            d.focus()
            d.scrollIntoView()
          }
          
          function validar_textoArea()
          {
            var d = document.getElementById("textarea-0")
            if(d.value == "")
            {
              alert("digite a sugestão por favor")
              var d = document.getElementById("textarea-0").focus()
            }
            else
            {
              var d = document.getElementById("textarea-0")
              d.value = ""
            }
          }
          
          function sairDoAmbiente()
          {
          var saida1 = window.confirm("Deseja terminar a sessão de Jogo?")
          if (saida1 == true) {

           window.location.reload() 
          }
          else
          {
          }

          }
          function validar_InpEmail()
          {
            var d = document.getElementById("inp").value
            if (d.search("@") == -1)
            {
              alert("digite um email válido")
              var d = document.getElementById("inp").focus()
            }
            else
            {
              var d = document.getElementById("inp")
              console.log(d.value);
              d.value = ""
            }
          }

          

         

          function jogo()
          {
            
            var cls, n
            var bod = document.getElementById("html-5-body");
            if(bod.style.backgroundColor != "white")
            {
             var s = setTimeout(modo_normal, 10)
            }
            else
            {

            }
            var qu = document.querySelectorAll("#to-disable")
            for(var z = 0; z<= qu.length -1 ; z++)
            {
              qu[z].remove()
            }
            var cls = document.querySelectorAll("#new-content") 
            var total = cls.length
            for (n = 0; n<=total-1; n++)
            {
              cls[n].remove()
            }
            var divROW = document.getElementById("row-div")
            var p = document.createElement("p")
            var espaço = document.createElement("BR")
            // criandos as div do Jogo
            var area_de_jogo = document.createElement("div")
            var nova = document.createElement("div")
            var div_esquerda = document.createElement("div")
            var div_direita = document.createElement("div")
            var divNada = document.createElement("div")
            var area_de_escolha = document.createElement("div")
            var Botoes_de_escolha = document.createElement("div")
            var jogo_btn = document.createElement("div")

            
            //criando os elementos
            var audio = document.createElement("AUDIO")
            var saida = document.createElement("button")
            var tempor = document.createElement("b")
            var texto = document.createElement("span")
            var texto1 = document.createElement("span")
            var texto2 = document.createElement("span")
            var op1 = document.createElement("input")
            var op2 = document.createElement("input")
            var som = document.createElement("button")
            var img_saida = document.createElement("img")
            var x = document.createElement("button")
            var bola = document.createElement("button")
            var x_img = document.createElement("img")
            var bola_img = document.createElement("img")
            var btn1_ps = document.createElement("button")
            var btn1_ps_img = document.createElement("img")
            var btn2_ps = document.createElement("button")
            var btn2_ps_img = document.createElement("img")
            var btn3_ps = document.createElement("button")
            var btn3_ps_img = document.createElement("img")
            var btn4 = document.createElement("button")
            var btn4_img = document.createElement("img")
            var btn5 = document.createElement("button")
            var btn5_img = document.createElement("img") 
            var btn6 = document.createElement("button")
            var btn6_img = document.createElement("img")
            var btn7 = document.createElement("button")
            var btn7_img = document.createElement("img")
            var btn8 = document.createElement("button")
            var btn8_img = document.createElement("img")
            var btn9 = document.createElement("button")
            var btn9_img = document.createElement("img")

            //classificando as divs e os elementos
            area_de_jogo.className = "row" 
            div_esquerda.className = "col-md-3"
            div_direita.className = "col-md-2"
            divNada.className = "col-md-7"
            saida.className = "btn btn-sm btn-block"
            tempor.className = "text-list"
            som.className = "btn btn-sm btn-block" 
            img_saida.src = "icons/arrow-bar-left.svg"
            op1.className = "form-check-input"
            op1.type = "checkbox"
            op2.className = "form-check-input"
            op2.type = "checkbox"
            area_de_escolha.className = "row"
            Botoes_de_escolha.className = "col-md-12"
            x.className = "btn btn-sm btn-block"
            bola.className = "btn btn-md btn-block"
            x_img.src = "icons/x.svg"
            bola_img.src = "icons/circle.svg"
            jogo_btn.className = "col-12"
            btn1_ps.className = "btn btn-lg btn-block"
            btn2_ps.className = "btn btn-lg btn-block"
            btn3_ps.className = "btn btn-lg btn-block"
            btn4.className = "btn btn-lg btn-block"
            btn5.className = "btn btn-lg btn-block"
            btn6.className = "btn btn-lg btn-block"
            btn7.className = "btn btn-lg btn-block"
            btn8.className = "btn btn-lg btn-block"
            btn9.className = "btn btn-lg btn-block" 
            btn1_ps_img.src = "icons/pv-0-pm-1.svg"
            btn2_ps_img.src = "icons/pv-1-pm-2.svg"
            btn3_ps_img.src = "icons/pv-2-pm-3.svg"
            btn4_img.src = "icons/pv-3-pm-4.svg"
            btn5_img.src = "icons/pv-1-pm-2.svg"
            btn6_img.src = "icons/pv-5-pm-6.svg"
            btn7_img.src = "icons/pv-6-pm-7.svg"
            btn8_img.src = "icons/pv-1-pm-2.svg"
            btn9_img.src = "icons/pv-7-pm-8.svg"

            //identificando as divs e elementos
            div_esquerda.id = "esquerda-div"
            div_direita.id = "direita-div"
            area_de_jogo.id = "div-Jogo"
            saida.id = "btn-saida"
            jogo_btn.id = "jogo-btn"
            saida.onclick = function(){sairDoAmbiente()}
            tempor.id = "temporizador"
            som.id = "btn-som"
            btn1_ps.id = "btn1-click"
            btn1_ps.onclick = function(){btn1Click()}
            btn2_ps.id = "btn2-click"
            btn2_ps.onclick = function(){btn2Click()}
            btn3_ps.id = "btn3-click"
            btn3_ps.onclick = function(){btn3Click()}
            btn4.id = "btn4-click"
            btn4.onclick = function(){btn4Click()}
            btn5.id = "btn5-click"
            btn5.onclick = function(){btn5Click()}
            btn6.id = "btn6-click"
            btn6.onclick = function(){btn6Click()}
            btn7.id = "btn7-click"
            btn7.onclick = function(){btn7Click()}
            btn8.id = "btn8-click"
            btn8.onclick = function(){btn8Click()}
            btn9.id = "btn9-click"
            btn9.onclick = function(){btn9Click()}
            x.id = "x-b"
            x.onclick = function() {modoJogoAutomatico()}
            bola.id = "bola-b"
            bola.onclick = function() {modoJogoAutomatico()}
            btn1_ps_img.id = "vazio"
            btn2_ps_img.id = "vazio"
            btn3_ps_img.id = "vazio"
            btn4_img.id = "vazio"
            btn5_img.id = "vazio"
            btn6_img.id = "vazio"
            btn7_img.id = "vazio"
            btn8_img.id = "vazio"
            btn9_img.id = "vazio"
            op1.id = "escolha-um"
            op1.onclick = function() {modoJogoAutomatico()}
            op2.id = "escolha-dois"
            op2.onclick = function(){modoJogoAutomatico()}
            //estilizando os elementos
            texto.innerText = "Jogadores"
            texto.style.margin = "1%"
            texto1.innerText = " 1 "
            op1.style.margin = "2%"
            op2.style.margin = "2%"
            texto1.style.fontFamily = "fantasy"
            texto2.innerText = " 2 "
            texto2.style.fontFamily = "fantasy"
            img_saida.style.width = "1.5rem"
            tempor.style.color = "rgb(4, 97, 71)"
            tempor.innerText = "Sair"
            div_direita.style.display = "inline-flexbox"
            div_esquerda.style.display = "inline-flexbox"
            area_de_jogo.style.borderRadius = "1.5rem"
            area_de_jogo.style.border = ".1rem solid rgb(4, 97, 71)"
            Botoes_de_escolha.style.textAlign = "center"
            x_img.style.width = "2.5rem"
            bola.style.marginLeft = "10px"
            jogo_btn.style.textAlign = "center"
            bola_img.style.width = "1.5rem"
            let tempo = setTimeout(consulta, 1)
            //estilizando para medida da tela
            function consulta()
            {
              let buscar = window.matchMedia("(max-width: 570px)")
              if(buscar.matches)
              {
                btn1_ps_img.style.width = "3rem"
                btn2_ps_img.style.width = "3rem"
                btn3_ps_img.style.width = "3rem"
                btn4_img.style.width = "3rem"
                btn5_img.style.width = "3rem"
                btn6_img.style.width = "3rem"
                btn7_img.style.width = "3rem"
                btn8_img.style.width = "3rem"
                btn9_img.style.width = "3rem"
                div_direita.style.textAlign = "center" 
                texto1.style.marginLeft = "5%"
                clearTimeout()
                let tempo = setTimeout(consulta, 1)
              }
  
              else
              {
                btn1_ps_img.style.width = "6rem"
                btn2_ps_img.style.width = "6rem"
                btn3_ps_img.style.width = "6rem"
                btn4_img.style.width = "6rem"
                btn5_img.style.width = "6rem"
                btn6_img.style.width = "6rem"
                btn7_img.style.width = "6rem"
                btn8_img.style.width = "6rem"
                btn9_img.style.width = "6rem"
                clearTimeout()
                let tempo = setTimeout(consulta, 1)
              }
            }
            
            btn1_ps.style.transition = ".5s"
            btn2_ps.style.transition = ".5s"
            btn3_ps.style.transition = ".5s"
            btn4.style.transition = ".5s"
            btn5.style.transition = ".5s"
            btn6.style.transition = ".5s"
            btn7.style.transition = ".5s"
            btn8.style.transition = ".5s"
            btn9.style.transition = ".5s"

            //mostrando as divs
            divROW.appendChild(area_de_jogo)
            area_de_jogo.appendChild(div_esquerda)
            area_de_jogo.appendChild(divNada)
            area_de_jogo.appendChild(div_direita)
            div_esquerda.appendChild(saida)
            area_de_jogo.appendChild(area_de_escolha)
            area_de_escolha.appendChild(Botoes_de_escolha)
            Botoes_de_escolha.appendChild(x)
            Botoes_de_escolha.appendChild(bola)
            x.appendChild(x_img)
            bola.appendChild(bola_img)
            area_de_jogo.appendChild(area_de_escolha)
            jogo_btn.appendChild(espaço)
            jogo_btn.appendChild(document.createElement("BR"))
            jogo_btn.appendChild(document.createElement("BR"))
            area_de_escolha.appendChild(jogo_btn)
            jogo_btn.appendChild(btn1_ps)
            jogo_btn.appendChild(btn2_ps)
            jogo_btn.appendChild(btn3_ps)
            jogo_btn.appendChild(espaço)
            jogo_btn.appendChild(document.createElement("BR"))
            jogo_btn.appendChild(btn4)
            jogo_btn.appendChild(btn5)
            jogo_btn.appendChild(btn6)
            jogo_btn.appendChild(document.createElement("BR"))
            jogo_btn.appendChild(document.createElement("BR"))
            jogo_btn.appendChild(btn7)
            jogo_btn.appendChild(btn8)
            jogo_btn.appendChild(btn9)
            btn1_ps.appendChild(btn1_ps_img)
            btn2_ps.appendChild(btn2_ps_img)
            btn3_ps.appendChild(btn3_ps_img)
            btn4.appendChild(btn4_img)
            btn5.appendChild(btn5_img)
            btn6.appendChild(btn6_img)
            btn7.appendChild(btn7_img)
            btn8.appendChild(btn8_img)
            btn9.appendChild(btn9_img)
            jogo_btn.appendChild(document.createElement("BR"))
            jogo_btn.appendChild(document.createElement("BR"))

            //monstrando conteudo da div esquerda
            div_esquerda.appendChild(tempor)
            saida.appendChild(img_saida)

            //monstrando conteudo da div direita
            div_direita.appendChild(texto)
            div_direita.appendChild(document.createElement("BR"))
            div_direita.appendChild(texto1)
            div_direita.appendChild(op1)
            div_direita.appendChild(texto2)
            div_direita.appendChild(op2)

           

          }

          function btn1Click()
          {
            var bola = document.getElementById("bola-b")
            var x = document.getElementById("x-b")
            if(bola.style.backgroundColor == "rgb(4, 97, 71)")
            {
              var o = document.querySelectorAll("#img-new")
                var z = o.length
              if (z>0)
               {

                  }
              else
                {
                var b = document.getElementById("btn1-click")
                var img = document.createElement("img")
                img.style.width = "5rem"
                img.src = "icons/circle.svg"
                b.disabled = "disable"
                img.id = "img-new"
                img.className = "bola-confirm"
                let tempo = setTimeout(consulta, 1)
                function consulta()
            {
              let buscar = window.matchMedia("(max-width: 570px)")
              if(buscar.matches)
              {
                img.style.width = "3rem"
                clearTimeout()
                let tempo = setTimeout(consulta, 1)
              }

            else
            {

            }
          }
                var c = document.querySelectorAll("#vazio")
                if(c.length > 0)
                {
                  for(let i=0; i<=c.length -1; i++)
                  {
                    if(c[i].parentNode == b)
                    {
                      b.appendChild(img)
                      c[i].remove()
                      var time = setTimeout(forCheck1, 10)  
                    }
                  }
                }
              
                }
              }
            else if (x.style.backgroundColor == "rgb(4, 97, 71)")
            {
                var o = document.querySelectorAll("#img-new")
                var z = o.length
              if (z>0)
               {

                  }
              else
                {
                var b = document.getElementById("btn1-click")
                var img = document.createElement("img")
                img.style.width = "5rem"
                img.src = "icons/x.svg"
                b.disabled = "disable"
                img.id = "img-new"
                img.className = "x-confirm"
                var c = document.querySelectorAll("#vazio")
                if(c.length > 0)
                {
                  for(let i=0; i<=c.length -1; i++)
                  {
                    if(c[i].parentNode == b)
                    {
                      b.appendChild(img)
                      c[i].remove()
                      var time = setTimeout(forCheck1, 10)  
                    }
                  }
                }
               let tempo = setTimeout(consulta, 1)
                function consulta()
                {
                    let buscar = window.matchMedia("(max-width: 570px)")
                    if(buscar.matches)
                        {
                    img.style.width = "3rem"
                    clearTimeout()
                    let tempo = setTimeout(consulta, 1)
                  }

                  else
                  {

                  }
                }
              } 
               
        
          }
        }
          function btn2Click()
          {
            var bola = document.getElementById("bola-b")
            var x = document.getElementById("x-b")
            if(bola.style.backgroundColor == "rgb(4, 97, 71)")
            {
              var o = document.querySelectorAll("#img-new-2")
                var z = o.length
              if (z>0)
               {

                  }
              else
                {
                var b = document.getElementById("btn2-click")
                var img = document.createElement("img")
                img.style.width = "5rem"
                img.src = "icons/circle.svg"
                b.disabled = "disable"
                img.id = "img-new-2"
                img.className = "bola-confirm"
                let tempo = setTimeout(consulta, 1)
                function consulta()
                {
                    let buscar = window.matchMedia("(max-width: 570px)")
                    if(buscar.matches)
                        {
                    img.style.width = "3rem"
                    clearTimeout()
                    let tempo = setTimeout(consulta, 1)
                  }

                  else
                  {

                  }
              } 
              var c = document.querySelectorAll("#vazio")
              if(c.length > 0)
              {
                for(let i=0; i<=c.length -1; i++)
                {
                  if(c[i].parentNode == b)
                  {
                    b.appendChild(img)
                    c[i].remove()
                    var time = setTimeout(forCheck2, 10)  
                  }
                }
              }
              else{

              }
            }
            }

            
            else if (x.style.backgroundColor == "rgb(4, 97, 71)")
            {
                var o = document.querySelectorAll("#img-new-2")
                var z = o.length
              if (z>0)
               {

                  }
              else
                {
                var b = document.getElementById("btn2-click")
                var img = document.createElement("img")
                img.style.width = "5rem"
                img.src = "icons/x.svg"
                b.disabled = "disable"
                img.id = "img-new-2"
                img.className = "x-confirm"
                let tempo = setTimeout(consulta, 1)
                function consulta()
                {
                    let buscar = window.matchMedia("(max-width: 570px)")
                    if(buscar.matches)
                        {
                    img.style.width = "3rem"
                    clearTimeout()
                    let tempo = setTimeout(consulta, 1)
                  }

                  else
                  {

                  }
              } 
              var c = document.querySelectorAll("#vazio")
              if(c.length > 0)
              {
                for(let i=0; i<=c.length -1; i++)
                {
                  if(c[i].parentNode == b)
                  {
                    b.appendChild(img)
                    c[i].remove()
                    var time = setTimeout(forCheck2, 10)  
                  }
                }
              }
              else{

              }
            }
          }
            else
            {

            }
          }

          function btn3Click()
          {
            var bola = document.getElementById("bola-b")
            var x = document.getElementById("x-b")
            if(bola.style.backgroundColor == "rgb(4, 97, 71)")
            {
              var o = document.querySelectorAll("#img-new-3")
                var z = o.length
              if (z>0)
               {

                  }
              else
                {
                var b = document.getElementById("btn3-click")
                var img = document.createElement("img")
                img.style.width = "5rem"
                img.src = "icons/circle.svg"
                b.disabled = "disable"
                img.id = "img-new-3"
                img.className = "bola-confirm"
                let tempo = setTimeout(consulta, 1)
                function consulta()
                {
                    let buscar = window.matchMedia("(max-width: 570px)")
                    if(buscar.matches)
                        {
                    img.style.width = "3rem"
                    clearTimeout()
                    let tempo = setTimeout(consulta, 1)
                  }

                  else
                  {

                  }
              } 
              var c = document.querySelectorAll("#vazio")
              if(c.length > 0)
              {
                for(let i=0; i<=c.length -1; i++)
                {
                  if(c[i].parentNode == b)
                  {
                    b.appendChild(img)
                    c[i].remove()
                    var time = setTimeout(forCheck3, 10)  
                  }
                }
              }
              else{

              }
            }
            }

            
            else if (x.style.backgroundColor == "rgb(4, 97, 71)")
            {
                var o = document.querySelectorAll("#img-new-3")
                var z = o.length
              if (z>0)
               {

                  }
              else
                {
                var b = document.getElementById("btn3-click")
                var img = document.createElement("img")
                img.style.width = "5rem"
                img.src = "icons/x.svg"
                b.disabled = "disable"
                img.id = "img-new-3"
                img.className = "x-confirm"
                let tempo = setTimeout(consulta, 1)
                function consulta()
                {
                    let buscar = window.matchMedia("(max-width: 570px)")
                    if(buscar.matches)
                        {
                    img.style.width = "3rem"
                    clearTimeout()
                    let tempo = setTimeout(consulta, 1)
                  }

                  else
                  {

                  }
              } 
              var c = document.querySelectorAll("#vazio")
              if(c.length > 0)
              {
                for(let i=0; i<=c.length -1; i++)
                {
                  if(c[i].parentNode == b)
                  {
                    b.appendChild(img)
                    c[i].remove()
                    var time = setTimeout(forCheck3, 10)  
                  }
                }
              }
              else{

              }
            }
          }
            else
            {

            }
          }
          
          function btn4Click()
          {
            var bola = document.getElementById("bola-b")
            var x = document.getElementById("x-b")
            if(bola.style.backgroundColor == "rgb(4, 97, 71)")
            {
              var o = document.querySelectorAll("#img-new-4")
                var z = o.length
              if (z>0)
               {

                  }
              else
                {
                var b = document.getElementById("btn4-click")
                var img = document.createElement("img")
                img.style.width = "5rem"
                img.src = "icons/circle.svg"
                b.disabled = "disable"
                img.id = "img-new-4"
                img.className = "bola-confirm"
                let tempo = setTimeout(consulta, 1)
                function consulta()
            {
              let buscar = window.matchMedia("(max-width: 570px)")
              if(buscar.matches)
              {
                img.style.width = "3rem"
                clearTimeout()
                let tempo = setTimeout(consulta, 1)
              }

            else
            {

            }
          }
          var c = document.querySelectorAll("#vazio")
          if(c.length > 0)
          {
            for(let i=0; i<=c.length -1; i++)
            {
              if(c[i].parentNode == b)
              {
                b.appendChild(img)
                c[i].remove()
                var time = setTimeout(forCheck4, 10)  
              }

            }
          }
              else{

              }
            }
            }

            
            else if (x.style.backgroundColor == "rgb(4, 97, 71)")
            {
                var o = document.querySelectorAll("#img-new-4")
                var z = o.length
              if (z>0)
               {

                  }
              else
                {
                var b = document.getElementById("btn4-click")
                var img = document.createElement("img")
                img.style.width = "5rem"
                img.src = "icons/x.svg"
                b.disabled = "disable"
                img.id = "img-new-4"
                img.className = "x-confirm"
                let tempo = setTimeout(consulta, 1)
                function consulta()
            {
              let buscar = window.matchMedia("(max-width: 570px)")
              if(buscar.matches)
              {
                img.style.width = "3rem"
                clearTimeout()
                let tempo = setTimeout(consulta, 1)
              }

            else
            {

            }
          }
          var c = document.querySelectorAll("#vazio")
          if(c.length > 0)
          {
            for(let i=0; i<=c.length -1; i++)
            {
              if(c[i].parentNode == b)
              {
                b.appendChild(img)
                c[i].remove()
                var time = setTimeout(forCheck4, 10)  
              }
            }
          }
              else{

              }
            }
          }
            else
            {

            }
          }

          function btn5Click()
          {
            var bola = document.getElementById("bola-b")
            var x = document.getElementById("x-b")
            if(bola.style.backgroundColor == "rgb(4, 97, 71)")
            {
              var o = document.querySelectorAll("#img-new-5")
                var z = o.length
              if (z>0)
               {

                  }
              else
                {
                var b = document.getElementById("btn5-click")
                var img = document.createElement("img")
                img.style.width = "5rem"
                img.src = "icons/circle.svg"
                b.disabled = "disable"
                img.id = "img-new-5"
                img.className = "bola-confirm"
                let tempo = setTimeout(consulta, 1)
                function consulta()
            {
              let buscar = window.matchMedia("(max-width: 570px)")
              if(buscar.matches)
              {
                img.style.width = "3rem"
                clearTimeout()
                let tempo = setTimeout(consulta, 1)
              }

            else
            {

            }
          }
          var c = document.querySelectorAll("#vazio")
          if(c.length > 0)
          {
            for(let i=0; i<=c.length -1; i++)
            {
              if(c[i].parentNode == b)
              {
                b.appendChild(img)
                c[i].remove()
                var time = setTimeout(forCheck5, 10)  
              }
            }
          }
              else{

              }
            }
            }

            
            else if (x.style.backgroundColor == "rgb(4, 97, 71)")
            {
                var o = document.querySelectorAll("#img-new-5")
                var z = o.length
              if (z>0)
               {

                  }
              else
                {
                var b = document.getElementById("btn5-click")
                var img = document.createElement("img")
                img.style.width = "5rem"
                img.src = "icons/x.svg"
                b.disabled = "disable"
                img.id = "img-new-5"
                img.className = "x-confirm"
                let tempo = setTimeout(consulta, 1)
                function consulta()
            {
              let buscar = window.matchMedia("(max-width: 570px)")
              if(buscar.matches)
              {
                img.style.width = "3rem"
                clearTimeout()
                let tempo = setTimeout(consulta, 1)
              }

            else
            {

            }
          }
          
          var c = document.querySelectorAll("#vazio")
          if(c.length > 0)
          {
            for(let i=0; i<=c.length -1; i++)
            {
              if(c[i].parentNode == b)
              {
                b.appendChild(img)
                c[i].remove()
                var time = setTimeout(forCheck5, 10)  
              }

            }
          }
              else{

              }
            }
          }
            else
            {

            }
          }

          function btn6Click()
          {
            var bola = document.getElementById("bola-b")
            var x = document.getElementById("x-b")
            if(bola.style.backgroundColor == "rgb(4, 97, 71)")
            {
              var o = document.querySelectorAll("#img-new-6")
                var z = o.length
              if (z>0)
               {

                  }
              else
                {
                var b = document.getElementById("btn6-click")
                var img = document.createElement("img")
                img.style.width = "5rem"
                img.src = "icons/circle.svg"
                b.disabled = "disable"
                img.id = "img-new-6"
                img.className = "bola-confirm"
                let tempo = setTimeout(consulta, 1)
                function consulta()
            {
              let buscar = window.matchMedia("(max-width: 570px)")
              if(buscar.matches)
              {
                img.style.width = "3rem"
                clearTimeout()
                let tempo = setTimeout(consulta, 1)
              }

            else
            {

            }
          }
              var c = document.querySelectorAll("#vazio")
              if(c.length > 0)
              {
                for(let i=0; i<=c.length -1; i++)
                {
                  if(c[i].parentNode == b)
                  {
                    b.appendChild(img)
                    c[i].remove()
                    var time = setTimeout(forCheck6, 10)  
                  }
            }
          }
              else{

              }
            }
            }

            
            else if (x.style.backgroundColor == "rgb(4, 97, 71)")
            {
                var o = document.querySelectorAll("#img-new-6")
                var z = o.length
              if (z>0)
               {

                  }
              else
                {
                var b = document.getElementById("btn6-click")
                var img = document.createElement("img")
                img.style.width = "5rem"
                img.src = "icons/x.svg"
                b.disabled = "disable"
                img.id = "img-new-6"
                img.className = "x-confirm"
                let tempo = setTimeout(consulta, 1)
                function consulta()
            {
              let buscar = window.matchMedia("(max-width: 570px)")
              if(buscar.matches)
              {
                img.style.width = "3rem"
                clearTimeout()
                let tempo = setTimeout(consulta, 1)
              }

            else
            {

            }
          }
          var c = document.querySelectorAll("#vazio")
          if(c.length > 0)
          {
            for(let i=0; i<=c.length -1; i++)
            {
              if(c[i].parentNode == b)
              {
                b.appendChild(img)
                c[i].remove()
                var time = setTimeout(forCheck6, 10)  
              }
            }
          }
              else{

              }
            }
          }
            else
            {

            }

          }


          function btn7Click()
          {
            var bola = document.getElementById("bola-b")
            var x = document.getElementById("x-b")
            if(bola.style.backgroundColor == "rgb(4, 97, 71)")
            {
              var o = document.querySelectorAll("#img-new-7")
                var z = o.length
              if (z>0)
               {

                  }
              else
                {
                var b = document.getElementById("btn7-click")
                var img = document.createElement("img")
                img.style.width = "5rem"
                img.src = "icons/circle.svg"
                b.disabled = "disable"
                img.id = "img-new-7"
                img.className = "bola-confirm"
                let tempo = setTimeout(consulta, 1)
                function consulta()
            {
              let buscar = window.matchMedia("(max-width: 570px)")
              if(buscar.matches)
              {
                img.style.width = "3rem"
                clearTimeout()
                let tempo = setTimeout(consulta, 1)
              }

            else
            {

            }
          }
              var c = document.querySelectorAll("#vazio")
              if(c.length > 0)
              {
                for(let i=0; i<=c.length -1; i++)
                {
                  if(c[i].parentNode == b)
                  {
                    b.appendChild(img)
                    c[i].remove()
                    var time = setTimeout(forCheck7, 10)  
                  }
            }
          }
              else{

              }
            }
            }

            
            else if (x.style.backgroundColor == "rgb(4, 97, 71)")
            {
                var o = document.querySelectorAll("#img-new-7")
                var z = o.length
              if (z>0)
               {

                  }
              else
                {
                var b = document.getElementById("btn7-click")
                var img = document.createElement("img")
                img.style.width = "5rem"
                img.src = "icons/x.svg"
                b.disabled = "disable"
                img.id = "img-new-7"
                img.className = "x-confirm"
                let tempo = setTimeout(consulta, 1)
                function consulta()
            {
              let buscar = window.matchMedia("(max-width: 570px)")
              if(buscar.matches)
              {
                img.style.width = "3rem"
                clearTimeout()
                let tempo = setTimeout(consulta, 1)
              }

            else
            {

            }
          }
          var c = document.querySelectorAll("#vazio")
          if(c.length > 0)
          {
            for(let i=0; i<=c.length -1; i++)
            {
              if(c[i].parentNode == b)
              {
                b.appendChild(img)
                c[i].remove()
                var time = setTimeout(forCheck7, 10)  
              }
            }
          }
              else{

              }
            }
          }
            else
            {

            }
          }
          function btn8Click()
          {
            var bola = document.getElementById("bola-b")
            var x = document.getElementById("x-b")
            if(bola.style.backgroundColor == "rgb(4, 97, 71)")
            {
              var o = document.querySelectorAll("#img-new-8")
                var z = o.length
              if (z>0)
               {

                  }
              else
                {
                var b = document.getElementById("btn8-click")
                var img = document.createElement("img")
                img.style.width = "5rem"
                img.src = "icons/circle.svg"
                b.disabled = "disable"
                img.id = "img-new-8"
                img.className = "bola-confirm"
                let tempo = setTimeout(consulta, 1)
                function consulta()
            {
              let buscar = window.matchMedia("(max-width: 570px)")
              if(buscar.matches)
              {
                img.style.width = "3rem"
                clearTimeout()
                let tempo = setTimeout(consulta, 1)
              }

            else
            {

            }
          }
          var c = document.querySelectorAll("#vazio")
          if(c.length > 0)
          {
            for(let i=0; i<=c.length -1; i++)
            {
              if(c[i].parentNode == b)
              {
                b.appendChild(img)
                c[i].remove()
                var time = setTimeout(forCheck8, 10)  
              }

            }
          }
              else{

              }
            }
            }

            
            else if (x.style.backgroundColor == "rgb(4, 97, 71)")
            {
                var o = document.querySelectorAll("#img-new-8")
                var z = o.length
              if (z>0)
               {

                  }
              else
                {
                var b = document.getElementById("btn8-click")
                var img = document.createElement("img")
                img.style.width = "5rem"
                img.src = "icons/x.svg"
                b.disabled = "disable"
                img.id = "img-new-8"
                img.className = "x-confirm"
                let tempo = setTimeout(consulta, 1)
                function consulta()
            {
              let buscar = window.matchMedia("(max-width: 570px)")
              if(buscar.matches)
              {
                img.style.width = "3rem"
                clearTimeout()
                let tempo = setTimeout(consulta, 1)
              }

            else
            {

            }
          }
          var c = document.querySelectorAll("#vazio")
          if(c.length > 0)
          {
            for(let i=0; i<=c.length -1; i++)
            {
              if(c[i].parentNode == b)
              {
                b.appendChild(img)
                c[i].remove()
                var time = setTimeout(forCheck8, 10)  
              }

            }
          }
              else{

              }
            }
          }
            else
            {

            }
          }


          function btn9Click()
          {
            var bola = document.getElementById("bola-b")
            var x = document.getElementById("x-b")
            if(bola.style.backgroundColor == "rgb(4, 97, 71)")
            {
              var o = document.querySelectorAll("#img-new-9")
                var z = o.length
              if (z>0)
               {

                  }
              else
                {
                var b = document.getElementById("btn9-click")
                var img = document.createElement("img")
                img.style.width = "5rem"
                img.src = "icons/circle.svg"
                b.disabled = "disable"
                img.id = "img-new-9"
                img.className = "bola-confirm"
                let tempo = setTimeout(consulta, 1)
                function consulta()
            {
              let buscar = window.matchMedia("(max-width: 570px)")
              if(buscar.matches)
              {
                img.style.width = "3rem"
                clearTimeout()
                let tempo = setTimeout(consulta, 1)
              }

            else
            {

            }
          }
          var c = document.querySelectorAll("#vazio")
          if(c.length > 0)
          {
            for(let i=0; i<=c.length -1; i++)
            {
              if(c[i].parentNode == b)
              {
                b.appendChild(img)
                c[i].remove()
                var time = setTimeout(forCheck9, 10)  
              }

              
            }
          }
              else{

              }
            }
            }

            
            else if (x.style.backgroundColor == "rgb(4, 97, 71)")
            {
                var o = document.querySelectorAll("#img-new-9")
                var z = o.length
              if (z>0)
               {

                  }
              else
                {
                var b = document.getElementById("btn9-click")
                var img = document.createElement("img")
                img.style.width = "5rem"
                img.src = "icons/x.svg"
                b.disabled = "disable"
                img.id = "img-new-9"
                img.className = "x-confirm"
                let tempo = setTimeout(consulta, 1)
                function consulta()
            {
              let buscar = window.matchMedia("(max-width: 570px)")
              if(buscar.matches)
              {
                img.style.width = "3rem"
                clearTimeout()
                let tempo = setTimeout(consulta, 1)
              }

            else
            {

            }
          }
          var c = document.querySelectorAll("#vazio")
          if(c.length > 0)
          {
            for(let i=0; i<=c.length -1; i++)
            {
              if(c[i].parentNode == b)
              {
                b.appendChild(img)
                c[i].remove()
                var time = setTimeout(forCheck9, 10)  
              }

              
            }
          }
              else{

              }
            }
          }
            else
            {

            }
          }

          function consulta()
          {
          let buscar = window.matchMedia("(max-width: 570px)")
          if(buscar.matches)
          {
            let a = document.querySelectorAll("#cp")
            for(let i= 0; i<=a.length - 1; i++)
            {
              a[i].style.marginTop = "-20%"
              a[i].style.marginLeft = "79%"
            }
          }

        else
        {
          
        let a = document.querySelectorAll("#cp")
        for(let i= 0; i<=a.length - 1; i++)
            {
              a[i].style.marginTop = "-13.5%"
              a[i].style.marginLeft = "85%"
            }
          
        }

        setInterval(consulta, 1000)

      }


