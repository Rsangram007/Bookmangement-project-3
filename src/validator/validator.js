const mongoose = require('mongoose')


// VALIDATION FUNCTION FOR DIFFERENT ATTRIBUTES-----
const isValid = function (value) {
    if (typeof value === "string" && value.trim().length == 0) return false
    return true
}

// VALIDATION FUNCTION FOR TITLE----
const isTitleValid= function(value){
    if (value == "Mr" ||value =="Miss" ||value =="Mrs") return true
    return false
}

// VALIDATION FUNCTION FOR PHONE NO.-----
const isPhoneValid = function (value){
    if(! /^[6-9]\d{9}$/.test(value)){
        return false
    }
    return true
}

// VALIDATION FUNCTION FOR EMAIL-----
const isEmailValid = function(value){
    const email = emailValidator.validate(value)
    if(!email) return false
    return true
}
module.exports={isValid,isTitleValid,isPhoneValid,isEmailValid}