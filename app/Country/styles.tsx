const styles = {
  /* Main Container */
  mainContainer: {
    flex: 1,
    alignItems: "center" as "center",
    backgroundColor: "#fff",
    padding: 18,
  },

  /* Search */
  searchSection: {
    flexDirection: "row" as "row",
    alignItems: "center" as "center",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E5E9F2',
    paddingVertical: 2,
    paddingHorizontal: 12,
    gap: 8,
  },
  input: {
    flex: 1,
    color: "#647184",
    fontSize: 14,
    fontFamily: 'Mulish_400Regular',
  },

  /* Countries */
  countriesContainer: {
    paddingVertical: 12,
    gap: 8,
  },
  countryContainer: {
    flexDirection: "row" as "row",
    alignItems: "center" as "center",
    width: "100%" as "100%",
    padding: 10,
    gap: 12,
  },
  countryCode: {
    color: '#002859', 
    fontSize: 14, 
    fontFamily: 'Mulish_700Bold' 
  },
  countryName: { 
    color: "#647184", 
    fontSize: 12, 
    fontFamily: 'Mulish_400Regular' 
  },
};

export default styles;