const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const moongose = require("mongoose");
// const GUser = moongose.model("GUser");
import GUser from "../models/GUser";
const nodemailer = require("nodemailer");
import * as dotenv from "dotenv";
import { readFile } from "fs";
dotenv.config();

passport.serializeUser((user: any, done: any) => {
    done(null, user.id);
});

passport.deserializeUser((id: any, done: any) => {
    GUser.findById(id).then((user: any) => {
        done(null, user);
    });
});

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
    },
});

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
            proxy: true,
        },
        async (accessToken: any, refreshToken: any, profile: any, done: any) => {
            const existingUser = await GUser.findOne({ googleId: profile.id, email: profile._json.email });

            if (existingUser) {
                transporter.sendMail({
                    to: profile._json.email,
                    subject: "Welcome back, did you just log into CapStone CarRental?",
                    html: `<!DOCTYPE html>
                    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
                        <head>
                            <meta charset="utf-8" />
                            <!-- utf-8 works for most cases -->
                            <meta name="viewport" content="width=device-width" />
                            <!-- Forcing initial-scale shouldn't be necessary -->
                            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                            <!-- Use the latest (edge) version of IE rendering engine -->
                            <meta name="x-apple-disable-message-reformatting" />
                            <!-- Disable auto-scale in iOS 10 Mail entirely -->
                            <title></title>
                            <!-- The title tag shows in email notifications, like Android 4.4. -->
                    
                            <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i" rel="stylesheet" />
                    
                            <!-- CSS Reset : BEGIN -->
                            <style>
                                html,
                                body {
                                    margin: 0 auto !important;
                                    padding: 0 !important;
                                    height: 100% !important;
                                    width: 100% !important;
                                    background: #f1f1f1;
                                }
                    
                                /* What it does: Stops email clients resizing small text. */
                                * {
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                }
                    
                                /* What it does: Centers email on Android 4.4 */
                                div[style*="margin: 16px 0"] {
                                    margin: 0 !important;
                                }
                    
                                /* What it does: Stops Outlook from adding extra spacing to tables. */
                                table,
                                td {
                                    mso-table-lspace: 0pt !important;
                                    mso-table-rspace: 0pt !important;
                                }
                    
                                /* What it does: Fixes webkit padding issue. */
                                table {
                                    border-spacing: 0 !important;
                                    border-collapse: collapse !important;
                                    table-layout: fixed !important;
                                    margin: 0 auto !important;
                                }
                    
                                /* What it does: Uses a better rendering method when resizing images in IE. */
                                img {
                                    -ms-interpolation-mode: bicubic;
                                }
                    
                                /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
                                a {
                                    text-decoration: none;
                                }
                    
                                /* What it does: A work-around for email clients meddling in triggered links. */
                                *[x-apple-data-detectors],  /* iOS */
                    .unstyle-auto-detected-links *,
                    .aBn {
                                    border-bottom: 0 !important;
                                    cursor: default !important;
                                    color: inherit !important;
                                    text-decoration: none !important;
                                    font-size: inherit !important;
                                    font-family: inherit !important;
                                    font-weight: inherit !important;
                                    line-height: inherit !important;
                                }
                    
                                /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
                                .a6S {
                                    display: none !important;
                                    opacity: 0.01 !important;
                                }
                    
                                /* What it does: Prevents Gmail from changing the text color in conversation threads. */
                                .im {
                                    color: inherit !important;
                                }
                    
                                /* If the above doesn't work, add a .g-img class to any image in question. */
                                img.g-img + div {
                                    display: none !important;
                                }
                    
                                /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
                                /* Create one of these media queries for each additional viewport size you'd like to fix */
                    
                                /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
                                @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
                                    u ~ div .email-container {
                                        min-width: 320px !important;
                                    }
                                }
                                /* iPhone 6, 6S, 7, 8, and X */
                                @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
                                    u ~ div .email-container {
                                        min-width: 375px !important;
                                    }
                                }
                                /* iPhone 6+, 7+, and 8+ */
                                @media only screen and (min-device-width: 414px) {
                                    u ~ div .email-container {
                                        min-width: 414px !important;
                                    }
                                }
                            </style>
                    
                            <!-- CSS Reset : END -->
                    
                            <!-- Progressive Enhancements : BEGIN -->
                            <style>
                                .primary {
                                    background: #f3a333;
                                }
                    
                                .bg_white {
                                    background: #ffffff;
                                }
                                .bg_light {
                                    background: #fafafa;
                                }
                                .bg_black {
                                    background: #000000;
                                }
                                .bg_dark {
                                    background: rgba(0, 0, 0, 0.8);
                                }
                                .email-section {
                                    padding: 2.5em;
                                }
                    
                                /*BUTTON*/
                                .btn {
                                    padding: 10px 15px;
                                }
                                .btn.btn-primary {
                                    border-radius: 30px;
                                    background: #f3a333;
                                    color: #ffffff;
                                }
                    
                                h1,
                                h2,
                                h3,
                                h4,
                                h5,
                                h6 {
                                    font-family: "Playfair Display", serif;
                                    color: #000000;
                                    margin-top: 0;
                                }
                    
                                body {
                                    font-family: "Montserrat", sans-serif;
                                    font-weight: 400;
                                    font-size: 15px;
                                    line-height: 1.8;
                                    color: rgba(0, 0, 0, 0.4);
                                }
                    
                                a {
                                    color: #f3a333;
                                }
                    
                                /*LOGO*/
                    
                                .logo h1 {
                                    margin: 0;
                                }
                                .logo h1 a {
                                    color: #000;
                                    font-size: 20px;
                                    font-weight: 700;
                                    text-transform: uppercase;
                                    font-family: "Montserrat", sans-serif;
                                }
                    
                                /*HERO*/
                                .hero {
                                    position: relative;
                                }
                    
                                .hero .text {
                                    color: rgba(255, 255, 255, 0.8);
                                }
                                .hero .text h2 {
                                    color: #ffffff;
                                    font-size: 30px;
                                    margin-bottom: 0;
                                }
                    
                                /*HEADING SECTION*/
                    
                                .heading-section h2 {
                                    color: #000000;
                                    font-size: 28px;
                                    margin-top: 0;
                                    line-height: 1.4;
                                }
                                .heading-section .subheading {
                                    margin-bottom: 20px !important;
                                    display: inline-block;
                                    font-size: 13px;
                                    text-transform: uppercase;
                                    letter-spacing: 2px;
                                    color: rgba(0, 0, 0, 0.4);
                                    position: relative;
                                }
                                .heading-section .subheading::after {
                                    position: absolute;
                                    left: 0;
                                    right: 0;
                                    bottom: -10px;
                                    content: "";
                                    width: 100%;
                                    height: 2px;
                                    background: #f3a333;
                                    margin: 0 auto;
                                }
                    
                                .heading-section-white {
                                    color: rgba(255, 255, 255, 0.8);
                                }
                                .heading-section-white h2 {
                                    font-size: 28px;
                                    line-height: 1;
                                    padding-bottom: 0;
                                }
                                .heading-section-white h2 {
                                    color: #ffffff;
                                }
                                .heading-section-white .subheading {
                                    margin-bottom: 0;
                                    display: inline-block;
                                    font-size: 13px;
                                    text-transform: uppercase;
                                    letter-spacing: 2px;
                                    color: rgba(255, 255, 255, 0.4);
                                }
                    
                                .icon {
                                    text-align: center;
                                }
                    
                                /*SERVICES*/
                                .text-services {
                                    padding: 10px 10px 0;
                                    text-align: center;
                                }
                                .text-services h3 {
                                    font-size: 20px;
                                }
                    
                                /*BLOG*/
                                .text-services .meta {
                                    text-transform: uppercase;
                                    font-size: 14px;
                                }
                    
                                /*TESTIMONY*/
                                .text-testimony .name {
                                    margin: 0;
                                }
                                .text-testimony .position {
                                    color: rgba(0, 0, 0, 0.3);
                                }
                    
                                /*VIDEO*/
                                .img {
                                    width: 100%;
                                    height: auto;
                                    position: relative;
                                }
                                .img .icon {
                                    position: absolute;
                                    top: 50%;
                                    left: 0;
                                    right: 0;
                                    bottom: 0;
                                    margin-top: -25px;
                                }
                                .img .icon a {
                                    display: block;
                                    width: 60px;
                                    position: absolute;
                                    top: 0;
                                    left: 50%;
                                    margin-left: -25px;
                                }
                    
                                /*COUNTER*/
                                .counter-text {
                                    text-align: center;
                                }
                                .counter-text .num {
                                    display: block;
                                    color: #ffffff;
                                    font-size: 34px;
                                    font-weight: 700;
                                }
                                .counter-text .name {
                                    display: block;
                                    color: rgba(255, 255, 255, 0.9);
                                    font-size: 13px;
                                }
                    
                                /*FOOTER*/
                    
                                .footer {
                                    color: rgba(255, 255, 255, 0.5);
                                }
                                .footer .heading {
                                    color: #ffffff;
                                    font-size: 20px;
                                }
                                .footer ul {
                                    margin: 0;
                                    padding: 0;
                                }
                                .footer ul li {
                                    list-style: none;
                                    margin-bottom: 10px;
                                }
                                .footer ul li a {
                                    color: rgba(255, 255, 255, 1);
                                }
                    
                                @media screen and (max-width: 500px) {
                                    .icon {
                                        text-align: left;
                                    }
                    
                                    .text-services {
                                        padding-left: 0;
                                        padding-right: 20px;
                                        text-align: left;
                                    }
                                }
                            </style>
                        </head>
                    
                        <body width="100%" style="margin: 0; padding: 0 !important; background-color: #222222">
                            <center style="width: 100%; background-color: #f1f1f1">
                                <div style="display: none; font-size: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; font-family: sans-serif">
                                    &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                                </div>
                                <div style="max-width: 600px; margin: 0 auto" class="email-container">
                                    <!-- BEGIN BODY -->
                                    <img style="width: 100px; border-radius: 50%" src="${profile._json.picture}" alt="" />
                                    <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto">
                                        <tr>
                                            <td class="bg_white logo" style="padding: 1em 2.5em; text-align: center">
                                                <h1><a href="#">CapStone CarRental</a></h1>
                                            </td>
                                        </tr>
                                        <!-- end tr -->
                                        <tr>
                                            <td
                                                valign="middle"
                                                class="hero"
                                                style="
                                                    background-image: url('https://images.unsplash.com/photo-1580014317999-e9f1936787a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhciUyMGRhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60');
                                                    background-size: cover;
                                                    height: 400px;
                                                "
                                            >
                                                <table>
                                                    <tr>
                                                        <td>
                                                            <div class="text" style="padding: 0 3em; text-align: center">
                                                                <h2>Thank you for continuing to choose us, ${profile._json.name}</h2>
                                                                <p>
                                                                    Thank you for continuing to use our application! Did you not login in yourself this time? Click below
                                                                    to review your recent history
                                                                </p>
                                                                <p><a href="#" class="btn btn-primary">Review Activity</a></p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <!-- end tr -->
                                        <tr>
                                            <td class="bg_white">
                                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                    <tr>
                                                        <td class="bg_dark email-section" style="text-align: center">
                                                            <div class="heading-section heading-section-white">
                                                                <h2>Welcome Back To CapStone Car Rental</h2>
                                                                <p>
                                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae harum, possimus aut
                                                                    quidem aliquam consectetur quaerat nemo corporis non nulla provident laborum omnis. Amet incidunt iure
                                                                    eum aperiam perferendis.
                                                                </p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <!-- end: tr -->
                                                    <tr>
                                                        <td class="bg_white email-section">
                                                            <div class="heading-section" style="text-align: center; padding: 0 30px">
                                                                <h2>Our Services</h2>
                                                                <p>We will keep providing the best cars out there in the road</p>
                                                            </div>
                                                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                <tr>
                                                                    <td valign="top" width="50%" style="padding-top: 20px">
                                                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                                            <tr>
                                                                                <td class="icon">
                                                                                    <img
                                                                                        src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                                                                                        alt=""
                                                                                        style="width: 60px; max-width: 600px; height: auto; margin: auto; display: block"
                                                                                    />
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td class="text-services">
                                                                                    <h3>Best Seller</h3>
                                                                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                    <td valign="top" width="50%" style="padding-top: 20px">
                                                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                                            <tr>
                                                                                <td class="icon">
                                                                                    <img
                                                                                        src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                                                                                        alt=""
                                                                                        style="width: 60px; max-width: 600px; height: auto; margin: auto; display: block"
                                                                                    />
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td class="text-services">
                                                                                    <h3>Best Value</h3>
                                                                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <!-- end: tr -->
                                                    <tr>
                                                        <td class="bg_light email-section" style="text-align: center">
                                                            <table>
                                                                <tr>
                                                                    <td class="img">
                                                                        <table>
                                                                            <tr>
                                                                                <td>
                                                                                    <img
                                                                                        src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                                                                                        width="600"
                                                                                        height=""
                                                                                        alt="alt_text"
                                                                                        border="0"
                                                                                        style="width: 100%; max-width: 600px; height: auto; margin: auto; display: block"
                                                                                        class="g-img"
                                                                                    />
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="padding-top: 20px">
                                                                        <h2>Watch Our Video</h2>
                                                                        <p>
                                                                            A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                                                            It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <!-- end: tr -->
                                                </table>
                                            </td>
                                        </tr>
                                        <!-- end:tr -->
                                        <!-- 1 Column Text + Button : END -->
                                    </table>
                                </div>
                            </center>
                        </body>
                    </html>
                    `,
                });
                return done(null, existingUser);
            }

            const user = await new GUser({ googleId: profile.id, email: profile._json.email }).save();

            transporter.sendMail({
                to: profile._json.email,
                subject: "Welcome to Capstone CarRental",
                html: `<!DOCTYPE html>
                <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
                    <head>
                        <meta charset="utf-8" />
                        <!-- utf-8 works for most cases -->
                        <meta name="viewport" content="width=device-width" />
                        <!-- Forcing initial-scale shouldn't be necessary -->
                        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                        <!-- Use the latest (edge) version of IE rendering engine -->
                        <meta name="x-apple-disable-message-reformatting" />
                        <!-- Disable auto-scale in iOS 10 Mail entirely -->
                        <title></title>
                        <!-- The title tag shows in email notifications, like Android 4.4. -->
                
                        <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i" rel="stylesheet" />
                
                        <!-- CSS Reset : BEGIN -->
                        <style>
                            html,
                            body {
                                margin: 0 auto !important;
                                padding: 0 !important;
                                height: 100% !important;
                                width: 100% !important;
                                background: #f1f1f1;
                            }
                
                            /* What it does: Stops email clients resizing small text. */
                            * {
                                -ms-text-size-adjust: 100%;
                                -webkit-text-size-adjust: 100%;
                            }
                
                            /* What it does: Centers email on Android 4.4 */
                            div[style*="margin: 16px 0"] {
                                margin: 0 !important;
                            }
                
                            /* What it does: Stops Outlook from adding extra spacing to tables. */
                            table,
                            td {
                                mso-table-lspace: 0pt !important;
                                mso-table-rspace: 0pt !important;
                            }
                
                            /* What it does: Fixes webkit padding issue. */
                            table {
                                border-spacing: 0 !important;
                                border-collapse: collapse !important;
                                table-layout: fixed !important;
                                margin: 0 auto !important;
                            }
                
                            /* What it does: Uses a better rendering method when resizing images in IE. */
                            img {
                                -ms-interpolation-mode: bicubic;
                            }
                
                            /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
                            a {
                                text-decoration: none;
                            }
                
                            /* What it does: A work-around for email clients meddling in triggered links. */
                            *[x-apple-data-detectors],  /* iOS */
                .unstyle-auto-detected-links *,
                .aBn {
                                border-bottom: 0 !important;
                                cursor: default !important;
                                color: inherit !important;
                                text-decoration: none !important;
                                font-size: inherit !important;
                                font-family: inherit !important;
                                font-weight: inherit !important;
                                line-height: inherit !important;
                            }
                
                            /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
                            .a6S {
                                display: none !important;
                                opacity: 0.01 !important;
                            }
                
                            /* What it does: Prevents Gmail from changing the text color in conversation threads. */
                            .im {
                                color: inherit !important;
                            }
                
                            /* If the above doesn't work, add a .g-img class to any image in question. */
                            img.g-img + div {
                                display: none !important;
                            }
                
                            /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
                            /* Create one of these media queries for each additional viewport size you'd like to fix */
                
                            /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
                            @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
                                u ~ div .email-container {
                                    min-width: 320px !important;
                                }
                            }
                            /* iPhone 6, 6S, 7, 8, and X */
                            @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
                                u ~ div .email-container {
                                    min-width: 375px !important;
                                }
                            }
                            /* iPhone 6+, 7+, and 8+ */
                            @media only screen and (min-device-width: 414px) {
                                u ~ div .email-container {
                                    min-width: 414px !important;
                                }
                            }
                        </style>
                
                        <!-- CSS Reset : END -->
                
                        <!-- Progressive Enhancements : BEGIN -->
                        <style>
                            .primary {
                                background: #f3a333;
                            }
                
                            .bg_white {
                                background: #ffffff;
                            }
                            .bg_light {
                                background: #fafafa;
                            }
                            .bg_black {
                                background: #000000;
                            }
                            .bg_dark {
                                background: rgba(0, 0, 0, 0.8);
                            }
                            .email-section {
                                padding: 2.5em;
                            }
                
                            /*BUTTON*/
                            .btn {
                                padding: 10px 15px;
                            }
                            .btn.btn-primary {
                                border-radius: 30px;
                                background: #f3a333;
                                color: #ffffff;
                            }
                
                            h1,
                            h2,
                            h3,
                            h4,
                            h5,
                            h6 {
                                font-family: "Playfair Display", serif;
                                color: #000000;
                                margin-top: 0;
                            }
                
                            body {
                                font-family: "Montserrat", sans-serif;
                                font-weight: 400;
                                font-size: 15px;
                                line-height: 1.8;
                                color: rgba(0, 0, 0, 0.4);
                            }
                
                            a {
                                color: #f3a333;
                            }
                
                            /*LOGO*/
                
                            .logo h1 {
                                margin: 0;
                            }
                            .logo h1 a {
                                color: #000;
                                font-size: 20px;
                                font-weight: 700;
                                text-transform: uppercase;
                                font-family: "Montserrat", sans-serif;
                            }
                
                            /*HERO*/
                            .hero {
                                position: relative;
                            }
                
                            .hero .text {
                                color: rgba(255, 255, 255, 0.8);
                            }
                            .hero .text h2 {
                                color: #ffffff;
                                font-size: 30px;
                                margin-bottom: 0;
                            }
                
                            /*HEADING SECTION*/
                
                            .heading-section h2 {
                                color: #000000;
                                font-size: 28px;
                                margin-top: 0;
                                line-height: 1.4;
                            }
                            .heading-section .subheading {
                                margin-bottom: 20px !important;
                                display: inline-block;
                                font-size: 13px;
                                text-transform: uppercase;
                                letter-spacing: 2px;
                                color: rgba(0, 0, 0, 0.4);
                                position: relative;
                            }
                            .heading-section .subheading::after {
                                position: absolute;
                                left: 0;
                                right: 0;
                                bottom: -10px;
                                content: "";
                                width: 100%;
                                height: 2px;
                                background: #f3a333;
                                margin: 0 auto;
                            }
                
                            .heading-section-white {
                                color: rgba(255, 255, 255, 0.8);
                            }
                            .heading-section-white h2 {
                                font-size: 28px;
                                line-height: 1;
                                padding-bottom: 0;
                            }
                            .heading-section-white h2 {
                                color: #ffffff;
                            }
                            .heading-section-white .subheading {
                                margin-bottom: 0;
                                display: inline-block;
                                font-size: 13px;
                                text-transform: uppercase;
                                letter-spacing: 2px;
                                color: rgba(255, 255, 255, 0.4);
                            }
                
                            .icon {
                                text-align: center;
                            }
                
                            /*SERVICES*/
                            .text-services {
                                padding: 10px 10px 0;
                                text-align: center;
                            }
                            .text-services h3 {
                                font-size: 20px;
                            }
                
                            /*BLOG*/
                            .text-services .meta {
                                text-transform: uppercase;
                                font-size: 14px;
                            }
                
                            /*TESTIMONY*/
                            .text-testimony .name {
                                margin: 0;
                            }
                            .text-testimony .position {
                                color: rgba(0, 0, 0, 0.3);
                            }
                
                            /*VIDEO*/
                            .img {
                                width: 100%;
                                height: auto;
                                position: relative;
                            }
                            .img .icon {
                                position: absolute;
                                top: 50%;
                                left: 0;
                                right: 0;
                                bottom: 0;
                                margin-top: -25px;
                            }
                            .img .icon a {
                                display: block;
                                width: 60px;
                                position: absolute;
                                top: 0;
                                left: 50%;
                                margin-left: -25px;
                            }
                
                            /*COUNTER*/
                            .counter-text {
                                text-align: center;
                            }
                            .counter-text .num {
                                display: block;
                                color: #ffffff;
                                font-size: 34px;
                                font-weight: 700;
                            }
                            .counter-text .name {
                                display: block;
                                color: rgba(255, 255, 255, 0.9);
                                font-size: 13px;
                            }
                
                            /*FOOTER*/
                
                            .footer {
                                color: rgba(255, 255, 255, 0.5);
                            }
                            .footer .heading {
                                color: #ffffff;
                                font-size: 20px;
                            }
                            .footer ul {
                                margin: 0;
                                padding: 0;
                            }
                            .footer ul li {
                                list-style: none;
                                margin-bottom: 10px;
                            }
                            .footer ul li a {
                                color: rgba(255, 255, 255, 1);
                            }
                
                            @media screen and (max-width: 500px) {
                                .icon {
                                    text-align: left;
                                }
                
                                .text-services {
                                    padding-left: 0;
                                    padding-right: 20px;
                                    text-align: left;
                                }
                            }
                        </style>
                    </head>
                
                    <body width="100%" style="margin: 0; padding: 0 !important; background-color: #222222">
                        <center style="width: 100%; background-color: #f1f1f1">
                            <div style="display: none; font-size: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; font-family: sans-serif">
                                &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                            </div>
                            <div style="max-width: 600px; margin: 0 auto" class="email-container">
                                <!-- BEGIN BODY -->
                                <img style="width: 100px; border-radius: 50%" src="${profile._json.picture}" alt="" />
                                <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto">
                                    <tr>
                                        <td class="bg_white logo" style="padding: 1em 2.5em; text-align: center">
                                            <h1><a href="#">CapStone CarRental</a></h1>
                                        </td>
                                    </tr>
                                    <!-- end tr -->
                                    <tr>
                                        <td
                                            valign="middle"
                                            class="hero"
                                            style="
                                                background-image: url('https://images.unsplash.com/photo-1580014317999-e9f1936787a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhciUyMGRhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60');
                                                background-size: cover;
                                                height: 400px;
                                            "
                                        >
                                            <table>
                                                <tr>
                                                    <td>
                                                        <div class="text" style="padding: 0 3em; text-align: center">
                                                            <h2>Welcome, ${profile._json.name}</h2>
                                                            <p>
                                                                Thank you for choosing to use our application! 
                                                            </p>
                                                            <p><a href="#" class="btn btn-primary">Learn More</a></p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <!-- end tr -->
                                    <tr>
                                        <td class="bg_white">
                                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                <tr>
                                                    <td class="bg_dark email-section" style="text-align: center">
                                                        <div class="heading-section heading-section-white">
                                                            <h2>Welcome Back To CapStone Car Rental</h2>
                                                            <p>
                                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae harum, possimus aut
                                                                quidem aliquam consectetur quaerat nemo corporis non nulla provident laborum omnis. Amet incidunt iure
                                                                eum aperiam perferendis.
                                                            </p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <!-- end: tr -->
                                                <tr>
                                                    <td class="bg_white email-section">
                                                        <div class="heading-section" style="text-align: center; padding: 0 30px">
                                                            <h2>Our Services</h2>
                                                            <p>We will keep providing the best cars out there in the road</p>
                                                        </div>
                                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                                            <tr>
                                                                <td valign="top" width="50%" style="padding-top: 20px">
                                                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                                        <tr>
                                                                            <td class="icon">
                                                                                <img
                                                                                    src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                                                                                    alt=""
                                                                                    style="width: 60px; max-width: 600px; height: auto; margin: auto; display: block"
                                                                                />
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="text-services">
                                                                                <h3>Best Seller</h3>
                                                                                <p>Far far away, behind the word mountains, far from the countries</p>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                                <td valign="top" width="50%" style="padding-top: 20px">
                                                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                                        <tr>
                                                                            <td class="icon">
                                                                                <img
                                                                                    src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                                                                                    alt=""
                                                                                    style="width: 60px; max-width: 600px; height: auto; margin: auto; display: block"
                                                                                />
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="text-services">
                                                                                <h3>Best Value</h3>
                                                                                <p>Far far away, behind the word mountains, far from the countries</p>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <!-- end: tr -->
                                                <tr>
                                                    <td class="bg_light email-section" style="text-align: center">
                                                        <table>
                                                            <tr>
                                                                <td class="img">
                                                                    <table>
                                                                        <tr>
                                                                            <td>
                                                                                <img
                                                                                    src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                                                                                    width="600"
                                                                                    height=""
                                                                                    alt="alt_text"
                                                                                    border="0"
                                                                                    style="width: 100%; max-width: 600px; height: auto; margin: auto; display: block"
                                                                                    class="g-img"
                                                                                />
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding-top: 20px">
                                                                    <h2>Watch Our Video</h2>
                                                                    <p>
                                                                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                                                        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <!-- end: tr -->
                                            </table>
                                        </td>
                                    </tr>
                                    <!-- end:tr -->
                                    <!-- 1 Column Text + Button : END -->
                                </table>
                            </div>
                        </center>
                    </body>
                </html>
                `,
            });
            done(null, user);
        }
    )
);

// <div style="display: block; width: 100%; height: auto">
//     <div style="display: flex; justify-content: space-between; margin: 20 50 0 50">
//         <h1 style="font-family: Verdana">Welcome back, ${profile._json.name}</h1>
//         <img style="width: 100px; border-radius: 50%" src="${profile._json.picture}" alt="" />
//     </div>
//     <hr />
//     <h4 style="font-family: Verdana; margin: 0 50 0 50">This is the data you have chosen to share with us because you logged in via google:</h4>
//     <ul style="margin: 50 0 0 50">
//         <li style="font-family: Verdana; font-size: large">
//             Name: <b>${profile._json.family_name}</b>
//         </li>
//         <li style="font-family: Verdana; font-size: large">
//             Email: <b>${profile._json.email}</b>
//         </li>
//         <li style="font-family: Verdana; font-size: large">
//             Verification_status: <b>${profile._json.email_verified}</b>
//         </li>
//     </ul>
//     <p style="margin: 50 50 0 50">
//         This was not you? Click this <a href="intertec.io">link</a> for more information
//     </p>
// </div>;
