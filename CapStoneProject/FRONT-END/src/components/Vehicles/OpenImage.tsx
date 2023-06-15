import { Box } from "@mui/material";
import { SettingsMenuType } from "../../types/AllTypes";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    height: "auto",

    // border: "2px solid white",
    boxShadow: 24,
};

export default function OpenImage({ ig }: SettingsMenuType) {
    return (
        <>
            <Box sx={style}>
                <img src={ig} />
            </Box>
        </>
    );
}
