app.component("comentario-usuario",{
    template:
    /*html*/
    `   <div id ="seccionComentar">
            <input type="text" placeholder="Ingrese el comentario" id="dejarComentario" v-model="comentario">  
            <button @click="onSubmit" type="submit" id="btnComentar"><span id="btnComentar">Comentar</span></button>
        </div>`,
        data(){

            return{
                comentario: "",
                puntuacion:null,
            }
        },
methods:{
    onSubmit(){
        let comentarioCargar={
            comentario:this.comentario,
        }
        if (this.comentario!=="")
        {
            this.$emit("comentario-submitted",comentarioCargar)
            this.comentario=""
        }
        else
        {
            alert("No puede ingresar un comentario vacio")
        }       
    },
   
}
})