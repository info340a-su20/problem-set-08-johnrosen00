import React, { Component } from 'react'; //import React Component


const EXAMPLE_SENATORS = [  
  { id: 'C000127',  name: 'Maria Cantwell', state: 'WA',  party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */

export class App extends Component{
  render(){

      let senators = this.props.senators;
      return (
      <div className="container">
        <h1>US Senators 2019</h1>
        <SenatorTable senators={senators}/>
      </div>
      );
  }
}

export class SenatorTable extends Component{
  render(){
    let rows = this.props.senators.map(
      (item) => {
        return <SenatorRow key={item.id} senator={item}/>
      }
    )
    return (
      <table className="table table-bordered">
        <TableHeader cols={['Name', 'State', 'Phone', 'Twitter']}/>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

export class TableHeader extends Component{
  render(){
    let colNames = this.props.cols.map(
      (item) => {
        return (
          <th key={item}>{item}</th>
        );
      }
    );
    
    
    return (
      <thead>
        <tr>
          {colNames}
        </tr>
      </thead>
    );
  }
}

export class SenatorRow extends Component {
  render(){

    //expected: Object this.props.senator

    let current = this.props.senator;
    
    return (
      <tr>
        <td>{current.name}</td>
        <td>{current.party.charAt(0) +" - "+ current.state}</td>
        <td><a href={"tel:"+current.phone}>{current.phone}</a></td>
        <td><a href={"https://twitter.com/"+current.twitter}>{"@"+current.twitter}</a></td>
      </tr>
    )
  }
}