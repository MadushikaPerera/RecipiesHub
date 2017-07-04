import * as constants from '../constants/recipe';

const initialState = {
    allrecipe:[],
    myrecipe:[],
    isError:false,
    rerender:false
};

export default function Recipe(state = initialState, action) {
  switch (action.type) {
    case constants.ADD_RECIPE:
      return Object.assign({},state,{allrecipe:action.data.data.concat(state.allrecipe)});

    case constants.ERROR_ADD_RECIPE:
      return Object.assign({},state,{isError:true});

    case constants.UPDATE_RECIPE:
    let recpid=JSON.parse(action.data.config.data).id;
      return Object.assign({},state,{
        allrecipe:state.allrecipe.filter((obj)=>obj._id!==recpid).concat(action.data.data)
      });

    case constants.ERROR_UPDATE_RECIPE:
      return Object.assign({},state,{isError:true});

    case constants.SEARCH_RECIPE:
    console.log('reducer data',action.data.data);
      return Object.assign({},state,{allrecipe:action.data.data});

    case constants.ERROR_SEARCH_RECIPE:
      return Object.assign({},state,{isError:true});

    case constants.MY_RECIPES:
    console.log('reducer mydata',action.data.data);
      return Object.assign({},state,{myrecipe:action.data.data});

    case constants.ERROR_MY_RECIPES:
      return Object.assign({},state,{isError:true});

    case constants.REMOVE_RECIPE:
      let recid=JSON.parse(action.data.config.data).id;
      return Object.assign({},state,{isError:false,rerender:true,allrecipe:state.allrecipe.filter((obj)=>obj._id!==recid)});

    case constants.ERROR_REMOVE_RECIPE:
      return Object.assign({},state,{isError:true});

    default:
      return state;
  }
}
