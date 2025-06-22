var reverseBits = function(n) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result <<= 1; // Shift result to the left by 1
        result |= (n & 1); // Get the last bit of n and add it to result
        n >>= 1; // Shift n to the right by 1
    }
    return result >>> 0; // Convert to unsigned integer
    
};

