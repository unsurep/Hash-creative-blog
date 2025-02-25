import { Document, Page } from "react-pdf";
import { useState } from "react";

const PdfViewer = ({ fileUrl }) =>{
    const [numPages, setNumPages] = useState(null);

    const pdfDocument = ({ numPages }) =>{
        setNumPages(numPages);
    }

    return (
        <Document file={fileUrl} onLoadSuccess={pdfDocument}>
            {Array.from(new Array(numPages), (el, index) =>{
                <Page key={`page_${index +1}`} pageNumber={index + 1} />

            })}

        </Document>
    )

};

export default PdfViewer;