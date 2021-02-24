import {connect} from 'react-redux'

function QuestionTwo() {


    





    return (
        <div >
           



        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        step: state.step,
        purpose: state.purpose
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        step: 1
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwo);