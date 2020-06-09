exports.deleteByUUID = (uuid, listOfDevelopers) => {
  return listOfDevelopers.splice(listOfDevelopers.findIndex((dev) => (dev.id)),1)
}

exports.updateByUUID = (uuid, devData,listOfDevelopers) => {
  console.log('list= ',listOfDevelopers, 'devdata =',devData)
  return listOfDevelopers.map(dev =>{
    if(dev.id == uuid){
      return {...dev, ...devData}
    }else{
      return dev
    }
  })
}
