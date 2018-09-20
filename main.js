let n

initial()

setInterval(function(){
	leave(whichPicture(n)).one('transitionend', function(e){
		standby($(e.currentTarget))
	})
	current(whichPicture(n+1))
	n =n+1
}, 1500)

function whichPicture(n){
	return $(`img:nth-child(${count(n)})`)
}

function standby($node){
	return $node.removeClass('current leave').addClass('standby')
}

function current($node){
	return $node.removeClass('standby leave').addClass('current')
}

function leave($node){
	return $node.removeClass('standby current').addClass('leave')
}

function count(n){
	n=n%3
	if (n===0) {
		n=3
	}
	return n
}

function initial(){
	n =1
	$('img:nth-child(1)').addClass('current')
	$('img:nth-child(2)').addClass('standby')
	$('img:nth-child(3)').addClass('standby')	
}