      

	var a = 1;

    $(document).on("change","#qtd", function(){

	var u = document.forms["myForm"]["fqtdacoes"].value;
	
	while (a > u) {	
	 $("span").remove();
	a = 1
	}

	while (a < u) {	
		var b = a + 1;
			$("<span>" + "Peso "+b +":"+ "<input type='text' placeholder='1' required id='lastinputfieldId" + b +"'" +
				  "name='lastinputfieldName" + "Peso "+b +":"+ "'></span>").appendTo("p");
		a = a + 1;
	}

    });

function validateForm() {
	var dataf = '2020-09-10'
	var datai = '1997-02-02'
	var x = document.forms["myForm"]["fnomepessoa"].value;
  /*
  if (x == "") {
  }
   */ 
	var y = document.forms["myForm"]["fnomecarteira"].value;
  /*if (y == "") {
    
  }*/
	
	var z = document.forms["myForm"]["fdatainicial"].value;
  /*if (z == "") {  
  }*/
	
	var w = document.forms["myForm"]["fdatafinal"].value;
  /*if (w == "") {
   
  }*/
	
	var u = document.forms["myForm"]["fqtdacoes"].value;

	
	var v = document.forms["myForm"]["fpeso"].value;
  /*if (v == "") {
   
  }*/
	var k = document.forms["myForm"]["ffreqrebal"].value;
	

	if (k == ""){
		k = 0
	}

  if ((x == "") || (y == "") ||(z == "") ||(w == "") ||(u == "") ||(v == "")){
	  alert("Preencha todos os campos obrigatórios");
	  return false;
  }
  
  if ((w <= z)){
	  alert("Data final tem que ser maior que a inicial");
	  return false;
  }
  
  if(isNaN(u)){
	  alert("Quantidade de ações não é um número");
	  return false;
  }

  if(isNaN(v)){
	  alert("Peso não é um número");
	  return false;
  }

  if(isNaN(k)){
	  alert("Frequência de Rebalanceamento não é um número");
	  return false;
  }

if ((w <= datai)){
	  alert("Data final tem que ser apos a " + datai);
	  return false;
  }
  
if ((w >= dataf)){
	  alert("Data final tem que ser anterior a " + dataf);
	  return false;
  }
  
  if (k == "") {
    alert("Você não escolheu rebalanceamento, por padrão será cosiderado 0");
    return true;
	}

}

