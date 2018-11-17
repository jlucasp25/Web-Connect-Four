function Node(node, selectedCol, currentDepth) {
    this.nodeState = null;
    this.score = 0;
    if (node == null) {
    	this.nodeState = [];
        for (var i = 0 ; i < mainBoard.height; i++) {
        	this.nodeState[i] = [];
        	for (var j = 0 ; j < mainBoard.width; j++) {
        		this.nodeState[i][j] = mainBoard.boardState[i][j];
        	}
        }    
    }
    else {
    	this.nodeState = [];
    	for (var i = 0 ; i < mainBoard.height; i++) {
    		this.nodeState[i] = [];
        	for (var j = 0 ; j < mainBoard.width; j++) {
        		this.nodeState[i][j] = node.nodeState[i][j];
        	}
        }   
    }
    this.parent = node;
    this.childs = [];
    if (node == null)
        this.player = 1;
    else if (node.player == 1)
        this.player = 2;
    else
    	this.player = 1;
    this.depth = currentDepth + 1;
    if (selectedCol != null) {
            this.playedOn = selectedCol;
            //Mete a peça na matriz posta pelo próprio node
        for ( var i = mainBoard.height - 1 ; i >= 0 ; i--) {
            if (this.nodeState[i][selectedCol] == 0) {
                this.nodeState[i][selectedCol] = this.player;
                break;
            }
        }
    }
    
    /*Métodos de Node*/
    /*Getters*/
    this.getMove = function() {
        return this.playedOn;
    };
this.score = total;
    /*Verifica todas as colunas disponíveis*/
    this.possibleMoves = function() {
        var available = [];
        for (var i = 0; i < mainBoard.width; i++) {
            for (var j = 0 ; j < mainBoard.height; j++) {
                if (this.nodeState[j][i] == 0) {
                    available[i] = true;
                    break;
                }
                else
                    available[i] = false;
            }
        }   
        return available;
    };

    /*Cria descendentes usando todas as colunas disponíveis*/
    this.makeDescendants = function() {
        var availableMoves = this.possibleMoves();
        var childs = [];
        for (var i = 0; i < mainBoard.width && availableMoves[i] ; i++) {
                var Xnode = new Node(this,i,this.depth);
                childs.push(Xnode);
        }
        this.childs = childs;
        return childs;
    };

    this.calcUtility = function() {
    var gameOver = this.checkWin();
    if(gameOver == 1){
        if (currentTurn == 1) {
            this.score = 512;
            return 512;
        }
        else {
        	this.score = -512;
            return -512;
        }
    }
    else if(gameOver == 2) {
    	this.score = 0;
        return 0;
    }
   
    var total = 0;
    var nOfMyPieces, nOfOponentPieces = 0;
    
    //HORIZONTAIS
    for (var i = 0; i < mainBoard.height; i++) {
        for (var j = 0 ; j < mainBoard.width - 3; j++) {
                
            nOfMyPieces, nOfOponentPieces = 0;
            
            for (var k = 0 ; k < 4 ; k++) {
                if (this.nodeState[i][j+k] == 2)
                    nOfMyPieces++;
                else if (this.nodeState[i][j+k] == 1)
                    nOfOponentPieces++;
            }   
            total += calculateFourArrayScore(nOfMyPieces, nOfOponentPieces);

        }
    }

    //VERTICAIS
    for (var i = 0 ; i < mainBoard.height - 3; i++) {
        for (var j = 0 ; j < mainBoard.width; j++) {
            nOfMyPieces = nOfOponentPieces = 0;
            for (var k = 0; k < 4 ; k++) {
            if (this.nodeState[i+k][j] == 2)
                nOfMyPieces++;
            else if (this.nodeState[i+k][j] == 1)
                nOfOponentPieces++; 
            }
            total += calculateFourArrayScore(nOfMyPieces, nOfOponentPieces);

        }
    }

    //diagonal direita/baixo
    for (var i = 0 ; i < mainBoard.height - 3; i++) {
        for (var j = 0 ; j < mainBoard.width - 3 ; j++) {
            nOfMyPieces = nOfOponentPieces = 0;
            for (var k = 0; k < 4 ; k++) {
                if (this.nodeState[i+k][j+k] == 2)
                    nOfMyPieces++;
                else if (this.nodeState[i+k][j+k] == 1)
                    nOfOponentPieces++;
            }
            total += calculateFourArrayScore(nOfMyPieces, nOfOponentPieces);
        }
    }

       //diagonal esquerda/baixo
    for (var i = mainBoard.height - 1 ; i > 2; i--) {
        for (var j = 0 ; j < mainBoard.width - 3 ; j++) {
            nOfMyPieces = nOfOponentPieces = 0;
            for (var k = 0; k < 4 ; k++) {
                if (this.nodeState[i-k][j+k] == 2)
                    nOfMyPieces++;
                else if (this.nodeState[i-k][j+k] == 1)
                    nOfOponentPieces++;
            }
            total += calculateFourArrayScore(nOfMyPieces, nOfOponentPieces);
        }
    }
    this.score = total;
    return total;
};

    this.checkWin = function() /*0 se o jogo nao acabou, 1 se alguem ganhou e 2 se o tabu ta cheio*/  {
            var k = 0;
            for ( var i = 0 ; i < mainBoard.height; i++) {
                for ( var j = 0 ; j < mainBoard.width; j++) {
                    if (this.nodeState[i][j] != 0) {
                    
                    //PESQUISA HORIZONTAL
                        for (k = 1; k < 4 && j+k<mainBoard.width;k++) {
                            if (this.nodeState[i][j+k] != this.nodeState[i][j])
                                break;
                        }
                    if (k>=4)
                        return 1;
                        //PESQUISA VERTICAL
                        for(k=1; k<4 && i+k<mainBoard.height;k++) {
                        if (this.nodeState[i+k][j] != this.nodeState[i][j])
                            break;
                        }
                        if (k>=4)
                            return 1;

                        //PESQUISA DIAGONAL DIREITA/BAIXO

                        for (k=1;k < 4 && i+k<mainBoard.height && j+k<mainBoard.width;k++) {
                            if (this.nodeState[i+k][j+k] != this.nodeState[i][j])
                                break;
                        }
                        if (k>=4)
                            return 1;

                        //PESQUISA DIAGONAL ESQUERDA/BAIXO
                        
                        for (k=1;k < 4 && i+k<mainBoard.height && j-k>=0;k++ ) {
                            if (this.nodeState[i+k][j-k] != this.nodeState[i][j])
                                break;
                        }

                        if (k>=4)
                            return 1;


                        }
                    }
                }

                for (var l = 0 ; l < mainBoard.height;l++)
                    for ( var m = 0; m < mainBoard.width; m++)
                        if (this.nodeState[l][m] == 0)
                            return 0;
                return 2;

};

}
/*Fecha a classe Node*/
function calculateFourArrayScore(nOfMyPieces,nOfOponentPieces) {
    if (nOfMyPieces == 4)
        return 512;
    else if (nOfOponentPieces == 4)
        return -512;
    else if (nOfMyPieces == 3 && nOfOponentPieces == 0)
        return 50;
    else if (nOfMyPieces == 0 && nOfOponentPieces == 3)
        return -50;
    else if (nOfMyPieces == 2 && nOfOponentPieces == 0)
        return 10;
    else if (nOfMyPieces == 0 && nOfOponentPieces == 2)
        return -10;
    else if (nOfMyPieces == 3 && nOfOponentPieces == 0)
        return 50;
    else if (nOfMyPieces == 1 && nOfOponentPieces == 0)
        return 1;
    else if (nOfMyPieces == 0 && nOfOponentPieces == 1)
        return -1;
    else
        return 0;
}

