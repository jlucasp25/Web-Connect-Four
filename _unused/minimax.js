var move = null;

function miniMax2(node, maxDepth,maximizador/*JOGADOR*/) {
	console.log(node);
	if ( node.checkWin() == 1 || maxDepth == 0 )
		return node.calcUtility();
	else if ( maximizador == 1) {
		/*MIN - JOGADOR*/
		var alpha = Infinity;
		var descendants = node.makeDescendants();
		for (var i = 0; i < descendants.length ; i++) {
			alpha = Math.min(alpha, miniMax2(node.childs[i], maxDepth - 1,2));
		}
		return alpha;
	}
	else {
		/*MAX - PC*/
		var maximum = - Infinity;
		var alpha = -Infinity;
		var descendants = node.makeDescendants();
		for (var i = 0 ; i < descendants.length; i++) {
			alpha = Math.max(alpha,miniMax2(node.childs[i], maxDepth - 1,1));
			if (alpha > maximum) {
				maximum = alpha;
				move = i;
			}
		}
	}
}