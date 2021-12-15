import * as React from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';
import Title from './Title';
import api from '../services/api';




export default function ValidationTextFields() {

  const ID = localStorage.getItem("ID");

  const navigate = useNavigate();

  const [nome, setNome] = React.useState<string>("");
  const [url, setURL] = React.useState<string>("");
  const [descricao, setDescricao] = React.useState<string>("");
  const [id, setID] = React.useState<string>("");

  const [error, setError] = React.useState<boolean>(false)

  React.useEffect(() => {

    

    if(ID)GetProduto(ID)
    

    
  },[ID] )

  async function GetProduto(id:any) {

    try{
      const produto = await api.get(`/api/produto/${ID}`)

      //alert(produto?.data?.message)
      setNome(produto?.data?.value[0]?.nome);
      setURL(produto?.data?.value[0]?.foto);
      setDescricao(produto?.data?.value[0]?.descricao);
      //localStorage.clear()
      
    }catch(errors){alert(errors)}
    
  }

  async function Cadastrar(e:any){

    e.preventDefault()

    const ID = localStorage.getItem("ID");

    if(!nome || !url || !descricao){
      setError(true)
      return
    }

    const data = {
      "nome":nome,
      "url":url,
      "descricao":descricao
    }

    try{
      const response = await api.put(`/api/produtos/${ID}`, data)

      alert(response?.data?.message)
      localStorage.clear()
      navigate("/")
    }catch(errors){alert(errors)}
    
  }

  async function Deletar(e:any){

    e.preventDefault()
    const ID = localStorage.getItem("ID");

    try{
      const response = await api.delete(`/api/produtos/${ID}`)

      //alert(response?.data?.message);
      localStorage.clear();
      navigate("/")
    }catch(errors){alert(errors)}
    
  }

  async function Clear(e:any){
    e.preventDefault();

    localStorage.clear();

    navigate("/")
  }


  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '75ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <form>
        <Title>Atualizar Produto</Title>
        <p>{`#id: ${ID}`}</p>
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
        onClick={e => Cadastrar(e)}
        variant="contained" 
        color="success"
        sx={{marginTop:'15px', width:'100px', borderRadius:2}}
        endIcon={<SaveIcon />}>
        Salvar
      </Button>

      <div>
        <Button 
          onClick={e => Deletar(e)}
          variant="contained" 
          color="error"
          sx={{marginTop:'15px', width:'100px', borderRadius:2, backgroundColor:"red", marginRight:5}}
          endIcon={<DeleteIcon />}>
          Excluir
        </Button>

        <Button 
          onClick={e => Clear(e)}
          variant="contained" 
          color='inherit'
          sx={{marginTop:'15px', width:'110px', borderRadius:2}}
          endIcon={<CancelIcon />}>
          Cancelar
        </Button>
      </div>
    </div>
      
    </Box>
  );
}