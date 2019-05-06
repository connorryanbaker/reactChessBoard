import React from 'react';

export class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const arr = Array.from(new Array(8), () => [0,0,0,0,0,0,0,0]);
    const sqs = arr.map((row, i) => {
      return<ul className="rank">{row.map((sq, j) => {
        const klass = (i + j) % 2 === 0 ? "lightSquare" : "darkSquare";
        return <Square klass={klass} key={(i + 1) * (j + 1)}/>
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
    this.setState({
      selected: !this.state.selected
    });
  }

  render() {
    const selected = this.state.selected ? "selected" : "";
    return (
      <li className={`${this.props.klass} square ${selected}`}
          onClick={this.handleClick}></li>
    )
  }

}