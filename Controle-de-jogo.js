


//funcao de escolha de jogo

function modoJogoAutomatico()
{
    let check2 = document.getElementById("escolha-dois").checked   
    let buscador = document.getElementById("escolha-um").checked
    if(buscador == true)
    {
        document.getElementById("escolha-dois").disabled = "disable" 
        
        var c = document.getElementById("bola-b")
        c.onclick = function(){fun_bola()}
        var z= document.getElementById("x-b")
        z.onclick = function(){fun_x()}
        function fun_x()
        {
          c.disabled = "disable" 
          var time = setTimeout(back, 10)
          function back()
          {
            var d = document.getElementById("x-b")
            if(d.style.backgroundColor != "rgb(4, 97, 71)")
            {
               d.style.backgroundColor = "rgb(4, 97, 71)"
            }
            else
            {
              d.style.backgroundColor = "white"
            }
          }
        } 
        
        function fun_bola()
        {
          z.disabled = "disable"
          var time = setTimeout(back, 10)
          function back()
          {
            var d = document.getElementById("bola-b")
            if(d.style.backgroundColor != "rgb(4, 97, 71)")
            {
               d.style.backgroundColor = "rgb(4, 97, 71)"
            }
            else
            {
              d.style.backgroundColor = "white"
            }
          }
        }

    }

    else if(check2 == true)
    {
        document.getElementById("escolha-um").disabled = "disable"
        var c = document.getElementById("bola-b")
        c.onclick = function(){fun_bola()}
        var z= document.getElementById("x-b")
        z.onclick = function(){fun_x()}
        function fun_x()
        {
          var c = document.getElementById("bola-b")
          c.style.backgroundColor = "white"
          var time = setTimeout(back, 10)
          function back()
          {
            var d = document.getElementById("x-b")
            if(d.style.backgroundColor != "rgb(4, 97, 71)")
            {
               d.style.backgroundColor = "rgb(4, 97, 71)"
               
            }
            else
            {
              d.style.backgroundColor = "white"
            }
          }
        } 
        
        function fun_bola()
        {
          var c= document.getElementById("x-b")
          c.style.backgroundColor = "white"
          var time = setTimeout(back, 10)
          function back()
          {
            var d = document.getElementById("bola-b")
            if(d.style.backgroundColor != "rgb(4, 97, 71)")
            {
               d.style.backgroundColor = "rgb(4, 97, 71)"
            }
            else
            {
              d.style.backgroundColor = "white"
            }
          }
        }

    }
  }
    function forCheck1()
    {
      //fazer uma questão antes da curva, perguntar se qual é a rota pronta se é a de duas ou uma.
      let check2 = document.getElementById("escolha-dois").checked   
      let buscador = document.getElementById("escolha-um").checked
      if(buscador == true)
      {
        let paraX = document.getElementById("x-b") 
      let paraBola = document.getElementById("bola-b")
      if(paraX.style.backgroundColor == "rgb(4, 97, 71)")
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
          let busca = document.querySelectorAll("#img-new-3")
          if(busca.length > 0)
          {
            let outraBusca = document.querySelectorAll("#vazio")
              if(outraBusca[0].parentNode == t1)
              {
                play1()
              }

              else if(outraBusca[0].parentNode == t2)
              {
                play2()
              }
              
              else if(outraBusca[0].parentNode == t3)
              {
                play3()
              }
              
              else if(outraBusca[0].parentNode == t4)
              {
                play4()
              }
              
              else if(outraBusca[0].parentNode == t5)
              {
                play5()
              }

              else if(outraBusca[0].parentNode == t6)
              {
                play6()
              }

              else if(outraBusca[0].parentNode == t6)
              {
                play6()
              } 
              
              else if(outraBusca[0].parentNode == t7)
              {
                play7()
              }

              else if(outraBusca[0].parentNode == t8)
              {
                play8()
              }

              else if(outraBusca[0].parentNode == t9)
              {
                play9()
              }
              else
          {
            verificaX()
          }
          }

          else
          {
            play3()
          }
      }

      else if (paraBola.style.backgroundColor == "rgb(4, 97, 71)")
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
          let busca = document.querySelectorAll("#img-new-3")
          if(busca.length > 0)
          {
            let outraBusca = document.querySelectorAll("#vazio")
              if(outraBusca[0].parentNode == t1)
              {
                playO1()
              }

              else if(outraBusca[0].parentNode == t2)
              {
                playO2()
              }
              
              else if(outraBusca[0].parentNode == t3)
              {
                playO3()
              }
              
              else if(outraBusca[0].parentNode == t4)
              {
                playO4()
              }
              
              else if(outraBusca[0].parentNode == t5)
              {
                playO5()
              }

              else if(outraBusca[0].parentNode == t6)
              {
                playO6()
              }
  
              
              else if(outraBusca[0].parentNode == t7)
              {
                playO7()
              }

              else if(outraBusca[0].parentNode == t8)
              {
                playO8()
              }

              else if(outraBusca[0].parentNode == t9)
              {
                playO9()
              }
              else
          {
            verificaO()
          }
          }

          else
          {
            playO3()
          }
         
    }
      }

      else if(check2 == true)
      {
        
      let paraX = document.getElementById("x-b") 
      let paraBola = document.getElementById("bola-b")
      if(paraX.style.backgroundColor == "rgb(4, 97, 71)")
      {
        verificaX()
      }
      else if (paraBola.style.backgroundColor == "rgb(4, 97, 71)")
      {
        verificaO()
      }
        
      }
      
    
}

