import React from 'react';

export class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
    this.flipSelected = this.flipSelected.bind(this);
  }

  flipSelected() {
    this.setState({
      selected: !this.state.selected
    });
  }
  
  render () {
    const arr = Array.from(new Array(8), () => [0,0,0,0,0,0,0,0]);
    const sqs = arr.map((row, i) => {
      return <ul className="rank" key={i}>{row.map((sq, j) => {
        const klass = (i + j) % 2 === 0 ? "lightSquare" : "darkSquare";
        return <Square klass={klass} 
                       selekt={this.state.selected}
                       flipSelekt={this.flipSelected}
                       key={(i + 1) * (j + 1)}/>
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
    this.props.flipSelekt();
    if (!this.props.selekt) {
      this.setState({
        selected: !this.state.selected
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
          onClick={this.handleClick}></li>
    )
  }
}