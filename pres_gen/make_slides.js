
const PptxGenJS = require('pptxgenjs');
let pres = new PptxGenJS();

// Theme: Midnight Executive (Dark for Title/Conclusion, Light for Content)
const COLORS = {
    NAVY: '1E2761',
    ICE: 'CADCFC',
    WHITE: 'FFFFFF',
    TEXT: '333333'
};

const TITLE_FONT = 'Impact';
const BODY_FONT = 'Calibri';

// Slide 1: Title Slide (Dark Background)
let slide1 = pres.addSlide();
slide1.background = { color: COLORS.NAVY };
slide1.addText("SALES AND CUSTOMER DBMS", {
    x: 1, y: 1.5, w: 8, h: 1,
    fontSize: 44, fontFace: TITLE_FONT, color: COLORS.WHITE, align: 'center'
});
slide1.addText("Oil & Gas Operations Revenue Engine", {
    x: 1, y: 2.5, w: 8, h: 0.5,
    fontSize: 20, fontFace: BODY_FONT, color: COLORS.ICE, align: 'center', italic: true
});
slide1.addText("NAMARA ANTHONY | MUST", {
    x: 1, y: 4.5, w: 8, h: 0.5,
    fontSize: 16, fontFace: BODY_FONT, color: COLORS.WHITE, align: 'center'
});

// Slide 2: Executive Summary (2-Column)
let slide2 = pres.addSlide();
slide2.addText("EXECUTIVE SUMMARY", { x: 0.5, y: 0.3, fontSize: 36, fontFace: TITLE_FONT, color: COLORS.NAVY });
slide2.addShape(pres.ShapeType.rect, { x: 0.5, y: 1.2, w: 4, h: 3.5, fill: { color: COLORS.ICE } });
slide2.addText("A relational database system designed to replace manual, fragmented reporting in petroleum distribution. Manages core entities: Customers, Products, Orders, Invoices, and Payments.", {
    x: 0.7, y: 1.4, w: 3.6, h: 3,
    fontSize: 16, fontFace: BODY_FONT, color: COLORS.NAVY
});
slide2.addText("KEY OBJECTIVES", { x: 5, y: 1.2, fontSize: 20, fontFace: TITLE_FONT, color: COLORS.NAVY });
slide2.addText([
    { text: "• Revenue tracking across fuel types\n", options: { bullet: true } },
    { text: "• Automated credit limit enforcement\n", options: { bullet: true } },
    { text: "• Corporate loyalty management\n", options: { bullet: true } },
    { text: "• Real-time financial auditing", options: { bullet: true } }
], { x: 5, y: 1.8, w: 4, h: 2, fontSize: 16, fontFace: BODY_FONT });

// Slide 3: Logical Design (ERD Explanation)
let slide3 = pres.addSlide();
slide3.addText("LOGICAL DESIGN & ERD", { x: 0.5, y: 0.3, fontSize: 36, fontFace: TITLE_FONT, color: COLORS.NAVY });
let rowY = 1.2;
let items = [
    { title: "CUSTOMERS", desc: "PK: CustomerID. Stores sensitive credit limit data and contact profiles." },
    { title: "PRODUCTS", desc: "PK: ProductID. Manages fuel grades (Petrol/Diesel) and price volatility." },
    { title: "SALES ORDERS", desc: "Associative entity resolving M:M relationship with foreign key integrity." }
];
items.forEach((item, idx) => {
    slide3.addShape(pres.ShapeType.ellipse, { x: 0.5, y: rowY + (idx * 1.2), w: 0.8, h: 0.8, fill: { color: COLORS.NAVY } });
    slide3.addText((idx + 1).toString(), { x: 0.5, y: rowY + (idx * 1.2), w: 0.8, h: 0.8, align: 'center', color: COLORS.WHITE, fontSize: 24 });
    slide3.addText(item.title, { x: 1.5, y: rowY + (idx * 1.2), w: 3, h: 0.4, fontSize: 20, fontFace: TITLE_FONT, color: COLORS.NAVY });
    slide3.addText(item.desc, { x: 1.5, y: rowY + (idx * 1.2) + 0.4, w: 7, h: 0.5, fontSize: 14, fontFace: BODY_FONT });
});

// Slide 4: Physical Implementation
let slide4 = pres.addSlide();
slide4.addText("PHYSICAL IMPLEMENTATION", { x: 0.5, y: 0.3, fontSize: 36, fontFace: TITLE_FONT, color: COLORS.NAVY });
slide4.addText("Tech Stack: MySQL/MariaDB | PHP | LAMPP Architecture", { x: 0.5, y: 1.0, fontSize: 14, fontFace: BODY_FONT, italic: true });

slide4.addText("DATABASE CONSTRAINTS", { x: 0.5, y: 1.8, w: 4, h: 0.5, fontSize: 20, fontFace: TITLE_FONT, color: COLORS.NAVY });
slide4.addText([
    { text: "• DECIMAL(10,2) for financial precision\n", options: { bullet: true } },
    { text: "• NOT NULL for transactional fields\n", options: { bullet: true } },
    { text: "• CASCADE DELETE for referential integrity", options: { bullet: true } }
], { x: 0.5, y: 2.3, w: 4, h: 2, fontSize: 14, fontFace: BODY_FONT });

slide4.addText("MODULAR ARCHITECTURE", { x: 5, y: 1.8, w: 4, h: 0.5, fontSize: 20, fontFace: TITLE_FONT, color: COLORS.NAVY });
slide4.addText([
    { text: "• includes/db.php: Security isolation\n", options: { bullet: true } },
    { text: "• assets/css/: Styling separation\n", options: { bullet: true } },
    { text: "• index.php: Single entry point UI", options: { bullet: true } }
], { x: 5, y: 2.3, w: 4, h: 2, fontSize: 14, fontFace: BODY_FONT });

// Slide 5: Conclusion & Future Work
let slide5 = pres.addSlide();
slide5.background = { color: COLORS.NAVY };
slide5.addText("CONCLUSION", { x: 1, y: 1.5, w: 8, h: 1, fontSize: 44, fontFace: TITLE_FONT, color: COLORS.WHITE, align: 'center' });
slide5.addText("Scalable. Secure. Data-Driven.", { x: 1, y: 2.5, w: 8, h: 0.5, fontSize: 20, fontFace: BODY_FONT, color: COLORS.ICE, align: 'center' });
slide5.addText("FUTURE SCOPE:", { x: 1, y: 3.5, w: 8, h: 0.4, fontSize: 18, fontFace: TITLE_FONT, color: COLORS.WHITE, align: 'center' });
slide5.addText("Mobile Money API Integration | PDF Invoicing | Multi-branch Audit Trails", {
    x: 1, y: 4, w: 8, h: 0.5, fontSize: 14, fontFace: BODY_FONT, color: COLORS.WHITE, align: 'center'
});

pres.writeFile('Namara_Anthony_Presentation.pptx');
