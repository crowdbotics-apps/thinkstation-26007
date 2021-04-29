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
      <View style={styles.View_4_94}>
        <Text style={styles.Text_4_94}>What is the intensity?</Text>
      </View>
      <View style={styles.View_4_95}>
        <View style={styles.View_I4_95_4_11} />
        <View style={styles.View_I4_95_4_25}>
          <Text style={styles.Text_I4_95_4_25}>Push</Text>
        </View>
      </View>
      <View style={styles.View_4_126}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc11/5470/9ea31986ef3d7f1c21b008daf0972192"
          }}
          style={styles.ImageBackground_I4_126_4_120}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0e8/14ad/1a367ae87ccc7dc95ad88e19eff9594b"
          }}
          style={styles.ImageBackground_I4_126_4_121}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2385/7cf7/eb77cba9053a23d5fcdb18a6643154cf"
          }}
          style={styles.ImageBackground_I4_126_4_122}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8598/6224/a64aee0f6c6ccd5ba6c7f3f241ff6cad"
          }}
          style={styles.ImageBackground_I4_126_4_123}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_4_94: {
    width: wp("44.44444444444444%"),
    minWidth: wp("44.44444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("36.885245901639344%")
  },
  Text_4_94: {
    color: "rgba(243, 243, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4,
    textTransform: "none"
  },
  View_4_95: {
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
  View_I4_95_4_11: {
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
  View_I4_95_4_25: {
    flexGrow: 1,
    width: wp("28.502415458937197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I4_95_4_25: {
    color: "rgba(244, 175, 171, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.4,
    textTransform: "none"
  },
  View_4_126: {
    width: wp("84.54106280193237%"),
    minWidth: wp("84.54106280193237%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("47.81420765027322%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I4_126_4_120: {
    flexGrow: 1,
    width: wp("76.60678734525966%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.103936089409723%"),
    top: hp("4.2349726775956285%")
  },
  ImageBackground_I4_126_4_121: {
    flexGrow: 1,
    width: wp("7.660678734525966%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.83148871527778%"),
    top: hp("2.0491803278688607%")
  },
  ImageBackground_I4_126_4_122: {
    flexGrow: 1,
    width: wp("7.004830917874397%"),
    height: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.60678734525966%"),
    top: hp("0%")
  },
  ImageBackground_I4_126_4_123: {
    flexGrow: 1,
    width: wp("6.038647342995169%"),
    height: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
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
