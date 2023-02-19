// import React from "react";
// import Box from "@mui/material/Box";
// import StarIcon from "@mui/icons-material/Star";
// import StarBorderIcon from "@mui/icons-material/StarBorder";

// const BasicFn = () => {
//   const totalStars = 5;
//   const activeStars = 3;

//   return (
//     <Box>
//       {[...new Array(totalStars)].map((arr, index) => {
//         return index < activeStars ? <StarIcon /> : <StarBorderIcon />;
//       })}
//     </Box>
//   );
// };

// export default BasicFn;

// class Stars extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { currRating: 0 };
//     this.onHover = this.onHover.bind(this);
//     this.onClick = this.onClick.bind(this);
//   }
//   onHover(e) {
//     if (e.target.className === "star") {
//       this.setRating(e.target.dataset.value);
//     }
//   }
//   onClick(e) {
//     if (e.target.dataset.value === this.state.currRating) {
//       this.setRating(e.target.dataset.value - 1);
//     }
//   }
//   setRating(value) {
//     this.setState({ currRating: value });
//   }
//   render() {
//     return [...Array(this.props.starCount).keys()].map((index) => {
//       return (
//         <img
//           onMouseOver={this.onHover}
//           onClick={this.onClick}
//           data-value={index + 1}
//           className="star"
//           src={index + 1 <= this.state.currRating ? FilledStar : EmptyStar}
//           alt={
//             index + 1 <= this.state.currRating ? "filled star" : "empty star"
//           }
//         />
//       );
//     });
//   }
// }
