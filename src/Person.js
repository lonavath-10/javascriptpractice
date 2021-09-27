import React from 'react';

class Person extends React.Component{
    constructor(props){
        console.log('Person.js constructor---')
        super(props);
        console.log('Person Props---',props);
        this.state={
            PersonName:'default name',
            PersonAddress:'default address',
        };
    }
    onClickHandler = () => {
        console.log(this.props);
        alert('p----'+this.state.PersonName);
        alert(this.state.PersonAddress);
    }
    onChangeHandler = (param,event) => {
        console.log('i am onChangeHandler---',event.target.value);
        if(param === 'name'){
            this.setState(
                {
                   PersonName: event.target.value

              }
            );
        }else{
            this.setState({
                PersonAddress: event.target.value

            });
        }
    }
    static getDerivedStateFromProps(prevProps,prevState){
        alert('Person.js getderivedStatefromprops')
    }
    componentDidMount(){
        alert('person.js--- componentdidmount');
    }
    //onChangeAddressHandler=(event)=> {
      // this.setState({
         //  PersonAddress: event.target.value
      // });
   // }
    render(){
        alert('Person.js render---');
        console.log('Person props---',this.props);
        return(
            <div>

                <div>
                   <label>Enter Person Name</label> 
                   <input  onChange = {(event)=>
                    {
                        this.props.ChangeName(event.target.value) 
                    }
                   }
                    type="text"/>

                     </div>
                     <div>
                   <label>Enter Person Address</label> 
                   <input   onChange= {this.onChangeHandler.bind(this,'address')} type="text"/>

                     </div>
                
                {/*<p>Person Children props:{this.props.children}</p>*/}
               {/* <button onClick ={this.onClickHandler}>show Detalis</button>*/}
            </div>
        )
    }
}
export default Person;