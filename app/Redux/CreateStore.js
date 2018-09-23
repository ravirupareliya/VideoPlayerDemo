import {
    NavigationActions,
    StackActions
} from 'react-navigation';
import {
    createStore,
    applyMiddleware,
    combineReducers,
} from 'redux';
import {
    createReactNavigationReduxMiddleware,
    createNavigationReducer,
} from 'react-navigation-redux-helpers';
import AppNavigation from '../Navigation/AppNavigation'
import HomeDataReducer from '../Reducers/HomeDataReducer'
import thunk from 'redux-thunk';

const navReducer = createNavigationReducer(AppNavigation);
const appReducer = combineReducers({
    nav: navReducer,
    homeReducer: HomeDataReducer
});
const rootReducer = (state, action) => {
    return appReducer(state, action);
}
// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const NavMiddleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);
let middleware = [thunk, NavMiddleware]
export const store = createStore(
    rootReducer,
    applyMiddleware(...middleware),
);