class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(str){
    str = str.replace(/[^a-z0-9áéíóúñü' \.,_-]/gim,"");
    return str.trim()
  }

  static titleize(str){
    let arr = str.split(" ")
    let newArr =[]
    console.log(arr)
    arr.map(x => {
      if (x==='the'||'a'||'an' || 'but' || 'of' || 'and' || 'for' || 'at' || 'by' || 'from'){
        newArr.push(x)
      }
      else {
        newArr.push(Formatter.capitalize(x))
      }
      let g = newArr.join(" ")
      let finarr = Formatter.capitalize(g)
      return finarr
    })
  }
}