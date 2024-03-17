import { getUserByEmail } from "@/lib/data/user";
import { LoginSchema } from "@/lib/validators/auth";
import { AuthError } from "next-auth";
import { signIn } from "next-auth/react";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // Extract the data provided
  const body = await req.json();

  // Validate the data with zod
  const validatedFields = LoginSchema.safeParse(body);
  if (!validatedFields.success) {
    console.log(validatedFields.error);
    return NextResponse.json(
      { message: "Email or password could not be validated." },
      { status: 400 },
    );
  }

  // Check to see if an user with the given email exists in our records.
  const existingUser = await getUserByEmail(validatedFields.data.email);
  if (!existingUser) {
    return NextResponse.json(
      { message: "Invalid credentials." },
      { status: 400 },
    );
  }

  // If all of the above passes, sign them in.
  try {
    await signIn("credentials", {
      email: validatedFields.data.email,
      password: validatedFields.data.password,
      redirectTo: "/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        return NextResponse.json(
          { message: "Invalid credentials." },
          { status: 400 },
        );
      }

      return NextResponse.json(
        { message: "Error while authenticating the user." },
        { status: 400 },
      );
    }

    return new NextResponse("Something went wrong.", { status: 500 });
  }
}
