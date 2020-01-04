export function getImageGroup(jsonObject, type){
    return jsonObject?.nuds?.digRep?.["mets:fileSec"]?.["mets:fileGrp"]?.find(grp => grp._attributes.USE === type);
}

export function getImageUrl(image, type){
    return image?.["mets:file"]?.find(file => file._attributes.USE === type)?.["mets:FLocat"]?._attributes?.["xlink:href"];
}

export function getObverseImageUrl(jsonObject, type){
    return getImageUrl(getImageGroup(jsonObject, 'obverse'), type);
}

export function getReverseImageUrl(jsonObject, type){
    return getImageUrl(getImageGroup(jsonObject, 'reverse'), type);
}
