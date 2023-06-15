import { Typography, Box, IconButton, Link, Divider } from "@mui/material";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ColorButton, pages, settings } from "../../utils/Utilities";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }} />
            <Box
                sx={{
                    height: "45vh",
                    backgroundColor: "#FAFAFA",
                    mt: "1rem",
                    px: { sm: "10rem", md: "3rem" },
                    display: { xs: "block", md: "flex" },
                }}
            >
                <Box sx={{ display: "flex", my: "auto", width: { sm: "100%", md: "50%" } }}>
                    <Box sx={{ display: "flex", mx: { xs: "auto", md: 0 }, mt: { xs: "3rem", md: "none" } }}>
                        <IconButton sx={{ mr: 1 }} onClick={() => navigate("/")}>
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
                                fontFamily: "'Space Grotesk', sans-serif;",
                                fontWeight: 700,
                                letterSpacing: ".1rem",
                                color: "inherit",
                                textDecoration: "none",
                                my: "auto",
                            }}
                        >
                            CAPSTONE
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ width: { sm: "100%", md: "50%" }, display: "flex", justifyContent: "space-around" }}>
                    <Box sx={{ display: "flex", my: "auto" }}>
                        <Box sx={{ mx: "2rem" }}>
                            <ul>
                                {pages.map((page: any) => (
                                    <Typography
                                        component="li"
                                        variant="subtitle1"
                                        align="center"
                                        key={page}
                                        sx={{ fontFamily: "'Space Grotesk', sans-serif;" }}
                                        onClick={() => navigate(`/${page}`)}
                                    >
                                        {page}
                                    </Typography>
                                ))}
                            </ul>
                        </Box>
                        <Box>
                            <ul>
                                {settings.map((page: any) => (
                                    <Typography
                                        component="li"
                                        variant="subtitle1"
                                        align="center"
                                        key={page}
                                        sx={{ fontFamily: "'Space Grotesk', sans-serif;" }}
                                    >
                                        {page}
                                    </Typography>
                                ))}
                            </ul>
                        </Box>
                    </Box>
                    <Box sx={{ my: "auto", display: { xs: "none", md: "inline" } }}>
                        <ColorButton size="medium" variant="contained">
                            sign up
                        </ColorButton>
                    </Box>
                </Box>
            </Box>
            <Divider variant="middle" />
            <Box sx={{ display: "flex", justifyContent: "space-between", backgroundColor: "#FAFAFA", px: "1rem", borderTop: "1px solid gray" }}>
                <Typography variant="caption" sx={{ fontFamily: "Roboto, sans-serif", fontWeight: "light", my: "auto" }}>
                    © Intertec, Inc. 2022. We love the Bootcamp!
                </Typography>
                <Box sx={{ display: { sm: "block", md: "flex" } }}>
                    <Box sx={{ my: "auto", mx: "1rem", display: { xs: "none", md: "block" } }}>
                        <svg width="30" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path d="M482.9 410.3c0 6.8-4.6 11.7-11.2 11.7-6.8 0-11.2-5.2-11.2-11.7 0-6.5 4.4-11.7 11.2-11.7 6.6 0 11.2 5.2 11.2 11.7zm-310.8-11.7c-7.1 0-11.2 5.2-11.2 11.7 0 6.5 4.1 11.7 11.2 11.7 6.5 0 10.9-4.9 10.9-11.7-.1-6.5-4.4-11.7-10.9-11.7zm117.5-.3c-5.4 0-8.7 3.5-9.5 8.7h19.1c-.9-5.7-4.4-8.7-9.6-8.7zm107.8.3c-6.8 0-10.9 5.2-10.9 11.7 0 6.5 4.1 11.7 10.9 11.7 6.8 0 11.2-4.9 11.2-11.7 0-6.5-4.4-11.7-11.2-11.7zm105.9 26.1c0 .3.3.5.3 1.1 0 .3-.3.5-.3 1.1-.3.3-.3.5-.5.8-.3.3-.5.5-1.1.5-.3.3-.5.3-1.1.3-.3 0-.5 0-1.1-.3-.3 0-.5-.3-.8-.5-.3-.3-.5-.5-.5-.8-.3-.5-.3-.8-.3-1.1 0-.5 0-.8.3-1.1 0-.5.3-.8.5-1.1.3-.3.5-.3.8-.5.5-.3.8-.3 1.1-.3.5 0 .8 0 1.1.3.5.3.8.3 1.1.5s.2.6.5 1.1zm-2.2 1.4c.5 0 .5-.3.8-.3.3-.3.3-.5.3-.8 0-.3 0-.5-.3-.8-.3 0-.5-.3-1.1-.3h-1.6v3.5h.8V426h.3l1.1 1.4h.8l-1.1-1.3zM576 81v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V81c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM64 220.6c0 76.5 62.1 138.5 138.5 138.5 27.2 0 53.9-8.2 76.5-23.1-72.9-59.3-72.4-171.2 0-230.5-22.6-15-49.3-23.1-76.5-23.1-76.4-.1-138.5 62-138.5 138.2zm224 108.8c70.5-55 70.2-162.2 0-217.5-70.2 55.3-70.5 162.6 0 217.5zm-142.3 76.3c0-8.7-5.7-14.4-14.7-14.7-4.6 0-9.5 1.4-12.8 6.5-2.4-4.1-6.5-6.5-12.2-6.5-3.8 0-7.6 1.4-10.6 5.4V392h-8.2v36.7h8.2c0-18.9-2.5-30.2 9-30.2 10.2 0 8.2 10.2 8.2 30.2h7.9c0-18.3-2.5-30.2 9-30.2 10.2 0 8.2 10 8.2 30.2h8.2v-23zm44.9-13.7h-7.9v4.4c-2.7-3.3-6.5-5.4-11.7-5.4-10.3 0-18.2 8.2-18.2 19.3 0 11.2 7.9 19.3 18.2 19.3 5.2 0 9-1.9 11.7-5.4v4.6h7.9V392zm40.5 25.6c0-15-22.9-8.2-22.9-15.2 0-5.7 11.9-4.8 18.5-1.1l3.3-6.5c-9.4-6.1-30.2-6-30.2 8.2 0 14.3 22.9 8.3 22.9 15 0 6.3-13.5 5.8-20.7.8l-3.5 6.3c11.2 7.6 32.6 6 32.6-7.5zm35.4 9.3l-2.2-6.8c-3.8 2.1-12.2 4.4-12.2-4.1v-16.6h13.1V392h-13.1v-11.2h-8.2V392h-7.6v7.3h7.6V416c0 17.6 17.3 14.4 22.6 10.9zm13.3-13.4h27.5c0-16.2-7.4-22.6-17.4-22.6-10.6 0-18.2 7.9-18.2 19.3 0 20.5 22.6 23.9 33.8 14.2l-3.8-6c-7.8 6.4-19.6 5.8-21.9-4.9zm59.1-21.5c-4.6-2-11.6-1.8-15.2 4.4V392h-8.2v36.7h8.2V408c0-11.6 9.5-10.1 12.8-8.4l2.4-7.6zm10.6 18.3c0-11.4 11.6-15.1 20.7-8.4l3.8-6.5c-11.6-9.1-32.7-4.1-32.7 15 0 19.8 22.4 23.8 32.7 15l-3.8-6.5c-9.2 6.5-20.7 2.6-20.7-8.6zm66.7-18.3H408v4.4c-8.3-11-29.9-4.8-29.9 13.9 0 19.2 22.4 24.7 29.9 13.9v4.6h8.2V392zm33.7 0c-2.4-1.2-11-2.9-15.2 4.4V392h-7.9v36.7h7.9V408c0-11 9-10.3 12.8-8.4l2.4-7.6zm40.3-14.9h-7.9v19.3c-8.2-10.9-29.9-5.1-29.9 13.9 0 19.4 22.5 24.6 29.9 13.9v4.6h7.9v-51.7zm7.6-75.1v4.6h.8V302h1.9v-.8h-4.6v.8h1.9zm6.6 123.8c0-.5 0-1.1-.3-1.6-.3-.3-.5-.8-.8-1.1-.3-.3-.8-.5-1.1-.8-.5 0-1.1-.3-1.6-.3-.3 0-.8.3-1.4.3-.5.3-.8.5-1.1.8-.5.3-.8.8-.8 1.1-.3.5-.3 1.1-.3 1.6 0 .3 0 .8.3 1.4 0 .3.3.8.8 1.1.3.3.5.5 1.1.8.5.3 1.1.3 1.4.3.5 0 1.1 0 1.6-.3.3-.3.8-.5 1.1-.8.3-.3.5-.8.8-1.1.3-.6.3-1.1.3-1.4zm3.2-124.7h-1.4l-1.6 3.5-1.6-3.5h-1.4v5.4h.8v-4.1l1.6 3.5h1.1l1.4-3.5v4.1h1.1v-5.4zm4.4-80.5c0-76.2-62.1-138.3-138.5-138.3-27.2 0-53.9 8.2-76.5 23.1 72.1 59.3 73.2 171.5 0 230.5 22.6 15 49.5 23.1 76.5 23.1 76.4.1 138.5-61.9 138.5-138.4z" />
                        </svg>
                        <svg width="30" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2.3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4.2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2.2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2.1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z" />
                        </svg>
                    </Box>
                    <Typography variant="caption" sx={{ fontFamily: "Roboto, sans-serif", fontWeight: "light", my: "auto" }}>
                        Follow us on:
                    </Typography>
                    <Box>
                        <IconButton size="small">
                            <Link href="https://www.facebook.com/intertec.io/" color="#000000">
                                <FacebookIcon sx={{ fontSize: { sm: "1rem", md: "2rem", lg: "2.5rem" } }}></FacebookIcon>
                            </Link>
                        </IconButton>
                        <IconButton size="small">
                            <Link href="https://www.instagram.com/intertec.io/?hl=en" color="#000000">
                                <InstagramIcon sx={{ fontSize: { sm: "1rem", md: "2rem", lg: "2.5rem" } }}></InstagramIcon>
                            </Link>
                        </IconButton>
                        <IconButton size="small">
                            <Link href="https://twitter.com/intertecintl" color="#000000">
                                <TwitterIcon sx={{ fontSize: { sm: "1rem", md: "2rem", lg: "2.5rem" } }}></TwitterIcon>
                            </Link>
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </>
    );
};
export default Footer;
