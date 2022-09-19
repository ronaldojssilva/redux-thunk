export default function simpleAction(){
    console.log('Hello form action');
    return (dispatch) => {
        dispatch({type: 'ACTION_1', payload: {msg: 'Hello Thunk'}});
    }
}