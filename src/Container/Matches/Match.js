import React, { Component } from "react";
import axios from "axios";
import {
  teamDetails,
  matchDetails,
  resetArr,
  setMatchInfo
} from "../../Actions/Actions";
import { connect } from "react-redux";
import Searchbar from "./Searchbar/Searchbar";
import MatchResult from './../../Components/MatchResult/MatchResult'

class Match extends Component {
  constructor() {
    super();
    this.state = {
      multiple: false,
    }
  }
  async componentDidMount() {
    await axios
      .get("http://api.football-data.org/v2/competitions/2001/teams", {
        headers: {
          "x-auth-token": "c7da98cc3d4b4c58aa3922a5c8a22dea"
        }
      })
      .then(res => this.props.fetchTeams(res.data));

    await axios
      .get("http://api.football-data.org/v2/competitions/2001/matches", {
        headers: {
          "x-auth-token": "c7da98cc3d4b4c58aa3922a5c8a22dea"
        }
      })
      .then(res => this.props.fetchMatches(res.data));

  }
  render() {

    return (
      <>
        Matches
          <Searchbar
          setMatchInfo={this.props.setMatchInfo}
          teams={this.props.teamsData}
          matchInfo={this.props.matchInfo}
          matches={this.props.matches}
          resetArr={this.props.resetArr}
        />
        <MatchResult matchInfo={this.props.matchInfo} />

      </>

    );
  }
}


const mapStateToProps = state => {
  console.log("mSTP", state)
  return {
    teamsData: state.teamsReducer.data,
    matches: state.matchReducer.matches,
    matchInfo: state.matchResultReducer.matchInfo,
  };


};
const mapDispatchToProps = dispatch => {
  return {
    fetchTeams: data => {
      dispatch(teamDetails(data));
    },

    fetchMatches: (data) => {
      dispatch(matchDetails(data))
    },

    resetArr: (matches) => {
      dispatch(resetArr(matches))
    },

    setMatchInfo: (data, matches) => {
      dispatch(setMatchInfo(data, matches))
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Match);
