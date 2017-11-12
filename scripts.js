(function(){

  const apiSelic = "https://www.bloomberg.com/markets/chart/data/1M/BZSTSETA:IND"
  const apiIpcaY = "https://www.bloomberg.com/markets/chart/data/1M/BZPIIPCY:IND"
  const apiIpcaM = "https://www.bloomberg.com/markets/chart/data/1M/BZPIIPCM:IND"
  const apiIbov = "https://www.bloomberg.com/markets/chart/data/1M/IBOV:IND"

  init = () => {
    handleData(apiSelic)
    handleData(apiIpcaY)
    handleData(apiIbov)
  }

  handleData = (data) => {
    axios.get(data)
    .then(response => {
      switch (data) {
        case data=apiSelic :
          showData(response.data.data_values, 'selic')
          break;
        
        case data=apiIpcaY :
          showData(response.data.data_values, 'ipca')
          break;
        
        case data=apiIbov :
          showData(response.data.data_values, 'ibov')
          break;
      }
    })
    .catch(response => console.error(response))
  }

  showData = (info, className) => {
    var infoData = info[info.length -1][1]
    $('.eco-'+className+' .eco-index-number').html(infoData)
  }
  
  init()
  
})()
