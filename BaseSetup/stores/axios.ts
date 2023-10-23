import { defineStore } from 'pinia'
import { useUserStore } from './user'

import axios from  'axios'
export const useAxiosStore = defineStore('Axios', {
    state: () => ({
        userStore : useUserStore() ,
        AllArtWork : [] ,
        AllEventArtWork: [],
        AllArtWorkByUser : [],
        AllEventArtWorkByUser : [],
        SingleArtWork : {} ,
        SingleEventArtWork : {},
    }),
    getters : {

    },
    actions: {
        async CreateArtWork (body : art){
            await axios.post('http://localhost:3000/api/ArtVenture/artworks' , body , {
                headers : {
                    Authorization : `Bearer ${this.userStore.TokenFromLogin}`
                }
            }).then(res => console.log(res))
        },
        async GetAllArtWork (){
            await axios.get('http://localhost:3000/api/ArtVenture/artworks' , {
                headers : {
                    Authorization : `Bearer ${this.userStore.TokenFromLogin}`
                }
            }).then(res => this.AllArtWork = res.data)
        },
        async GetAllArtWorkByUser(){
            await axios.get('http://localhost:3000/api/ArtVenture/artworks/userArtwork' , {
                headers : {
                    Authorization : `Bearer ${this.userStore.TokenFromLogin}`
                }
            }).then(res => this.AllArtWorkByUser = res.data)
        },
        async GetSingleArtWork (id : number){
            await axios.get(`http://localhost:3000/api/ArtVenture/artworks/${id}` ,{
                headers : {
                    Authorization : `Bearer ${this.userStore.TokenFromLogin}`
                }
            }).then((res) => this.SingleArtWork = res.data)
        },
        async UpdateArtWork(id : number , body : art){
            await axios.patch(`http://localhost:3000/api/ArtVenture/artworks/${id}` ,body,{
                headers : {
                    Authorization : `Bearer ${this.userStore.TokenFromLogin}`
                }
            })
        },
        async DeleteArtWork(id : number ){
            await axios.delete(`http://localhost:3000/api/ArtVenture/artworks/${id}` ,{
                headers : {
                    Authorization : `Bearer ${this.userStore.TokenFromLogin}`
                }
            })
        },
        async CreateEventArtWork(body : event){
            await axios.post('http://localhost:3000/api/ArtVenture/events' , body , {
                headers : {
                    Authorization : `Bearer ${this.userStore.TokenFromLogin}`
                }
            }).then(res => console.log(res))
        },
        async GetAllEventArtWork(){
            await axios.get('http://localhost:3000/api/ArtVenture/events' , {
                headers : {
                    Authorization : `Bearer ${this.userStore.TokenFromLogin}`
                }
            }).then(res => this.AllEventArtWork = res.data)
        },
        async GetAllEventArtWorkByUser(){
            await axios.get('http://localhost:3000/api/ArtVenture/events/user' , {
                headers : {
                    Authorization : `Bearer ${this.userStore.TokenFromLogin}`
                }
            }).then(res => this.AllEventArtWorkByUser = res.data)
        },
        async GetSingleEventArtWork(id : number){
            await axios.get(`http://localhost:3000/api/ArtVenture/artworks/${id}` ,{
                headers : {
                    Authorization : `Bearer ${this.userStore.TokenFromLogin}`
                }
            }).then((res) => this.SingleEventArtWork = res.data)
        },
        async UpdateEventArtWork (id : number , body : event){
            await axios.patch(`http://localhost:3000/api/ArtVenture/events/${id}` ,body,{
                headers : {
                    Authorization : `Bearer ${this.userStore.TokenFromLogin}`
                }
            })
        },
        async DeleteEventArtWork(id : number){
            await axios.delete(`http://localhost:3000/api/ArtVenture/events/${id}` ,{
                headers : {
                    Authorization : `Bearer ${this.userStore.TokenFromLogin}`
                }
            })
        },
    },
})


interface art {
        title : string ,
        price : string , 
        info : string 
}
interface event {
    title : string ,
    price : string , 
    info : string ,
    date : string ,
    location : string ,
}