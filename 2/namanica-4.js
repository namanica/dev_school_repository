let truck = [ [ "(-)", "[IIII]", "[))))]" ], [ "IuI", "[llll]" ], [ "[@@@@]", "UwU",
    "[IlII]" ], [ "IuI", "[))))]", "x" ], [] ];

let unpacked = '';
let loop = 0;
for (let packageIndex = 0; packageIndex < truck.length; packageIndex++)
{
        for (let itemIndex = 0; itemIndex < truck[packageIndex].length; itemIndex++){
            if (truck[packageIndex][itemIndex].length == 6){
                if (truck[packageIndex][itemIndex][0]=="[" && truck[packageIndex][itemIndex][5]=="]"){
                    if (truck[packageIndex][itemIndex][1]==truck[packageIndex][itemIndex][2] &&
                        truck[packageIndex][itemIndex][2]==truck[packageIndex][itemIndex][3] &&
                        truck[packageIndex][itemIndex][3]==truck[packageIndex][itemIndex][4]){
                        loop++
                        if (loop % 5 !== 0)
                        unpacked += truck[packageIndex][itemIndex].slice(1).slice(0,-1).split("").join(" ") + ' ';

                    }



            }



        }
    }
} console.log(unpacked.trim());
