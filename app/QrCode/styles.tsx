const styles = {
  /* Main Container */
  mainContainer: {
    flex: 1,
    alignItems: 'center' as 'center',
    backgroundColor: '#035AC5',
    padding: 20,
    gap: 25,
  },

  /* Info */
  info: {
    flexDirection: 'row' as 'row',
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#EAF3FF',
    borderRadius: 6,
    gap: 8,
  },
  infoText: { 
    color: '#002859',
    fontFamily: 'Mulish_400Regular', 
    fontSize: 12 
  },

  /* QrContainer */
  qrContainer: {
    width: '100%' as '100%',
    aspectRatio: 1,
    backgroundColor: '#fff',
    borderRadius: 6,
    justifyContent: 'center' as 'center',
    alignItems: 'center' as 'center',
  },

  /* Bottom Info */
  amount: {
    color: '#fff', 
    fontSize: 26, 
    fontFamily: 'Mulish_700Bold'
  },
  subtitle: {
    color: '#fff', 
    fontFamily: 'Mulish_400Regular', 
    fontSize: 14
  },
};

export default styles;
