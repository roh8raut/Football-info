import React, { Component } from 'react';
import { playerAction } from '../../Actions/Actions';
import store from '../../Store';
import { connect } from 'react-redux';
import './Players.css'
import playersData from '../../Stubs/players.json';
import Profile from '../../Components/Profile/Profile';


class Players extends Component {
   
    componentDidMount(){
       store.dispatch(playerAction(playersData));
    }
    render(){
        const props =  this.props;

        const togglePlayers = () => {
            const players = document.querySelector("#playersList");
            if(players.classList.contains("hide")){

                const lazyImages = document.querySelectorAll(".lazy");
                lazyImages.forEach((item) => {
                    item.src = item.dataset.src;
                    item.classList.remove("lazy");
                });

                document.querySelector(".showPlayers").innerHTML = "Hide Players";
                players.classList.remove("anime");
                players.classList.remove("hide");

            } else{
                document.querySelector(".showPlayers").innerHTML = "Show Players"
                players.classList.add("anime")
                setTimeout(() => {
                    players.classList.add("hide");
                },1000) 
            }
        }

        if(props.isLoading){
            return (
                <h1>Loaddinggg....</h1>
            )
        } else {
        return(
        <>
        <button className="btn btn-info showPlayers" onClick={() => togglePlayers()}>Show players</button>        
            <div className="container-fluid">
                <div className="row row--bg hide" id="playersList">
                    {this.props.data.players.map((player) => <Profile key={player._id} player={player}/>)}                
                </div>
            </div>
        </>
        )
        }
}
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.playerReducer.isLoading,
        data: state.playerReducer.data,
    }
}


export default connect(mapStateToProps, null)(Players);
