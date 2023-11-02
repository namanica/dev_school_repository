let object = {
    "r1n": {
        "mkg": {
            "zma": [21, 45, 66, 111],
            "mii": {
                "ltf": [2, 5, 3, 9, 21]
            },
            "fv": [1, 3, 6, 9]
        },
        "rmk": {
            "amr": [50, 50, 100, 150, 250]
        }
    },
    "fik": {
        "er": [592, 92, 32, 13],
        "gp": [12, 34, 116, 29]
    }
};
function getRootProperty(object,number){
for (let property in object){
    let mainProperty = property;
    if (Array.isArray(object[property])==true && object[property].includes(number)==true){
        return property;
    }
    else if (typeof object[property]==="object"){
        let result = getRootProperty(object[property],number);
        if (result != null) return mainProperty;
    }
}

}console.log(getRootProperty(object,250));
