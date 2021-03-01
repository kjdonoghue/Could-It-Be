import { connect } from 'react-redux'
import Complexity from './Complexity';
import Training from './Training';
import TeamBuilding from './TeamBuilding'
import StatusUpdate from './StatusUpdate'

function QuestionTwo(props) {

    //if teambuilding - stop
    //if status update - send email
    //if share info || complexity

    //complexity
    //if decision
    //complexity
    //does everyone already have the information needed
    //if training
    //is it state, federally or company mandated
    //yes  - schedule meeting
    //

    return (
        <div >

            {props.purpose == "share" || props.purpose == "decision" ? <Complexity /> : null}
            {props.purpose == "training" ? <Training /> : null}
            {props.purpose == "teambuilding" ? <TeamBuilding /> : null}
            {props.purpose == "status" ? <StatusUpdate /> : null}

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        step: state.step,
        purpose: state.purpose
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        step: 1
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwo);