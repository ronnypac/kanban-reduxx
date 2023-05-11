import { legacy_createStore as createStore} from 'redux'
import reducer from "./reduser";

const store = createStore(reducer)

export default store