import React, { Component } from 'react'
import "../App.css"
export default class Data extends Component {

    constructor() {
        super();
        this.state = {
            Data: [
                { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
                { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age: 58, years: 25 },
                { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }

            ]
        }
    }
    render() {
        return (
            <div className='Data'>
                <h1>Data based on the Map</h1> 
                {this.state.Data.map((e, i) => {
                   return( <li>
                        <span>Id: {e.id}</span>
                        <span>Name : {e.name}</span>
                        <span>User Type: {e.user_type}</span>
                    </li>)
                })}
            </div>
        )
    }
}
