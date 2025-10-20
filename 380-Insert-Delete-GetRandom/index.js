var RandomizedSet = function() {
    this.map = new Map();
    this.array = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) return false;
    this.array.push(val);
    this.map.set(val, this.array.length - 1);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) return false;

    const lastElement = this.array[this.array.length - 1];
    const valIndex = this.array.indexOf(val);

    this.map.set(lastElement, valIndex);
    this.array[valIndex] = lastElement;

    this.map.delete(val);
    this.array.pop();
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.array[Math.floor(Math.random() * this.array.length)];
};

var obj = new RandomizedSet()
console.log(obj.insert(1));
console.log(obj.insert(10));
console.log(obj.insert(20));
console.log(obj.insert(30));
console.log("----", obj, "----");
console.log(obj.getRandom());
console.log(obj.getRandom());
console.log(obj.getRandom());
console.log(obj.getRandom());
console.log(obj.getRandom());
console.log(obj.getRandom());