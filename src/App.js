import logo from './logo.svg';
import './App.css';
import Person from './Person';
import React from 'react';
import Cockpit from './Cockpit';
import Header from './Header';
import {Route,Switch} from 'react-router';
import PersonInfo from './Personinfo';
import Login from './Components/Login';



class App extends React.Component {
    constructor(Props){
        console.log('App.js constructor---used for intialization of variable/state');
        super(Props);
        this.state = {
            showPerson: false,
            persons:[
                {id:'123ttt',PersonName:'anitha',PersonAddress:'hyderabad'},
                //{id: '321tttyuuu',PersonName:'Rahul',PersonAddress:'suryapet'},
                //{id: '123tttyqqq',PersonName:'anil',PersonAddress:'Ranchi'}
            ],
            PersonName:'',
            PersonAddress:'',
            showCockpit:false
        };
    }
    static getDerivedStateFromProps(prevProps,prevState){
        console.log('App.js--- getderivedstatefromprops called---');
    }
    shouldComponentUpdate(prevProps,prevState){
        console.log('App.js should componentupdate--- it can  stop the updation process');
        return true;

    }
    togglePersonHandler = () => {
        const value = this.state.showPerson;
        this.setState({
            showPerson: !value

        });
    }
ChangeNameHandler = (value) => {
    this.setState({
        PersonName: value
    });
}
toggleCockpitHandler = () => {
    const value = this.state.showCockpit;
        this.setState({
            showCockpit: !value

        });

}
componentDidMount(){
    console.log('App.js componentdidmount called once---');
}
componentWillUnmount(){
    console.log('Person.js component unmounted----');
}
getSnapshotBeforeUpdate(nextProps,nextState){
    console.log();
    
}
getSnapshotBeforeUpdate(nextProps,nextState){
    console.log('App.js getsnapshotbeforeupdate---');
    return{
        snapshot: 'snapshot'
    }
}
 componentDidUpdate(nextProps,nextState,snapshot){
     console.log('App.js componentdidupdate used for  asynchronous calls---',snapshot);
 }
 render(){
    console.log('App.js render---');
     //let showPersonContent = null;

     //if(this.state.showPerson === true){
        // showPersonContent = (
          //  <div>
          //  <Person PersonName ="anitha" PersonAddress ="hyderabad" />
           // <Person PersonName ="Rahul" PersonAddress ="suryapet"/>
          //  <Person PersonAddress = "Ranchi" PersonName ="anil" >
          //      My Person Child Info
          //  </Person>
        //</div>

        // )
     //}

    return(
        <div>
            <div>
                <Header/>

                <Switch>
                <Route  exact path='/person/info/:personId' render = {()=>{
                    return(
                        <div>
                        person Info Loaded
                    </div>

                    );
                }} />
                <Route exact path='/Cockpit' component = {Cockpit}/>
                <Route  exact path='/Person/info' component= {PersonInfo}/>
                <Route  exact path='/login' component= {Login}/>
                </Switch>
            </div>
            <div>
                <button onClick={this.togglePersonHandler} >  Toggle Person</button>
            </div>
            <div>
                <button onClick={this.toggleCockpitHandler} >  Show Cockpit </button>
            </div>
           {
               (this.state.showPerson === false) && (<div>

                   {
                       this.state.persons.map(el=> {
                           return(
                               <Person ChangeName ={this.ChangeNameHandler}  key = {el.id}  PersonName = {el.PersonName} PersonAddress = {el.PersonName}/>

                           )
                       })
                   }
                   <p>Person Name:{this.state.PersonName} </p>
                <p>Person Address: </p>
                   </div>)
           }
           {
               this.state.showCockpit && <Cockpit CockpitDescription = "This is a show and hide Cockpit" />
           }
            
        </div>

    );

    }

    
    
  }
  
  export default App;
  

