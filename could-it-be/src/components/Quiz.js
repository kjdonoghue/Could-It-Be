import {useState} from 'react'
import {connect} from 'react-redux'
import QuestionOne from './QuestionOne'
import QuestionTwo from './QuestionTwo'
import QuestionThree from './QuestionThree'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function Quiz(props) {

    const classes = useStyles();

    const handleNext = () => {
        props.onIncrementSteps()
    }

    
    return (
        <div >    
            {props.steps == 0 ? <div className={classes.root}>
                <Button variant="contained" onClick={() => handleNext()}>Get Started</Button>
            </div> : null}

           {props.steps == 1 ? <QuestionOne /> : null}
           {props.steps == 2 ? <QuestionTwo /> : null}
            {/* <QuestionThree />              */}

        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        steps: state.step
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onIncrementSteps: () => dispatch({type: "ON_INCREMENT_STEPS"}),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
