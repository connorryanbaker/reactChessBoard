class PojoBoard {
  constructor() {
    this.grid = this.makeGrid();
  }

  makeGrid() {
    const arr = [];
    for (let i = 0; i < 8; i++) {
      if (i === 0) {
        arr.push(["BR","BN","BB","BQ","BK","BB","BN","BR"]);
      } else if (i === 7) {
        arr.push(["WR", "WN", "WB", "WQ", "WK", "WB", "WN", "WR"]);
      } else if (i === 1) {
        arr.push(["BP","BP","BP","BP","BP","BP","BP","BP"]);
      } else if (i === 6) {
        arr.push(["WP", "WP", "WP", "WP", "WP", "WP", "WP", "WP"]);
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