import { json, Request, Response } from "express";
import { createTransport } from "nodemailer";
import { networkInterfaces } from "os";

(async function (): Promise<void> {
  const { EMAIL_USER, EMAIL_PASS, EMAIL_TO, HTTP } = (
    await import("dotenv")
  ).config({
    path: ".local/.env",
  }).parsed!;

  const express = (await import("express")).default();
  const cors = (await import("cors")).default;
  const http = (await import("http")).default;

  const listener = () => {
    try {
      express
        .use(json())
        .use(cors())
        .post("/api/send_mail", async (req: Request, res: Response) => {
          if (req.method === "POST") {
            const transporter = createTransport({
              host: "smtp.mail.ru",
              port: 465,
              secure: true,
              auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS,
              },
            });

            try {
              await transporter.sendMail({
                from: EMAIL_USER,
                to: EMAIL_TO,
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

  http.createServer(express).listen(HTTP, listener);

  const { address } = Object.values(networkInterfaces())
    .flat()
    .find(({ family, internal }: any) => family === "IPv4" && internal)!;

  console.log([`http://${address}:${HTTP}`]);
})();
