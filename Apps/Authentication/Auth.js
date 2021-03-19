import React, { Component } from 'react'
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export class Auth extends Component {
    constructor(props){
        super(props);
        this.state={
          email:'',
          password:'',
          isAuthenticated:false
        }
      }
      
    componentDidMount(){
      login_data={email:'mansip@gmail.com',password:'mansip123'};
      AsyncStorage.setItem('user',JSON.stringify(login_data))

      const {email, password} = this.props.route.params;
 
    this.checkAuthentication();
    }

    checkAuthentication = async () => {
        try {
            let user = await AsyncStorage.getItem('user');
            let parsed = JSON.parse(user);
        
      
            if (
              parsed.email === this.state.email &&
              parsed.password === this.state.password
            )
              this.props.navigation.replace('Home');
            else {
             
              this.props.navigation.navigate('SignIn');
            }
          } catch (error) {
            alert(error);
          }

    }

    
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

export default Auth
