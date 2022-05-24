import React from 'react';
// import { isNetworkAvailable } from '../util/NetworkUtils';
import NetworkUtils from '../Util/NetworkUtils';
import { label_not_network_connection, label_some_thing_is_wrong } from '../Util/String';
import Api from '../Api/Api';
import { CommonActions } from '@react-navigation/native';
import { isNull } from '../Util';
// import { navigationRef } from '../Router/RootNavigation';
// import { StackAuthRouter, StackHomeRoute } from '../Router/Names';


const timeout = 10000;
const Filetimeout = (30 * (60 * 1000));
const onCheckNotnull = async (response) => {
      try {
            console.log(" response.data.status", response.data.status)
            // console.log(" response.data.data.isNull(response.data) .", isNull(response.data));
            if (isNull(response) == true && isNull(response.data) == true && response.data.status != null && response.data.status != undefined) {
                  // console.log(" response.data.status", response.data.status)
                  // console.log(" response.data.data.isNull(response.data) .", isNull(response.data));
                  // debugger
                  return true;
            } else {
                  // debugger
                  return false;
            }
      } catch (err) {
            return false;
      }
}


const onCheckJsonData=(response)=>
{
             
}


const onSuccess=(response,callBack)=>{
      try{
           
            if (response?.status == 200 && isNull(response?.data) == true  ) {
                  console.log(" message2 ")
                  debugger
                  return callBack({
                        success: true,
                        data: response.data
                  })
            } else {
                  console.log(" message3 ")
                  debugger
                  return callBack({
                        success: false,
                        data: response.data,
                        errorMessage: isNull(response?.data?.message) == true ? response.data.message : label_some_thing_is_wrong
                  })
            }
      }catch(exc)
      {
          

            debugger
            return callBack({
                  success: false,
                  data: response.data,
                  errorMessage: label_some_thing_is_wrong
            })
      }
}
const onError=(response,callBack)=>{
     try{

      debugger
      return callBack({
            success: false,
            data: response?.data,
            errorMessage: label_some_thing_is_wrong
      })
     } catch(exc)
     {
      debugger
      return callBack({
            success: false,
            data: response?.data,
            errorMessage: label_some_thing_is_wrong
      })
     }
}

export const onCallGet = async (url, headersParams, callBack) => {
      try 
      {
            // debugger
            const isConnected = await NetworkUtils.isNetworkAvailable();
            // debugger
            if (isConnected === false) 
            {
                  debugger
                  return callBack({
                        success: false,
                        errorMessage: label_not_network_connection,
                  })
            }

            Api.get(url, {
                  timeout: timeout,
                  headers: {
                        // 'token': `Bearer ${token}`,
                        "content-type": "application/json",
                        'Authorization': `Bearer ${headersParams}`,
                        'auth-token': headersParams,
                        'token': headersParams

                  }
            }).then((response)=>{
          
                  onSuccess(response,callBack)
            }).catch((error)=>{

                try{
              
                  onError(error,callBack)
                  if(error?.response?.status==401)
                  {
                        let response={"status":-1}
                        let data={}
                        response.data=data;
                 
                      
                  }else{
                        onError(error,callBack)
                  }
                }catch(excr)
                {
                  return callBack({
                        success: false,
                        errorMessage: label_some_thing_is_wrong
                  })
                }
            })
          



      } catch (error) {
            console.log(" the error is follow now ", error);
            // if (callBack != null && callBack != undefined) {

            debugger
            return callBack({
                  success: false,
                  errorMessage: label_some_thing_is_wrong
            })
            // }

      }
}


