import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "flex-start",
    paddingTop: 150,
    paddingHorizontal: 30,
    flexDirection: "column",
    alignContent: "flex-start",
    rowGap: 10,
    fontFamily: "Poppins"
  },
  title: {
    fontFamily: 'Poppins', 
    color: '#356899', 
    fontWeight: '600', 
    fontSize: 25,
    //marginBottom: 15,
    //alignSelf: "flex-start"
  }, 
  welcomeMessage: {
    fontFamily: 'Poppins', 
    color: '#0D0D26', 
    fontSize: 28, 
    fontWeight: '600'
  }, 
  coverMessage: {
    fontFamily: 'Poppins', 
    fontWeight: '400', 
    fontSize: 16, 
    color: "#AFB0B6",
  }, 
  textInput: {
    width: 360,
    height: 60,
    borderRadius: 10,
    borderColor: "#AFB0B6",
    borderWidth: 1,
    padding: 15,
  }, 
  inputs: {
    marginTop: 60, 
    flexDirection: "column",
    rowGap: 25,
  }, 
  logIn: {
    height: 65,
    width: 360,
    backgroundColor: "#356899",
    borderRadius: 10,
    borderColor: "none",
    marginTop: 25,
  }, 
  buttonText: {
    color: "#fff",
    paddingHorizontal: 150,
    paddingVertical: 19,
    fontSize: 18
  }, 
  continueText: {
    flexDirection: "row",
    columnGap: 10,
    marginTop: 70,
    fontWeight: "light", 
  }, 
  line: {
    borderWidth: 0.5,
    borderColor: "#AFB0B6",
    width: 110,
    height: 0,
    marginTop: 10,
  }, 
  logos: {
   flexDirection: "row",
   alignContent: "center", 
   paddingHorizontal: 30,
   marginBottom: 20,
  }, 
  account: {
    paddingHorizontal: 65,
    flexDirection: "row", 
    columnGap: 5
  }, 
  register: {
    color: "#356899"
  }, 
  accountText: {
    color: "#AFB0B6",
  }
});

export default styles;