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
    let newArr = []
    console.log(arr)

    arr.forEach(word => {
      if (word === 'the'|| word === 'a'|| word === 'an' || word=== 'but' || word==='of' || word ==='and' || word === 'for' || word === 'at' || word ==='by' || word ==='from'){
        newArr.push(word)
          }
      else {
        newArr.push(Formatter.capitalize(word))
      }
    })
    
    return Formatter.capitalize(newArr.join(" "))
  }
}
    // arr.map(x => {
    //   if (x ==='the'||'a'||'an' || 'but' || 'of' || 'and' || 'for' || 'at' || 'by' || 'from'){
    //     
    //   }
    //   else {
    //     
    //   }
      // let g = newArr.join(" ")
      // let finarr = Formatter.capitalize(g)
      // console.log(finarr) 
//     })
//   }
// }

console.log(Formatter.capitalize('fat'))
Formatter.titleize('a fat fucking asshole') 