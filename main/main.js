module.exports = function main(inputs) {
    // write your code here...
	var p1,p2;
	if(inputs.distance<=2){
		p1=6
	}else if(inputs.distance<=8){
		p1=6+(inputs.distance-2)*0.8
	}else{
		p1=6+6*0.8+(inputs.distance-8)*1.2
	}
	p2 = inputs.parkTime * 0.25
    return Math.round(p1+p2);
};