// callBack
export const onCallPost = async (url, headersParams, data, callBack) => {
      try {
            debugger
            console.log(" headersParams ", headersParams)
            console.log(" url ", url)
            console.log(" data ", data)

            const isConnected = await NetworkUtils.isNetworkAvailable();
            debugger
            if (isConnected === false) {
                  debugger
                  return callBack({
                        success: false,
                        errorMessage: label_not_network_connection,
                  })
            }

            console.log(" pass data is now ", data)
          Api.post(url, data, {
                  timeout: timeout,
                  method: 'post',
                  headers: {
                        "content-type": "application/json",
                        'Authorization': `Bearer ${headersParams}`,
                        'auth-token': headersParams,
                        'token': headersParams

                  },
            }).then((response)=>{
                  console.log(" lOGS  DATA ",response)
               
                  onSuccess(response,callBack)
            }).catch((error)=>{
                  
                  console.log(" lOGS  ERROR ",error.message)
                  console.log(" lOGS  ERROR status ",error.status)
                  console.log(" lOGS  ERROR response  ",error.response)
                  console.log(" lOGS  ERROR status ",error.status)
             
             
                 
                       onError(error,callBack)
            })
          
            // console.log('The reponse is :-', response.data);
            // // console.log('The reponse is :-', response);
            // console.log('The reponse is status :-', response.data.status);
            // debugger
        
            // if (isNull(response?.data?.status) == true && (response?.data?.status === 0)) {

            //       console.log(" message1 ")
            //       debugger
            //       if (response?.data != null && response?.data != undefined &&
            //             response?.data?.message != null && response?.data?.message != undefined) {

            //             return callBack({
            //                   success: false,
            //                   errorMessage: isNull(response?.data?.message) == true ? response.data.message : label_some_thing_is_wrong,
            //                   data: response.data
            //             })
            //       } else {
            //             return callBack({
            //                   success: false,
            //                   errorMessage: isNull(response?.data?.message) == true ? response.data.message : label_some_thing_is_wrong,
            //                   data: response.data
            //             })
            //       }

            // } else if (response?.status == 200 && isNull(response?.data?.status) == true && (response?.data?.status == 1)) {
            //       console.log(" message2 ")
            //       debugger
            //       return callBack({
            //             success: true,
            //             data: response.data
            //       })
            // } else {
            //       console.log(" message3 ")
            //       debugger
            //       return callBack({
            //             success: false,
            //             data: response.data,
            //             errorMessage: isNull(response?.data?.message) == true ? response.data.message : label_some_thing_is_wrong
            //       })
            // }

      } catch (error) {
            console.log(" the error is follow now ", error);
            debugger
            return callBack({
                  success: false,
                  errorMessage: label_some_thing_is_wrong
            })
      }
}



// callBack
export const onCallPostFileUpload = async (url, headersParams, data, callBack) => {
      try {
            debugger
            console.log(" headersParams ", headersParams)
            console.log(" url ", url)
            console.log(" data ", data)

            const isConnected = await NetworkUtils.isNetworkAvailable();
            debugger
            if (isConnected === false) {
                  debugger
                  return callBack({
                        success: false,
                        errorMessage: label_not_network_connection,
                  })
            }

            console.log(" pass data is now ", data)
          const response=await  Api.post(url, data, {
                  timeout: Filetimeout,
                  method: 'POST',
                  headers: {
                        // "content-type": "application/json",
                        // 'Authorization': `Bearer ${headersParams}`,
                        'auth-token': headersParams,
                        // 'token': headersParams,
                        "Content-Type": "multipart/form-data",
                  },
            }) 

            console.log('The reponse is :-', response.data);
            // console.log('The reponse is :-', response);
            console.log('The reponse is status :-', response.data.status);
            debugger
    
            if (isNull(response?.data?.status) == true && (response?.data?.status === 0)) {

                  console.log(" message1 ")
                  debugger
                  if (response?.data != null && response?.data != undefined &&
                        response?.data?.message != null && response?.data?.message != undefined) {

                        return callBack({
                              success: false,
                              errorMessage: isNull(response?.data?.message) == true ? response.data.message : label_some_thing_is_wrong,
                              data: response.data
                        })
                  } else {
                        return callBack({
                              success: false,
                              errorMessage: isNull(response?.data?.message) == true ? response.data.message : label_some_thing_is_wrong,
                              data: response.data
                        })
                  }

            } else if (response?.status == 200 && isNull(response?.data?.status) == true && (response?.data?.status == 1)) {
                  console.log(" message2 ")
                  debugger
                  return callBack({
                        success: true,
                        data: response.data
                  })
            } else {
                  console.log(" message3 ")
                  debugger
                  return callBack({
                        success: false,
                        data: response.data,
                        errorMessage: isNull(response?.data?.message) == true ? response.data.message : label_some_thing_is_wrong
                  })
            }

      } catch (error) {
            console.log(" the error is follow now ", error);
            debugger
            return callBack({
                  success: false,
                  errorMessage: label_some_thing_is_wrong
            })
      }
}



