import Person from "./Person"

const PersonInfo = (props) => {
    console.log('Personinfo props---',props);
    return(
        <div>
            <div>
            Person Info Loaded
            </div>
            <div>
                params Info: {props.match.params.personId}
            </div>
            
        </div>
    )

}
export default PersonInfo;