function forCheck2()
{
  //fazer uma questão antes da curva, perguntar se qual é a rota pronta se é a de duas ou uma.
  let check2 = document.getElementById("escolha-dois").checked   
  let buscador = document.getElementById("escolha-um").checked
  if(buscador == true)
  {
    let paraX = document.getElementById("x-b") 
  let paraBola = document.getElementById("bola-b")
  if(paraX.style.backgroundColor == "rgb(4, 97, 71)")
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
      let busca = document.querySelectorAll("#img-new-5")
      if(busca.length > 0)
      {
        let outraBusca = document.querySelectorAll("#vazio")
          if(outraBusca[0].parentNode == t1)
          {
            play1()
          }

          else if(outraBusca[0].parentNode == t2)
          {
            play2()
          }
          
          else if(outraBusca[0].parentNode == t3)
          {
            play3()
          }
          
          else if(outraBusca[0].parentNode == t4)
          {
            play4()
          }
          
          else if(outraBusca[0].parentNode == t5)
          {
            play5()
          }

          else if(outraBusca[0].parentNode == t6)
          {
            play6()
          }

          else if(outraBusca[0].parentNode == t6)
          {
            play6()
          } 
          
          else if(outraBusca[0].parentNode == t7)
          {
            play7()
          }

          else if(outraBusca[0].parentNode == t8)
          {
            play8()
          }

          else if(outraBusca[0].parentNode == t9)
          {
            play9()
          }
          else
          {
            
          }
      }

      else
      {
        play5()
      }
  }

  else if (paraBola.style.backgroundColor == "rgb(4, 97, 71)")
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
          let busca = document.querySelectorAll("#img-new-5")
          if(busca.length > 0)
          {
            let outraBusca = document.querySelectorAll("#vazio")
              if(outraBusca[0].parentNode == t1)
              {
                playO1()
              }

              else if(outraBusca[0].parentNode == t2)
              {
                playO2()
              }
              
              else if(outraBusca[0].parentNode == t3)
              {
                playO3()
              }
              
              else if(outraBusca[0].parentNode == t4)
              {
                playO4()
              }
              
              else if(outraBusca[0].parentNode == t5)
              {
                playO5()
              }

              else if(outraBusca[0].parentNode == t6)
              {
                playO6()
              }
  
              
              else if(outraBusca[0].parentNode == t7)
              {
                playO7()
              }

              else if(outraBusca[0].parentNode == t8)
              {
                playO8()
              }

              else if(outraBusca[0].parentNode == t9)
              {
                playO9()
              }
              else
          {
            
          }
          }

          else
          {
            playO5()
          }
}
  }

  else if(check2 == true)
  {
    let paraX = document.getElementById("x-b") 
      let paraBola = document.getElementById("bola-b")
      if(paraX.style.backgroundColor == "rgb(4, 97, 71)")
      {
        verificaX()
      }
      else if (paraBola.style.backgroundColor == "rgb(4, 97, 71)")
      {
        verificaO()
      }
        
      }
  

}

