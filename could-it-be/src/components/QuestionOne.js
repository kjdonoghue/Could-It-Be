import React from 'react';
import {connect} from 'react-redux'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function QuestionOne(props) {
    const classes = useStyles();

    const [value, setValue] = React.useState('status');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleNext = (value) => {
        props.onUpdatePurpose(value)
        props.onIncrementSteps()
        console.log(value)

    }


    return (
        <div >
            <h3>1. What is the purpose of your meeting?</h3>

            <FormControl component="fieldset">
                <RadioGroup aria-label="options" name="options" value={value} onChange={handleChange}>
                    <FormControlLabel value="status" control={<Radio />} label="Status Update" />
                    <FormControlLabel value="share" control={<Radio />} label="Share New Information" />
                    <FormControlLabel value="decision" control={<Radio />} label="Make a Decision" />
                    <FormControlLabel value="training" control={<Radio />} label="Training Session" />
                    <FormControlLabel value="teambuilding" control={<Radio />} label="Team Building" />
                </RadioGroup>
            </FormControl>

            <div className={classes.root}>
                <Button variant="contained" onClick={() => handleNext(value)}>Next</Button>
            </div>


        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        steps: state.steps
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onIncrementSteps: () => dispatch({type: "ON_INCREMENT_STEPS"}),
        onUpdatePurpose: (purpose) => dispatch({type: "ON_UPDATE_PURPOSE", payload: purpose})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(QuestionOne)