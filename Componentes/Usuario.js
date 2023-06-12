app.component('banner-display',{
    /*html*/
    template:  
        `<div class="contenedor1">
            <img src="https://i.imgur.com/Qx8uR89.png" alt="Logo de la Red Social" id="logo">
            <input type="text" id ="usuario" placeholder="Ingrese tu usuario..." v-model="usuario"> 
        </div>`,
    methods:{
        onSubmit()
            {
                let usuarioCargar={
                    usuario:this.usuario,
                }
                this.$emit("usuario-Cargar",usuarioCargar)
                          
            },
           
        }
})  