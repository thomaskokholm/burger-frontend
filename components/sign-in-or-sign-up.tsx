import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Button from "./button";

export default function SignInOrSignUp() {
  const router = useRouter();
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <div className="inline-flex gap-6 items-center">
        <div className="hidden sm:flex flex-col items-end">
          <div>
            <strong>{session.user.name}</strong>
          </div>
          <div>{session.user.email}</div>
        </div>

        {session.user.image && (
          <img
            src={session.user.image}
            alt={session.user.id}
            width={50}
            className="rounded-full"
          />
        )}
        <Button
          role="button"
          kind="secondary"
          onClick={async () => {
            const data = await signOut({ redirect: false, callbackUrl: "/" });
            if (data && data["url"]) {
              router.push(data["url"]);
            }
          }}
        >
          Sign out
        </Button>
      </div>
    );
  }
  return (
    <>
      <Button kind="primary" role="button" onClick={() => signIn()}>
        Sign in
      </Button>
    </>
  );
}
