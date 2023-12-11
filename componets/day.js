import React from "react" ;
import {
    TouchableOpacity,
    Text,

} from 'react-native'

const Day = (props) => {
    return (
        <TouchableOpacity onPress={props.onClick}>
            <Text style={props.styl}>
                {props.txt}
            </Text>
        </TouchableOpacity>

    )
}    

export default Day