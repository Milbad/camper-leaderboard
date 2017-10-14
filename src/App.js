import React, { Component } from 'react'
import './App.css'
import { get30, getAllTime} from './helpers/api'
import { Table } from 'react-bootstrap'

class App extends Component {

  state = {
    data: [],
  }

  componentDidMount() {
    get30().then((data) => {
      this.setState({data})
    })
  }
  handleClick = (e) => {
    e.target.innerText === 'All time'
    ?getAllTime().then((data) => {
      this.setState({data})
    })
    :get30().then((data) => {
      this.setState({data})
    })
  }


  render() {
    const {data} = this.state
    return (
      <div className="App">
        <header className='App-header text-center'>
          <div className='App-title'>CAMP LEADERBOARD</div>
        </header>
         <Table striped bordered condensed hover responsive>
          <thead>
            <tr>
              <th className='text-center'>#</th>
              <th className='text-center'>Username</th>
              <th className='text-center link' onClick={this.handleClick}>Last 30 days</th>
              <th className='text-center link' onClick={this.handleClick}>All time</th>
            </tr>
          </thead>
          <tbody style={{textAlign:'center'}}>
            {data.map((item, index) => (
            <tr key={item.username}>
              <td>{index+1}</td>
              <td className='text-left'><img src={item.img} alt ={'profile image for '+ item.username} style={{width:20,  paddingRight:5}}/>{item.username}</td>
              <td>{item.recent}</td>
              <td>{item.alltime}</td>
            </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
