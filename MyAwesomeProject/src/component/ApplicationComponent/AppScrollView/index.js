import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView ,View} from 'react-native';
const AppScrollView = (props) => {

  return (
    <ScrollView
      {...props}
      nestedScrollEnabled={true}
      style={{ ...props.style, flexGrow: 1, flexDirection: 'column' }}
      keyboardShouldPersistTaps='handled'
      showsHorizontalScrollIndicator={false}
      ref={props.ref}
      keyboardDismissMode="on-drag"
      showsVerticalScrollIndicator={false}
      >

      {/* <KeyboardAvoidingView
        behavior='position'
        style={{ backgroundColor: 'white', flexDirection: 'column', flex: 1, height: '100%', width: '100%' }}>
          <View style={{flex:1,flexGrow:1}}>

          </View>
      </KeyboardAvoidingView> */}
    </ScrollView>
  );

}

export default AppScrollView;