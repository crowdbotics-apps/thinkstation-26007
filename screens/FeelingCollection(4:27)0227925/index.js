import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_4_28}>
        <Text style={styles.Text_4_28}>How do you feel?</Text>
      </View>
      <View style={styles.View_4_30}>
        <View style={styles.View_I4_30_4_11} />
        <View style={styles.View_I4_30_4_25}>
          <Text style={styles.Text_I4_30_4_25}>Next</Text>
        </View>
      </View>
      <View style={styles.View_4_52}>
        <View style={styles.View_I4_52_4_46} />
        <View style={styles.View_I4_52_4_47}>
          <Text style={styles.Text_I4_52_4_47}>Happy</Text>
        </View>
      </View>
      <View style={styles.View_4_57}>
        <View style={styles.View_I4_57_4_46} />
        <View style={styles.View_I4_57_4_47}>
          <Text style={styles.Text_I4_57_4_47}>Sad</Text>
        </View>
      </View>
      <View style={styles.View_4_60}>
        <View style={styles.View_I4_60_4_46} />
        <View style={styles.View_I4_60_4_47}>
          <Text style={styles.Text_I4_60_4_47}>Indifferenet</Text>
        </View>
      </View>
      <View style={styles.View_4_81}>
        <View style={styles.View_I4_81_4_65} />
        <View style={styles.View_I4_81_4_66}>
          <Text style={styles.Text_I4_81_4_66}>Depressed</Text>
        </View>
        <View style={styles.View_I4_81_4_79}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfc7/10f6/14324194404ab8278075b53308ec6c17"
            }}
            style={styles.ImageBackground_I4_81_4_67}
          />
          <View style={styles.View_I4_81_4_68}>
            <Text style={styles.Text_I4_81_4_68}>x</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_4_28: {
    width: wp("35.26570048309179%"),
    minWidth: wp("35.26570048309179%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("36.47540983606557%")
  },
  Text_4_28: {
    color: "rgba(243, 243, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4,
    textTransform: "none"
  },
  View_4_30: {
    width: wp("28.502415458937197%"),
    minWidth: wp("28.502415458937197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.28502415458937%"),
    top: hp("109.01639344262296%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4_30_4_11: {
    flexGrow: 1,
    width: wp("28.502415458937197%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderColor: "rgba(244, 175, 171, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_I4_30_4_25: {
    flexGrow: 1,
    width: wp("28.502415458937197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I4_30_4_25: {
    color: "rgba(244, 175, 171, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.4,
    textTransform: "none"
  },
  View_4_52: {
    width: wp("28.502415458937197%"),
    minWidth: wp("28.502415458937197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("47.13114754098361%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4_52_4_46: {
    flexGrow: 1,
    width: wp("28.502415458937197%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderColor: "rgba(29, 45, 68, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_I4_52_4_47: {
    flexGrow: 1,
    width: wp("28.502415458937197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I4_52_4_47: {
    color: "rgba(29, 45, 68, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.4,
    textTransform: "none"
  },
  View_4_57: {
    width: wp("28.502415458937197%"),
    minWidth: wp("28.502415458937197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.06280193236715%"),
    top: hp("47.13114754098361%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4_57_4_46: {
    flexGrow: 1,
    width: wp("28.502415458937197%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderColor: "rgba(29, 45, 68, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_I4_57_4_47: {
    flexGrow: 1,
    width: wp("28.502415458937197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I4_57_4_47: {
    color: "rgba(29, 45, 68, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.4,
    textTransform: "none"
  },
  View_4_60: {
    width: wp("28.502415458937197%"),
    minWidth: wp("28.502415458937197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.8792270531401%"),
    top: hp("47.13114754098361%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4_60_4_46: {
    flexGrow: 1,
    width: wp("28.502415458937197%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderColor: "rgba(29, 45, 68, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_I4_60_4_47: {
    flexGrow: 1,
    width: wp("28.502415458937197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I4_60_4_47: {
    color: "rgba(29, 45, 68, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.4,
    textTransform: "none"
  },
  View_4_81: {
    width: wp("28.502415458937197%"),
    minWidth: wp("28.502415458937197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("60.38251366120219%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4_81_4_65: {
    flexGrow: 1,
    width: wp("28.502415458937197%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderColor: "rgba(29, 45, 68, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_I4_81_4_66: {
    flexGrow: 1,
    width: wp("28.502415458937197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I4_81_4_66: {
    color: "rgba(29, 45, 68, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.4,
    textTransform: "none"
  },
  View_I4_81_4_79: {
    flexGrow: 1,
    width: wp("4.3478260869565215%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.7246376811594208%"),
    top: hp("-0.6830601092896131%")
  },
  ImageBackground_I4_81_4_67: {
    width: wp("4.3478260869565215%"),
    height: hp("2.185792349726776%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I4_81_4_68: {
    width: wp("1.932367149758454%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2077294685990339%")
  },
  Text_I4_81_4_68: {
    color: "rgba(243, 243, 243, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 896 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
