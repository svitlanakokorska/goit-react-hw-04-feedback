import PropTypes from 'prop-types';

export const Statistics = ({
  options,
  statistic,
  total,
  positivePercentage,
}) => {
  return (
    <>
      {options.map((option, i) => {
        return (
          <div key={i + 1} categoryName={option}>
            {option}: {statistic[option]}
          </div>
        );
      })}
      <p>
        Total: {total}
      </p>
      <div categoryName={'good'}>
        Positive feedback: {positivePercentage()}%
      </div>
    </>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  statistic: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
