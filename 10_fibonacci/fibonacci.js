const fibonacci = function(source) {
    source = Number(source)
    console.log(source);
    let pre = [1, 1];
    if (source == 0) {
        return 0
    }else if (source < 0) {
        return "OOPS"
    }else if (source == 1) {
        return 1;
    }
    // 1, 1, 2, 3
    for (let i = 2; i < source; i++){
        let tmp = 0;
        tmp = pre[pre.length - 1] + pre[pre.length - 2];
        pre.push(tmp);
    }
    console.log(pre);
    return pre[pre.length - 1]  
};

// Do not edit below this line
module.exports = fibonacci;