function forCheck3()
{
  //fazer uma questão antes da curva, perguntar se qual é a rota pronta se é a de duas ou uma.
  let check2 = document.getElementById("escolha-dois").checked   
  let buscador = document.getElementById("escolha-um").checked
  if(buscador == true)
  {
    let paraX = document.getElementById("x-b") 
  let paraBola = document.getElementById("bola-b")
  if(paraX.style.backgroundColor == "rgb(4, 97, 71)")
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
      let busca = document.querySelectorAll("#img-new-4")
      if(busca.length > 0)
      {
        let outraBusca = document.querySelectorAll("#vazio")
          if(outraBusca[0].parentNode == t1)
          {
            play1()
          }

          else if(outraBusca[0].parentNode == t2)
          {
            play2()
          }
          
          else if(outraBusca[0].parentNode == t3)
          {
            play3()
          }
          
          else if(outraBusca[0].parentNode == t4)
          {
            play4()
          }
          
          else if(outraBusca[0].parentNode == t5)
          {
            play5()
          }

          else if(outraBusca[0].parentNode == t6)
          {
            play6()
          }

          else if(outraBusca[0].parentNode == t6)
          {
            play6()
          } 
          
          else if(outraBusca[0].parentNode == t7)
          {
            play7()
          }

          else if(outraBusca[0].parentNode == t8)
          {
            play8()
          }

          else if(outraBusca[0].parentNode == t9)
          {
            play9()
          }
          else
          {
            
          }
      }
      
      else
      {
        play4()
      }
        
  }
  else if (paraBola.style.backgroundColor == "rgb(4, 97, 71)")
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
      let busca = document.querySelectorAll("#img-new-4")
      if(busca.length > 0)
      {
        let outraBusca = document.querySelectorAll("#vazio")
          if(outraBusca[0].parentNode == t1)
          {
            playO1()
          }

          else if(outraBusca[0].parentNode == t2)
          {
            playO2()
          }
          
          else if(outraBusca[0].parentNode == t3)
          {
            playO3()
          }
          
          else if(outraBusca[0].parentNode == t4)
          {
            playO4()
          }
          
          else if(outraBusca[0].parentNode == t5)
          {
            playO5()
          }

          else if(outraBusca[0].parentNode == t6)
          {
            playO6()
          }

          
          else if(outraBusca[0].parentNode == t7)
          {
            playO7()
          }

          else if(outraBusca[0].parentNode == t8)
          {
            playO8()
          }

          else if(outraBusca[0].parentNode == t9)
          {
            playO9()
          }
          else
          {
          }
      }

      else
      {
        playO4()
      }
  }
  
}

  
    else if(check2 == true)
  {
    let paraX = document.getElementById("x-b") 
      let paraBola = document.getElementById("bola-b")
      if(paraX.style.backgroundColor == "rgb(4, 97, 71)")
      {
        verificaX()
      }
      else if (paraBola.style.backgroundColor == "rgb(4, 97, 71)")
      {
        verificaO()
      }
        
      }
  

}

