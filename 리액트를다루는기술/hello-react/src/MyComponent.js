import PropTypes from 'prop-types';

const MyComponent = ({ name, children, favoriteNumber }) => {
  return (
    <div>
      안녕. 시켜줘 {name} 명예소방관..
      <br />
      현재 children 값은 {children} 입니다.
      <br />
      좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};
MyComponent.defaultProps = {
  name: '"이주애깃허브잔디"',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
