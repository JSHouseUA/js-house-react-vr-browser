import React from 'react';
import {
    asset,
    Text,
    View,
    StyleSheet, VrButton
} from 'react-vr';

export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            buttonColorHover: "#000",
            buttonBgColorHover: "#efdd4f"
        }
    }
    componentWillMount(){

    }
    onLinkClick(){
        console.log('press');
    }
    render() {
        return (
            <View>
                <VrButton style={styles.button}>
                <Text style={styles.text} onClick={()=>{this.onLinkClick()}}>
                    Home
                </Text>
                    </VrButton>
                <VrButton style={[styles.button, {transform: [{translate: [0, 1, -5]}]}]}>
                <Text style={styles.text}>
                    Registration
                </Text>
                    </VrButton>
                <VrButton style={styles.button}>
                <Text style={styles.text}>
                    About Us
                </Text>
                    </VrButton>
                <VrButton style={[styles.button, {transform: [{translate: [0, 0.4, -5]}]}]}>
                <Text style={styles.text}>
                    Meetings
                </Text>
                    </VrButton>
                <VrButton style={styles.button}>
                <Text style={styles.text}>
                    Learning
                </Text>
                    </VrButton>
                <VrButton style={[styles.button, {transform: [{translate: [0, -0.2, -5]}]}]}>
                <Text style={styles.text}>
                    Join team
                </Text>
                    </VrButton>
            </View>
        );
    }
};
const styles = StyleSheet.create({
    button: {
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [0, 0.8, -3]}],
        marginBottom: 0.2
    },
    text: {
        backgroundColor: '#efdd4f',
        fontSize: 0.2,
        fontWeight: '200',
        color: '#000',
        paddingLeft: 0.1,
        paddingRight: 0.1,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 0.05,
    }
});