import { Client } from "./interfaces";

const clients: Client[] = [
  {
    name: "Joao Pedro",
    address: "Rua do joão",
  },
  {
    name: "Vinicius",
    address: "Rua do Vinicius",
  },
  {
    name: "Victor Hugo",
    address: "Rua do devtorugo",
  },
];

export function GET() {
  return Response.json(clients);
}

export async function POST(request: Request) {
  const form = await request.formData();
  const name = form.get("name") as string;
  const address = form.get("address") as string;

  clients.push({
    name,
    address,
  });

  return Response.json({ status: "Added" });
}
