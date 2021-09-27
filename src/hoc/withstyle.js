const withstyles = (WrappedComp) => {
    return (props) => {
        return(
            <div style = {{background:'red'}}>
                <WrappedComp/>
            </div>
        )
    }

}
export default withstyles;