function forCheck4()
{
  //fazer uma questão antes da curva, perguntar se qual é a rota pronta se é a de duas ou uma.
  let check2 = document.getElementById("escolha-dois").checked   
  let buscador = document.getElementById("escolha-um").checked
  if(buscador == true)
  {
    let paraX = document.getElementById("x-b") 
    let paraBola = document.getElementById("bola-b")
  if(paraX.style.backgroundColor == "rgb(4, 97, 71)")
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
      let busca = document.querySelectorAll("#img-new-7")
      if(busca.length > 0)
      {
        let outraBusca = document.querySelectorAll("#vazio")
          if(outraBusca[0].parentNode == t1)
          {
            play1()
          }

          else if(outraBusca[0].parentNode == t2)
          {
            play2()
          }
          
          else if(outraBusca[0].parentNode == t3)
          {
            play3()
          }
          
          else if(outraBusca[0].parentNode == t4)
          {
            play4()
          }
          
          else if(outraBusca[0].parentNode == t5)
          {
            play5()
          }

          else if(outraBusca[0].parentNode == t6)
          {
            play6()
          }

          else if(outraBusca[0].parentNode == t6)
          {
            play6()
          } 
          
          else if(outraBusca[0].parentNode == t7)
          {
            play7()
          }

          else if(outraBusca[0].parentNode == t8)
          {
            play8()
          }

          else if(outraBusca[0].parentNode == t9)
          {
            play9()
          } 
          else
          {
            
          }
      }
      else
       {
        play7()
       }

  }

  else if (paraBola.style.backgroundColor == "rgb(4, 97, 71)")
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
      let busca = document.querySelectorAll("#img-new-7")
      if(busca.length > 0)
      {
        let outraBusca = document.querySelectorAll("#vazio")
          if(outraBusca[0].parentNode == t1)
          {
            playO1()
          }

          else if(outraBusca[0].parentNode == t2)
          {
            playO2()
          }
          
          else if(outraBusca[0].parentNode == t3)
          {
            playO3()
          }
          
          else if(outraBusca[0].parentNode == t4)
          {
            playO4()
          }
          
          else if(outraBusca[0].parentNode == t5)
          {
            playO5()
          }

          else if(outraBusca[0].parentNode == t6)
          {
            playO6()
          }

          
          else if(outraBusca[0].parentNode == t7)
          {
            playO7()
          }

          else if(outraBusca[0].parentNode == t8)
          {
            playO8()
          }

          else if(outraBusca[0].parentNode == t9)
          {
            playO9()
          }
      }

      else
      {
        playO7()
      }
  }
}
  else if(check2 == true)
  {
    let paraX = document.getElementById("x-b") 
      let paraBola = document.getElementById("bola-b")
      if(paraX.style.backgroundColor == "rgb(4, 97, 71)")
      {
        verificaX()
      }
      else if (paraBola.style.backgroundColor == "rgb(4, 97, 71)")
      {
        verificaO()
      }
  }
}

