
 ______     ______     ______     _____     __    __     ______    
/\  == \   /\  ___\   /\  __ \   /\  __-.  /\ "-./  \   /\  ___\   
\ \  __<   \ \  __\   \ \  __ \  \ \ \/\ \ \ \ \-./\ \  \ \  __\   
 \ \_\ \_\  \ \_____\  \ \_\ \_\  \ \____-  \ \_\ \ \_\  \ \_____\ 
  \/_/ /_/   \/_____/   \/_/\/_/   \/____/   \/_/  \/_/   \/_____/ 
                                                                   
//=================================================================//

                        Connect4 - Entrega 1
                    João Lucas Pires - up201606617
                    João Pedro Aguiar - up201606361

//=================================================================//

Indíce:
	1. Código HTML
	2. Código CSS
	3. Código JS
	4. Observações

//=================================================================//

//=================================================================//
	1.						  Código HTML
//=================================================================//
A parte em HTML do trabalho é composta pela página inicial.
A página inicial permite o acesso a vários paineis que alternam
entre si utilizando botões localizados no topo da página.

A disposição e conteúdo dos paineis está definida como:
- Jogo Local: Contém um formulário que permite personalizar o jogo 
com diversas opções tais como cor e tamanho;
- Jogo Remoto: Contém um formulário de "Login" inativo para futuras
entregas do trabalho;
- Instruções: As instruções de uso do jogo e do website no geral 
estão contidas neste painel;
- Ranking: Contém uma tabela com as classificações de todos os jogos
 elaborados. A informação é eliminada se a página for recarregada.

Outros elementos menos importantes da página estática como texto 
receberam entradas animadas e estilos CSS3 além de uma animação de
circulos a saltar relacionados com o tema do jogo.

O ficheiro HTML foi validado no W3C validator 
e nâo apresentou erros ou avisos.

//=================================================================//
	2.							Código CSS
//=================================================================//
O ficheiro CSS apresenta as classes, pseudo-classes e id's
organizados em várias secções para fácil acesso e modificação.

Tentou se usar ao máximo as regras de positioning para que o jogo 
fique bem representado na janela, no entanto não se garante que a 
página siga um design responsivo e que funcione em displays de 
smartphones ou tablets.

Usou-se a propriedade "user-select:none" para não permitir a 
selecção de texto e impedir seleções ou cliques acidentais.

As animações em CSS3 foram na maioria elaboradas com ajuda de 
websites dedicados ao mesmo. (ex.: www.animista.net)

Encontram-se todas num ficheiro separado para melhor organização 
e facilidade de correção de bugs.

Também ambos os ficheiros CSS foram validados e não apresentam
erros ou avisos.

//=================================================================//
	3.						  Código JS
//=================================================================//
O código Javascript está separado em dois ficheiros, board.js e 
jsStyle.js.

O ficheiro jsStyle.js contém funções para gerir animações.

O ficheiro board.js contém uma função de inicialização/main, 
initialize(), que vai buscar os valores ao formulário de 
configuração do jogo e usa-os para gerar um objeto 
Tabuleiro (board).

Da mesma forma, contém uma função denominada exit(), que 
destrói o objeto Tabuleiro e atualiza a tabela de 
classificações.

Todo o código segue um paradigma orientado a objetos. 

A variável que contém o objeto Tabuleiro (mainBoard) é global 
de forma a permitir fácil acesso à mesma em locais em que o 
scope do código não permite o acesso direto. 

(O turno atual do jogo também é declarado como global 
pela mesma razão.)

Além da função de inicialização e saída, contém a 
classe/função construtora do objeto tabuleiro, 
que contém as propriedades a tomar nota do mesmo e 
os métodos que atuam sobre as suas propriedades.

Segue a descrição das propriedades e dos 
métodos da classe "Board":
 
 - Propriedades:

height - altura do tabuleiro/número de peças em cada coluna
width - largura do tabuleiro/número de colunas
boards até - matriz/vetor de vetores com descrição atual do
tabuleiro (0 - sem peça ; 1 - peça do jogador 1 ; 2 - peça 
do jogador 2) 
player1Color - Cor da peça do jogador 1
player2Color - cor da peça do jogador 2
boardColor - cor do tabuleiro 
cpu - Jogador 2: Humano ou CPU? 

 - Métodos:

play() - Inicia a jogada de um jogador humano. Chama outros métodos 
do tabuleiro para executar as diferentes operações de uma jogada. 

playCPU() - Executa o mesmo que a função play() mas 
para o turno do computador.

checkWin() - Usa a matriz do estado do tabuleiro para verificar
se algum dos jogadores ganhou o jogo.

drawBoard() - Cria os elementos estáticos do tabuleiro e adiciona-os
ao ficheiro HTML dinâmicamente.

updateStateBoard() - Circula pelo tabuleiro estático e guarda o
estado do mesmo (quais as peças e respetivas posições) na matriz
de estado do objeto Tabuleiro.

checkLowerAndPut() - Recebe o índice duma coluna e verifica qual
a posição mais inferior disponível. Se encontrar uma disponível,
coloca uma peça na mesma.

basicIA() - Verifica qual a coluna com menos peças no tabuleiro,
e devolve o seu índice.

changeTurn() - Avança para o turno do jogador oposto.

giveUp() - Acaba o jogo por desistência do jogador atual.

//=================================================================//
	4.						  Observações
//=================================================================//

Incluímos ficheiros de Javascript de uma versão do MiniMax e 
respetiva class "Node" que tentamos implementar mas que não pudemos 
utilizar no trabalho final por falta de tempo para corrigir os bugs.
Encontram-se na pasta "_unused".

O jogo permite personalizar a cor do tabuleiro, a cor das peças de 
cada jogador, escolher jogar contra o computador ou outro jogador e
a altura e largura do tabuleiro.

//=================================================================//
	============================FIM===============================
//=================================================================//