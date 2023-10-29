const SettingsTabReducer=(state=1  ,action)=>{
    switch(action.type){
        case 1:
                return 1;
        case 2:
                return 2;
        case 3:
                return 3;
        default:
            return 1
    }
  }

  export default SettingsTabReducer