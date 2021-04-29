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
      <View style={styles.View_4_184}>
        <View style={styles.View_I4_184_4_173}>
          <View style={styles.View_I4_184_4_174} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72c4/a7ad/25622fa7964f0016b3ffaa6e2dacd5d7"
            }}
            style={styles.ImageBackground_I4_184_4_175}
          />
        </View>
        <View style={styles.View_I4_184_4_176}>
          <Text style={styles.Text_I4_184_4_176}>I had a thought ...</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e0f/c09f/af2a638799a1b39c915112d235d89e30"
          }}
          style={styles.ImageBackground_I4_184_4_399}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_4_184: {
    width: wp("91.54589371980676%"),
    minWidth: wp("91.54589371980676%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("33.87978142076503%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4_184_4_173: {
    flexGrow: 1,
    width: wp("91.54589371980676%"),
    height: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I4_184_4_174: {
    width: wp("83.14231835701615%"),
    height: hp("21.507331973216573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  ImageBackground_I4_184_4_175: {
    width: wp("25.03203424278665%"),
    height: hp("14.72525570561977%"),
    top: hp("12.597150750498955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.51387237696257%")
  },
  View_I4_184_4_176: {
    flexGrow: 1,
    width: wp("70.04830917874396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874395%"),
    top: hp("1.639344262295083%")
  },
  Text_I4_184_4_176: {
    color: "rgba(29, 45, 68, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: -0.26,
    textTransform: "none"
  },
  ImageBackground_I4_184_4_399: {
    flexGrow: 1,
    width: wp("5.150241206809518%"),
    height: hp("4.371448162474919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.98067632850243%"),
    top: hp("8.606557377049185%")
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
