import PropTypes from 'prop-types';
import css from './feedbackOpt.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
      return (
          <div className={css.button_list}>
              {options.map((option) => {
                  return (
                      <button className={css.button_feedback} type='button' key={option} onClick={() => onLeaveFeedback(option)}>
                          <span className={css.item_option}>{ option}</span>
                      </button> 
                  )
              } )}
        </div>
    )
}

FeedbackOptions.protoTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;


