import { StyleSheet } from 'react-native'

export default  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    commonCss: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }, 
    header: {
      flex: 1,
      backgroundColor: '#00BFFF'
    },
    mainContainer: {
      flex: 6,
      flexDirection: 'row'
    },
    realMainContainer: {
      flex: 5,
      flexDirection: 'column'
    },
    chat: {
      flex: 1
    },
    menu: {
      flex: 2,
      backgroundColor: '#90EE90'
    },
    input: {
      flex: 0,
      margin: '2%',
      backgroundColor: 'white'
    },
    left: {
      alignSelf: 'flex-start',
      width: '70%',
      borderRadius: 30,
      marginTop: '2%',
      backgroundColor: '#9370DB',
      textAlign: 'left'
    },
    right: {
      alignSelf: 'flex-end',
      marginTop: '2%',
      width: '70%',
      borderRadius: 30,
      textAlign: 'right',
      backgroundColor: '#87CEFA'
    },
    textLeft: {
      textAlign: 'left',
      marginLeft: '3%'
    },
    textRight: {
      textAlign: 'right',
      marginRight: '3%'
    }
  })