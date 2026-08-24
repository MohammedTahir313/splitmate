const name = "Git/Github Bootcamp"
console.log(name);

const a = 4;
const b = 8;
console.log(a*b);

function showStars(rows){

    for(let row=1; row<= rows; row++)
    {
        let pattren = ''
        for (let i=0; i<row; i++)
        {
            pattren += '*';
        }
        console.log(pattren);
    }
}

showStars(6);

const a1 = 4;
const b1 = 8;
console.log(a1-b1);