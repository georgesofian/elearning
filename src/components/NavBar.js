import React, {useState} from 'react';
import Logo from '../assets/feaalogo.png';
import {Link} from "react-router-dom"
import ReorderIcon from '@mui/icons-material/Reorder';
import LoginIcon from '@mui/icons-material/Login';
import "../styles/NavBar.css"
import Menu from '@mui/material/Menu';
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { InputLabel, FormControl } from "@mui/material";
import { makeStyles } from '@mui/styles';



function NavBar() {

    const [openLinks, setOpenLinks] = useState(false) 
    
    const toogleNavBar = () =>{
        setOpenLinks(!openLinks);
    }
    
    const [dropdown, setDropdown] = useState(false);


    const [anchorEl, setAnchorEl] = useState(false) ;
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    }; 


    const inputLabelStyle = {
        color: "white",
        width: "70px"
      };

    const useStyles = makeStyles({
        select: {
            '&:before': {
                borderColor: 'white',
            },
            '&:after': {
                borderColor: 'white',
            },
            '&:not(.Mui-disabled):hover::before': {
                borderColor: 'white',
            },
            width:'100px',
            border: 'none',
        },
        icon: {
            fill: 'white',
        },
        root: {
            color: 'white',
        },
    })
    const classes = useStyles()


    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open":"close"}>
                <img src={Logo}/>
                <div className="hiddenLinks">
                <Link to="/">Home</Link>
                <Link to="/">
                <FormControl style={inputLabelStyle}>
                    <InputLabel style={inputLabelStyle}>FEAA</InputLabel>
                    <Select 
                        className={classes.select}
                        inputProps={{
                            classes: {
                                icon: classes.icon,
                                root: classes.root,
                                select: classes.select,
                            },
                        }}
                        fullWidth
                        value={age}
                        label="Test"
                        onChange={handleChange}
                        MenuProps={{
                        PaperProps: {
                            sx: {
                            bgcolor: "white",
                            "& .MuiMenuItem-root": {
                                padding: 2
                            }
                            }
                        }
                        }}
                    >
                        <MenuItem onClick={()=> window.open("http://portal.feaa.uaic.ro/licenta/Pages/default.aspx","_blank")}>Studii Licenț</MenuItem>
                        <MenuItem onClick={()=> window.open("http://portal.feaa.uaic.ro/master/Pages/default.aspx","_blank")}>Studii Master</MenuItem>
                        <MenuItem onClick={()=> window.open("https://www.feaa.uaic.ro/","_blank")}>Website</MenuItem>
                        <MenuItem onClick={()=> window.open("https://info.lse.ac.uk/current-students/Assets/Articles/10-best-apps-for-students","_blank")}>Aplicații Student</MenuItem>
                    </Select>
                </FormControl>
                </Link>
                <Link to="/">
                <FormControl style={inputLabelStyle}>
                    <InputLabel style={inputLabelStyle}>Etica</InputLabel>
                    <Select 
                        className={classes.select}
                        inputProps={{
                            classes: {
                                icon: classes.icon,
                                root: classes.root,
                                select: classes.select,
                            },
                        }}
                        fullWidth
                        value={age}
                        label="Test"
                        onChange={handleChange}
                        MenuProps={{
                        PaperProps: {
                            sx: {
                            bgcolor: "white",
                            "& .MuiMenuItem-root": {
                                padding: 2
                            }
                            }
                        }
                        }}
                    >
                        <MenuItem onClick={()=> window.open("https://portal.feaa.uaic.ro/Pages/Informatii-IT.aspx#gdpr","_blank")}>Politica de confidențialitate a datelor personale</MenuItem>
                        <MenuItem onClick={()=> window.open("https://elearning.feaa.uaic.ro/pluginfile.php/128544/mod_resource/content/0/Termeni%20si%20conditii%20de%20utilizare%20a%20platformei%20elearningFEAA%20v3.0.pdf","_blank")}>Termeni și condiții de utilizare e-learning</MenuItem>
                        <MenuItem onClick={()=> window.open("https://www.feaa.uaic.ro/regulamente-interne/","_blank")}>Regulamente interne</MenuItem>
                    </Select>
                </FormControl>
                </Link>
                <Link to="/materiale">Materiale didactice</Link>
                <Link to="/orare">Orare</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">
                    <button>
                        <LoginIcon />
                    </button>
                </Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/">
                <FormControl style={inputLabelStyle}>
                    <InputLabel style={inputLabelStyle}>FEAA</InputLabel>
                    <Select 
                        className={classes.select}
                        inputProps={{
                            classes: {
                                icon: classes.icon,
                                root: classes.root,
                                select: classes.select,
                            },
                        }}
                        fullWidth
                        value={age}
                        label="Test"
                        onChange={handleChange}
                        MenuProps={{
                        PaperProps: {
                            sx: {
                            bgcolor: "white",
                            "& .MuiMenuItem-root": {
                                padding: 2
                            }
                            }
                        }
                        }}
                    >
                        <MenuItem onClick={()=> window.open("http://portal.feaa.uaic.ro/licenta/Pages/default.aspx","_blank")}>Studii Licenț</MenuItem>
                        <MenuItem onClick={()=> window.open("http://portal.feaa.uaic.ro/master/Pages/default.aspx","_blank")}>Studii Master</MenuItem>
                        <MenuItem onClick={()=> window.open("https://www.feaa.uaic.ro/","_blank")}>Website</MenuItem>
                        <MenuItem onClick={()=> window.open("https://info.lse.ac.uk/current-students/Assets/Articles/10-best-apps-for-students","_blank")}>Aplicații Student</MenuItem>
                    </Select>
                </FormControl>
                </Link>
                <Link to="/">
                <FormControl style={inputLabelStyle}>
                    <InputLabel style={inputLabelStyle}>Etica</InputLabel>
                    <Select 
                        className={classes.select}
                        inputProps={{
                            classes: {
                                icon: classes.icon,
                                root: classes.root,
                                select: classes.select,
                            },
                        }}
                        fullWidth
                        value={age}
                        label="Test"
                        onChange={handleChange}
                        MenuProps={{
                        PaperProps: {
                            sx: {
                            bgcolor: "white",
                            "& .MuiMenuItem-root": {
                                padding: 2
                            }
                            }
                        }
                        }}
                    >
                        <MenuItem onClick={()=> window.open("https://portal.feaa.uaic.ro/Pages/Informatii-IT.aspx#gdpr","_blank")}>Politica de confidențialitate a datelor personale</MenuItem>
                        <MenuItem onClick={()=> window.open("https://elearning.feaa.uaic.ro/pluginfile.php/128544/mod_resource/content/0/Termeni%20si%20conditii%20de%20utilizare%20a%20platformei%20elearningFEAA%20v3.0.pdf","_blank")}>Termeni și condiții de utilizare e-learning</MenuItem>
                        <MenuItem onClick={()=> window.open("https://www.feaa.uaic.ro/regulamente-interne/","_blank")}>Regulamente interne</MenuItem>
                    </Select>
                </FormControl>
                </Link>
                <Link to="/materiale">Materiale didactice</Link>
                <Link to="/orare">Orare</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">
                    <button>
                        <LoginIcon />
                    </button>
                </Link>
                <button className="hiddenButton" onClick={toogleNavBar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    )
}

export default NavBar