function forCheck5()
{
  //fazer uma questão antes da curva, perguntar se qual é a rota pronta se é a de duas ou uma.
  let check2 = document.getElementById("escolha-dois").checked   
  let buscador = document.getElementById("escolha-um").checked
  if(buscador == true)
  {
    let paraX = document.getElementById("x-b") 
  let paraBola = document.getElementById("bola-b")
  if(paraX.style.backgroundColor == "rgb(4, 97, 71)")
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
      let busca = document.querySelectorAll("#img-new-9")
      if(busca.length > 0)
      {
        let outraBusca = document.querySelectorAll("#vazio")
          if(outraBusca[0].parentNode == t1)
          {
            play1()
          }

          else if(outraBusca[0].parentNode == t2)
          {
            play2()
          }
          
          else if(outraBusca[0].parentNode == t3)
          {
            play3()
          }
          
          else if(outraBusca[0].parentNode == t4)
          {
            play4()
          }
          
          else if(outraBusca[0].parentNode == t5)
          {
            play5()
          }

          else if(outraBusca[0].parentNode == t6)
          {
            play6()
          }

          else if(outraBusca[0].parentNode == t6)
          {
            play6()
          } 
          
          else if(outraBusca[0].parentNode == t7)
          {
            play7()
          }

          else if(outraBusca[0].parentNode == t8)
          {
            play8()
          }

          else if(outraBusca[0].parentNode == t9)
          {
            play9()
          }
          else
          {
           
          }
      }

      else
      {
        play9()
      }
  }

  else if (paraBola.style.backgroundColor == "rgb(4, 97, 71)")
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
      let busca = document.querySelectorAll("#img-new-9")
      if(busca.length > 0)
      {
        let outraBusca = document.querySelectorAll("#vazio")
          if(outraBusca[0].parentNode == t1)
          {
            playO1()
          }

          else if(outraBusca[0].parentNode == t2)
          {
            playO2()
          }
          
          else if(outraBusca[0].parentNode == t3)
          {
            playO3()
          }
          
          else if(outraBusca[0].parentNode == t4)
          {
            playO4()
          }
          
          else if(outraBusca[0].parentNode == t5)
          {
            playO5()
          }

          else if(outraBusca[0].parentNode == t6)
          {
            playO6()
          }

          
          else if(outraBusca[0].parentNode == t7)
          {
            playO7()
          }

          else if(outraBusca[0].parentNode == t8)
          {
            playO8()
          }

          else if(outraBusca[0].parentNode == t9)
          {
            playO9()
          }
          else
          {
          }
      }

      else
      {
        playO9()
      }
  }
}
  else if(check2 == true)
  {
    let paraX = document.getElementById("x-b") 
      let paraBola = document.getElementById("bola-b")
      if(paraX.style.backgroundColor == "rgb(4, 97, 71)")
      {
        verificaX()
      }
      else if (paraBola.style.backgroundColor == "rgb(4, 97, 71)")
      {
        verificaO()
      }
  }
  


}

function forCheck6()
{
  //fazer uma questão antes da curva, perguntar se qual é a rota pronta se é a de duas ou uma.
  let check2 = document.getElementById("escolha-dois").checked   
  let buscador = document.getElementById("escolha-um").checked
  if(buscador == true)
  {
    let paraX = document.getElementById("x-b") 
  let paraBola = document.getElementById("bola-b")
  if(paraX.style.backgroundColor == "rgb(4, 97, 71)")
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
      let busca = document.querySelectorAll("#img-new-8")
      if(busca.length > 0)
      {
        let outraBusca = document.querySelectorAll("#vazio")
          if(outraBusca[0].parentNode == t1)
          {
            play1()
          }

          else if(outraBusca[0].parentNode == t2)
          {
            play2()
          }
          
          else if(outraBusca[0].parentNode == t3)
          {
            play3()
          }
          
          else if(outraBusca[0].parentNode == t4)
          {
            play4()
          }
          
          else if(outraBusca[0].parentNode == t5)
          {
            play5()
          }

          else if(outraBusca[0].parentNode == t6)
          {
            play6()
          }

          else if(outraBusca[0].parentNode == t6)
          {
            play6()
          } 
          
          else if(outraBusca[0].parentNode == t7)
          {
            play7()
          }

          else if(outraBusca[0].parentNode == t8)
          {
            play8()
          }

          else if(outraBusca[0].parentNode == t9)
          {
            play8()
          }
          else
          {
            console.log("nadaa")
          }
      }

      else
      {
        play9()
      }
  }

  else if (paraBola.style.backgroundColor == "rgb(4, 97, 71)")
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
      let busca = document.querySelectorAll("#img-new-8")
      if(busca.length > 0)
      {
        let outraBusca = document.querySelectorAll("#vazio")
          if(outraBusca[0].parentNode == t1)
          {
            playO1()
          }

          else if(outraBusca[0].parentNode == t2)
          {
            playO2()
          }
          
          else if(outraBusca[0].parentNode == t3)
          {
            playO3()
          }
          
          else if(outraBusca[0].parentNode == t4)
          {
            playO4()
          }
          
          else if(outraBusca[0].parentNode == t5)
          {
            playO5()
          }

          else if(outraBusca[0].parentNode == t6)
          {
            playO6()
          }

          
          else if(outraBusca[0].parentNode == t7)
          {
            playO7()
          }

          else if(outraBusca[0].parentNode == t8)
          {
            playO8()
          }

          else if(outraBusca[0].parentNode == t9)
          {
            playO9()
          }
          
          else
          {
            
          }
      }

      else
      {
        playO8()
      }
  }
  }
  else if(check2 == true)
  {
    let paraX = document.getElementById("x-b") 
    let paraBola = document.getElementById("bola-b")
    if(paraX.style.backgroundColor == "rgb(4, 97, 71)")
    {
      verificaX()
    }
    else if (paraBola.style.backgroundColor == "rgb(4, 97, 71)")
    {
      verificaO()
    }
  }
  
}

