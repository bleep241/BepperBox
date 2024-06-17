// nextjs specific syntax to tell it that we only want to execute this file on the server, never on the client
"use server"
import { db } from "@/db";
import { CaseColor, CaseFinish, CaseMaterial, PhoneModel } from "@prisma/client"

export type SaveConfigArgs = {
  color: CaseColor;
  finish: CaseFinish;
  material: CaseMaterial;
  model: PhoneModel;
  configId: string;
};

// this is an RPC-- Remote Procedure Call which basically is just like calling a function to make api calls
export async function saveConfig({
  color,
  finish,
  material,
  model,
  configId
}: SaveConfigArgs) {

  // now we can update the configurations in our db with this function
  await db.configuration.update({
    where: { id: configId },
    data: { color, finish, material, model }
  });
}