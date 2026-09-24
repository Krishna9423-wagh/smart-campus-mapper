"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function getStudySpots() {
  try {
    const spots = await prisma.studySpot.findMany({
      include: {
        ratings: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return { success: true, data: spots };
  } catch (error) {
    console.error("Failed to fetch spots:", error);
    return { success: false, error: "Database not connected yet." };
  }
}

export async function addStudySpot(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    // For demo purposes, we will hardcode coordinates slightly offset from center
    const latitude = 40.7128 + (Math.random() - 0.5) * 0.01;
    const longitude = -74.0060 + (Math.random() - 0.5) * 0.01;

    if (!name) return { success: false, error: "Name is required" };

    const newSpot = await prisma.studySpot.create({
      data: {
        name,
        description,
        latitude,
        longitude,
      },
    });

    revalidatePath("/");
    return { success: true, data: newSpot };
  } catch (error) {
    console.error("Failed to add spot:", error);
    return { success: false, error: "Database not connected yet." };
  }
}

export async function addRating(spotId: string, formData: FormData) {
  try {
    const noiseLevel = parseInt(formData.get("noiseLevel") as string) || 3;
    const wifiQuality = parseInt(formData.get("wifiQuality") as string) || 3;
    const outlets = parseInt(formData.get("outlets") as string) || 3;
    const crowdedness = parseInt(formData.get("crowdedness") as string) || 3;
    const comment = formData.get("comment") as string;

    const newRating = await prisma.rating.create({
      data: {
        spotId,
        noiseLevel,
        wifiQuality,
        outlets,
        crowdedness,
        comment,
      },
    });

    revalidatePath("/");
    return { success: true, data: newRating };
  } catch (error) {
    console.error("Failed to add rating:", error);
    return { success: false, error: "Database not connected yet." };
  }
}
