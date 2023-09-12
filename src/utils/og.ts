import satori from "satori";
import fs from "fs/promises";
import sharp from "sharp";

const georgia = fs.readFile('src/public/fonts/georgia-regular.ttf');
const georgiaBold = fs.readFile('src/public/fonts/georgia-bold.ttf');

export default async function renderOgImage(title: string, description: string) {
    const georgiaData = await georgia;
    const georgiaBoldData = await georgiaBold;
    description = description.split('.')[0] + '.';
    const fontSize = title.length > 40 ? "67px" : "80px";

    const svg = await satori(
        {
            type: "div",
            props: {
                children: [
                    {
                        type: "h3",
                        props: {
                            children: "Refranero Español",
                            style: {
                                fontSize: "42px",
                                marginLeft: "auto",
                                marginRight: "auto",
                                marginTop: "-10px",
                                marginBottom: "24px",
                                lineHeight: 1,
                                color: "#64748b",
                                textAlign: "center",
                                letterSpacing: "-0.040em"
                            },
                        },
                    },
                    {
                        type: "h1",
                        props: {
                            children: title,
                            style: {
                                fontSize: fontSize,
                                lineHeight: 1.2,
                                color: "#1e293b",
                                textAlign: "center",
                                marginLeft: "auto",
                                marginRight: "auto",
                                marginBottom: "20px",
                            },
                        },
                    },
                    {
                        type: "hr",
                        props: {
                            style: {
                                height: "4px",
                                border: "none",
                                backgroundColor: "#94a3b8",
                                margin: "30px 0 20px 0"
                            },
                        },
                    },
                    {
                        type: "span",
                        props: {
                            children: description,
                            style: {
                                color: "#475569",
                                fontSize: "40px",
                                fontFamily: "Georgia",
                            },
                        },
                    },
                ],
                style: {
                    fontFamily: "Georgia Bold",
                    width: 1200,
                    height: 630,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignText: "center",
                    borderBottom: "28px solid #4f46e5",
                    backgroundColor: "#f1f5f9",
                    padding: "70px",
                },
            },
        },
        {
            width: 1200,
            height: 630,
            fonts: [
                {
                    name: "Georgia",
                    data: georgiaData,
                    weight: 300,
                    style: "normal",
                },
                {
                    name: "Georgia Bold",
                    data: georgiaBoldData,
                    weight: 800,
                    style: "normal",
                }
            ],
        }
    );

    const png = await sharp(Buffer.from(svg)).png().toBuffer();

    return new Response(png, {
        headers: {
            "Content-Type": "image/png",
        },
    });
}