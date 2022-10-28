import { useState } from "react";

const FormularioAlta= (props) =>{
    const estadoInicial = {id: null, category:'',price:'',stocked:true,name:''};
    
    const [usuario, setUsuario] = useState(estadoInicial);

//  el handleInputChange sirve para guardar datos en memoria
    const handleInputChange = (event) =>{
        
        setUsuario({
            ...usuario,[event.target.name] : event.target.value
        });  
    }   

    const guardarDatos=(event)=>{
        event.preventDefault();
        console.log(usuario);

        if (!usuario.category || !usuario.price || !usuario.stocked || !usuario.name) return //nuevo

        props.addUsuario(usuario);
        setUsuario(estadoInicial) //nuevo
    }

    return (
        <section className="container">
            <form onSubmit={guardarDatos}>
                <label for="">Categoria</label>
                <input type="text" placeholder="Nombre Real"  onChange={handleInputChange} name='category' value={usuario.category} required/>  
                <label for="">Precio</label>
                <input type="text" placeholder="Nombre Superheroe"  onChange={handleInputChange} name='price' value={usuario.price} required/>
                <label for="">stock</label>
                <select placeholder="Edad"  onChange={handleInputChange} name='stocked' value={usuario.stocked} required>
                    <option value={true}>Si quedan</option>
                    <option value={false}>NO quedan</option>
                </select>
                <label for="">Nombre</label>
                <input type="text" placeholder="Ciudad"  onChange={handleInputChange} name='name' value={usuario.name} required/>
                <input type="submit" value="enviar" /> 
            </form>
            
        </section>
    )
};

export default FormularioAlta;