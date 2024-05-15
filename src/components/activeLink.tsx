import Link from "next/link";
import { ReactNode } from "react";

type ActiveLinkProps = {
  href: string;
  children: ReactNode;
}

export function ActiveLink({ href, children }: ActiveLinkProps){
  return(
    <Link href={href}>
      {children}
    </Link>
  )
}