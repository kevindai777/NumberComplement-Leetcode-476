//Objective is to find the complement number by flipping every bit

let num = 5


//O(1) solution since the number of bits is constant
//We use bit manipulation and a bitmask to XOR every bit

//Bitmask to flip the bits
let bitmask = 1
    
//Make a copy of the number to traverse over
let temp = num

//XOR every bit in num w/ 1 starting from the LSB
while (temp > 0) {
    num ^= bitmask
    bitmask <<= 1
    temp >>= 1
}

return num