const convertFarhToCelsius = (F) => {

	if (typeof F === 'array'){
	return F +" "+ "is not a valid number but a/an" + " "+ typeof F ;
	}else
		if (typeof F === 'object'){
	return F +" "+ "is not a valid number but a/an" + " "+ typeof F ;
		}
 	var return_F = (F-32)*(5/9);
   return return_F.toFixed(4)
	
}

