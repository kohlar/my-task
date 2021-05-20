
const checkYuGiOh = (n) => {
	/*if (typeof n === 'string');{
	return "invalid parameter:" + n;
	}*/
var return_list =[];
for (i=1;i<=n;i++){
    if (i%2==0){
        return_list.push("yu");
    }else
    if (i%3==0){
        return_list.push("gi");

    }else
    if (i%5==0){
        return_list.push("oh");
    }else{
        return_list.push(i);
    }

}
return return_list;
}