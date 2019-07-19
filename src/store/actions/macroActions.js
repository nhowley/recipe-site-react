export const addMacros = (macro) =>{
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('macros').add({
      ...macro
    }).then((resp) => {
      console.log(resp.id) 
      return firestore.collection('macros').doc(resp.id).set({
        ...macro,
        user: resp.id
      })
    }).then(()=>{
      dispatch({type: 'ADD_MACRO', macro});
    }).catch((err) => {
      dispatch({type: 'ADD_MACRO_ERROR', err});
    })
  }
}
