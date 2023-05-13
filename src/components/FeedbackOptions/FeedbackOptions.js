import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback}) => {
    return (
        <div className={css.wrap}>
        {
           options.map((option => (
           <button  key={option}  className={css[option]} type="button" name={option} onClick={() => onLeaveFeedback(option)}>
            {option}
           </button> 
           ))) 
        }
        </div>
    );
};
FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};


