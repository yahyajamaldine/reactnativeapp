import {StyleSheet} from "react-native";
export default StyleSheet.create({
              container:{
                  flex:1,
                  flexDirection:"column",
                  alignItems:"center",
                  paddingTop:200,
                  backgroundColor:"#C8C4B9"
               },
               buttoncontainer:{
                 backgroundColor: "#241C1C",
                 borderRadius: 30,
                  paddingVertical: 17,
                  paddingHorizontal: 12,
                 width:319,
                 height:63,
                 margin:5
               },
               buttoncontainerUP:{
                  backgroundColor: "#8B8A86",
                 borderRadius: 30,
                  paddingVertical: 17,
                paddingHorizontal: 12,
                width:319,
                height:63,
                margin:10
              },
               buttonText:{
                 fontSize: 18,
                 color: "#F5F4F2",
                 alignSelf: "center",
                textTransform: "uppercase"         
               },
              //to this part we style our Button 
              //this to style textP
              textp:{
                 borderRadius: 30,
                 backgroundColor:"#F5F4F2",
                 color:"gray",
                 fontStyle:"normal",
                 width:319,
                 padding:20,
                 height:63,
                 margin:10         
              },
              //this where it end
               text:{
                   fontSize:36,
                   fontWeight:"normal",
                   fontStyle:"normal",
                   marginBottom:20
               }
              
              })
              