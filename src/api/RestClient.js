import fetch from "isomorphic-fetch"

export default class RestClient {
  baseUrl

  constructor(baseUrl){
    this.baseUrl = baseUrl
  }

  get(path){
    const url = `${this.baseUrl}/${path}`
    return fetch(url)
      .then(function(response) {
        return response.json()
      }).then((result)=>{
        console.log(`GET ${url}`)
        //console.log(result)
        return result
      })
  }

  post(path, data){
    return new Promise(resolve => setTimeout(()=>{
      console.log(`POST ${this.baseUrl}/${path}`)
      console.log(data)
      resolve(data)
    }, 1000))
  }

  // put(path, data){
  //   const url = `${this.baseUrl}/${path}`
  //   return fetch(url, {
  //     method: "PUT",
  //     body: data
  //   }).then(function(response) {
  //     return response.json()
  //   }).then((result)=>{
  //     console.log(`PUT ${url}`)
  //     console.log(result)
  //     return result
  //   })
  // }

  delete(path){
    return new Promise(resolve => setTimeout(()=>{
      console.log(`DELETE ${this.baseUrl}/${path}`)
      resolve(true)
    }, 1000))
  }
}
