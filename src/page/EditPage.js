import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Dimensions, StatusBar, ScrollView, TouchableOpacity, Button, ToastAndroid } from 'react-native';
import {
    SoftLightBlend,
    Emboss,
    Earlybird,
    Invert,
    RadialGradient
  } from 'react-native-image-filter-kit';
import { Ashby, Poprocket, InstagramCSSExtensionConfig, PoprocketStandalone, Love, TryThis, Bright, Hype, Honor } from './InstagramCSS'
import CameraRoll from "@react-native-community/cameraroll";
import ViewShot from "react-native-view-shot";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
export default class EditPage extends Component {
    state = {currentEffect: "Normal", disableSave: false}
    renderImageEffect(){
        if(this.state.currentEffect == "Normal")
        {
            return this.renderNormalEffect()
        }
        if(this.state.currentEffect == "Retro")
        {
            return this.renderRetroEffect()
        }
        if(this.state.currentEffect == "Love")
        {
            return this.renderLoveEffect()
        }
        if(this.state.currentEffect == "EarlyBird")
        {
            return this.renderEarlyBirdEffect()
        }
        if(this.state.currentEffect == "Bright")
        {
            return this.renderBrightEffect()
        }
        if(this.state.currentEffect == "Hype")
        {
            return this.renderHypeEffect()
        }
        if(this.state.currentEffect == "Honor")
        {
            return this.renderHonorEffect()
        }
    }
    renderImage(){
        const image = { uri: 'data:image/jpeg;base64,' + this.props.imageData };
        return (
            <View>
                <Image style={styles.ImageStyle} source={image}/>
                <Text style={{position:'absolute', alignSelf:'flex-end', bottom:10, right: 10, color:'white'}}>Logo</Text>
            </View>
        )
    }
    renderImagePreview(){
        return (
            <Image style={{width: (screenHeight/10*1), height: (screenHeight/10*1), borderTopLeftRadius:10, borderTopRightRadius:10}} source={{uri: 'data:image/jpeg;base64,' + this.props.imageData}}/>
        )
    }
    renderNormalEffect(){
        return(
            <View style={styles.ImageViewStyle}>
                {this.renderImage()}
            </View>
        );
    }
    renderNormalEffectPreview(){
        return(
            <View>
                {this.renderImagePreview()}
            </View>
        );
    }
    renderRetroEffect(){
        return(
            <View style={styles.ImageViewStyle}>
                <TryThis image={
                    this.renderImage()
                    }>
                    </TryThis>
            </View>
        );
    }
    renderRetroEffectPreview(){
        return(
            <View>
                <TryThis image={
                    this.renderImagePreview()
                    }>
                    </TryThis>
            </View>
        );
    }
    renderHypeEffect(){
        return(
            <View style={styles.ImageViewStyle}>
                <Hype image={
                    this.renderImage()
                    }>
                    </Hype>
            </View>
        );
    }
    renderHypeEffectPreview(){
        return(
            <View>
                <Hype image={
                    this.renderImagePreview()
                    }>
                    </Hype>
            </View>
        );
    }
    renderHonorEffect(){
        return(
            <View style={styles.ImageViewStyle}>
                <Honor image={
                    this.renderImage()
                    }>
                    </Honor>
            </View>
        );
    }
    renderHonorEffectPreview(){
        return(
            <View>
                <Honor image={
                    this.renderImagePreview()
                    }>
                    </Honor>
            </View>
        );
    }
    renderLoveEffect(){
        return(
            <View style={styles.ImageViewStyle}>
                <Love image={
                    this.renderImage()
                    }>
                    </Love>
            </View>
        );
    }
    renderLoveEffectPreview(){
        return(
            <View>
                <Love image={
                    this.renderImagePreview()
                    }>
                    </Love>
            </View>
        );
    }
    renderBrightEffect(){
        return(
            <View style={styles.ImageViewStyle}>
                <Bright image={
                    this.renderImage()
                    }>
                    </Bright>
            </View>
        );
    }
    renderBrightEffectPreview(){
        return(
            <View>
                <Bright image={
                    this.renderImagePreview()
                    }>
                    </Bright>
            </View>
        );
    }
    renderEarlyBirdEffect(){
        return(
            <View style={styles.ImageViewStyle}>
                <Earlybird image={
                    this.renderImage()
                    }>
                    </Earlybird>
            </View>
        );
    }
    renderEarlyBirdEffectPreview(){
        return(
            <View>
                <Earlybird image={
                    this.renderImagePreview()
                    }>
                    </Earlybird>
            </View>
        );
    }
    changeFilter(filter){
        this.setState({currentEffect: filter});
    }
    render() {
        StatusBar.setTranslucent(true);
        return (
            <View style={styles.MainViewStyle}>
                <ViewShot ref="viewShot" options={{ format: "jpg", quality: 1 }}>
                {this.renderImageEffect()}
                </ViewShot>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{justifyContent:'space-around'}} style={styles.EffectZone}>
                    <TouchableOpacity onPress={() => {this.changeFilter("Normal")}} style={styles.EffectButton}>
                        {this.renderNormalEffectPreview()}
                        <Text style={{color:'white'}}>Normal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.changeFilter("Retro")}} style={styles.EffectButton}>
                        {this.renderRetroEffectPreview()}
                        <Text style={{color:'white'}}>Retro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.changeFilter("Love")}} style={styles.EffectButton}>
                        {this.renderLoveEffectPreview()}
                        <Text style={{color:'white'}}>Love</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.changeFilter("EarlyBird")}} style={styles.EffectButton}>
                        {this.renderEarlyBirdEffectPreview()}
                        <Text style={{color:'white'}}>Cool</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.changeFilter("Hype")}} style={styles.EffectButton}>
                        {this.renderHypeEffectPreview()}
                        <Text style={{color:'white'}}>Hype</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.changeFilter("Bright")}} style={styles.EffectButton}>
                        {this.renderBrightEffectPreview()}
                        <Text style={{color:'white'}}>Bright</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.changeFilter("Honor")}} style={{...styles.EffectButton, marginRight:10}}>
                        {this.renderHonorEffectPreview()}
                        <Text style={{color:'white'}}>Honor</Text>
                    </TouchableOpacity>
                </ScrollView>
                <TouchableOpacity disabled={this.state.disableSave} style={{width: screenWidth-20, height: 40, justifyContent:'center', alignItems:'center', backgroundColor:'#03A9F4', borderRadius: 5, marginBottom: 10}} onPress={() => {this.refs.viewShot.capture().then(uri => {
                    this.setState({disableSave: true});
                    ToastAndroid.show("Saving image...",3);
                    CameraRoll.saveToCameraRoll(uri, 'photo').then(() => {ToastAndroid.show("Saved successfully", 5)});
                    });}} >
                    <Text style={{color:'white'}}>Save Image</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainViewStyle: {
        height: screenHeight,
        width: screenWidth,
        alignItems:'center',
        justifyContent:'flex-start'
    },
    ImageViewStyle: {
        height: screenHeight/10*7,
        width: screenWidth,
        alignSelf:'center',
        justifyContent:'flex-start',
    },
    ImageStyle: {
        width: screenWidth,
        height: screenHeight/10*7,
    },
    EffectZone: {
        height: screenHeight/10*1.3,
        maxHeight: screenHeight/10*1.3,
        width: screenWidth,
        paddingLeft: 5,
        paddingRight: 5,
        marginTop: 10,
        marginBottom: 10
    },
    EffectButton: {
        height: (screenHeight/10*1.3),
        width: (screenHeight/10*1),
        backgroundColor: 'black',
        justifyContent:'flex-start',
        alignItems:'center',
        marginRight: 5,
        borderRadius: 10
    }
})