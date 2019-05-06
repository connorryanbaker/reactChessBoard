class PojoBoard {
  constructor() {
    this.grid = this.makeGrid();
  }

  makeGrid() {
    const arr = [];
    for (let i = 0; i < 8; i++) {
      if (i === 0 || i === 7) {
        arr.push(["R","N","B","Q","K","B","N","R"]);
      } else if (i === 1 || i === 6) {
        arr.push(["P","P","P","P","P","P","P","P"]);
      } else {
        arr.push([" ", " ", " "," "," "," "," "," "])
      }
    }
    return arr;
  }

  move(start,dest) {
    if (start[0] === dest[0] && start[1] === dest[1]) {
      return;
    } else {
      this.grid[dest[0]][dest[1]] = this.grid[start[0]][start[1]];
      this.grid[start[0]][start[1]] = " ";
    }
  }
}

export default PojoBoard;