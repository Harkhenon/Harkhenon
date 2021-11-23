// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Example from 'src/components/Example';

const mapStateToProps = (state, ownProps) => ({
  
});


const mapDispatchToProps = (dispatch, ownProps) => ({

});

// Container
const ExampleContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);

// == Export
export default ExampleContainer;

