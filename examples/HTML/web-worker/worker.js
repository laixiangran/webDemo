/**
 * Created by laixiangran on 2017/2/13.
 * homepage：http://www.laixiangran.cn
 */

//Web Worker内部的代码
var n = 1;
search: while (true) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1) {
        if (n % i == 0) {
            continue search;
        }
    }
    // found a prime!
    postMessage(n);
}