import { json, Request, Response } from "express";
import { createTransport } from "nodemailer";
import { networkInterfaces } from "os";
import { decoder } from "./gzip-base64-criptographer";

(async function (): Promise<void> {
  const { parsed } = (await import("dotenv")).config({
    path: "/home/env/.env.local" /* ".env.local" */,
  });

  const cors = (await import("cors")).default({
    origin: "*",
    credentials: true,
  });

  const express = (await import("express")).default();
  const http = (await import("http")).default;
  const https = (await import("https")).default;

  const listener = () => {
    try {
      express
        .use(cors)
        .use(json())
        .post("/api/send_mail", async (req: Request, res: Response) => {
          if (req.method === "POST") {
            const transporter = createTransport({
              service: "gmail",
              auth: {
                user: parsed?.EMAIL_USER,
                pass: parsed?.EMAIL_PASS,
              },
            });

            try {
              await transporter.sendMail({
                from: parsed?.EMAIL_USER,
                to: parsed?.EMAIL_TO,
                subject: `Данные отправленые от: ${req.body.fio}`,
                text: JSON.stringify(req.body),
              });

              res.status(200).json({
                success: true,
                message: "Данные отправлены успешно !",
              });
            } catch (error) {
              console.error(error);

              res.status(500).json({
                success: false,
                message: "Произошла ошибка отправки данных !",
              });
            }
          } else {
            res.status(405).json({
              success: false,
              message: "Данный метод не предусмотрен !",
            });
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  const ssl = {
    key: decoder(parsed!.KEY),
    cert: decoder(parsed!.CERT),
  };

  http.createServer(express).listen(parsed!.HTTP, listener);
  https.createServer(ssl, express).listen(parsed!.HTTPS, listener);

  const host = (() => {
    const interfaces = Object.values(networkInterfaces()).flat();
    const ip = interfaces.find((e) => e?.family === "IPv4" && !e?.internal);
    return {
      http: `http://${ip?.address}:${parsed!.HTTP}`,
      https: `https://${ip?.address}:${parsed!.HTTPS}`,
    };
  })();
  console.log("env", parsed?.ENV);
  console.log(host);
})();
