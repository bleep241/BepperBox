import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { z } from "zod";
import sharp from "sharp"; // useful image processing module to extract metadata from images
import { db } from "@/db/index";

const f = createUploadthing();

const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .input(z.object({ configId: z.string().optional() }))
    // Set permissions and file types for this FileRoute
    .middleware(async ({ input }) => {
      return { input }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for this input:", metadata.input);

      console.log("file url:", file.url);

      const { configId } = metadata.input;

      // fetch the image
      const res = await fetch(file.url);
      // convert to a buffer
      const buffer = await res.arrayBuffer();

      // this will give us a bunch of img metadata including width and height
      const imgMetadata = await sharp(buffer).metadata();
      const { width, height } = imgMetadata;

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      if (!configId) {
        const configuration = await db.configuration.create({
          data: {
            imageUrl: file.url,
            height: height || 500,
            width: width || 500,
          }
        })

        return { configId: configuration.id }
      } else {
        const updatedConfiguration = await db.configuration.update({
          where: {
            id: configId,
          },
          data: {
            croppedImageUrl: file.url,
          }
        })

        return { configId: updatedConfiguration.id }
      }

    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;