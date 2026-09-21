
import { getServerSession } from "next-auth";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";



export default async function Home() {
  const session =  await getServerSession()
  console.log(session)

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* {session.status === "authenticated" && <button onClick={() => signOut()}>sign out</button>} */}
      {/* {session.status === "unauthenticated" && <button onClick={() => signIn()}>sign in</button>} */}
      {JSON.stringify(session)}
    </div>
  );
}
