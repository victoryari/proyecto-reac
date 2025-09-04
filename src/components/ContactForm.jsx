import React,{useState} from "react";

 
const ContactForm = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        celular: "",
        categoria: "",
        presupuesto: ""
    });
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));

    };

const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    let message = [];

    //validacion del nombre
    if (!formData.nombre) {
        isValid = false;
        message.push("El nombre es obligatorio.");
    }

    //validacion del correo
    if (!formData.correo) {
        isValid = false;
        message.push("El correo es obligatorio.");
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
        isValid = false;
        message.push("El correo no es válido.");
    }

    //validacion del celular
    if (!formData.celular) {
        isValid = false;
        message.push("El número celular es obligatorio.");
    } else if (!/^\d{9}$/.test(formData.celular)) {
        isValid = false;
        message.push("El número celular debe tener 9 dígitos.");
    }

    //validacion de la categoria
    if (!formData.categoria) {
        isValid = false;
        message.push("La categoría es obligatoria.");
    }

    //validacion del presupuesto
    if (!formData.presupuesto) {
        isValid = false;
        message.push("El presupuesto es obligatorio.");
    } else if (formData.presupuesto <= 0) {
        isValid = false;
        message.push("El presupuesto debe ser mayor a 0.");
    }

    if (isValid) {
        setMessage("Formulario enviado con éxito.");
        setIsError(false);
    } else {
        setMessage(message.join(" "));
        setIsError(true);
    }
};


return (
    <>
        <section className="contact-form-section" id="contacto">
            <h3>Contáctanos para tu Próximo Juego</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre Completo:</label>
                <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />

                <label htmlFor="correo">Correo de Contacto:</label>
                <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleChange} required />

                <label htmlFor="celular">Número Celular:</label>
                <input type="tel" id="celular" name="celular" required />

                <label htmlFor="categoria">Categoría de Juego:</label>
                <select id="categoria" name="categoria">
                    <option value="">Selecciona una categoría</option>
                    <option value="accion">Acción</option>
                    <option value="aventura">Aventura</option>
                    <option value="rpg">RPG</option>
                    <option value="estrategia">Estrategia</option>
                    <option value="deportes">Deportes</option>
                    <option value="simulacion">Simulación</option>
                </select>

                <label htmlFor="presupuesto">Presupuesto Máximo:</label>
                <input type="number" id="presupuesto" name="presupuesto" min="0" step="10" placeholder="Ej: 100" required />

                <button type="submit">Enviar Consulta</button>
            </form>
            <p id="formMessage" className="form-message"></p>
        </section>
    </>
);
}

export default ContactForm;


