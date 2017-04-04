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
  home: require("../assets/homePageTS.jpg"),
  dev: require("../assets/webdev.jpg"),
  cleaner: require("../assets/cleaner.jpg"),
  register: require("../assets/registerScreen.jpg"),
  step6: require("../assets/bioS6.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#36B9AB",
  tertiary: "#002F53",
  quartenary: "#D51920"
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
          <Text margin="30px 0 0" textColor="primary" size={2} fit bold>
            Connect with others and...
          </Text>
          <Heading fit caps textColor="quartenary" size={5}>
            Get to swapping!
          </Heading>
        </Slide>
        <Slide transition={["fade"]}>
          <Image src={images.home}></Image>
        </Slide>  
        <Slide transition={["fade"]}>
          <Image src={images.dev}></Image>
          <Appear><Image src={images.cleaner}></Image></Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={6} textColor="quartenary" caps>Getting Set Up</Heading>
          <List>
            <Appear><Image src={images.register}></Image></Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={6} textColor="quartenary" caps>Create a Great Bio!</Heading>
          <List>
            <Image src={images.step6}></Image>
          </List>
        </Slide>
        <Slide transition={["fade"]}>
          <Image src={images.pat}></Image>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Image src={images.search}></Image>
        </Slide>
        <Slide transition={["spin"]} bgColor="tertiary">
          <Heading size={3} textColor="primary" caps>Getting Started</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
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
