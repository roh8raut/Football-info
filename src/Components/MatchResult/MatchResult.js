import React from 'react';
import {Row, Col} from 'reactstrap';
import './MatchResult.css';
const MatchResult = (props) => {
   
        return (
            props.matchInfo.map((match) => {
             return (
                <Row className="scoreCard" id={match.id}>
                  <Col md={4} sm={12} className="scoreCard__mobile"><span className="team">{match.homeTeam.name}</span></Col>
                   <Col md={4} sm={12} className="scoreCard__mobile"><span className="scores">{match.score.fullTime.homeTeam+` : `+match.score.fullTime.awayTeam}</span></Col>
                  <Col md={4} sm={12} className="scoreCard__mobile"><span className="team">{match.awayTeam.name}</span></Col>
                </Row>
             )
     })
    )
}

export default MatchResult;