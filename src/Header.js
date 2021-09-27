import { AppBar } from "@material-ui/core";
import { withRouter } from "react-router";

const Header = (props) => {
  console.log('Header props----',props)
     const navigateHandler = () => {
       props.history.push('/person/info/78');

  }
    return(
        <AppBar position="static">
  <toolbar>
   
    <h1>
      Header
    </h1>
    <span style= {{paddingRight: '20px'}}>
    <a style={{color:'white',paddingRight:'20px'}} href= "/person">person</a>
    <a style =  {{color : 'white',paddingRight:'20px'}} href= "/Login">Login</a>
    <a style={{color:'white',paddingRight:'20px'}} href="/Cockpit">Cockpit</a>
    <a style={{color:"white",paddingRight:'20px'}} href="/Person/info/56">Info</a>
    </span>
    <span>
    <button onClick ={navigateHandler}> Redirect </button>
    </span>
  </toolbar>
</AppBar>

    )
}
export default withRouter(Header);