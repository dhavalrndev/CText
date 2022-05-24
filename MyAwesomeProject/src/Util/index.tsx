import Moment from 'moment';
import { format } from "date-fns";
 

export const getDateTitle=(data:any)=>{

      try
      {

            // RNDateFormat.formatDate(data.toString(),
            // "dd/MM/yyyy", "yyyy-MM-dd",
            // ({formatedDate :string}) => {
            //      console.log(" formatedDate",formatedDate);
            //         }
            //  )
            // data="13/07/2022"
            
            
            if(data?.length>=6)
            {
                  let date=data?.toString().substring(0, 2); 
                  let month=data?.toString().substring(3, 4); 
                  let year=data?.toString().substring(6, 9); 

                  console.log(" month ",date)
                  console.log(" month ",month)
                  console.log(" year ",year)
            }
            let date1=data?.toString().substring(0, 2); 
            let month=data?.toString().substring(3, 5); 
            let year=data?.toString().substring(6, 10); 

            console.log(" date-- ",date1)
            console.log(" month ",month)
            console.log(" year ",year)
            let finaldateis=month+"/"+date1+"/"+year;


            // Moment.locale('en');
            let date = new Date(finaldateis.trim());
            // console.log(" data ",date)
            //  let formattedDate = format(date, "MM/DD/YYYY");
            //  let formattedDate = Moment(finaldateis).format('MM/DD/YYYY')
            let formattedDate = Moment(finaldateis).format('dd  DD MMM. YYYY')

            return formattedDate?.toString()?.toLowerCase()


            // let datespass=new Date(data);
            // console.log(" datapass ",datespass)
            //  return  Moment(datespass).format("DD-MMM-YYYY hh:mm")+data
            // return data
      }catch(exc)
      {
            return ""
      }
}
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