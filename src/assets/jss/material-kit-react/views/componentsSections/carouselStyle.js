import { container } from "assets/jss/material-kit-react.js";
import { title } from "assets/jss/material-kit-react.js";


const carouselStyle = {
  section: {
    padding: "70px 0"
  },
  title: {
    ...title,
    textAlign:"center",
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  container,
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  }
};

export default carouselStyle;
