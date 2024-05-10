import { View, Text ,Image,useWindowDimensions, Pressable ,TextInput} from 'react-native'
import React from 'react'
import Icon from 'react-native-elements/dist/icons/Icon';


export default function signUp() {
    const { height, width, fontScale } = useWindowDimensions();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileUrl, setProfileUrl] = useState("");

  const handleSignUp = async () => {
    try {
      const userInfo = {
        name,
        email,
        password,
        profileUrl,
      };

      const cred = await register(
        userInfo.email,
        userInfo.password,
        userInfo.name,
        userInfo.profileUrl
      );
      router.replace("/account/signIn");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{flex:1,justifyContent:'center',alignSelf:'center',gap:20}}>

       <View style={{flexDirection:'row-reverse',justifyContent:'space-between',alignItems:'center',borderRadius: 50, backgroundColor: 'white', borderWidth: 2, width: width * 0.8, borderColor: '#B3C8CF',padding:5}}>
            <TextInput placeholder='Enter your email' textAlign='center'
              style={{fontSize: height * 0.02 , maxWidth:width * 0.6 ,flex:1,textAlign:'left'}}></TextInput>
              <Icon name='mail' type="material" color="#B3C8CF"/>
          </View>

          <View style={{flexDirection:'row-reverse',justifyContent:'space-between',alignItems:'center',borderRadius: 50, backgroundColor: 'white', borderWidth: 2, width: width * 0.8, borderColor: '#B3C8CF',padding:5}}>
            <TextInput placeholder='Enter your password' textAlign='center' secureTextEntry={true}
              style={{fontSize: height * 0.02 , maxWidth:width * 0.6 ,flex:1,textAlign:'left'}}></TextInput>
              <Icon name='pin' type="material" color="#B3C8CF"/>
          </View>

          <View style={{flexDirection:'row-reverse',justifyContent:'space-between',alignItems:'center',borderRadius: 50, backgroundColor: 'white', borderWidth: 2, width: width * 0.8, borderColor: '#B3C8CF',padding:5}}>
            <TextInput placeholder='Enter your profile url' textAlign='center' 
              style={{fontSize: height * 0.02 , maxWidth:width * 0.6 ,flex:1,textAlign:'left'}}></TextInput>
              <Icon name='image' type="material" color="#B3C8CF"/>
          </View>


        <View style={{alignSelf:'center', fontSize:height*0.02}}>

            <Pressable >
                <Text style={{textAlign:'center',borderWidth:2, borderRadius:50, borderColor: '#B3C8CF', backgroundColor: 'white',padding:5, fontWeight:'400',color:"#82aab9"}}>Sign Up</Text>
            </Pressable>

            <Pressable>
                <Text style={{color:"#4D869C", fontWeight:'200'}}>Already registerd?</Text>
            </Pressable>

        </View>
        

        
    </View>
  );
}
