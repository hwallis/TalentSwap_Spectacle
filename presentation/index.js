// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Appear,
  Layout,
  Image,
  Fit,
  Fill,
  Code,
  CodePane,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  pat: require("../assets/backpat.jpg"),
  home: require("../assets/NewHome.jpg"),
  dev: require("../assets/guitar1.jpg"),
  cleaner: require("../assets/fishing1.jpg"),
  myprofile: require("../assets/MyProfile.jpg"),
  registering: require("../assets/register.jpg"),
  step6: require("../assets/bioS6.jpg"),
  search: require("../assets/Search.jpg"),
  comments: require("../assets/Comments.jpg"),
  group: require("../assets/group.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#36B9AB",
  tertiary: "#002F53",
  quartenary: "gray"
}, {
  primary: "Helvetica",
  secondary: "Montserrat"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Talent Swap
          </Heading>
          < br/>
          <Text margin="20px 0 0" textColor="primary" size={2} fit bold>
            Connect with others and...
          </Text>
          <Heading fit caps textColor="quartenary" margin="10px 0 0" size={5}>
            Get to swapping!
          </Heading>
        </Slide>
        <Slide bgImage={images.home} transition={["fade"]}>
        </Slide>  
        <Slide transition={["fade"]}>
          <Image src={images.dev}></Image>
          <Appear><Image src={images.cleaner}></Image></Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={6} textColor="quartenary" caps>Getting Started...</Heading>
          <List>
            <Image src={images.registering} style={{border: '5px solid gray'}}></Image>
          </List>
        </Slide>
        <Slide transition={["spin"]} bgColor="primary">
          <Image src={images.myprofile} style={{border: '5px solid gray'}}></Image>
        </Slide>
        <Slide transition={["fade"]}>
          <Image style={{border: '5px solid gray'}} src={images.pat}></Image>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={images.search} style={{border: '5px solid gray'}}></Image>
        </Slide>
        <Slide transition={["spin"]} bgColor="primary">
          <Image src={images.comments} style={{border: '5px solid gray'}}></Image>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Image style={{border: '5px solid gray'}} src={images.group}></Image>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Hide not your talents. They for use were made. What's a sundial in the shade?</Quote>
            <Cite>Benjamin Franklin</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
