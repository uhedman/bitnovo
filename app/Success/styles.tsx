const styles = {
  /* Main Container */
  mainContainer: {
    flex: 1,
    justifyContent: "center" as "center",
    alignItems: "center" as "center",
    backgroundColor: "#fff",
    padding: 38,
  },

  /* Body Container */
  bodyContainer: {
    flex: 1,
    alignItems: "center" as "center",
    justifyContent: "center" as "center",
    width: "100%" as "100%",
    padding: 20,
    borderRadius: 10,
    gap: 16,
  },
  title: {
    fontFamily: 'Mulish_700Bold',
    color: "#002859",
    fontSize: 22,
  },
  subtitle: {
    textAlign: "center" as "center",
    color: "#647184",
    fontSize: 16,
    fontFamily: 'Mulish_400Regular',
  },

  /* Button */
  button: {
    flexDirection: "row" as "row",
    backgroundColor: "#F9FAFC",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center" as "center",
    justifyContent: "center" as "center",
  },
  buttonText: {
    flex: 1,
    textAlign: "center" as "center",
    color: "#035AC5",
    fontSize: 18,
    fontFamily: 'Mulish_700Bold',
    marginRight: 10,
  },
};

export default styles;
