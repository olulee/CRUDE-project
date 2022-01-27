export function createUser (userDetails) {

      return function(dispatch){
            console.log(userDetails)
          return (
              
              dispatch({type:"ADD_USER",payload:userDetails})
         )
    

      }

}

export function editUser (userDetails) {

      return function(dispatch){
            console.log(userDetails)
          return (
              
              dispatch({type:"EDIT_USER",payload:userDetails})
         )
    

      }

}

export function deleteUser (userDetails) {

      return function(dispatch){
            console.log(userDetails)
          return (
              
              dispatch({type:"DELETE_USER",payload:userDetails})
         )
    

      }

}

export function bulkUpload (userDetails) {

      return function(dispatch){
            console.log(userDetails)
          return (
              
              dispatch({type:"BULK_UPLOAD",payload:userDetails})
         )
    

      }

}

export function searchUser (userDetails) {

      return function(dispatch){
            console.log(userDetails)
          return (
              
              dispatch({type:"SEARCH_USER",payload:userDetails})
         )
    

      }

}