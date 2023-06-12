app.component('product-display',{
    /*html*/
    template:`
    <div class="contenedor11">
            <div class="contenedor2">
                <img :src="fotoPerfil" alt="Foto de perfil" id ="fotoPerfil">
                <div id ="datos">
                    <h1 id="dato">{{nombre}}</h1>
                    <div id="datos2">
                        <p id="info" v-if="email"><b>Email: </b>{{email}}</p>    <!-- el v-if lo esta para que si el hipotetico usuario no carga algun dato, no aparezca el apartado.-->
                        <p id="info" v-if="nacimiento"><b>Fecha de nacimiento: </b>{{nacimiento}}</p> 
                        <p id="info" v-if="telefono"><b>Télefono: </b>{{telefono}}</p>
                        <p id="info" v-if="ciudad"><b>Ciudad: </b>{{ciudad}}</p>
                        <p id="info" v-if="extra">{{extra}}</p>
                    </div>
                </div>
                <button v-on:click="cambiarColor" :class="color" >{{seguir}}</button>    
            </div>   
            <div class="contenedor3">
                <div id="publi">
                    <p id ="fecha">{{tiempo}}</p>
                    <img src="https://i.imgur.com/bq9db41.jpeg" width="10%" id="publicacion">                
                    <div class="conteoLikes">
                        <button id="btnMeGusta"v-on:click="sumarLikes">Me Gusta</button>                  
                        <div class="conteoLikes2">
                            <label id="lblMeGusta">{{likes}}</label>
                            <p id="likes">Likes</p>
                        </div>
                    </div>    
                    <mostrar-comentario :comentarios="comentarios" @indice-borrar="eliminarComentario"></mostrar-comentario>
                    <comentario-usuario @comentario-submitted="agregandoComentario"></comentario-usuario>
                </div>
                <div id="presentacion">
                    <h1 id="presentacion1">Sombre mí</h1>
                    <p id="presentacion2">{{sobreMi}}</p>
                </div>
            </div>          
        </div>              
</div>`,







data(){
    return{
            fotoPerfil:"https://i.imgur.com/99qgQJy_d.webp?maxwidth=760&fidelity=grand",
            nombre: "Jane Done",
            email:"jane_doe@email.com",
            nacimiento:"01/05/1996",
            telefono:"918-936-9595",
            ciudad:"Tokyo, Jápon",
            extra:"Trabajando en Lawn N",
            likes:200,
            tiempo:"Publicado hace una semana",
            publicacion:"https://i.imgur.com/bq9db41.jpeg",
            sobreMi:"¡Hola a todos! Soy Jane, y actualmente vivo en la vibrante y emociante ciudad de Tokio, Japón. Me encanta capturar la esencia de la vida urbana a travéz de mi lente, explorando el contraste entre la arquitectura moderna y las tradiciones centenarias que conviven en esta metrópolis única. Desde rascacielos deslumbrantes y calles bulliciosas hasta templos serenos y jardines tranquilos, encuentro inspiración en cada rincón de esta increíble ciudad.",
            comentarios:[],
            color:"azul",
            seguir:"Seguir",
            usuarios:[],
            assda:[{usu:"",coment:""}]
            
    }
    
},
methods:
    {
        validarUsuario(usuario)
        {
            this.usuarios.push(usuario)
        },
        agregandoComentario(comentario){ 
            this.comentarios.push(comentario)            
        },
        eliminarComentario(indiceDeComentarioABorrar)
        {
            const nuevosComentarios = []
            for(let i=0;i<this.comentarios.length;i++)
            {
                if(indiceDeComentarioABorrar!==i)
                {
                    nuevosComentarios.push(this.comentarios[i])
                }
            }
        this.comentarios=nuevosComentarios
        },
        sumarLikes()
        {
            if(this.likes==200)
            {
                this.likes+=1
            }
            else
            {
                this.likes-=1;
            }
        },
        cambiarColor()
        {
            if(this.color==="azul")
            {
                this.color="blanco"
                this.seguir="Dejar de seguir"
            }
            else
            {
                this.color="azul"
                this.seguir="Seguir"   
            }
           
        } 
    }
    
})
