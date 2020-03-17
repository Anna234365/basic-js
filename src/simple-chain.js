const chainMaker = {
  chain: [], 

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    value == null ? this.chain.push(null) : this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.chain.length) {
      this.chain = [];
      throw new Error('Ooops!');
    } 
    this.chain.splice(position-1,1); 
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let chain = '';
    for (let item of this.chain) {
      chain += `~~( ${item} )`
    };
    this.chain = [];
    return chain.slice(2);
  }
};

module.exports = chainMaker;

// console.log(chainMaker.finishChain())