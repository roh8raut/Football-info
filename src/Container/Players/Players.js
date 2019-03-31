import React, { Component } from 'react';
import { playerAction } from '../../Actions/Actions';
import store from '../../Store';
import { connect } from 'react-redux';
import loader from '../../Assets/ajax-loader.gif';
import './Players.css'
import Profile from '../../Components/Profile/Profile';
import playersData from '../../Stubs/players.json';


class Players extends Component {
   
    componentDidMount(){
        // axios.get("https://pure-bayou-11893.herokuapp.com/players")
        //     .then(res => store.dispatch(playerAction(res.data)));
       store.dispatch(playerAction(playersData));
    }
    render(){
        const props =  this.props;

        if(props.isLoading){
            return (
                <img src={loader} alt="loader"/>
            )
        } else {
        return(
        <div className="container-fluid">
            <div className="row">
            {this.props.data.players.map((player) => <Profile key={player._id} player={player}/> 
            )}
            </div>
        </div>
        )
        }
}
}

const mapStateToProps = (state) => {
    console.log('state>>>>>>>>>',state)
    return {
        isLoading: state.playerReducer.isLoading,
        data: state.playerReducer.data,
    }
}


export default connect(mapStateToProps, null)(Players);
