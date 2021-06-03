import NameComponent from '../Components/secondRedux'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {NameAction} from '../Actions/nameChange'

const sendStateProps = (store)=>{
    return {first: store.first.message , second : store.second.message}
}

const sendUpdatedNames = (dispatch)=>{
    return new bindActionCreators({nameAction:NameAction},dispatch)
}

export const SecondHoc = connect(sendStateProps,sendUpdatedNames)(NameComponent)