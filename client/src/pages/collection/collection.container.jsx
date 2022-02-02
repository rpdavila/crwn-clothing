import { connect } from "react-redux";
import { compose } from "redux";    
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component"; 
import CollectionPage from "./collection.component"

const mapStateToProps = createStructuredSelector({
    // isLoadining is false because of there not being an object.
    // A bang (!) must be used to convert the false value to true in order to render the component.
    isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner    
)(CollectionPage);

export default CollectionPageContainer;