function forCheck7()
{
  //fazer uma questão antes da curva, perguntar se qual é a rota pronta se é a de duas ou uma.
  let check2 = document.getElementById("escolha-dois").checked   
  let buscador = document.getElementById("escolha-um").checked
  if(buscador == true)
  {
    let paraX = document.getElementById("x-b") 
  let paraBola = document.getElementById("bola-b")
  if(paraX.style.backgroundColor == "rgb(4, 97, 71)")
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
      let busca = document.querySelectorAll("#img-new-6")
      if(busca.length > 0)
      {
        let outraBusca = document.querySelectorAll("#vazio")
          if(outraBusca[0].parentNode == t1)
          {
            play1()
          }

          else if(outraBusca[0].parentNode == t2)
          {
            play2()
          }
          
          else if(outraBusca[0].parentNode == t3)
          {
            play3()
          }
          
          else if(outraBusca[0].parentNode == t4)
          {
            play4()
          }
          
          else if(outraBusca[0].parentNode == t5)
          {
            play5()
          }

          else if(outraBusca[0].parentNode == t6)
          {
            play6()
          }

          else if(outraBusca[0].parentNode == t6)
          {
            play6()
          } 
          
          else if(outraBusca[0].parentNode == t7)
          {
            play7()
          }

          else if(outraBusca[0].parentNode == t8)
          {
            play8()
          }

          else if(outraBusca[0].parentNode == t9)
          {
            play8()
          }
          
          else
          {
          }
      }

      else
      {
        play6()
      }
  }

  else if (paraBola.style.backgroundColor == "rgb(4, 97, 71)")
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
      let busca = document.querySelectorAll("#img-new-6")
      if(busca.length > 0)
      {
        let outraBusca = document.querySelectorAll("#vazio")
          if(outraBusca[0].parentNode == t1)
          {
            playO1()
          }

          else if(outraBusca[0].parentNode == t2)
          {
            playO2()
          }
          
          else if(outraBusca[0].parentNode == t3)
          {
            playO3()
          }
          
          else if(outraBusca[0].parentNode == t4)
          {
            playO4()
          }
          
          else if(outraBusca[0].parentNode == t5)
          {
            playO5()
          }

          else if(outraBusca[0].parentNode == t6)
          {
            playO6()
          }

          
          else if(outraBusca[0].parentNode == t7)
          {
            playO7()
          }

          else if(outraBusca[0].parentNode == t8)
          {
            playO8()
          }

          else if(outraBusca[0].parentNode == t9)
          {
            playO9()
          }
          else
          {
           
          }
      }

      else
      {
        playO6()
      }
  }
}
  else if(check2 == true)
  {
    let paraX = document.getElementById("x-b") 
      let paraBola = document.getElementById("bola-b")
      if(paraX.style.backgroundColor == "rgb(4, 97, 71)")
      {
        verificaX()
      }
      else if (paraBola.style.backgroundColor == "rgb(4, 97, 71)")
      {
        verificaO()
      }
  }
  


}

