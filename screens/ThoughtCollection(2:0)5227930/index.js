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
      <View style={styles.View_4_1}>
        <Text style={styles.Text_4_1}>What is your thought?</Text>
      </View>
      <View style={styles.View_4_38}>
        <View style={styles.View_I4_38_4_43} />
        <View style={styles.View_I4_38_4_44}>
          <Text style={styles.Text_I4_38_4_44}>Next</Text>
        </View>
      </View>
      <View style={styles.View_4_134}>
        <View style={styles.View_I4_134_4_131} />
        <View style={styles.View_I4_134_4_132}>
          <Text style={styles.Text_I4_134_4_132}>Type Thought Here</Text>
        </View>
      </View>
      <View style={styles.View_4_165}>
        <View style={styles.View_4_153}>
          <Text style={styles.Text_4_153}>See All Thoughts</Text>
        </View>
        <View style={styles.View_4_161}>
          <Text style={styles.Text_4_161}>˅</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_4_1: {
    width: wp("56.763285024154584%"),
    minWidth: wp("56.763285024154584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("36.0655737704918%")
  },
  Text_4_1: {
    color: "rgba(243, 243, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4,
    textTransform: "none"
  },
  View_4_38: {
    width: wp("28.502415458937197%"),
    minWidth: wp("28.502415458937197%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.80193236714976%"),
    top: hp("109.01639344262296%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4_38_4_43: {
    flexGrow: 1,
    width: wp("28.502415458937197%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(243, 243, 243, 1)",
    opacity: 0.5,
    borderColor: "rgba(244, 175, 171, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_I4_38_4_44: {
    flexGrow: 1,
    width: wp("28.502415458937197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I4_38_4_44: {
    color: "rgba(244, 175, 171, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.4,
    textTransform: "none"
  },
  View_4_134: {
    width: wp("84.54106280193237%"),
    minWidth: wp("84.54106280193237%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("47.26775956284153%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4_134_4_131: {
    flexGrow: 1,
    width: wp("84.54106280193237%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(148, 171, 189, 1)"
  },
  View_I4_134_4_132: {
    flexGrow: 1,
    width: wp("26.570048309178745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0054644808743163%")
  },
  Text_I4_134_4_132: {
    color: "rgba(243, 243, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: -0.26,
    textTransform: "none"
  },
  View_4_165: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.64734299516908%"),
    top: hp("9.562841530054644%")
  },
  View_4_153: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_4_153: {
    color: "rgba(29, 45, 68, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: -0.26,
    textTransform: "none"
  },
  View_4_161: {
    width: wp("2.4154589371980677%"),
    minWidth: wp("2.4154589371980677%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("2.0491803278688536%")
  },
  Text_4_161: {
    color: "rgba(29, 45, 68, 1)",
    fontSize: 27,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.68,
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
