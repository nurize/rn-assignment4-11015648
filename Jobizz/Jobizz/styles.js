import { StyleSheet } from 'react-native';

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
  },
  errorMessage: {
    color: "red",
    marginBottom: 10,
  }, 
  home: {
    paddingHorizontal: 20,
    backgroundColor: "#FAFAFD",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  profile: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 30,
  },
  usernameHeader: {
    fontWeight: "700",
    fontSize: 24
  }, 
  emailHeader: {
    fontWeight: "400",
    fontSize: 20,
    color: "#95969D",
  },
  profileImage: {
    width: 58,
    height: 58,
  },
  redDot: {
    width: 5,
    height: 5,
    alignSelf: "flex-end",
    marginTop: 5,
    marginRight: 4,
    borderColor: "#fff",
    borderWidth: 3,
    borderRadius: 30,
    padding: 4,
  },
  searchArea: {
    flexDirection: "row",
    gap: 20,
  },
  search: {
    width: 280,
    height: 58,
    borderRadius: 12,
    borderColor: "transparent",
    backgroundColor: "#F2F2F3",
    borderWidth: 1,
    padding: 15,
  }, 
  searchButton: {
    height: 58,
    width: 60,
  }, 
  searchDesign: {
    width: 35,
    heigth: 25,
    alignSelf: "center",
    marginTop: 15,
  }, 
  allJobs: {
    flex: 1,
    marginVertical: 40,
    flexDirection: "column",
  },
  jobs: {
    flexDirection: "row",
    justifyContent: "space-between",
  }, 
  jobsHeader: {
    color: "#0D0D26",
    fontSize: 19,
    fontWeight: "600",
  }, 
  viewJobs: {
    color: "#95969D",
    fontSize: 14,
    fontWeight: "400",
  }, 
  jobCard: {
    boderRadius: 24,
    width: 310,
    height: 210,
    paddingHorizontal: 25,
    paddingVertical: 25,
    marginTop: 15,
    borderRadius: 24,
    flexDirection: "column",
    justifyContent: "space-between",
    marginRight: 10,
    marginBottom: 20,
  },
  jobHeader: {
    flexDirection: "row",
    alignContent: "flex-start",
    columnGap: 15,
  }, 
  jobLogo: {
    width: 40,
    height: 40, 
    borderColor: "#FFFFFF",
    borderRadius: 12, 
    backgroundColor: "#FFFFFF",
    borderWidth: 5,
    padding: 0,
  }, 
  jobTitle: {
    color: "#FFFFFF",
    fontSize: 18, 
    fontWeight: "600",
    marginBottom: 5,
  },
  jobCompany: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "400",
  }, 
  jobFooter: {
    flexDirection: "row",
    justifyContent: "space-between"
  }, 
  salary: {
    color: "#FFFFFF", 
    fontWeight: "500",
    fontSize: 15
  }, 
  popularJobs: {
    marginTop: 0
  }, 
  jobTab: {
    flexDirection: "row"
  }
});

export default styles;