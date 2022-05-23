export const getFirstCharacter = (name:string) => {
    try {
          if (isNull(name) == true) {
                let result = name.charAt(0).toUpperCase() + name.slice(1)
                return result;
          } else {
                return name;
          }

    } catch (e) {
         
          console.log(e);
          return ""
    }

}


export function isNull(data:any) {
    try {
          if (data != null && data != 'null' && data != undefined && data.toString().length != undefined &&
                data.toString().length != null && data.toString().length > 0) {
                return true;
          } else {
                return false;
          }
    } catch (error) {
          console.log(error)
          return false;
    }

}
