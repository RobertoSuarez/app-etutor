
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

// useSearchPage esta enfocado a hacer una busqueda de pagina en la aplicación
// esto debe retornar un array con todas las paginas encontradas en base 
// al input que nos pasaran 
export const useSearchPage = (input = '') => {

    const appPages = ['Cerrar sesión', 'Configuraciones', 'Home', 'Todos los cursos', 'Mis avances', 'Contactos']

    const [pages, setPages] = useState([])

    const searchPages = () => {

        const result = appPages.filter(p => {
            if (input === '') return false
            return p.includes(input)
        })

        return result
    }

    useEffect(() => {
        const filter = searchPages()
        setPages(filter)

    }, [input])

    return {
        pages,
    }
}
