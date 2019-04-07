import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Checkerboard extends Component{
    constructor(props){
        super(props);
        this.state={
            rows: 0,
            columns: 0
        }
    }
    setRows = (e)=>{
        let inte = parseInt(e.target.value);
        this.setState({rows: inte});
    }
    setColumns = (e)=>{
        let inte = parseInt(e.target.value);
        this.setState({columns:inte});
    }
    setBoard = () =>{
        let rows = [];
        for(var i = 0; i<this.state.rows; i++){
            let cell =[];
            for(var idx =0; idx < this.state.columns; idx++){
                if(i%2===0){
                    if(idx%2===0){
                        cell.push(<td key={idx} className="bg-dark"/>)
                    }
                    else{
                        cell.push(<td key={idx} className="bg-danger"/>)
                    }
                }
                else{
                    if(idx%2===0){
                        cell.push(<td key={idx} className="bg-danger"/>)
                    }
                    else{
                        cell.push(<td key={idx} className="bg-dark"/>)
                    }
                }
            }
            rows.push(<tr key={i}>{cell}</tr>)
        }
        return(
            <table>
            <tbody>
                {rows}
            </tbody>
        </table>
        )
    }
    makeBoard =()=>{
        const table = this.setBoard();
        ReactDOM.render(table, document.getElementById('playingSpace'));
    }

    render(){
        return(
            
            <div className="container text-center">
                

                <div className="row">
                    <div className="col text-center">
                        <h1>It's Checkers Time!</h1>
                        <hr/>
                        <input id="size" onChange={this.setRows} placeholder="Number of Rows"/>
                        <input onChange={this.setColumns} placeholder="Number of Columns"/>
                        <br/>
                        <br/>
                        <button className="btn btn-success"onClick={this.makeBoard}>Make the Board</button>
                        <br/>
                    </div>
                </div>
                <div className="row">
                    <div id="playingSpace" className="col d-flex p-4 justify-content-center">
                    </div>
                </div>
            
            
            
            </div>
        )
    }
}
export default Checkerboard;