import React, { useEffect, useState } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow } from "mdb-react-ui-kit";
import { useLocation, useNavigate } from "react-router";
import { Button } from "@mui/material";
// import Cards from 'react-credit-cards'
// import "react-credit-cards/es/styles-compiled.css";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks";
import { CheckoutFormAsync, getOrdersAsync, orderform1 } from "../../redux-toolkit/OrderFormSlice";

export default function Checkout() {
    const dispatch = useAppDispatch();
    const totalOrders = useAppSelector(orderform1);

    useEffect(() => {
        dispatch(getOrdersAsync());
    }, [dispatch]);

    const navigate = useNavigate();
    const location = useLocation();

    const [carddNumber, setCarddNumber] = useState<string | undefined>();
    const [cardName, setCardName] = useState<string | undefined>();
    const [exp, setExp] = useState<string | undefined>();
    const [cvv, setCvv] = useState<undefined | string>();
    const [errors, setErrors] = useState<{ Cnumber: string; Cname: string; Cexp: string; Ccvv: string }>({
        Cnumber: "Card Number",
        Cname: "Cardholders Name",
        Cexp: "Expiration",
        Ccvv: "CVV",
    });
    const [countFlag, setCountFlag] = useState<number>(0);

    const checkAllErrors = () => {
        if (carddNumber?.length !== 16 || carddNumber === undefined) {
            console.log(carddNumber?.length);
            setErrors({ ...errors, Cnumber: "Invalid C Number" });
            console.log(errors);
        } else if (containsNumbers(cardName!) === true || cardName === undefined) {
            setErrors({ ...errors, Cname: "Invalid CC Name", Cnumber: "Card Number" });
        } else if (exp === undefined) {
            setErrors({ ...errors, Cname: "Cardholders Name", Cnumber: "Card Number", Cexp: "Invalid Exp Date" });
        } else if (containsNumbers(cvv!) === false || cvv === undefined || cvv.length !== 3) {
            setErrors({ ...errors, Cname: "Cardholders Name", Cnumber: "Card Number", Cexp: "Expiration", Ccvv: "Invalid CVV" });
        } else {
            setErrors({ ...errors, Cname: "Cardholders Name", Cnumber: "Card Number", Cexp: "Expiration", Ccvv: "CVV" });
            dispatch(CheckoutFormAsync(totalOrders));
            navigate('/finalCheckout');
        }

        //  if(containsNumbers(cardName!)===true || cardName===undefined){
        //     console.log(errors);
        //          setErrors({...errors, Cname:'Invalid CC Name'})
        //     }else{
        //         setErrors({...errors, Cname:'Cardholders Name'})
        //     }
    };

    function containsNumbers(str: string) {
        return /\d/.test(str);
    }

    return (
        <>
            <MDBContainer fluid className="py-5 gradient-custom">
                <MDBRow className="d-flex justify-content-center py-5">
                    <MDBCol md="7" lg="5" xl="4">
                        <MDBCard style={{ borderRadius: "15px" }}>
                            <MDBCardBody className="p-4">
                                <MDBRow className="d-flex align-items-center">
                                    <MDBCol size="9">
                                        <MDBInput
                                            label={
                                                errors.Cnumber != "Card Number" ? (
                                                    <span style={{ color: "red" }}>{errors.Cnumber}</span>
                                                ) : (
                                                    <span>{errors.Cnumber}</span>
                                                )
                                            }
                                            id="form1"
                                            type="text"
                                            placeholder="1234 5678 9012 3457"
                                            onChange={(e) => setCarddNumber(e.target.value)}
                                        />
                                    </MDBCol>
                                    <MDBCol size="3">
                                        <img src="https://img.icons8.com/color/48/000000/visa.png" alt="visa" width="64px" />
                                    </MDBCol>

                                    <MDBCol size="9">
                                        <MDBInput
                                            label={
                                                errors.Cname != "Cardholders Name" ? (
                                                    <span style={{ color: "red" }}>{errors.Cname}</span>
                                                ) : (
                                                    <span>{errors.Cname}</span>
                                                )
                                            }
                                            id="form2"
                                            type="text"
                                            placeholder="Cardholder's Name"
                                            onChange={(e) => setCardName(e.target.value)}
                                        />
                                    </MDBCol>

                                    <MDBCol size="6">
                                        <MDBInput
                                            label={
                                                errors.Cexp != "Expiration" ? (
                                                    <span style={{ color: "red" }}>{errors.Cexp}</span>
                                                ) : (
                                                    <span>{errors.Cexp}</span>
                                                )
                                            }
                                            id="form2"
                                            type="text"
                                            placeholder="MM/YYYY"
                                            onChange={(e) => setExp(e.target.value)}
                                        />
                                    </MDBCol>
                                    <MDBCol size="3">
                                        <MDBInput
                                            label={
                                                errors.Ccvv != "CVV" ? (
                                                    <span style={{ color: "red" }}>{errors.Ccvv}</span>
                                                ) : (
                                                    <span>{errors.Ccvv}</span>
                                                )
                                            }
                                            id="form2"
                                            type="text"
                                            placeholder="&#9679;&#9679;&#9679;"
                                            onChange={(e) => setCvv(e.target.value)}
                                        />
                                    </MDBCol>
                                    <MDBCol size="3">
                                        <Button variant="contained" color="success" onClick={() => checkAllErrors()}>
                                            PAY
                                        </Button>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    );
}
