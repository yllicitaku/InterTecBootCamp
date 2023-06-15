import React from "react";
import QRCode from "qrcode.react";

export default function QRGenerator(props: any) {
    return (
        <>
            <QRCode
                id={props.documentId}
                value={props.valueString}
                size={128}
                bgColor={`#ffffff`}
                fgColor={"#000000"}
                level={"H"}
                includeMargin={true}
            />
        </>
    );
}
