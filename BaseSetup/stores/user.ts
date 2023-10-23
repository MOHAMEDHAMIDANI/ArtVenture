import { defineStore } from 'pinia'
import axios from  'axios'
interface art {
    title : string ,
    price : string , 
    info : string ,
    _id? : string ,
}
interface event {
_id? : string ,
title : string ,
price? : string , 
info : string ,
Date : string ,
location : string ,
}
export const useUserStore = defineStore('User', {
    state: () => ({
        TokenFromRegister:ref('') as Ref<string>,
        TokenFromLogin:ref('') as Ref<string>,
        username : ref('') as Ref<string>,
        photo : ref('') as Ref<string>,
        AllArtWork : [] as art[] ,
        AllEventArtWork: [] as event[],
        AllArtWorkByUser : [] as art[],
        AllEventArtWorkByUser : [] as event[],
        SingleArtWork : {} as art,
        SingleEventArtWork : {} as event,
    }),
    getters : {

    },
    actions: {
        async CreateArtWork (body : art){
            await axios.post('http://localhost:3000/api/ArtVenture/artworks' , body , {
                headers : {
                    Authorization : `Bearer ${this.TokenFromLogin}`
                }
            }).then(res => console.log(res))
        },
        async GetAllArtWork (){
            await axios.get('http://localhost:3000/api/ArtVenture/artworks' , {
                headers : {
                    Authorization : `Bearer ${this.TokenFromLogin}`
                }
            }).then((res) => {
                console.log(res)
                this.AllArtWork = res.data.arts
            } )
        },
        async GetAllArtWorkByUser(){
            await axios.get('http://localhost:3000/api/ArtVenture/artworks/userArtwork' , {
                headers : {
                    Authorization : `Bearer ${this.TokenFromLogin}`
                }
            }).then((res) =>{
                console.log(res)
                this.AllArtWorkByUser = res.data.arts
            })
        },
        async GetSingleArtWork (id : string){
            await axios.get(`http://localhost:3000/api/ArtVenture/artworks/${id}` ,{
                headers : {
                    Authorization : `Bearer ${this.TokenFromLogin}`
                }
            }).then((res) => {
                console.log(res)
                this.SingleArtWork = res.data})
        },
        async UpdateArtWork(id : string , body : art){
            await axios.patch(`http://localhost:3000/api/ArtVenture/artworks/${id}` ,body,{
                headers : {
                    Authorization : `Bearer ${this.TokenFromLogin}`
                }
            }).then(res => console.log(res))
        },
        async DeleteArtWork(id : string ){
            await axios.delete(`http://localhost:3000/api/ArtVenture/artworks/${id}` ,{
                headers : {
                    Authorization : `Bearer ${this.TokenFromLogin}`
                }
            }).then((res) => {
                console.log(res)})
        },
        async CreateEventArtWork(body : event){
            await axios.post('http://localhost:3000/api/ArtVenture/events' , body , {
                headers : {
                    Authorization : `Bearer ${this.TokenFromLogin}`
                }
            }).then(res => console.log(res))
        },
        async GetAllEventArtWork(){
            await axios.get('http://localhost:3000/api/ArtVenture/events' , {
                headers : {
                    Authorization : `Bearer ${this.TokenFromLogin}`
                }
            }).then((res ) => {
                console.log(res)
                this.AllEventArtWork = res.data.events
            } )
        },
        async GetAllEventArtWorkByUser(){
            await axios.get('http://localhost:3000/api/ArtVenture/events/user' , {
                headers : {
                    Authorization : `Bearer ${this.TokenFromLogin}`
                }
            }).then((res) => {
                console.log(res)
                this.AllEventArtWorkByUser = res.data.events })
        },
        async GetSingleEventArtWork(id : string){
            await axios.get(`http://localhost:3000/api/ArtVenture/artworks/${id}` ,{
                headers : {
                    Authorization : `Bearer ${this.TokenFromLogin}`
                }
            }).then((res) => {
                console.log(res)
                this.SingleEventArtWork = res.data})
        },
        async UpdateEventArtWork (id : string , body : event){
            await axios.patch(`http://localhost:3000/api/ArtVenture/events/${id}` ,body,{
                headers : {
                    Authorization : `Bearer ${this.TokenFromLogin}`
                }
            }).then((res) => {
                console.log(res)})
        },
        async DeleteEventArtWork(id : string){
            await axios.delete(`http://localhost:3000/api/ArtVenture/events/${id}` ,{
                headers : {
                    Authorization : `Bearer ${this.TokenFromLogin}`
                }
            }).then((res) => {
                console.log(res)})
        },
    },
})