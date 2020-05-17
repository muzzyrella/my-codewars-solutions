const streetFighterSelection = (fighters, position, moves) => {
    let hover = [], x = position[1], y = position[0];
    for(let n = 0; n < moves.length; n++) {
        switch(moves[n]) {
            case 'left':
                x === 0 ? x = 5 : x--;
                break;
            case 'right':
                x === 5 ? x = 0 : x++;
                break;
            case 'up':
                y = 0;
                break;
            case 'down':
                y = 1;
                break;
        }
        console.log(x, y);
        hover.push(fighters[y][x]);
    }
    return hover;
}