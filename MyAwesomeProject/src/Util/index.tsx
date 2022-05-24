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


export const CreateData=(Data:any)=>
{
      const MainData:any=[];
      try{
            Data?.forEach((element:any) => {                   
                  let datavailable=MainData.some((item:any)=>item.title===element?.Date);
                  // console.log(" data is way ",element)
                  if(datavailable===false)
                  {
                        const Object:any={};
                        const data:any=[]
                        Object["title"]=element.Date;
                        data.push(element);
                        Object["data"]=data
                        MainData.push(Object)
                  }else{
                        // const findpostObj=MainData.find((child:any)=>child.title === element?.Date)
                        const index = MainData.findIndex((childitem:any) => childitem.title === element?.Date);
                        console.log(" vindex ",index)
                        if(index>=0)
                        {
                              MainData[index]?.data?.push(element);
                        }
                  }
            }); 
      }catch(exc)
      {
            console.log(" exc ",exc);
            return MainData;
      }
      return MainData;
}