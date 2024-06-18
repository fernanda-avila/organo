import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './formulario.css'

const Formulario = (props) => {


    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o Card do colaborador</h2>

                {/* input nome */}
                <CampoTexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite seu nome"
                valor={nome}
                aoAlterado={valor => setNome(valor)} 
                />

                {/* input cargo */}
                <CampoTexto 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite seu cargo"
                valor={cargo} 
                aoAlterado={valor => setCargo(valor)}
                />

                {/* input imagem */}
                <CampoTexto 
                label="Imagem" 
                placeholder="Digite o endereço da imagem"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />

                {/* select time */}
                <ListaSuspensa  
                  obrigatorio={true}
                  label="Time" 
                  itens={props.times}
                  valor={time}
                  aoAlterado={valor => setTime(valor)}
                />

                {/* botão */}
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )

}

export default Formulario;