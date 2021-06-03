import MyComponent from '../Components/testRedux'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {DataAction} from '../Actions/dataChange'

const sendStateProps = (store)=>{
    return {data: store.first.message}
}

const sendUpdatedData = (dispatch)=>{
    return new bindActionCreators({dataAction:DataAction},dispatch)
}

export const FirstHoc = connect(sendStateProps,sendUpdatedData)(MyComponent)