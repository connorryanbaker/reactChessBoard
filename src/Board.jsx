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
  }

  handleClick() {
    this.props.flipSelekt(this.props.pos);
    if (!this.props.selekt) {
      this.setState({
        selected: !this.state.selected,
      });
    }
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
    return (
      <li className={`${this.props.klass} square ${selected}`}
          onClick={this.handleClick}>{this.props.piece}</li>
    )
  }
}