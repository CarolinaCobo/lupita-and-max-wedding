import { GaxiosResponse } from "gaxios";
import { google, sheets_v4 } from "googleapis";

async function handler(
  req: {
    method: string;
    body: {
      firstName: string;
      lastName: string;
      email: string;
      busOption: string;
      bustTime: string;
      veganMenu: string;
      allergies: string;
      message: string;
    };
  },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: {
        (arg0: {
          message: string;
          response?: GaxiosResponse<sheets_v4.Schema$AppendValuesResponse>;
        }): void;
        new (): any;
      };
    };
  }
) {
  if (req.method === "POST") {
    const {
      firstName,
      lastName,
      email,
      busOption,
      bustTime,
      veganMenu,
      allergies,
      message,
    } = req.body;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "Sheet1!A2:C",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            firstName,
            lastName,
            email,
            busOption,
            bustTime,
            veganMenu,
            allergies,
            message,
          ],
        ],
      },
    });
    res.status(201).json({ message: "It works!", response });
  }
  res.status(200).json({ message: "Hey!" });
}

export default handler;