function forCheck8()
{
  //fazer uma questão antes da curva, perguntar se qual é a rota pronta se é a de duas ou uma.
  let check2 = document.getElementById("escolha-dois").checked   
  let buscador = document.getElementById("escolha-um").checked
  if(buscador == true)
  {
    let paraX = document.getElementById("x-b") 
  let paraBola = document.getElementById("bola-b")
  if(paraX.style.backgroundColor == "rgb(4, 97, 71)")
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
      let busca = document.querySelectorAll("#img-new-2")
      if(busca.length > 0)
      {
        let outraBusca = document.querySelectorAll("#vazio")
          if(outraBusca[0].parentNode == t1)
          {
            play1()
          }

          else if(outraBusca[0].parentNode == t2)
          {
            play2()
          }
          
          else if(outraBusca[0].parentNode == t3)
          {
            play3()
          }
          
          else if(outraBusca[0].parentNode == t4)
          {
            play4()
          }
          
          else if(outraBusca[0].parentNode == t5)
          {
            play5()
          }

          else if(outraBusca[0].parentNode == t6)
          {
            play6()
          }

          else if(outraBusca[0].parentNode == t6)
          {
            play6()
          } 
          
          else if(outraBusca[0].parentNode == t7)
          {
            play7()
          }

          else if(outraBusca[0].parentNode == t8)
          {
            play8()
          }

          else if(outraBusca[0].parentNode == t9)
          {
            play8()
          }
          else
          {
          }
      }

      else
      {
        play2()
      }
  }

  else if (paraBola.style.backgroundColor == "rgb(4, 97, 71)")
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
      let busca = document.querySelectorAll("#img-new-2")
      if(busca.length > 0)
      {
        let outraBusca = document.querySelectorAll("#vazio")
          if(outraBusca[0].parentNode == t1)
          {
            playO1()
          }

          else if(outraBusca[0].parentNode == t2)
          {
            playO2()
          }
          
          else if(outraBusca[0].parentNode == t3)
          {
            playO3()
          }
          
          else if(outraBusca[0].parentNode == t4)
          {
            playO4()
          }
          
          else if(outraBusca[0].parentNode == t5)
          {
            playO5()
          }

          else if(outraBusca[0].parentNode == t6)
          {
            playO6()
          }

          
          else if(outraBusca[0].parentNode == t7)
          {
            playO7()
          }

          else if(outraBusca[0].parentNode == t8)
          {
            playO8()
          }

          else if(outraBusca[0].parentNode == t9)
          {
            playO9()
          }
          else
          {
          }
      }

      else
      {
        playO2()
      }
  }
}
  else if(check2 == true)
  {
    let paraX = document.getElementById("x-b") 
      let paraBola = document.getElementById("bola-b")
      if(paraX.style.backgroundColor == "rgb(4, 97, 71)")
      {
        verificaX()
      }
      else if (paraBola.style.backgroundColor == "rgb(4, 97, 71)")
      {
        verificaO()
      }
  }
  


}

