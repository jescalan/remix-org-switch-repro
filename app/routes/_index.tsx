import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  OrganizationSwitcher,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/remix";
import { getAuth } from "@clerk/remix/ssr.server";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async (req) => {
  const { orgId } = await getAuth(req);
  if (orgId === "org_2hYcR65yYaTAEz9xIOuqDP9o0Tl") console.log("Test Org 1");
  if (orgId === "org_2hYcS2K2MmbCh0OU1jh85xkqpiO") console.log("Test Org 2");
  return json({ ok: true });
};

export default function Index() {
  return (
    <div>
      <p>hello world</p>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
        <OrganizationSwitcher />
      </SignedIn>
    </div>
  );
}
