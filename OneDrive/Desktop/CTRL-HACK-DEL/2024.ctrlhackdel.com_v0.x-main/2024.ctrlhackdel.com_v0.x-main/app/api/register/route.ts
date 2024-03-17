import { getUserByEmail } from "@/lib/data/user";
import { db } from "@/lib/db";
import { PrismaClientInitializationError } from "@prisma/client/runtime/library";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/lib/validators/auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const validatedFields = RegisterSchema.safeParse(body);
    if (!validatedFields.success) {
      console.log(validatedFields.error);
      return NextResponse.json(
        { message: "Credentials could not be validated." },
        { status: 400 },
      );
    }

    // Check to see if an user with the given email exists in our records.
    const existingUser = await getUserByEmail(validatedFields.data.email);
    if (existingUser) {
      // TODO: Send incident email to the existing user in the database.
      // No need to let the current user know that this incident is reported.
      // await reportRegisterIncident(existingUser.email);

      return NextResponse.json(
        { message: "Email is already in use. Please log in." },
        { status: 400 },
      );
    }

    const { email, name, password } = validatedFields.data;

    // Hash password before storing into the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Proceed to creating a new account
    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    // TODO: Send verification email

    return NextResponse.json(
      { message: "Account created! Please log in." },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof PrismaClientInitializationError) {
      return NextResponse.json(
        { message: "Error creating an account." },
        { status: 500 },
      );
    }
    console.log(error);

    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 },
    );
  }
}
