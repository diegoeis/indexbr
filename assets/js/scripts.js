(function(){

  const apiSelic = "https://cors-anywhere.herokuapp.com/www.bloomberg.com/markets/chart/data/1M/BZSTSETA:IND"
  const apiIpcaY = "https://cors-anywhere.herokuapp.com/www.bloomberg.com/markets/chart/data/1M/BZPIIPCY:IND"
  const apiIpcaM = "https://cors-anywhere.herokuapp.com/www.bloomberg.com/markets/chart/data/1M/BZPIIPCM:IND"
  const apiIbov = "https://cors-anywhere.herokuapp.com/www.bloomberg.com/markets/chart/data/1M/IBOV:IND"
  const apiDollar = "https://cors-anywhere.herokuapp.com/www.bloomberg.com/markets/chart/data/1M/BRL:CUR"
  const apiEur = "https://cors-anywhere.herokuapp.com/www.bloomberg.com/markets/chart/data/1M/EURBRL:CUR"

  init = () => {
    handleData(apiSelic)
    handleData(apiIpcaY)
    handleData(apiIbov)
    handleData(apiDollar)
    handleData(apiEur)
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
        
        case data=apiDollar :
          showData(response.data.data_values, 'dollar')
          break;
        
        case data=apiEur :
          showData(response.data.data_values, 'euro')
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
