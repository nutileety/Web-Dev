import { db } from "./src/prisma/db";

// async function viewUser() {
//   const users = await db.orm.public.User
//     .select("id", "username", "password")
//     .limit(2)
//     .all();

//   console.log(users);

//   await db.close();
// }

// viewUser().catch((error) => {
//   console.error(error);
//   process.exit(1);
// });


async function main() {
  // Insert a new user into the database
  const newUser = await db.orm.public.User
    .create({
      username: "john_doe",
      password: "secure_password_here" // Make sure to hash passwords in production!
    });

  console.log("User created successfully:", newUser);

  await db.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
