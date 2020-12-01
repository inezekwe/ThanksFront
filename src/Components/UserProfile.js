
var UserProfile = (function() {
    var full_name = "";
    var id = null;
  
    const getName = function() {
      return full_name;
    };
  
    const setName = function(name) {
      full_name = name;     
    };

    const getId = function() {
        return id;
      };
    
    const setId = function(i) {
        id = i;     
      };

    const resetProfile = () => {
      full_name = "";
      id = null;
    }
  
    return {
      getName: getName,
      setName: setName,
      getId: getId,
      setId: setId,
      resetProfile: resetProfile
    }
  
  })();
  
  export default UserProfile;