function checkTotal() {
		document.listForm.total.value = '';
		var sum = 0;
		for (i=0;i<document.listForm.choice.length;i++) {
		  if (document.listForm.choice[i].checked) {
		  	sum = add(sum ,parseInt(document.listForm.choice[i].value));
		  }
		}
		document.listForm.total.value = sum;
	}
function add(a,b){
    if(!isNaN(a) && !isNaN(b))
		return a+b;
	else
		throw Error("only numbers are allowed");
}

