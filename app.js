const button  = document.querySelector('button')
document.addEventListener('DOMContentLoaded', () =>{
    const board = document.querySelector('.board')
    let currentPlayer = 'X';
    let cells = ['','','','','','','','','',];
    let gameOver = false;
    for(let i = 0; i < 9; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', () =>{
            if(!gameOver && cells[i] === ''){
                cells[i] = currentPlayer;
                cell.textContent = currentPlayer;
                if(checkWin()){
                    gameOver = true;
                    alert(`Siz yutdingiz ${currentPlayer} !`)
                }else if(checkDraw()){
                    gameOver = true;
                    alert(`Do'stlar g'alaba qozondi`)
                }else{
                    currentPlayer = currentPlayer === 'X' ? 'O' :'X';
                }
            }
        })
        board.appendChild(cell)
    }
    function checkWin(){
        const winningCombination = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [2,4,6]
        ];
        for(let combination of winningCombination){
            const [a,b,c] = combination;
            if(cells[a] == currentPlayer && cells[b] == currentPlayer && cells[c] == currentPlayer){
                return true;
            }
        }
        return false;
    }
    function checkDraw(){
        return cells.every(cell => cell !== '');
    }
});
function restart(){
    window.location.reload();
}
button.addEventListener('click',restart)