// The FMath object is intended for only extremely fast APPROXIMATE functions

const FastMath = {
    // sqrtPrecision indicates the precision targeted by the sqrt algorithm
    // square root precission defaults to 5% = 0.05 of actual square root:
    // FastMath.sqrt(9) = 3.023529411764706
    // FastMath.sqrt(100) = 10.032578510960604
    // FastMath.sqrt(1024) = 32.02142090500024
    // FastMath.sqrt(a million) = 1000.5538710539447
    // FastMath.sqrt(16) = 4.002257524798522
    // FastMath.sqrt(1000000000000) = 1000454.9908041331
    // FastMath.sqrt(81 =) 9.014272376994608
    //  You pretty much don't need more precision, unless you are doing VERY large numbers
    sqrtPrecision: 0.05,
    sqrt: function (x) {

// part of fast square root sequnce of funtions: evaluates nearness of answer to actual square root;
        const __FastMath__sqrt_isGoodEnough = function (n) {
            return Math.abs(n * n - x) / x < FastMath.sqrtPrecision;
        };

// part of fast square root sequence of funtions:
        const __FastMath__sqrt_improve = function (guess) {
            return (guess + x / guess) / 2;
        };

// part of fast square root sequnce of funtions
        const __FastMath__sqrt_sqrIter = function (number) {
            return (__FastMath__sqrt_isGoodEnough(number)) ? number
                : __FastMath__sqrt_sqrIter(__FastMath__sqrt_improve(number))
        };

        return __FastMath__sqrt_sqrIter(x);
    },
    sqrtInt : function(x){
        return Math.floor(FastMath.sqrt(x))
    }
}

// Credit for the fast approx square root:
// https://gist.github.com/casoetan/23dafa27f92ca5b019227b2e8c0de7c1