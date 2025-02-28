const styles = {
  /* Main Container */
  mainContainer: {
    flex: 1,
    justifyContent: "flex-start" as "flex-start",
    alignItems: "center" as "center",
    padding: 20,
    backgroundColor: "#fff",
    gap: 20,
  },

  /* Activity Indicator */
  container: {
    flex: 1,
    justifyContent: 'center' as 'center',
    alignItems: 'center' as 'center',
    padding: 10,
  },

  /* Common container */
  commonContainer: {
    flexDirection: "row" as "row",
    alignItems: "center" as "center",
    gap: 12,
    backgroundColor: "#fff",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#D3DCE6",
    paddingVertical: 18,
    paddingHorizontal: 16,
    width: "100%" as "100%",
  },

  /* Common text */
  text: {
    flexShrink: 1,
    fontSize: 14,
    color: "#002859",
    fontFamily: 'Mulish_400Regular',
  },

  /* Banner */
  bannerContainer: { 
    alignItems: "center" as 'center', 
    width: "100%" as '100%', 
    backgroundColor: "#F9FAFC", 
    padding: 16, 
    borderRadius: 12, 
    gap: 8 
  },
  bannerTitle: {
    fontSize: 14, 
    fontFamily: 'Mulish_400Regular', 
    color: "#647184" 
  },
  bannerAmount: { 
    fontSize: 30, 
    fontFamily: 'Mulish_700Bold', 
    color: "#002859" 
  },
  bannerSubtitle: { 
    fontSize: 12, 
    fontFamily: 'Mulish_400Regular', 
    color: "#647184" 
  },

  /* QR */
  qrButton: {
    borderRadius: 6,
    backgroundColor: "#035AC5",
    width: 56,
    height: 56,
    alignItems: "center" as "center",
    justifyContent: "center" as "center",
  },
  linkContainer: {
    flex: 1,
    flexDirection: "row" as "row",
    alignItems: "center" as "center",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#D3DCE6",
    paddingVertical: 18,
    paddingHorizontal: 16,
    gap: 12,
  },
  linkQrContainer: {
    flexDirection: "row" as "row",
    alignItems: "center" as "center",
    gap: 20,
  },

  /* Whatsapp */
  whatsappContainer: {
    flexDirection: "row" as "row",
    alignItems: "center" as "center",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#D3DCE6",
    padding: 16,
    width: "100%" as "100%",
    gap: 8,
  },
  whatsappInput: {
    flex: 1,
    backgroundColor: "#ffffff",
    fontSize: 14,
    fontFamily: 'Mulish_400Regular',
    color: '#002859',
    padding: 0,
  },
  shareButton: {
    backgroundColor: "#035AC5",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  shareButtonText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: 'Mulish_700Bold',
  },
  countryCode: {
    fontSize: 14, 
    color: '#002859', 
    fontFamily: 'Mulish_400Regular'
  },

  /* Modal */
  modalBackdrop: {
    flex: 1,
    justifyContent: 'flex-end' as 'flex-end',
    paddingHorizontal: 10,
    paddingBottom: 17,
    backgroundColor: 'rgba(0, 40, 89, 0.5)',
  },
  modalContent: {
    width: '100%' as '100%',
    borderRadius: 24,
    backgroundColor: '#fff',
    paddingTop: 32,
    paddingBottom: 44,
    paddingHorizontal: 20,
    alignItems: 'center' as 'center',
    gap: 24,
  },
  modalButton: {
    flexDirection: "row" as "row",
    backgroundColor: "#035AC5",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center" as "center",
    justifyContent: "center" as "center",
    width: "100%" as "100%",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: 'Mulish_600SemiBold',
  },
  modalTitle: {
    color: '#002859', 
    fontFamily: 'Mulish_700Bold', 
    fontSize: 26 
  },
  modalSubtitle: {
    color: '#647184', 
    fontFamily: 'Mulish_400Regular', 
    fontSize: 14, 
    textAlign: 'center' as 'center',
  },

  /* Button */
  button: {
    flexDirection: "row" as "row",
    alignItems: "center" as "center",
    justifyContent: "center" as "center",
    width: "100%" as "100%",
    marginTop: "auto" as "auto",
    backgroundColor: "#F9FAFC",
    paddingVertical: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#035AC5",
    fontSize: 18,
    fontFamily: 'Mulish_700Bold',
    marginRight: 10,
  },
};

export default styles;