function forCheck9()
{
  //fazer uma questão antes da curva, perguntar se qual é a rota pronta se é a de duas ou uma.
  let check2 = document.getElementById("escolha-dois").checked   
  let buscador = document.getElementById("escolha-um").checked
  if(buscador == true)
  {
    let paraX = document.getElementById("x-b") 
  let paraBola = document.getElementById("bola-b")
  if(paraX.style.backgroundColor == "rgb(4, 97, 71)")
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
      let busca = document.querySelectorAll("#img-new-1")
      if(busca.length > 0)
      {
        let outraBusca = document.querySelectorAll("#vazio")
          if(outraBusca[0].parentNode == t1)
          {
            play1()
          }

          else if(outraBusca[0].parentNode == t2)
          {
            play2()
          }
          
          else if(outraBusca[0].parentNode == t3)
          {
            play3()
          }
          
          else if(outraBusca[0].parentNode == t4)
          {
            play4()
          }
          
          else if(outraBusca[0].parentNode == t5)
          {
            play5()
          }

          else if(outraBusca[0].parentNode == t6)
          {
            play6()
          }

          else if(outraBusca[0].parentNode == t6)
          {
            play6()
          } 
          
          else if(outraBusca[0].parentNode == t7)
          {
            play7()
          }

          else if(outraBusca[0].parentNode == t8)
          {
            play8()
          }

          else if(outraBusca[0].parentNode == t9)
          {
            play8()
          }
          else
          {
            
          }
      }

      else
      {
        play1()
      }
  }

  else if (paraBola.style.backgroundColor == "rgb(4, 97, 71)")
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
      let busca = document.querySelectorAll("#img-new-1")
      if(busca.length > 0)
      {
        let outraBusca = document.querySelectorAll("#vazio")
          if(outraBusca[0].parentNode == t1)
          {
            playO1()
          }

          else if(outraBusca[0].parentNode == t2)
          {
            playO2()
          }
          
          else if(outraBusca[0].parentNode == t3)
          {
            playO3()
          }
          
          else if(outraBusca[0].parentNode == t4)
          {
            playO4()
          }
          
          else if(outraBusca[0].parentNode == t5)
          {
            playO5()
          }

          else if(outraBusca[0].parentNode == t6)
          {
            playO6()
          }

          
          else if(outraBusca[0].parentNode == t7)
          {
            playO7()
          }

          else if(outraBusca[0].parentNode == t8)
          {
            playO8()
          }

          else if(outraBusca[0].parentNode == t9)
          {
            playO9()
          }
          else
          {
            
          }
      }

      else
      {
        playO1()
      }
  }
}
  else if(check2 == true)
  {
    let paraX = document.getElementById("x-b") 
      let paraBola = document.getElementById("bola-b")
      if(paraX.style.backgroundColor == "rgb(4, 97, 71)")
      {
        verificaX()
      }
      else if (paraBola.style.backgroundColor == "rgb(4, 97, 71)")
      {
        verificaO()
      }
  }
  


}

//aparecimento das jogadas X
function play1()
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
                      var time = setTimeout(verificaX, 10)   
                    }
                  }
                }
}
function play2()
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
                    var time = setTimeout(verificaX, 10)   
                  }
                }
              }
}
function play3()
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
      var time = setTimeout(verificaX, 10)  
    }
  }
}
}
function play4()
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
                var time = setTimeout(verificaX, 10)    
              }

            }
          }
}
function play5()
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
                var time = setTimeout(verificaX, 10)   
              }
            }
          }
}
function play6()
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
                var time = setTimeout(verificaX, 10)   
              }

            }
          }
}
function play7()
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
                    var time = setTimeout(verificaX, 10)   
                  }
            }
          }
}
function play8()
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
  var time = setTimeout(verificaX, 10)  
}

}
}
}
function play9()
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
                var time = setTimeout(verificaX, 10)    
              }

              
            }
          }
}

//aparecimento das jogadas para O

function playO1()
{
                var b = document.getElementById("btn1-click")
                var img = document.createElement("img")
                img.style.width = "5rem"
                img.src = "icons/x.svg"
                b.disabled = "disable"
                img.id = "img-new"
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
                      var time = setTimeout(verificaO, 10)  
                    }
                  }
                }
}
function playO2()
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
                    var time = setTimeout(verificaO, 10)  
                  }
                }
              }
}
function playO3()
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
      var time = setTimeout(verificaO, 10)  
    }
  }
}
}
function playO4()
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
                var time = setTimeout(verificaO, 10)  
              }

            }
          }
}
function playO5()
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
                var time = setTimeout(verificaO, 10)  
              }
            }
          }
}
function playO6()
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
                var time = setTimeout(verificaO, 10)  
              }

            }
          }
}
function playO7()
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
                    var time = setTimeout(verificaO, 10)  
                  }
            }
          }
}
function playO8()
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
  var time = setTimeout(verificaO, 10)  
}

}
}
}
function playO9()
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
                var time = setTimeout(verificaO, 10)  
              }

              
            }
          }
}
