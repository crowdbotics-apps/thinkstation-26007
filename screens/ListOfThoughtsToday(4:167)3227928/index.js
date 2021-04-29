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
      <View style={styles.View_4_189}>
        <View style={styles.View_I4_189_4_180}>
          <View style={styles.View_I4_189_4_181} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61bd/3c55/dbfb214c00a236d33eed7cbbfe8ae755"
            }}
            style={styles.ImageBackground_I4_189_4_182}
          />
        </View>
        <View style={styles.View_I4_189_4_183}>
          <Text style={styles.Text_I4_189_4_183}>I had a thought ...</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e0f/c09f/af2a638799a1b39c915112d235d89e30"
          }}
          style={styles.ImageBackground_I4_189_4_354}
        />
      </View>
      <View style={styles.View_4_203}>
        <View style={styles.View_I4_203_4_180}>
          <View style={styles.View_I4_203_4_181} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61bd/3c55/dbfb214c00a236d33eed7cbbfe8ae755"
            }}
            style={styles.ImageBackground_I4_203_4_182}
          />
        </View>
        <View style={styles.View_I4_203_4_183}>
          <Text style={styles.Text_I4_203_4_183}>I had a thought ...</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e0f/c09f/af2a638799a1b39c915112d235d89e30"
          }}
          style={styles.ImageBackground_I4_203_4_354}
        />
      </View>
      <View style={styles.View_4_208}>
        <View style={styles.View_I4_208_4_180}>
          <View style={styles.View_I4_208_4_181} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61bd/3c55/dbfb214c00a236d33eed7cbbfe8ae755"
            }}
            style={styles.ImageBackground_I4_208_4_182}
          />
        </View>
        <View style={styles.View_I4_208_4_183}>
          <Text style={styles.Text_I4_208_4_183}>I had a thought ...</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e0f/c09f/af2a638799a1b39c915112d235d89e30"
          }}
          style={styles.ImageBackground_I4_208_4_354}
        />
      </View>
      <View style={styles.View_4_218}>
        <Text style={styles.Text_4_218}>Today</Text>
      </View>
      <View style={styles.View_4_231}>
        <Text style={styles.Text_4_231}>Saved </Text>
      </View>
      <View style={styles.View_11_80}>
        <Text style={styles.Text_11_80}>Community </Text>
      </View>
      <View style={styles.View_4_224}>
        <View style={styles.View_4_225}>
          <Text style={styles.Text_4_225}>Record Thought</Text>
        </View>
        <View style={styles.View_4_226}>
          <Text style={styles.Text_4_226}>˄</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_4_189: {
    width: wp("91.45715685858242%"),
    minWidth: wp("91.45715685858242%"),
    height: hp("14.929670323439634%"),
    minHeight: hp("14.929670323439634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("46.31147540983606%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4_189_4_180: {
    flexGrow: 1,
    width: wp("91.45715685858242%"),
    height: hp("14.929670323439634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I4_189_4_181: {
    width: wp("83.09178743961353%"),
    height: hp("10.977751309754419%"),
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
  ImageBackground_I4_189_4_182: {
    width: wp("25.03203424278665%"),
    height: hp("10.977679393330558%"),
    top: hp("3.9519909301090763%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.42512077294685%")
  },
  View_I4_189_4_183: {
    flexGrow: 1,
    width: wp("23.91304347826087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("4.391100106994962%")
  },
  Text_I4_189_4_183: {
    color: "rgba(29, 45, 68, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: -0.26,
    textTransform: "none"
  },
  ImageBackground_I4_189_4_354: {
    flexGrow: 1,
    width: wp("5.150241206809518%"),
    height: hp("4.371448162474919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.4975845410628%"),
    top: hp("3.278688524590166%")
  },
  View_4_203: {
    width: wp("91.45715685858242%"),
    minWidth: wp("91.45715685858242%"),
    height: hp("14.929670323439634%"),
    minHeight: hp("14.929670323439634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("62.841530054644814%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4_203_4_180: {
    flexGrow: 1,
    width: wp("91.45715685858242%"),
    height: hp("14.929670323439634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I4_203_4_181: {
    width: wp("83.09178743961353%"),
    height: hp("10.977751309754419%"),
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
  ImageBackground_I4_203_4_182: {
    width: wp("25.03203424278665%"),
    height: hp("10.977679393330558%"),
    top: hp("3.951990930109069%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.42512077294685%")
  },
  View_I4_203_4_183: {
    flexGrow: 1,
    width: wp("23.91304347826087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("4.391100628128463%")
  },
  Text_I4_203_4_183: {
    color: "rgba(29, 45, 68, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: -0.26,
    textTransform: "none"
  },
  ImageBackground_I4_203_4_354: {
    flexGrow: 1,
    width: wp("5.150241206809518%"),
    height: hp("4.371448162474919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.4975845410628%"),
    top: hp("3.2786885245901587%")
  },
  View_4_208: {
    width: wp("91.45715685858242%"),
    minWidth: wp("91.45715685858242%"),
    height: hp("14.929670323439634%"),
    minHeight: hp("14.929670323439634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("79.37158469945356%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4_208_4_180: {
    flexGrow: 1,
    width: wp("91.45715685858242%"),
    height: hp("14.929670323439634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I4_208_4_181: {
    width: wp("83.09178743961353%"),
    height: hp("10.977751309754419%"),
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
  ImageBackground_I4_208_4_182: {
    width: wp("25.03203424278665%"),
    height: hp("10.977679393330558%"),
    top: hp("3.951990930109062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.42512077294685%")
  },
  View_I4_208_4_183: {
    flexGrow: 1,
    width: wp("23.91304347826087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("4.391100106994955%")
  },
  Text_I4_208_4_183: {
    color: "rgba(29, 45, 68, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: -0.26,
    textTransform: "none"
  },
  ImageBackground_I4_208_4_354: {
    flexGrow: 1,
    width: wp("5.150241206809518%"),
    height: hp("4.371448162474919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.4975845410628%"),
    top: hp("3.2786885245901516%")
  },
  View_4_218: {
    width: wp("12.80193236714976%"),
    minWidth: wp("12.80193236714976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("35.38251366120219%")
  },
  Text_4_218: {
    color: "rgba(243, 243, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4,
    textTransform: "none"
  },
  View_4_231: {
    width: wp("12.318840579710146%"),
    minWidth: wp("12.318840579710146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.64734299516908%"),
    top: hp("35.38251366120219%")
  },
  Text_4_231: {
    color: "rgba(243, 243, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4,
    textTransform: "none"
  },
  View_11_80: {
    width: wp("24.637681159420293%"),
    minWidth: wp("24.637681159420293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.6328502415459%"),
    top: hp("35.38251366120219%")
  },
  Text_11_80: {
    color: "rgba(243, 243, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4,
    textTransform: "none"
  },
  View_4_224: {
    width: wp("21.980676328502415%"),
    minWidth: wp("21.980676328502415%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.88888888888889%"),
    top: hp("110.79234972677597%")
  },
  View_4_225: {
    width: wp("21.980676328502415%"),
    minWidth: wp("21.980676328502415%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1857923497267677%")
  },
  Text_4_225: {
    color: "rgba(29, 45, 68, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: -0.26,
    textTransform: "none"
  },
  View_4_226: {
    width: wp("2.4154589371980677%"),
    minWidth: wp("2.4154589371980677%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.903381642512073%"),
    top: hp("0%")
  },
  Text_4_226: {
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
