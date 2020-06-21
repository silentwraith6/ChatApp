const initialState = {
  contacts: []
}

const rootReducer = (state = initialState, action) => {
  if(action.type === 'SET_AUTH_DATA'){
    return {
      ...state,
      ...action.authData
    }
  }
  if(action.type === 'SET_CONTACTS'){
    return {
      ...state,
      contacts: action.contacts
    }
  }
  if(action.type === 'ADD_CHAT'){
    let contact = state.contacts.find(ct => ct.email === action.contact);
    if(!contact){
      return state;
    }
    else{
      if(action.incUnread)
        contact.unreadMessages = (contact.unreadMessages || 0) + 1
      contact.chats.push(action.msg);
      return {...state};
    }
  }
  if(action.type === 'SET_UNREAD_MESSAGE'){
    let contact = state.contacts.find(ct => ct.email === action.contact);
    if(!contact){
      return state;
    }
    else{
      contact.unreadMessages = action.count;
      return {...state};
    }
  }
  if(action.type === 'INC_UNREAD_MESSAGE'){
    let contact = state.contacts.find(ct => ct.email === action.contact);
    if(!contact){
      return state;
    }
    else{
      contact.unreadMessages = (contact.unreadMessages || 0) + 1;
      return {...state};
    }
  }
  return state;
}

export default rootReducer;