import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ColorButton, pages, settings } from "../../utils/Utilities";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useAppSelector, useAppDispatch } from "../../redux-toolkit/hooks";
// import {totalOrder} from '../../redux-toolkit/OrderFormSlice';
import { orderform1, getOrdersAsync } from "../../redux-toolkit/OrderFormSlice";

const Navigation = () => {
    let navigate = useNavigate();
    const dispatch = useAppDispatch();
    const totalOrders = useAppSelector(orderform1);

    useEffect(() => {
        dispatch(getOrdersAsync());
    }, [dispatch, totalOrders]);

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" style={{ background: "#121212" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <IconButton
                        onClick={() => {
                            navigate("/");
                        }}
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    >
                        <svg width="41" height="34" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M40.9264 16.503C40.9264 12.1262 39.2418 7.92852 36.2433 4.83361C33.2447 1.73871 29.1778 5.73957e-07 24.9372 0C20.6966 -5.73956e-07 16.6297 1.73871 13.6311 4.83361C10.6326 7.92852 8.94797 12.1262 8.94797 16.503H13.9447C15.6004 16.503 16.8917 15.0709 17.4982 13.4806C17.8964 12.4366 18.5006 11.4771 19.2841 10.6683C20.7834 9.12084 22.8169 8.25149 24.9372 8.25149C27.0575 8.25149 29.091 9.12084 30.5903 10.6683C32.0896 12.2157 32.9318 14.3146 32.9318 16.503H40.9264Z"
                                fill="url(#paint0_linear_1_7)"
                            />
                            <path
                                d="M31.7155 22.8184C32.5191 20.8161 32.9327 18.6701 32.9327 16.503H40.9264C40.9264 25.6173 33.7678 33.0059 24.9372 33.0059C23.5543 33.0059 22.2123 32.8247 20.9325 32.4841C21.6566 32.2915 22.3683 32.0463 23.0622 31.7497C25.0021 30.9204 26.7648 29.7048 28.2495 28.1724C29.7343 26.6399 30.9121 24.8206 31.7155 22.8184Z"
                                fill="#FBCF8E"
                            />
                            <path
                                d="M0.954224 16.5029C0.954223 18.6702 1.3678 20.8162 2.17133 22.8184C2.97487 24.8207 4.15262 26.6399 5.63736 28.1724C7.12209 29.7047 8.88473 30.9204 10.8246 31.7498C12.7645 32.5791 14.8437 33.0059 16.9435 33.0059C19.0431 33.0059 21.1223 32.5791 23.0622 31.7498C25.0021 30.9204 26.7648 29.7047 28.2495 28.1724C29.7343 26.6399 30.912 24.8207 31.7155 22.8184C32.5191 20.8162 32.9327 18.6702 32.9327 16.5029H27.936C26.2802 16.5029 24.989 17.9351 24.3825 19.5252C24.3653 19.5705 24.3475 19.6156 24.3295 19.6607C23.9277 20.6618 23.3389 21.5715 22.5964 22.3377C21.8541 23.1038 20.9728 23.7117 20.0028 24.1264C19.0329 24.5411 17.9934 24.7545 16.9435 24.7545C15.8936 24.7545 14.854 24.5411 13.8841 24.1264C12.9141 23.7117 12.0328 23.1038 11.2904 22.3377C10.548 21.5715 9.95915 20.6618 9.55739 19.6607C9.15562 18.6595 8.94883 17.5866 8.94883 16.5029H0.954224Z"
                                fill="url(#paint1_linear_1_7)"
                            />
                            <path
                                d="M0.955691 16.503C0.955691 7.38861 8.11429 0 16.9448 0C18.3275 0 19.669 0.181114 20.9487 0.521625C18.2029 1.25168 15.6701 2.72912 13.631 4.83363C10.6324 7.9285 8.94787 12.1262 8.94787 16.503H0.955691Z"
                                fill="#73E5E2"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_1_7"
                                    x1="40.9264"
                                    y1="8.25149"
                                    x2="8.94797"
                                    y2="8.25149"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#73E5E2" />
                                    <stop offset="1" stopColor="#394F87" />
                                </linearGradient>
                                <linearGradient
                                    id="paint1_linear_1_7"
                                    x1="0.954225"
                                    y1="24.7545"
                                    x2="32.9327"
                                    y2="24.7545"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#FBDC8E" />
                                    <stop offset="1" stopColor="#FB958E" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "'Space Grotesk', sans-serif;",
                            fontWeight: 700,
                            letterSpacing: ".1rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        CAPSTONE
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page: any) => (
                                <MenuItem
                                    key={page}
                                    onClick={() => {
                                        navigate(`/${page}`);
                                        handleCloseNavMenu();
                                    }}
                                >
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        // align="center"
                        noWrap
                        sx={{
                            ml: "2rem",
                            // mx: "auto",
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "'Space Grotesk', sans-serif;",
                            fontWeight: 700,
                            letterSpacing: ".1rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        CAPSTONE
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        {pages.map((page: any) => (
                            <Button key={page} onClick={() => navigate(`/${page}`)} sx={{ my: 2, color: "white", display: "block" }}>
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <ColorButton
                            sx={{ display: { xs: "none", md: "inline" } }}
                            size="small"
                            variant="contained"
                            onClick={() => {
                                navigate("/signup");
                            }}
                        >
                            sign up
                        </ColorButton>
                        <Tooltip title="Open cart">
                            <IconButton
                                sx={{ mr: 3 }}
                                onClick={() => {
                                    navigate("/cart");
                                }}
                            >
                                <Badge badgeContent={totalOrders.length} color="primary">
                                    <ShoppingCartIcon
                                        sx={{ display: { xs: "none", md: "inline" }, ml: 5, color: "white" }}
                                        fontSize="large"
                                    ></ShoppingCartIcon>
                                </Badge>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <AccountCircleIcon sx={{ color: "white" }} fontSize="large" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting: any) => (
                                <MenuItem
                                    key={setting}
                                    onClick={() => {
                                        handleCloseUserMenu();
                                        navigate(`/${setting}`);
                                    }}
                                >
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navigation;
