
import React, { useState } from 'react';
import libroRecl from '../img/libroRecl.jpg';

const Footer = () => {
    
    return(
        <>
        <footer>
            <div className="footer-left">
                <img src={libroRecl} alt="Libro de Reclamos" />
                <p>© 2023 GameVerse. Todos los derechos reservados.</p>
                <div className="footer-right">
                    <p>Contacto: info@gameverse.com</p>
                    <p>Teléfono: +1 (555) 123-4567</p>
                </div>
            </div>
        </footer>
        </>
    );
};

        
export default Footer;