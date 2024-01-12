import React, { Component } from 'react';

export default class Hof extends Component {
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
        };
    }

    render() {
        const Newdata = this.state.Data.filter((e) => e.user_type === 'Designer');
        const Newdataage = this.state.Data.filter((e) => e.age > 28 && e.age <= 50);
        const Totalexperience = Newdata.reduce((total, currentValue) => {
            return total + currentValue.years;
        }, 0);
        return (
            <div>
                <div className='Data'>
                    <h1>Data based on the filter</h1>
                    <ul className='ul'>
                        {Newdata.map((e) => (
                            <li key={e.id}>
                                <span>Id: {e.id}</span>
                                <span>Name : {e.name}</span>
                                <span>User Type: {e.user_type}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='Data'>
                    <h1>Data based on the filter age</h1>
                    <ul>
                        {Newdataage.map((e) => (
                            <li key={e.id}>
                                <span>Id: {e.id}</span>
                                <span>Name : {e.name}</span>
                                <span>User Type: {e.user_type}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='Data'>
                    <h1>Data based on reduce</h1>
                    <h3>{Totalexperience}</h3>
                </div>
            </div>
        );
    }
}
