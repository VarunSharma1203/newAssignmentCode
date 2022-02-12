import { StyleSheet } from 'react-native';
import { colors } from '../../config'
export default StyleSheet.create({
  contain: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  background: { flex: 1, width: '100%' },
  viewGraph: { flex:.5,width:'100%' },
  viewGraphtwo: { flex: 1,backgroundColor:colors.white,borderTopLeftRadius:35 },
  welcomeText:{marginTop:20,marginLeft:20,fontSize:30,fontWeight:'bold'},
  heading:{marginTop:10,marginLeft:20,fontSize:14},
  btncontain:{height:60,width:'100%',justifyContent:'center',alignItems:'center',marginTop:20},
  forgetText:{marginRight:20,fontSize:14,color:'#85819b'},
  signText:{marginRight:20,fontSize:14,color:'#000'},
  forgetContain:{marginTop:5,width:'100%',justifyContent:'flex-end',alignItems:'flex-end',},
  signContain:{marginTop:30,width:'100%',justifyContent:'center',alignItems:'center',},

});
