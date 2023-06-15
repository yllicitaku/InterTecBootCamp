import { Button, ButtonProps, styled } from "@mui/material";
import { orange } from "@mui/material/colors";

export const server_ip = "http://192.168.31.70:3300";

export const pages = ["vehicles", "offers", "about"];
export const settings = ["Dashboard", "Settings", "Signin", "Logout"];
export const ColorButton = styled(Button)<ButtonProps>(() => ({
    backgroundColor: orange[500],
    "&:hover": {
        backgroundColor: orange[700],
    },
}));
