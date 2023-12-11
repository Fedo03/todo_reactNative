import Reat from 'react';
import {
    TouchableOpacity,
    View,
    Text
} from 'react-native'

const Bt = (props) => {
    return (
        <TouchableOpacity onPress={props.onClick}>
            <View style={props.styl}>
                <Text style={props.txtst}>
                     {props.txt}
                </Text>
                <Text >{props.tim}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Bt