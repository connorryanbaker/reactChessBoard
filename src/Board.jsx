import React from 'react';
import PojoBoard from './PojoBoard';

export class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
    this.flipSelected = this.flipSelected.bind(this);
  }

  flipSelected(pos) {
    if (!this.state.selected) {
      this.setState({
        selected: !this.state.selected,
        start: pos
      });
    } else {
      this.props.brd.move(this.state.start, pos);
      this.setState({
        selected: !this.state.selected,
        start: null
      });
    }
  }
  
  render () {
    const sqs = this.props.brd.grid.map((row, i) => {
      return <ul className="rank" key={i}>{row.map((sq, j) => {
        const klass = (i + j) % 2 === 0 ? "lightSquare" : "darkSquare";
        return <Square klass={klass} 
                       selekt={this.state.selected}
                       flipSelekt={this.flipSelected}
                       piece={sq}
                       key={(i + 1) * (j + 1)}
                       pos={[i,j]}/>
      })}</ul>
    });
    return (<div className="board">
      {sqs}
    </div>);
  }
}

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
  }

  handleClick() {
    this.props.flipSelekt(this.props.pos);
    if (!this.props.selekt) {
      this.setState({
        selected: !this.state.selected,
      });
    }
  }
  
  mouseDown() {
    console.log("im down");
  }

  mouseOver() {
    console.log(this.props.pos);
  }

  mouseUp() {
    console.log("im up");
  }

  componentDidUpdate(prevProps) {
    if (!this.props.selekt && prevProps.selekt && this.state.selected) {
      this.setState({
        selected: false
      });
    }
  }

  render() {
    const selected = this.state.selected ? "selected" : "";
    const piece = this.pieceClass();
    return (
      <li className={`${this.props.klass} square ${selected}`}
          onClick={this.handleClick}>
          <span className={`${piece} bg-img`}
                draggable
                onMouseOver={this.mouseOver}
                onMouseUp={this.mouseUp}
                onMouseDown={this.mouseDown}>
          </span>
          </li>
    )
  }

  pieceClass() {
    let pc;
    switch(this.props.piece) {
      case "BR":
        pc = "black-rook";
        break;
      case "BN":
        pc = "black-knight";
        break;
      case "BB":
        pc = "black-bishop";
        break;
      case "BQ":
        pc = "black-queen";
        break;
      case "BK":
        pc = "black-king";
        break;
      case "BP":
        pc = "black-pawn";
        break;
      case "WR":
        pc = "white-rook";
        break;
      case "WN":
        pc = "white-knight";
        break;
      case "WB":
        pc = "white-bishop";
        break;
      case "WQ":
        pc = "white-queen";
        break;
      case "WK":
        pc = "white-king";
        break;
      case "WP":
        pc = "white-pawn";
        break;
      default:
        pc = "";
        break;
    }
    return pc;
  }
}