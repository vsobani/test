import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import EventBind from './components/EventBind';
// import MyComponent from './components/EventBind2';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import FocusInput from './components/FocusInput';
// import RefsDemo from './components/RefsDemo';

class NewBind extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      quantity : 1,
      disabled : false
    }
    this.MinusOne = this.MinusOne.bind(this);
    this.PlusOne = this.PlusOne.bind(this);
    this.takeQuantity = this.takeQuantity.bind(this);
    // this.onConfirmButtonClick = this.onConfirmButtonClick.bind(this);
  }

  PlusOne(){
    this.setState({
      quantity: this.state.quantity + 1
    })
    // if (quantity>5){
    //   // console.log("assad")
    // };
    if (this.state.quantity>=5){
      console.log(this.state.quantity,"asd")
      this.setState({
        quantity: 5
      })
    }
  }
  // onConfirmButtonClick (){
  //   // set state.disabled as true
  //   this.setState({ disabled: true })
  // }
  // maxincrement(quantity){
  //   this.setState({
  //     quantity
  //   })
  // }

  MinusOne(){
    this.setState ( {
      quantity: Math.max(0, this.state.quantity - 1)
      
    });
    
    console.log(this.state.quantity);
    if (this.state.quantity <=5){
      console.log(this.state.quantity)
    }
  }

  takeQuantity(event){
    let quantity = event.target.value;
    if (quantity)
        this.setState({
          quantity:parseInt(quantity)

        })
        console.log(quantity)    

  }

  render(){
      return(
          <div>
           <div>
          Name : {this.props.name_of_items}<br/>
          </div>
          <div>
          Price/{this.props.name_of_items} : {this.props.price}<br/>
          Quantity : {this.state.quantity}  <br/>
          </div>
          <div>
            
          {/* <button className="plus"  onClick={this.PlusOne}> + </button> */}
          {this.props.quantity < 5 ? <button className="plus"  onClick={this.PlusOne}> + </button>:this.quantity}
          {this.props.quantity < 2 ? <button className="plus"  onClick={this.MinusOne}> - </button>:null}
          {/* <button className="minus" onClick={this.MinusOne}> - </button><br/> */}
          {this.props.name}
          Quantity : <input name="quantity" onChange={this.takeQuantity} value={this.state.quantity} />
          </div>
          Total Value: {this.state.quantity *  this.props.price}
          </div>

      )
  }
}




class App extends Component{
  render (){
  return(
    <div className="App">
{/*      <h1 className="head-tag" name="Vishal">This is heading tag</h1>
     <h3> <Button name="Button" type='button'/></h3>
      {/* <input text="text" type="text"/> 
      <Calci name='addition' a={522} b={56}/>
     <h2> <TotalPrice name="pen" quantity={2} price={10}/>
      <TotalPrice name='board' quantity={21} price={2}/>
      <TotalPrice name='laptop' quantity={1} price={20000}/> </h2>

       <h3>
        <Items name_of_items="Book" quantity={1} price={12} tax={0.05}/>
        <Items name_of_items="Bike" quantity={1} price={120000} tax={0.18}/>
      </h3> 
           
     <EventBind/>
     <MyComponent/>*/}
     <NewBind className="items" name_of_items="Room" quantity={1} price={1000}/>
     <br/>
     <NewBind className="items" name_of_items="Adults" quantity={1} price={1000}/>
     <br/>
     <NewBind className="items" name_of_items="children" quantity={1} price={500}/>
     
     <br/><br/>
     
     {/* <ClickCounter/> */}
     {/* <HoverCounter/> */}
     {/* <FocusInput/><br/> */}
     {/* <RefsDemo/> */}
    </div>
  )
}
}

export default App;

