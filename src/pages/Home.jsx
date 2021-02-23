import React, { Component } from "react";
import MainMenu from "../components/mainMenu";
import Info from "./../components/info";

import fb from "../images/media/facebook.svg";
import tw from "../images/media/twitter.svg";
import yb from "../images/media/youtube.svg";
class Home extends Component {
  state = {
    pages: [
      { id: 1, name: "Matches" },
      { id: 2, name: "News" },
      { id: 3, name: "Teams" },
      { id: 4, name: "Schedule" },
      { id: 5, name: "Points" },
      { id: 6, name: "Results" },
    ],
    teams: [
      { id: 1, name: "Lahore Qalandars" },
      { id: 2, name: "Islamabad United" },
      { id: 3, name: "Multan Sutans" },
      { id: 4, name: "Peshawar Zalmi" },
      { id: 5, name: "Quetta Gladiators" },
      { id: 6, name: "Karachi Kings" },
    ],
    mediaIcons: [
      { id: 1, name: fb },
      { id: 2, name: tw },
      { id: 3, name: yb },
    ],
    todayMatch: ["kk", "iu"],
  };
  render() {
    return (
      <>
        <MainMenu
          pages={this.state.pages}
          teams={this.state.teams}
          dropDownTitle="Teams"
          icons={this.state.mediaIcons}
        />
        <Info teams={this.state.todayMatch} />
      </>
    );
  }
}

export default Home;
