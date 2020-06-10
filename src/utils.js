exports.deleteByUUID = (uuid, listOfDevelopers) => {
  return listOfDevelopers.filter(dev => {
    return dev.id != uuid
  })
}

exports.updateByUUID = (uuid, devData,listOfDevelopers) => {
  return listOfDevelopers.map(dev =>{
    if(dev.id == uuid){
      return {...dev, ...devData}
    }else{
      return dev
    }
  })
}
