import { Router } from "express";
import { getNextSequence } from "../models/Counter";
import { CheckoutForm, newObj } from "../models/CheckoutForm";
import path from "path";
import PdfPrinter from "pdfmake";
import fs from "fs";
import { fileURLToPath } from "url";
import { OrderForm } from "../models/OrderForm";

const router: Router = Router();

const cr:any = {
    carType:'',
    price:0,
    duration:0,
    fromDate:'',
    toDate:'',

}

router.post("/", async (req, res) => {
    try {
        newObj._id = await getNextSequence("FCheckoutId");

         //extra detilas about cars
 const orders:any = await OrderForm.find();
 //extra detilas about cars

        req.body.forEach((item: any) => {
            newObj.cars?.push(item.carModel);
            newObj.totalAmount! += item.duration * item.price;
        });

        const record = await CheckoutForm.insertMany(newObj);

        //extra
        function createPDF() {
            var fonts = {
                Courier: {
                    normal: "Courier",
                    bold: "Courier-Bold",
                    italics: "Courier-Oblique",
                    bolditalics: "Courier-BoldOblique",
                },
                // Roboto: {
                //     normal: mp('fonts/Roboto-Regular.ttf'),
                //     bold: mp('fonts/Roboto-Medium.ttf'),
                //     italics: mp('fonts/Roboto-Italic.ttf'),
                //     bolditalics: mp('fonts/Roboto-MediumItalic.ttf')
                // },
                // Helvetica: {
                //     normal: 'Helvetica',
                //     bold: 'Helvetica-Bold',
                //     italics: 'Helvetica-Oblique',
                //     bolditalics: 'Helvetica-BoldOblique'
                //   },
                Symbol: {
                    normal: "Symbol",
                },
            };
            let printer = new PdfPrinter(fonts);

            var greeting = "Rental Car - Reservation";
            var url = "http://192.168.31.70:3000";
            var longText =
                "The amount of data that can be stored in the QR code symbol depends on the datatype (mode, or input character set), version (1, …, 40, indicating the overall dimensions of the symbol), and error correction level. The maximum storage capacities occur for 40-L symbols (version 40, error correction level L):";

            function header(text: any) {
                return { text: text, margins: [300, 0, 0, 8] };
            }

            newObj.cars?.forEach((obj)=>{
                orders.forEach((ord:any)=>{
                    if(ord.carModel === obj){
                        cr.carType = obj;
                        cr.duration = ord.duration;
                        cr.price = ord.price;
                        cr.fromDate = ord.fromDate;
                        cr.toDate = ord.toDate;

                    }
                })
            })

            var docDefinition: any = {
                pageMargins: [50, 100, 10, 10],
                content: [
                    header(`Your reservation with number:${newObj._id} is complete`),
                    { qr: url, foreground: "blue", background: "white", fit: 250, marginLeft: 125, marginTop: 50 },
                    // '\n',`Total:${newObj.totalAmount} $`,
                    { text: [`Total:`, { text: `${newObj.totalAmount?.toFixed(2)} $`, fontSize: 20, color: "red" }], marginTop: 30 },
                    { text: `Model ${cr.carType}`, fontSize: 15,marginTop:20 },
                    { text: `Price ${cr.price}  $`, fontSize: 15,marginTop:10 },
                    { text: `Duration ${cr.duration} days`, fontSize: 15,marginTop:10 },
                    { text: `From ${cr.fromDate} to ${cr.toDate}`, fontSize: 15,marginTop:10 },
                ],

                defaultStyle: {
                    font: "Courier",
                },
            };

            var pdfDoc = printer.createPdfKitDocument(docDefinition);

            pdfDoc.pipe(fs.createWriteStream(`reservation.pdf`));

            pdfDoc.end();
        }
        //main();
        createPDF();

        //extra
        return res.status(201).json(record);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

export default router;