export const onCallPut = async (url, headersParams, data, callBack) => {


      try {
            debugger
            console.log(" headersParams ", headersParams)
            console.log(" url ", url)
            console.log(" data ", data)

            const isConnected = await NetworkUtils.isNetworkAvailable();
            debugger
            if (isConnected === false) {
                  debugger
                  return callBack({
                        success: false,
                        errorMessage: label_not_network_connection,
                  })
            }


            const response = await Api.put(url, data != null && data != undefined ? data : {}, {
                  timeout: timeout,
                  headers: {
                        "content-type": "application/json",
                        'Authorization': `Bearer ${headersParams}`
                  },
            })
         
            console.log('Create Order', response)
            if (isNull(response.data) == true && isNull(response.data.status) == true && (response.data.status == 'false' || response.data.status == false)) {
                  // console.log('Error occurred while getting OTP ')
                  console.log(" message1 ")
                  debugger
                  if (response.data.error != null && response.data.error != undefined &&
                        response.data.error.message != null && response.data.error.message != undefined) {

                        return callBack({
                              success: false,
                              errorMessage: response.data.error.message
                        })
                  } else {
                        return callBack({
                              success: false,
                              errorMessage: label_some_thing_is_wrong
                        })
                  }

            } else if (isNull(response.data) == true && isNull(response.data.status) == true && response.data.status == 'true' || response.data.status == true) {
                  console.log(" message2 ")
                  debugger
                  return callBack({
                        success: true,
                        data: response.data
                  })
            } else {
                  console.log(" message3 ")
                  debugger
                  return callBack({
                        success: false,
                        errorMessage: label_some_thing_is_wrong
                  })
            }
      } catch (error) {
            console.log(" the error is follow now ", error);
            debugger
            return callBack({
                  success: false,
                  errorMessage: label_some_thing_is_wrong
            })
      }
}

//  Here is Declare the on Del method


export const onCallDelete = async (url, headersParams, datapass, callBack) => {


      try {
            debugger
            console.log(" headersParams ", headersParams)
            console.log(" url ", url)
            console.log(" data ", datapass)

            const isConnected = await NetworkUtils.isNetworkAvailable();
            debugger
            if (isConnected === false) {
                  debugger
                  return callBack({
                        success: false,
                        errorMessage: label_not_network_connection,
                  })
            }

            const response = await Api.delete(url, {
                  headers: {
                        "content-type": "application/json",
                        'Authorization': `Bearer ${headersParams}`
                  },
                  params: datapass,
                  data: datapass,
            });

            // const response = await Api.delete(url, data != null && data != undefined ? data : {}, {
            //       timeout: 10000,
            //       method: 'delete',
            //       // method:delete,
            //       headers: {
            //             "content-type": "application/json",
            //             'Authorization': `Bearer ${headersParams}`
            //       },
            // })

     
            console.log('Create Order', response.data)
            if (isNull(response.data) == true && isNull(response.data.status) == true && (response.data.status == 'false' || response.data.status == false)) {
                  // console.log('Error occurred while getting OTP ')
                  console.log(" message1 ")
                  debugger
                  if (response.data.error != null && response.data.error != undefined &&
                        response.data.error.message != null && response.data.error.message != undefined) {

                        return callBack({
                              success: false,
                              errorMessage: response.data.error.message
                        })
                  } else {
                        return callBack({
                              success: false,
                              errorMessage: label_some_thing_is_wrong
                        })
                  }

            } else if (isNull(response.data) == true && isNull(response.data.status) == true && response.data.status == 'true' || response.data.status == true) {
                  console.log(" message2 ")
                  debugger
                  return callBack({
                        success: true,
                        data: response.data
                  })
            } else {
                  console.log(" message3 ")
                  debugger
                  return callBack({
                        success: false,
                        errorMessage: label_some_thing_is_wrong
                  })
            }
      } catch (error) {
            console.log(" the error is follow now ", error);
            debugger
            return callBack({
                  success: false,
                  errorMessage: label_some_thing_is_wrong
            })
      }
}
export const onverifyUrl=(url,callback)=>{

      try{
            fetch(url)
            .then((response) => response.json())
            .then((json) => {

                  console.log(" json ",json)
                  if(callback!=null && callback!=undefined)
                  {
                        callback(json)
                  }
            })
            .catch((error) =>{
                  if(callback!=null && callback!=undefined)
                  {
                        callback(error)
                  }
            });
            // .finally(()  {});
      }catch(exc)
      {
            if(callback!=null && callback!=undefined)
            {
                  callback({})
            }
      }
}

