import React, { Component } from 'react';
import { parse } from 'querystring';
//import { Test} from './test';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: 0,
      amountReceived: 0,
      changeDue: null,
      twenties: '0',
      tens: '0',
      fives: '1',
      ones: '1',
      quarters: '3',
      dimes: '2',
      nickels: '0',
      pennies: '4'


    };//For this state
    //This is for binding and calling the events
    this.updateValues = this.updateValues.bind(this);
    this.calculate = this.calculate.bind(this);

  }//For constructor

  //Renders the value
  updateValues(event){
    this.setState({
      [event.target.name]: parseFloat(event.target.value),
    })//for setState

  }//For updateValues

  //Method for calculation
  calculate() {

    let amountDue = this.state.amountDue;
    let amountReceived = this.state.amountReceived;
    let changeDue = amountReceived  - amountDue; 
    let changeDue2 = Math.floor(amountReceived * 100) - Math.floor (amountDue * 100);
    let totalAmount = Math.trunc(changeDue);
    let twenties = Math.trunc(totalAmount/20); //Math.trunc cuts the dots and digits from 10.40 to 10
    totalAmount= totalAmount % 20;
    let tens = Math.trunc(totalAmount/10);
    totalAmount = totalAmount % 10;
    let fives = Math.trunc(totalAmount/5);
    let ones = Math.trunc(totalAmount%5);

    //Now time to use the old code from JS Change Calculator
    //We will be using Math.floor
    let dollars = changeDue2;
    let cents = dollars;
    console.log(cents);
    dollars = Math.floor(cents/100);
    cents -= dollars * 100;

    let quarters = Math.floor(cents/25);
    cents -= quarters * 25;

    let dimes = Math.floor(cents/10);
    cents -= dimes * 10;

    let nickels = Math.floor(cents/5);
    cents -= nickels * 5;

    let pennies = Math.floor(cents/1);
    //pennies = Math.round(pennies);

    if (changeDue < 0) {
      twenties = 0; tens = 0; fives = 0; ones = 0;quarters = 0;dimes = 0;nickels = 0;pennies = 0;
    }

this.setState({ // To read 
    output: changeDue.toFixed(2),//.toFixed(2) means adding 2 zero or show decimal value
    twenties: twenties,
    tens: tens,
    fives: fives,
    ones: ones,
    quarters: quarters,
    dimes: dimes,
    nickels: nickels,
    pennies: pennies,
    
  }); //for setState


}//For Calculate

  render() {
    return (
      // This is for Front End Stuff
      <div className = 'container'>
        <h1 className ='text-white'> Change Calculator </h1>
        <hr className='tagline' />
        <div className='row'>
            {/* This is for the Input Frame */}
          <div className='col-sm-6'>
            <div className='panel panel-default'>
            <div className='panel-heading'> Enter Information </div>
              <div className='panel-body'>
                  <label htmlFor='amountDue' className='max-width'
                       style={{fontWeight: 'bold'}}>            
                     How much is due?
                      <input name='amountDue' id='amountDue' 
                        type='number' className='btn-block' 
                        value={this.state.amountDue} onChange={this.updateValues}/>
                    </label>
                      <div> 
                        <label htmlFor='amountReceived' className='max-width'
                          style={{fontWeight: 'bold'}}>
                          How much was received?
                            <input name='amountReceived' id='amountReceived'
                              type='number' className='btn-block' 
                              value={this.state.amountReceived} onChange={this.updateValues}/>
                              </label>
                        </div>
                          <div className='panel-footer'>
                            <button className='btn btn-primary max-width btn-block' 
                            type='button' name='Calculate' onClick={this.calculate}>
                            Calculate </button>
                            </div>
                </div>
                </div>
              </div>
            {/* This is for the Output Frame */}
            <div className='col-sm-6'>
            <div className='panel panel-default'>
              <div className='panel-body'>
                <div className='alert alert-success alert-dismissible' role='alert'>
                    The total change due is ${this.state.output}
                    </div>
                      <div className='well col-sm-3  text-center card '>
                        <h4>Twenties</h4>
                        <label className='lead' id='twenties' name='twenties'>{this.state.twenties}</label>
                      </div>

                      <div className='well col-sm-3 text-center card '>
                      <h4>Tens</h4>
                      <label className='lead' id='tens' name='tens'>{this.state.tens}</label>
                      </div>

                      <div className='well col-sm-3 text-center card '>
                      <h4>Fives</h4>
                      <label className='lead' id='fives' name='fives'>{this.state.fives}</label>
                      </div>

                      <div className='well col-sm-3 text-center card '>
                      <h4>Ones</h4>
                      <label className='lead' id='ones' name='ones'>{this.state.ones}</label>
                      </div>
            
                      <div className='well col-sm-3 text-center card '>
                      <h4>Quarters</h4>
                      <label className='lead' id='quarters' name='quarters'>{this.state.quarters}</label>
                      </div>

                      <div className='well col-sm-3 text-center card '>
                      <h4>Dimes</h4>
                      <label className='lead' id='dimes' name='dimes'>{this.state.dimes}</label>
                      </div>
                      

                      <div className='well col-sm-3 text-center card '>
                      <h4>Nickels</h4>
                      <label className='lead' id='nickels' name='nickels'>{this.state.nickels}</label>
                      </div>

                      <div className='well col-sm-3 text-center card '>
                      <h4>Pennies</h4>
                      <label className='lead' id='pennies' name='pennies'>{this.state.pennies}</label>
                      </div>


              </div>
          </div>
        </div>
        {/* div Row */}
        </div>  
      </div>//For container div
    ); //Returns 
  }//For Render
 }//For App Component curly brace




export default App;
