const styles = {
  /* Currency Button */
  currencyButton: {
    backgroundColor: '#D3DCE64D',
    borderRadius: 24,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginRight: 10,
    flexDirection: 'row' as 'row',
    alignItems: 'center' as 'center',
    gap: 8,
  },
  currencyButtonText: {
    color: '#002859',
    fontSize: 12,
    fontFamily: 'Mulish_700Bold',
  },
  
  /* Body Container */
  container: {
    flex: 1,
    justifyContent: "center" as "center",
    alignItems: "center" as "center",
    gap: 40
  },

  /* Amount */
  amountContainer: { 
    flexDirection: "row" as "row", 
    alignItems: "center" as "center", 
		gap: 5,
  },
  amountInput: {
    fontSize: 40,
    fontFamily: 'Mulish_700Bold',
    textAlign: "center" as 'center',
    color: "#035AC5",
  },
  currencySymbol: {
    fontSize: 40, 
    fontFamily: 'Mulish_700Bold',
  },

  /* Concept */
  conceptText: { 
    fontSize: 14, 
    color: "#002859",
    fontFamily: 'Mulish_700Bold',
  },
  conceptInput: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    fontSize: 14,
    fontFamily: 'Mulish_400Regular',
    color: '#002859',
  },
  conceptCaption: { 
    fontSize: 12, 
    color: "#111", 
    textAlign: "right" as "right", 
    fontFamily: 'Mulish_400Regular',
  },

  /* Button */
  button: {
    paddingVertical: 20,
    borderRadius: 5,
    alignItems: "center" as 'center',
  },
  buttonText: {
    fontSize: 18, 
    fontFamily: 'Mulish_400Regular'
  },
};

export default styles;