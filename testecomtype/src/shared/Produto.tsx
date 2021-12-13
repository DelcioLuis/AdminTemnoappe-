import * as React from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import Title from './Title';
import api from '../services/api';
import ProgressCircle from "../components/ProgressCircle";




export default function ValidationTextFields() {

  const navigate = useNavigate();

  const [nome, setNome] = React.useState<string>("");
  const [url, setURL] = React.useState<string>("");
  const [descricao, setDescricao] = React.useState<string>("");

  const [error, setError] = React.useState<boolean>(false)
  const [open, setOpen] = React.useState(false)

  async function Cadastrar(e:any){

    e.preventDefault()
    if(!nome || !url || !descricao){
      setError(true)
      return
    }

    const data = {
      "nome":nome,
      "url":url,
      "descricao":descricao
    }

    setOpen(true)
    try{
      const response = await api.post("/api/produtos", data)

      alert(response?.data?.message)
      navigate("/")
    }catch(errors){alert(errors)}
    
  }


  return (
    <React.Fragment>
      <ProgressCircle open={true} />
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '75ch' },
          }}
          noValidate
          autoComplete="off"
        >
        <form>
            <Title>Cadastrar novo Produto</Title>
            <div className="input">
                <TextField
                    required
                    id="outlined-required"
                    label="Nome do produto"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    error={nome?.trim()?.length < 1 && error==true} 
                />
            </div>

            <div className="input">
                <TextField
                    required
                    id="outlined-required"
                    label="URL da imagem"
                    value={url}
                    onChange={e => setURL(e.target.value)}
                    error={url?.trim()?.length < 1 && error==true} 
                />
            </div>

            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Descrição do produto"
                    multiline
                    rows="5"
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)}
                    error={descricao?.trim()?.length < 1 && error==true} 
                />
            </div>
        </form>

        <div className="button">
          <Button 
            type='submit'
            onClick={e=> Cadastrar(e)}
            variant="contained" 
            color="success"
            sx={{marginTop:'15px', width:'100px', borderRadius:2}}
            endIcon={<SaveIcon />}>
            Salvar
          </Button>


        </div>
          
        </Box>
    </React.Fragment>
  );
}