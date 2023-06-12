app.component("mostrar-comentario",{
    props:{
        comentarios:{
            type: Array,
            required: true,
        },
        usuarios:{
            type: Array,
            required:true,
        }
    },
    methods:{
        eliminarComentario(indice)
    {
        this.$emit("indice-borrar",indice)
    }
    },
    template:
    /*html*/
    `   
        <dl id="comentarios">
            <dt><b>Juan Perez</b> ¡Wow, esta foto de tokio es impresionante!</dt>
                <br>
            <dt><b>Kathleen J Rennie</b> ¡Wow, esta foto de tokio es impresionante!</dt>
            <dt v-for="comentario, indice in comentarios" id="listaComentarios">
                {{usuarios}}{{comentario.comentario}} <button @click="eliminarComentario(indice)" id="btnBorrar">Eliminar</button>
                <br/>
            </dt>
        </dl>
        
    `
})