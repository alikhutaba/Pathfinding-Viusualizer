class node {
  constructor(id, height, width, status) {
    this.id = id;
    this.height = height;
    this.width = width;
    this.status = status;
    this.parent = null;
    this.g = 0;
    this.h = 0;
    this.f = this.g + this.h;
    this.distance = Infinity;
  }
}

export default node;

// module.exports = node;
